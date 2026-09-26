& {
$ErrorActionPreference = 'Stop'
$QaiServer = '__QAI_SERVER__'
$QaiSeat = '__QAI_SEAT__'
$installDir = Join-Path $env:LOCALAPPDATA 'QAI\agent'
$workspaceDir = Join-Path $env:USERPROFILE 'QAI-2026'
$manifestPath = Join-Path $installDir 'installed.json'
$existingCommand=Get-Command qai -ErrorAction SilentlyContinue
if ($existingCommand -and $existingCommand.Source -and -not $existingCommand.Source.StartsWith($installDir+'\',[StringComparison]::OrdinalIgnoreCase)) { throw ('기존 qai 명령을 보호하기 위해 중단했습니다: '+$existingCommand.Source) }
$old = $null
if (Test-Path -LiteralPath $manifestPath) { $old = Get-Content -LiteralPath $manifestPath -Raw -Encoding UTF8 | ConvertFrom-Json }
if (-not $QaiSeat) {
  if ($old) { $QaiSeat = $old.seat }
  else {
    Write-Host '1 정진우 / 2 엄예지 / 3 최연식'
    $choice = Read-Host '내 번호'
    $names = @('정진우','엄예지','최연식')
    if ($choice -notmatch '^[123]$') { throw '1, 2, 3 중 선택하세요.' }
    $QaiSeat = $names[[int]$choice-1]
  }
}
if ($old -and $old.seat -ne $QaiSeat) { throw '이 Windows 계정에는 다른 팀원의 팩이 있습니다. 기존 설치를 먼저 확인하세요.' }
if ($old -and $old.workspace) { $workspaceDir = $old.workspace }
if (-not $old -and (Test-Path -LiteralPath $workspaceDir) -and @(Get-ChildItem -LiteralPath $workspaceDir -Force).Count) { throw ('기존 폴더를 보호하기 위해 중단했습니다: '+$workspaceDir) }
$utf8 = [Text.UTF8Encoding]::new($false)
function Get-TextHash([string]$text) {
  $hash=[Security.Cryptography.SHA256]::Create()
  try { return ([BitConverter]::ToString($hash.ComputeHash($utf8.GetBytes($text)))).Replace('-','').ToLowerInvariant() } finally { $hash.Dispose() }
}
$session=New-Object Microsoft.PowerShell.Commands.WebRequestSession
$login=@{key=$QaiSeat;seat=$QaiSeat} | ConvertTo-Json
Invoke-RestMethod -Uri ($QaiServer+'/api/login') -Method Post -WebSession $session -ContentType 'application/json; charset=utf-8' -Body ($utf8.GetBytes($login)) -TimeoutSec 15 | Out-Null
$pack=Invoke-RestMethod -Uri ($QaiServer+'/api/agent-pack') -WebSession $session -TimeoutSec 20
if ($pack.schema -ne 1 -or $pack.seat -ne $QaiSeat) { throw '지원하지 않는 팩입니다.' }
$plan=New-Object System.Collections.Generic.List[object]
function Add-Plan([string]$base,[string]$relative,[string]$content,[string]$sha) {
  if ($relative -match '(^|[\/])\.\.([\/]|$)' -or [IO.Path]::IsPathRooted($relative) -or $relative.Contains(':')) { throw 'Invalid package path.' }
  $rootPath=[IO.Path]::GetFullPath($base).TrimEnd('\')+'\'
  $full=[IO.Path]::GetFullPath((Join-Path $base $relative))
  if (-not $full.StartsWith($rootPath,[StringComparison]::OrdinalIgnoreCase)) { throw 'Path outside package root.' }
  if ((Get-TextHash $content) -ne $sha) { throw ('Download checksum mismatch: '+$relative) }
  $plan.Add([pscustomobject]@{path=$full;content=$content;sha256=$sha})
}
foreach($file in $pack.runtime) { Add-Plan $installDir $file.path $file.content $file.sha256 }
foreach($file in $pack.workspace) { Add-Plan $workspaceDir $file.path $file.content $file.sha256 }
$codexSkills=if($env:CODEX_HOME){Join-Path $env:CODEX_HOME 'skills'}else{Join-Path $env:USERPROFILE '.codex\skills'}
foreach($rootPath in @($codexSkills,(Join-Path $env:USERPROFILE '.cursor\skills'),(Join-Path $env:USERPROFILE '.claude\skills'))) {
  Add-Plan $rootPath 'qai-team\SKILL.md' $pack.bridge.content $pack.bridge.sha256
}
$writes=New-Object System.Collections.Generic.List[object]
foreach($item in $plan) {
  if (Test-Path -LiteralPath $item.path) {
    $actual=(Get-FileHash -LiteralPath $item.path -Algorithm SHA256).Hash.ToLowerInvariant()
    if ($actual -eq $item.sha256) { continue }
    $previous=if($old){$old.files | Where-Object { $_.path -eq $item.path } | Select-Object -First 1}else{$null}
    if (-not $previous -or $previous.sha256 -ne $actual) {
      # These two files are intentionally refreshed by qai sync.
      if ($item.path -in @((Join-Path $workspaceDir '.qai\board.json'),(Join-Path $workspaceDir 'qai-agent\BRIEF.md')) -and $old) { continue }
      throw ('수정된 파일을 보호하기 위해 중단했습니다: '+$item.path)
    }
  }
  $writes.Add($item)
}
# Preflight completed before changing installed files.
$rollback=New-Object System.Collections.Generic.List[object]
try {
  foreach($item in $writes) {
    $exists=Test-Path -LiteralPath $item.path
    $rollback.Add([pscustomobject]@{path=$item.path;existed=$exists;bytes=$(if($exists){[IO.File]::ReadAllBytes($item.path)}else{$null})})
    New-Item -ItemType Directory -Path (Split-Path -Parent $item.path) -Force | Out-Null
    $temporary=$item.path+'.qai-new'
    [IO.File]::WriteAllText($temporary,$item.content,$utf8)
    Move-Item -LiteralPath $temporary -Destination $item.path -Force
  }
} catch {
  foreach($item in $rollback) {
    if($item.existed){[IO.File]::WriteAllBytes($item.path,$item.bytes)}else{Remove-Item -LiteralPath $item.path -Force -ErrorAction SilentlyContinue}
  }
  throw
}
$config=[pscustomobject]@{Server=$QaiServer;Seat=$QaiSeat;Workspace=$workspaceDir;RoomKey=(ConvertTo-SecureString $pack.credentials.room -AsPlainText -Force);SeatKey=(ConvertTo-SecureString $pack.credentials.seat -AsPlainText -Force)}
$config | Export-Clixml -LiteralPath (Join-Path $installDir 'connection.clixml')
$manifest=[pscustomobject]@{version=$pack.version;seat=$QaiSeat;workspace=$workspaceDir;files=@($plan | Select-Object path,sha256)}
[IO.File]::WriteAllText($manifestPath,($manifest | ConvertTo-Json -Depth 8),$utf8)
$userPath=[string][Environment]::GetEnvironmentVariable('Path','User')
if ($installDir -notin @($userPath -split ';')) {
  $newPath=(@($userPath.TrimEnd(';'),$installDir) | Where-Object { $_ }) -join ';'
  [Environment]::SetEnvironmentVariable('Path',$newPath,'User')
}
if ($installDir -notin @($env:Path -split ';')) { $env:Path=$installDir+';'+$env:Path }
Write-Host ''
Write-Host ('설치 완료: '+$QaiSeat)
Write-Host ('작업 폴더: '+$workspaceDir)
Write-Host 'qai open  : 작업 폴더 열기'
Write-Host 'qai sync  : 최신 회의 내용 받기'
Write-Host '이 폴더를 Codex / Cursor / Claude Code로 열고 AGENTS.md를 읽도록 요청하세요.'
Write-Host '전역 스킬은 에이전트의 다음 세션부터 사용하세요. 새 터미널에서도 qai 명령을 쓸 수 있습니다.'
}
