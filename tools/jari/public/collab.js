(() => {
  const style = document.createElement("style");
  style.textContent = `
    .collab { margin:12px 16px; padding:16px; background:#fffdf8; border:1px solid #d9d1c3; border-radius:14px; }
    .collab summary { cursor:pointer; font-weight:bold; font-size:17px; }
    .collab-layout { display:grid; grid-template-columns:200px minmax(0,1fr); gap:16px; margin-top:14px; }
    .topics { display:flex; flex-direction:column; gap:6px; }
    .topics button { text-align:left; background:#eee7d9; color:#1b1914; overflow-wrap:anywhere; }
    .topics button.active { background:#1f4b3a; color:white; }
    .messages { height:300px; overflow:auto; display:flex; flex-direction:column; gap:10px; padding:8px; background:#f5f2eb; border-radius:10px; }
    .message { padding:10px; background:white; border-radius:8px; overflow-wrap:anywhere; }
    .message p { white-space:pre-wrap; margin:6px 0; }
    .message.reply { margin-left:26px; border-left:3px solid #d9d1c3; }
    .message.mention { background:#fff0d5; }
    .message button { padding:3px 8px; font-size:12px; }
    .compose { display:grid; gap:8px; margin-top:10px; }
    .compose textarea { width:100%; }
    .evidence-fields { display:grid; grid-template-columns:1fr 1fr; gap:10px; margin:12px 0; }
    .comparison { overflow:auto; margin-top:12px; }
    .comparison table { width:100%; border-collapse:collapse; min-width:640px; }
    .comparison td,.comparison th { padding:9px; border:1px solid #d9d1c3; text-align:left; white-space:pre-wrap; overflow-wrap:anywhere; max-width:280px; }
    nav.pages { flex-wrap:wrap; }
    @media(max-width:700px) { .collab-layout,.evidence-fields { grid-template-columns:1fr; } .topics { flex-direction:row; flex-wrap:wrap; } .topics button { font-size:12px; } }
  `;
  document.head.append(style);
  const area = document.createElement("section"); area.className="collab";
  area.innerHTML = `<details id="team-details"><summary>팀 대화 <span id="unread-count"></span></summary>
    <p class="sub">전체 대화와 아이디어별 댓글 · @이름으로 확인 요청 · Ctrl+Enter로 전송</p>
    <div class="collab-layout"><aside id="topics" class="topics" aria-label="대화 주제"></aside><div>
    <h2 id="topic-title"></h2><div id="messages" class="messages" role="log" aria-live="polite"></div>
    <form id="compose" class="compose"><p id="reply-label" class="sub"></p><button id="cancel-reply" class="ghost" type="button" hidden>답글 취소</button>
    <label>메시지<textarea id="message-text" maxlength="2000" placeholder="의견이나 확인할 내용을 남기세요" required></textarea></label>
    <div class="row"><button id="message-send" type="submit">보내기</button><span id="chat-status" role="status"></span></div></form></div></div>
    </details>`;
  document.getElementById("app").append(area);
  area.classList.add("chat-dock");
  const evidence = document.createElement("section"); evidence.className="collab";
  evidence.innerHTML=`<h2>후보 근거 비교</h2><p class="sub">후보를 담으면 아래에 비교됩니다. 근거 미확인은 점수나 확정으로 간주하지 않습니다.</p>
    <div id="comparison" class="comparison"></div><details id="evidence-details"><summary>아이디어별 근거 작성</summary>
    <label>아이디어<select id="evidence-id"></select></label><form id="evidence-form"><div id="evidence-fields" class="evidence-fields"></div>
    <div class="row"><button type="submit">근거 저장</button><button type="button" id="evidence-reload" class="ghost">최신 내용 불러오기</button></div>
    <p id="evidence-status" role="status"></p></form></details>`;
  document.querySelector(".decision").after(evidence);
  const fields={loss:"현장 손실",dataA:"주 데이터 ID",dataB:"보조 데이터 ID",join:"연결 방법과 근거",action:"예측 후 현장 조치",kpi:"KPI와 측정 방법",evidence:"확인한 출처·파일·페이지",unknown:"미확인 사항과 다음 확인",reason:"선정·보류 이유"};
  const $=id=>document.getElementById(id);
  const node=(tag,text)=>{const e=document.createElement(tag);e.textContent=text;return e;};
  for(const [key,label] of Object.entries(fields)){const l=node("label",label), t=document.createElement("textarea");t.name=key;t.maxLength=1200;l.append(t);$("evidence-fields").append(l);}
  let draftLoaded=false;
  let state=null, topic="general", replyTo="", version=0, dirty=false, pending=null, lastChat="";
  const me=()=>$("me").value;
  const draftKey=()=>"jari-draft:"+me()+":"+topic+":"+replyTo;
  const readKey=t=>"jari-read:"+me()+":"+t;
  const messages=t=>(state?.messages||[]).filter(m=>m.topic===t);
  const label=t=>t==="general"?"전체 대화":(state?.ideas.find(i=>i.id===t)?.sourceId||String((state?.ideas.findIndex(i=>i.id===t)??-1)+1).padStart(2,"0"))+" · "+(state?.ideas.find(i=>i.id===t)?.process||"취합 대기");
  async function request(url,data){const r=await fetch(url,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)});const b=await r.json();if(!r.ok)throw new Error(b.error || "저장 실패 · 로그인과 연결 상태를 확인하세요.");return b;}
  function markRead(){const m=messages(topic);if($("team-details").open && document.visibilityState==="visible" && $("messages").scrollHeight-$("messages").scrollTop-$("messages").clientHeight<60 && m.length)localStorage.setItem(readKey(topic),m.at(-1).at);}
  function renderTopics(){
    $("topics").replaceChildren();let total=0;
    for(const t of ["general",...(state?.ideas||[]).map(i=>i.id)]){
      const count=messages(t).filter(m=>m.author!==me() && m.at>(localStorage.getItem(readKey(t))||"")).length;total+=count;
      const b=node("button",label(t)+(count?" ("+count+")":""));b.type="button";b.className=t===topic?"active":"";
      b.onclick=()=>{topic=t;replyTo="";pending=null;lastChat="";$("message-text").value=localStorage.getItem(draftKey())||"";renderChat();};$("topics").append(b);
    }
    $("unread-count").textContent=total?"· 새 글 "+total:"";
  }
  function renderChat(){
    $("topic-title").textContent=label(topic);$("reply-label").textContent=replyTo?"답글 작성 중 · "+(state.messages.find(m=>m.id===replyTo)?.text||"").slice(0,90):"";$("cancel-reply").hidden=!replyTo;
    const list=messages(topic),signature=topic+JSON.stringify(list);
    if(lastChat!==signature){
      const box=$("messages"), bottom=box.scrollHeight-box.scrollTop-box.clientHeight<70;box.replaceChildren();
      const draw=m=>{const a=node("article","");a.className="message"+(m.replyTo?" reply":"")+(m.text.includes("@"+me())?" mention":"");
        a.append(node("strong",m.author),node("small"," · "+new Date(m.at).toLocaleString("ko-KR")),node("p",m.text));
        const b=node("button","답글");b.type="button";b.className="ghost";b.onclick=()=>{replyTo=m.replyTo||m.id;pending=null;$("message-text").value=localStorage.getItem(draftKey())||"";renderChat();$("message-text").focus();};a.append(b);box.append(a);};
      for(const m of list.filter(m=>!m.replyTo)){draw(m);for(const r of list.filter(r=>r.replyTo===m.id))draw(r);}
      if(!list.length)box.append(node("p","아직 대화가 없습니다. 첫 의견을 남겨주세요."));
      if(bottom||!lastChat)box.scrollTop=box.scrollHeight;lastChat=signature;
    }
    markRead();renderTopics();
  }
  $("message-text").oninput=()=>{localStorage.setItem(draftKey(),$("message-text").value);pending=null;};
  $("message-text").onkeydown=e=>{if(e.key==="Enter"&&(e.ctrlKey||e.metaKey)){e.preventDefault();$("compose").requestSubmit();}};
  $("cancel-reply").onclick=()=>{replyTo="";pending=null;$("message-text").value=localStorage.getItem(draftKey())||"";renderChat();};
  $("compose").onsubmit=async e=>{e.preventDefault();const text=$("message-text").value.trim();if(!text)return;
    pending=pending||{text,topic,replyTo,clientId:Date.now().toString(36)+"-"+Array.from(crypto.getRandomValues(new Uint32Array(3))).join("-")};
    const sent=pending,key=draftKey();$("message-send").disabled=true;
    try{await request("/api/message",sent);localStorage.removeItem(key);if(pending===sent){$("message-text").value="";pending=null;replyTo="";}$("chat-status").textContent="전송됨";renderChat();}
    catch(err){$("chat-status").textContent=err.message+" · 내용은 보존됩니다.";}finally{$("message-send").disabled=false;}
  };
  $("messages").addEventListener("scroll",()=>{markRead();renderTopics();});
  $("team-details").ontoggle=()=>{markRead();renderTopics();};document.addEventListener("visibilitychange",()=>{markRead();renderTopics();});
  function loadEvidence(){const row=state?.evidence?.[$("evidence-id").value]||{};version=row.version||0;for(const key of Object.keys(fields))$("evidence-form").elements[key].value=row[key]||"";dirty=false;$("evidence-status").textContent=row.by?row.by+" · "+new Date(row.at).toLocaleString("ko-KR"):"아직 작성되지 않았습니다.";}
  $("evidence-form").oninput=()=>{dirty=true;};
  $("evidence-id").onchange=()=>{if(dirty&&!confirm("저장하지 않은 근거를 버리고 이동할까요?")){$("evidence-id").value=$("evidence-id").dataset.loaded;return;}$("evidence-id").dataset.loaded=$("evidence-id").value;loadEvidence();};
  $("evidence-reload").onclick=()=>{if(!dirty||confirm("작성 중인 내용을 최신 저장 내용으로 바꿀까요?"))loadEvidence();};
  $("evidence-form").onsubmit=async e=>{e.preventDefault();const data={id:$("evidence-id").value,version};for(const k of Object.keys(fields))data[k]=$("evidence-form").elements[k].value;
    const button=e.submitter;button.disabled=true;
    try{await request("/api/evidence",data);dirty=false;version=data.version+1;$("evidence-status").textContent="저장됨";}catch(err){$("evidence-status").textContent=err.message+" 작성 내용은 유지됩니다.";}finally{button.disabled=false;}
  };
  function compare(){const ids=state?.decision?.finalists||[];$("comparison").replaceChildren();if(!ids.length){$("comparison").append(node("p","‘아이디어 20개’에서 후보를 담으면 여기에 나란히 표시됩니다."));return;}
    const table=document.createElement("table"), head=document.createElement("tr");head.append(node("th","비교 항목"));for(const id of ids)head.append(node("th",label(id)));table.append(head);
    for(const [k,l] of [["event","현장 문제"],["loss","원문 손실"],["currentHandling","현재 대응"],["proposedDatasets","KAMP 후보 · 미검증"]]){const tr=document.createElement("tr");tr.append(node("th",l));for(const id of ids)tr.append(node("td",state.ideas.find(i=>i.id===id)?.[k]||"미기재"));table.append(tr);}
    for(const [k,l] of Object.entries(fields)){const tr=document.createElement("tr");tr.append(node("th",l));for(const id of ids)tr.append(node("td",state.evidence?.[id]?.[k]||"미확인"));table.append(tr);}$("comparison").append(table);
  }
  const nav=document.querySelector("nav.pages");nav.replaceChildren();
  const tabs=[["choose","아이디어 20개"],["compare","후보 비교"],["map","데이터 관계도"],["prepare","회의 준비"]];
  const relationshipPanel=document.createElement("section");relationshipPanel.id="relationship-panel";relationshipPanel.className="collab";relationshipPanel.hidden=true;$("page-ideas").append(relationshipPanel);
  const intro=document.querySelector("#page-ideas > p");
  const team=document.createElement("details");team.className="team-fold";team.append(node("summary","담당자별 진행 현황"));
  const cards=$("cards");cards.before(team);team.append(cards);$("app").insertBefore(team,area);
  const installPanel=document.createElement("details");installPanel.className="collab";installPanel.id="agent-install";
  installPanel.innerHTML='<summary>내 에이전트 설치</summary><p class="sub">PowerShell에 한 줄을 붙여넣으세요. 압축 해제나 관리자 권한 없이 내 작업 폴더와 qai 명령을 설치합니다.</p><pre id="install-command" style="white-space:pre-wrap;overflow-wrap:anywhere;background:#eef1ef;padding:16px;border-radius:6px"></pre><button type="button" id="copy-install">설치 명령 복사</button><p id="install-note" role="status"></p><p class="sub">설치 후 qai open으로 폴더를 열고 Codex·Cursor·Claude Code에서 작업하세요. 최신 회의 내용은 qai sync로 받습니다.</p>';
  team.before(installPanel);
  function installCommand(){return "irm '"+location.origin+"/install.ps1?seat="+encodeURIComponent(me())+"' | iex";}
  $("copy-install").onclick=()=>{const temp=document.createElement("textarea");temp.value=installCommand();document.body.append(temp);temp.select();const ok=document.execCommand("copy");temp.remove();$("install-note").textContent=ok?"복사됨 · 각자 노트북의 PowerShell에 붙여넣으세요.":"명령을 직접 복사하세요.";};
  const notice=node("p","");notice.id="save-notice";notice.setAttribute("role","alert");notice.hidden=true;document.body.append(notice);
  window.addEventListener("jari-notice",e=>{notice.textContent=e.detail;notice.hidden=false;setTimeout(()=>notice.hidden=true,8000);});
  let currentView="choose";
  function setView(view){
    currentView=view;sessionStorage.setItem("jari-view",view);
    for(const name of ["setup","data","begin"])$("page-"+name).hidden=view!=="prepare";
    $("page-ideas").hidden=view==="prepare";
    $("cols").hidden=true;intro.hidden=true;
    document.querySelector(".decision").hidden=view!=="choose";evidence.hidden=view!=="compare";
    nav.querySelectorAll("button").forEach(b=>{b.classList.toggle("on",b.dataset.view===view);b.setAttribute("aria-pressed",String(b.dataset.view===view));});
    relationshipPanel.hidden=view!=="map";
    if(view==="map")window.dispatchEvent(new Event("jari-map-open"));
    if(view==="compare")compare();
  }
  for(const [view,labelText] of tabs){const b=node("button",labelText);b.type="button";b.dataset.view=view;b.onclick=()=>setView(view);nav.append(b);}
  const dashboard=node("a","프로젝트 현황 ↗");dashboard.href="/dash";nav.append(dashboard);
  const intersectionLink=node("a","현안 교집합 ↗");intersectionLink.href="/intersection";nav.append(intersectionLink);
  const installLink=node("a","에이전트 설치");installLink.href="#agent-install";installLink.onclick=()=>{installPanel.open=true;};nav.append(installLink);
  setView(tabs.some(t=>t[0]===sessionStorage.getItem("jari-view"))?sessionStorage.getItem("jari-view"):"choose");
  const uiStyle=document.createElement("style");uiStyle.textContent=`
    [hidden] { display:none !important; }
    body { font-size:15px; line-height:1.55; }
    header { align-items:center; padding-top:20px; }
    header .sub { font-size:14px; }
    label,.field { font-size:14px; }
    input,select,textarea { min-height:42px; }
    button { min-height:40px; }
    button:focus-visible,a:focus-visible,summary:focus-visible { outline:3px solid #1f4b3a; outline-offset:3px; }
    nav.pages { margin-top:16px; gap:6px; }
    nav.pages button { background:#fffdf8; color:#403d36; border-color:#d9d1c3; }
    nav.pages button.on { background:#1f4b3a; color:white; border-color:#1f4b3a; }
    #live { padding:12px 16px !important; font-size:14px; }
    .cols { margin-top:8px; }
    .card { padding:18px; gap:10px; }
    .card legend { font-size:14px; }
    .decision { margin-top:8px; }
    .decision-item { padding:16px; }
    .decision-item h3 { font-size:14px; color:#6d655b; }
    .decision-text { font-size:18px; font-weight:600; min-height:0; }
    .decision-loss { font-size:15px; }
    .decision-tags span { font-size:13px; }
    .decision-actions button { font-size:14px; }
    .vote-track { height:5px; }
    .team-fold { margin:20px 16px 100px; border-top:1px solid #d9d1c3; padding-top:14px; }
    .team-fold > summary { cursor:pointer; color:#6d655b; }
    .team-fold #cards { margin-top:12px; }
    .chat-dock { position:fixed; z-index:20; bottom:16px; right:16px; margin:0; padding:0; width:190px; box-shadow:0 5px 28px #1b191426; }
    .chat-dock:has(details[open]) { width:min(680px,calc(100vw - 32px)); }
    .chat-dock > details { padding:14px; max-height:80vh; overflow:auto; }
    .chat-dock summary { font-size:15px; }
    .chat-dock .collab-layout { grid-template-columns:150px minmax(0,1fr); }
    .chat-dock .topics { max-height:340px; overflow:auto; }
    .chat-dock .topics button { font-size:13px; }
    .chat-dock .messages { height:230px; }
    .chat-dock h2 { font-size:15px; }
    .comparison th { background:#eee9de; }
    .comparison th:first-child { width:150px; }
    #evidence-details { margin-top:18px; }
    #page-data > .panel:first-child { display:grid; grid-template-columns:1fr 1fr; gap:14px; }
    #page-data > .panel:first-child > h2,#page-data > .panel:first-child > p { grid-column:1/-1; }
    #save-notice { position:fixed; z-index:40; left:50%; bottom:20px; transform:translateX(-50%); background:#842e21; color:white; padding:14px 20px; border-radius:10px; max-width:90vw; }
    @media(max-width:700px){ header { align-items:start; } header .sub { max-width:230px; } nav.pages button { flex:1 1 42%; } .chat-dock .collab-layout,#page-data > .panel:first-child { grid-template-columns:1fr; } .chat-dock .topics { flex-direction:row; max-height:90px; } .chat-dock .topics button { flex:0 0 auto; } .who { flex-wrap:wrap; } }
  `;document.head.append(uiStyle);
  const standard=document.createElement("style");standard.textContent="\n/* Q.AI UI standard: spacing and surface, no decorative borders. */\n:root { --paper:#f6f7f8; --card:#fff; --ink:#202825; --muted:#64706a; --focus:#23654c; --jw:#23654c; --line:transparent; }\nbody { background:var(--paper); color:var(--ink); font-family:\"Malgun Gothic\",system-ui,sans-serif; }\nheader,main,#gate { max-width:1160px; }\nh1 { font-size:28px; font-weight:700; letter-spacing:-.04em; }\nh2 { font-size:20px; font-weight:650; }\nbutton,input,select,textarea,fieldset.card,.card,.panel,.collab,.decision,.decision-item,.meter,.lane,.kpi,.decision-overview,#gate form { border:0 !important; }\ninput,textarea,select { background:#eef1ef; border-radius:6px; }\nbutton { border-radius:6px; }\ninput:focus,textarea:focus,select:focus,button:focus-visible,a:focus-visible,summary:focus-visible { outline:2px solid #23654c; outline-offset:3px; }\nnav.pages { gap:4px; padding-top:8px; }\nnav.pages button,nav.pages a { background:transparent !important; border:0 !important; color:var(--muted); padding:10px 16px; }\nnav.pages button.on { background:#e2ebe6 !important; color:#174f39 !important; font-weight:700; }\n.decision,.collab,.panel { border-radius:10px; padding:24px; }\n.decision { background:transparent; padding:8px 0; }\n.decision-head { padding:0 0 12px; }\n.decision-summary { gap:20px; margin-bottom:20px; }\n.decision-summary span { background:none; padding:0; font-size:14px; color:var(--muted); }\n.decision-grid { gap:12px; }\n.decision-item { background:#fff; border-radius:8px; padding:20px; }\n.decision-item.finalist { background:#e4eee8; }\n.decision-item.leader:not(.finalist) { background:#f0f4f1; }\n.decision-item h3 { font-size:13px; font-variant-numeric:tabular-nums; color:var(--muted); }\n.decision-text { font-size:17px; line-height:1.5; margin:6px 0; }\n.decision-tags { gap:12px; }\n.decision-tags span { border:0; background:none; padding:0; color:var(--muted); font-size:12px; }\n.vote-track { display:none; }\n.decision-actions { margin-top:14px; }\n.decision-actions button { background:#eef1ef; color:var(--ink); padding:7px 12px; }\n.decision-actions button[aria-pressed=\"true\"] { background:#23654c; color:#fff; }\n.decision-item.awaiting { background:#edf0ee; padding:16px 20px; }\n.awaiting .decision-loss,.awaiting .decision-tags,.awaiting .decision-actions { display:none; }\n.awaiting .decision-text { font-size:15px; font-weight:400; color:var(--muted); margin-bottom:0; }\n.shortlist,.team-fold { border:0 !important; }\n.shortlist { padding-top:24px; }\n.shortlist-list span { background:#e2ebe6; }\n.comparison td,.comparison th { border:0 !important; padding:14px; }\n.comparison th { background:#eaf0ec; }\n.comparison tr:nth-child(even) td { background:#f4f6f4; }\n.chat-dock { background:white; border-radius:10px; }\n.chat-dock .topics button { background:#eef1ef; }\n.chat-dock .topics button.active { background:#23654c; }\n.chat-dock .messages { background:#f3f5f3; }\n.message.reply { border:0; background:#f3f6f4; }\n.lane { border-top:0 !important; }\n.pill,.pill.stop { background:#e8eeea; }\n@media(max-width:700px){ .decision-grid { grid-template-columns:1fr; } .decision-head { gap:10px; } .decision-summary { gap:8px 16px; } .decision,.collab,.panel { padding:16px; } nav.pages button { flex:0 1 auto; font-size:14px; } }\n";document.head.append(standard);
  window.addEventListener("jari-board",e=>{state=e.detail;
    $("install-command").textContent=installCommand();
    if(!draftLoaded){$("message-text").value=localStorage.getItem(draftKey())||"";draftLoaded=true;}
    for(const option of $("evidence-id").options)option.textContent=label(option.value);
    if(!$("evidence-id").options.length){for(const idea of state.ideas){const o=node("option",label(idea.id));o.value=idea.id;$("evidence-id").append(o);}$("evidence-id").dataset.loaded=$("evidence-id").value;loadEvidence();}
    const complete=state.ideas.filter(i=>[i.process,i.event,i.loss].every(v=>String(v||"").trim())).length;
    $("live").textContent=complete ? "취합 "+complete+"/"+state.ideas.length+" · 각자 3개까지 선택하세요." : "취합본을 기다리고 있습니다. 전달받은 아이디어 20개가 이곳에 표시됩니다.";
    if(!dirty)loadEvidence();else if((state.evidence?.[$("evidence-id").value]?.version||0)!==version)$("evidence-status").textContent="다른 팀원이 수정했습니다. 작성 내용은 유지되며 저장 시 충돌을 확인합니다.";compare();renderChat();
    document.querySelectorAll('[data-kind="idea"]').forEach(card=>{const idea=state.ideas.find(i=>i.id===card.dataset.id);if(idea)card.querySelectorAll("input,select,textarea").forEach(el=>el.disabled=idea.owner!==me());});
  });
})();
