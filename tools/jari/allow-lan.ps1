# Run in an administrator PowerShell on the host.
$ErrorActionPreference = 'Stop'
$ruleName = 'QAI JARI LAN 3040'
if (-not (Get-NetFirewallRule -DisplayName $ruleName -ErrorAction SilentlyContinue)) {
  New-NetFirewallRule -DisplayName $ruleName -Direction Inbound -Action Allow -Protocol TCP -LocalPort 3040 -RemoteAddress LocalSubnet -Profile Any | Out-Null
}
Write-Host 'JARI TCP 3040 allowed for LocalSubnet.'
