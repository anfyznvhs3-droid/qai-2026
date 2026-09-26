(() => {
  const panel = document.getElementById('relationship-panel');
  if (!panel) return;
  let board, map, loading = false, selected = '', dataset = '';
  const verdicts = {gain:'이득 보고',nogain:'이득 없음 보고',trap:'주의 보고',untested:'미검증'};
  const colors = {gain:'#23654c',nogain:'#88641b',trap:'#ad453b',untested:'#6c7782'};
  const kinds = {key:'공통 키',time:'시간축',plant:'공장·라인',domain:'공정 유사'};
  const el = (tag,text) => {const n=document.createElement(tag);if(text!==undefined)n.textContent=text;return n;};
  const svgEl = (tag,attrs,text) => {const n=document.createElementNS('http://www.w3.org/2000/svg',tag);for(const [k,v] of Object.entries(attrs))n.setAttribute(k,v);if(text!==undefined)n.textContent=text;return n;};
  function idsFor(idea) {return [...new Set((idea?.proposedDatasets||'').match(/\b\d{1,2}\b/g)||[])].map(Number).filter(id=>map.nodes.some(n=>n.id===id));}
  const pairEdges = ids => map.edges.filter(e=>ids.includes(e.source)&&ids.includes(e.target));
  function showNode(id) {
    const n=map.nodes.find(n=>n.id===id), target=document.getElementById('map-node');target.replaceChildren();
    if(!n)return;
    target.append(el('h3',`${id} · ${n.title}`));
    for(const [label,value] of [['업종·공정',[n.industry,n.process].filter(Boolean).join(' · ')],['팀원 기록 행×열',n.rows],['팀원 기록 키',n.key],['팀원 기록 라벨',n.label],['주의점',n.issue],['추가 분석',n.finding]])if(value)target.append(el('p',label+': '+value));
  }
  function render() {
    if(!map||!board)return;
    if(!board.ideas.some(i=>i.id===selected))selected=board.ideas[0]?.id||'';
    panel.replaceChildren(el('h2','아이디어와 데이터 연결'));
    panel.append(el('p','팀원 제공 지도 · 50종 / 42개 관계. 판정·수치는 제공자 기록이며 독립 재현 미확인입니다. 연결선은 결합 성공이나 추천 순위를 뜻하지 않습니다.'));
    if(map.review){const note=el('p',map.review.summary);note.className='map-review';panel.append(note);for(const text of map.review.notes||[])panel.append(el('p',text));}
    const controls=el('div');controls.className='map-controls';
    const ideaLabel=el('label','아이디어 '), ideaSelect=el('select');
    for(const i of board.ideas){const o=el('option',`${i.sourceId||i.id} · ${i.process}`);o.value=i.id;ideaSelect.append(o);}ideaSelect.value=selected;
    ideaSelect.onchange=()=>{selected=ideaSelect.value;dataset='';render();};ideaLabel.append(ideaSelect);controls.append(ideaLabel);
    const dataLabel=el('label','데이터로 탐색 '),dataSelect=el('select'),all=el('option','아이디어의 후보 보기');all.value='';dataSelect.append(all);
    for(const n of map.nodes){const o=el('option',`${n.id} · ${n.short||n.title}`);o.value=n.id;dataSelect.append(o);}dataSelect.value=dataset;
    dataSelect.onchange=()=>{dataset=dataSelect.value;render();};dataLabel.append(dataSelect);controls.append(dataLabel);panel.append(controls);
    const idea=board.ideas.find(i=>i.id===selected);panel.append(el('p',`${idea.sourceId||idea.id} · ${idea.event}`));
    panel.append(el('p','PPT의 데이터 후보: '+(idea.proposedDatasets||'미기재')));
    let ids=idsFor(idea), edges=pairEdges(ids);
    if(dataset){const id=Number(dataset);edges=map.edges.filter(e=>e.source===id||e.target===id);ids=[...new Set([id,...edges.flatMap(e=>[e.source,e.target])])];}
    const graph=svgEl('svg',{viewBox:'0 0 900 420',role:'img','aria-label':'선택 데이터의 관계도'});graph.classList.add('map-graph');
    const points=new Map();ids.forEach((id,i)=>{const angle=2*Math.PI*i/Math.max(ids.length,1)-Math.PI/2;points.set(id,ids.length===1?[450,210]:ids.length===2?[260+i*380,210]:[450+300*Math.cos(angle),210+155*Math.sin(angle)]);});
    if(ids.length===2&&!edges.length){const [a,b]=ids.map(id=>points.get(id));graph.append(svgEl('line',{x1:a[0],y1:a[1],x2:b[0],y2:b[1],stroke:'#a8b0ac','stroke-dasharray':'5 6'}));graph.append(svgEl('text',{x:450,y:180,'text-anchor':'middle',fill:'#64706a'},'지도에 연결 기록 없음'));}
    for(const e of edges){const a=points.get(e.source),b=points.get(e.target);graph.append(svgEl('line',{x1:a[0],y1:a[1],x2:b[0],y2:b[1],stroke:colors[e.verdict]||colors.untested,'stroke-width':2,'stroke-dasharray':e.kind==='key'?'none':'6 5'}));}
    for(const id of ids){const n=map.nodes.find(n=>n.id===id),[x,y]=points.get(id),g=svgEl('g',{role:'button',tabindex:0,'aria-label':`${id} ${n.title}`});g.style.cursor='pointer';g.append(svgEl('circle',{cx:x,cy:y,r:24,fill:'#23654c'}));g.append(svgEl('text',{x,y:y+5,'text-anchor':'middle',fill:'white'},id));g.append(svgEl('text',{x,y:y+44,'text-anchor':'middle',fill:'#202825'},n.short||n.title));g.onclick=()=>showNode(id);g.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();showNode(id);}};graph.append(g);}
    if(!ids.length)graph.append(svgEl('text',{x:450,y:210,'text-anchor':'middle'},'후보 데이터 ID가 없습니다.'));
    panel.append(graph);
    const legend=el('p','선 색상: 초록 이득 보고 · 황색 이득 없음 보고 · 적색 주의 보고 · 회색 미검증. 점선은 키 결합 외의 관계입니다.');legend.className='meta';panel.append(legend);
    const detail=el('div');detail.id='map-node';detail.className='map-node';panel.append(detail);
    panel.append(el('h3','연결 근거와 주의점'));
    if(!edges.length)panel.append(el('p','이 조합의 연결 근거는 지도에 없습니다. 불가능하다는 판정은 아니며 공통 키·시간·라벨·물리적 의미를 별도로 확인해야 합니다.'));
    for(const e of edges){const box=el('details'),head=el('summary',`${e.source} ↔ ${e.target} · ${verdicts[e.verdict]||'미검증'} · ${e.basis||kinds[e.kind]||e.kind}`);box.className='map-edge';box.append(head);box.append(el('p',e.note||'추가 설명 없음'));if(e.join)box.append(el('p','제공자 연결 기록: '+JSON.stringify(e.join)));box.append(el('p','원본·실행 로그를 받아 같은 분할과 지표로 재현하기 전까지 참고 판정입니다.'));panel.append(box);}
    if(ids.length)showNode(ids[0]);
    const overview=el('details');overview.append(el('summary','아이디어 20건 연결 상태 한눈에 보기'));
    const list=el('div');list.className='map-overview';
    for(const i of board.ideas){const linked=pairEdges(idsFor(i)),states=[...new Set(linked.map(e=>verdicts[e.verdict]||'미검증'))];const b=el('button',`${i.sourceId||i.id} · ${i.process} — ${states.join(' / ')||'연결 기록 없음'}`);b.type='button';b.onclick=()=>{selected=i.id;dataset='';render();panel.scrollIntoView({block:'start',behavior:'smooth'});};list.append(b);}overview.append(list);panel.append(overview);
  }
  async function load() {
    if(loading)return;if(map){render();return;}loading=true;panel.replaceChildren(el('p','관계도를 불러오는 중…'));
    try {const res=await fetch('/api/relationship-map');if(!res.ok)throw new Error(res.status===404?'이 서버에는 관계도 자료가 아직 없습니다.':'관계도를 불러오지 못했습니다. 로그인·연결을 확인하세요.');map=await res.json();render();}
    catch(e){panel.replaceChildren(el('p',e.message));const retry=el('button','다시 불러오기');retry.onclick=load;panel.append(retry);}finally{loading=false;}
  }
  const style=el('style');style.textContent='.map-controls{display:flex;gap:20px;flex-wrap:wrap}.map-controls label{display:grid;gap:8px;flex:1;min-width:220px}.map-controls select{width:100%}.map-graph{width:100%;max-height:440px;background:#f3f6f4;border-radius:8px}.map-node,.map-edge,.map-review{background:#eef2ef;padding:16px;border-radius:8px;margin:12px 0}.map-node p,.map-edge p{overflow-wrap:anywhere}.map-overview{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:8px;margin-top:16px}.map-overview button{text-align:left;background:#eef2ef;color:#202825}.map-graph g:focus{outline:2px solid #ad453b}';document.head.append(style);
  window.addEventListener('jari-map-open',load);
  window.addEventListener('jari-board',e=>{board=e.detail;if(!panel.hidden)load();});
  fetch('/api/board').then(r=>r.ok?r.json():null).then(b=>{if(b){board=b;if(!panel.hidden)load();}}).catch(()=>{});
  if(!panel.hidden)load();
})();
