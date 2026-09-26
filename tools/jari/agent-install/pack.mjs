import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
const roles = {
  '정진우': '대회 에이전트 진입점과 취합본 반영. 잠금 후 추론 JSON·제출 README를 담당한다.',
  '엄예지': '현장 문제·손실·KPI·보고서 설명을 담당한다. 근거 없는 수치와 데이터 연결을 만들지 않는다.',
  '최연식': 'KAMP 데이터 2종 연결 근거를 담당한다. 잠금 후 데이터 점검·분할·기준 모델·융합 비교를 수행한다.',
};
const commonSkills = ['kamp-nba','kamp-fusion-ablation','kamp-baseline-gbdt','kamp-leakage-audit','kamp-submit-pack'];
export function makePack(root, contestRoot, seat, credentials, board) {
  if (!Object.hasOwn(roles, seat)) throw new Error('Unknown seat');
  const workspace = [];
  const add = (name, content) => workspace.push({ path: name, content });
  const from = (name) => add(name, fs.readFileSync(path.join(contestRoot, name), 'utf8'));
  const entry = `# Q.AI 2026 대회 작업 폴더

이 폴더는 ${seat}의 작업 폴더다. ROLE.md → AGENT.MD → docs/agent-team-status.md 순서로 읽는다.
현재 회의 상태는 qai sync 후 qai-agent/BRIEF.md와 .qai/board.json에서 확인한다.

- 문제 한 문장·KAMP 데이터 2종·KPI가 사람이 기록한 decision-log로 잠기기 전에는 원본 데이터 다운로드와 학습을 하지 않는다.
- 자기 역할의 산출물만 작성한다. 다른 팀원의 파일은 수정하지 않는다. 공유 보드·결정 기록은 회의에서 지정한 한 명이 관리한다.
- 스킬은 .agents/skills 아래 공통 다섯 개다. Cursor와 Claude Code용 동일 사본도 있다.
- 아이디어는 진행자가 취합해 전달한 자료만 반영한다. 빈 내용을 만들거나 사람 대신 투표·댓글·후보를 게시하지 않는다.
- 자리 앱은 에이전트 실행기가 아니다. 각자의 Codex/Cursor/Claude Code에서 작업한다.
- 작업 보고는 qai-agent/RULE.md를 읽고 qai harness 및 qai report 명령으로 본인 카드에만 올린다.
- 자료의 참조 경로가 로컬에 없으면 미확보로 보고한다. VEDA 본문, 데이터 원본, 모델/API 키는 이 팩에 포함되지 않는다.
- 공식 규정은 references/kamp-submit-2026-2026-09-21.md를 확인한다. 추가 자료가 필요한 경우 진행자에게 요청한다.
`;
  add('AGENTS.md',entry);add('CLAUDE.md',entry);add('.cursor/rules/qai.mdc','---\ndescription: Q.AI competition workspace contract\nalwaysApply: true\n---\nRead the workspace AGENTS.md and ROLE.md before working.\n');
  add('ROLE.md',`# ${seat}\n\n${roles[seat]}\n\n잠금 전에는 회의 자료와 근거 확인만 수행한다. 역할 확장은 사용자 지시와 결정 기록에 따른다.\n`);
  for (const name of ['AGENT.MD','docs/agent-team-status.md','docs/board.md','docs/decision-log.md','docs/idea-form.md','docs/task-lock-2026-09-21.md','references/kamp-submit-2026-2026-09-21.md']) {
    if(fs.existsSync(path.join(contestRoot,name))) from(name);
  }
  add('qai-agent/RULE.md',fs.readFileSync(path.join(root,'agent-rule/RULE.md'),'utf8'));
  add('qai-agent/BRIEF.md',`# Q.AI 회의 입구\n\n내 이름: ${seat}\n보드 버전: ${board.rev}\n\nqai sync를 실행해 최신 회의 상태를 받으세요. 이 폴더는 경진 제출물에 포함하지 않습니다.\n`);
  add('.qai/board.json',JSON.stringify(board,null,2));
  add('.qai/workspace.json',JSON.stringify({id:'qai-2026',seat},null,2));
  add('.gitignore','.qai/\nqai-agent/BRIEF.md\ndata/raw/\n.env\n*.clixml\n');
  add('README.md',`# Q.AI — ${seat}\n\n이 폴더를 Codex, Cursor 또는 Claude Code로 열고 AGENTS.md를 읽도록 요청하세요.\n\n- qai sync: 최신 회의 내용을 받기\n- qai status: 서버 연결 확인\n- qai report card.json: 본인 작업 카드 보고\n- qai connect http://새주소:3040: Wi-Fi 변경 시 호스트 주소 갱신\n\nPython, 모델 학습 라이브러리, IDE는 자동 설치하지 않습니다. 실제 분석 환경은 과제 잠금 뒤에 준비합니다.\n`);
  for(const skill of commonSkills) {
    const skillDir=path.join(contestRoot,'.cursor/skills',skill);
    const walk=(dir,rel='')=>{
      for(const entry of fs.readdirSync(dir,{withFileTypes:true})) {
        if(entry.isSymbolicLink() || entry.name.startsWith('.') || entry.name==='__pycache__') continue;
        const next=rel?`${rel}/${entry.name}`:entry.name;
        if(entry.isDirectory()) walk(path.join(dir,entry.name),next);
        else if(/\.(md|py|json|yaml|yml)$/.test(entry.name)) {
          const content=fs.readFileSync(path.join(dir,entry.name),'utf8');
          for(const target of ['.agents/skills','.cursor/skills','.claude/skills']) add(`${target}/${skill}/${next}`,content);
        }
      }
    };walk(skillDir);
  }
  const runtime=[
    {path:'qai.ps1',content:fs.readFileSync(path.join(root,'agent-install/qai.ps1'),'utf8')},
    {path:'qai.cmd',content:'@echo off\r\npowershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0qai.ps1" %*\r\n'},
  ];
  const hash = content => crypto.createHash('sha256').update(content,'utf8').digest('hex');
  const stamp = files=>files.map(file=>({...file,sha256:hash(file.content)}));
  const bridge=fs.readFileSync(path.join(root,'agent-install/bridge-SKILL.md'),'utf8');
  return {schema:1,version:hash(JSON.stringify([...runtime,...workspace])+bridge).slice(0,16),seat,runtime:stamp(runtime),workspace:stamp(workspace),bridge:{content:bridge,sha256:hash(bridge)},credentials};
}
