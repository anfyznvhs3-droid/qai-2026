import crypto from "node:crypto";
import { makePack } from "./agent-install/pack.mjs";
import fs from "node:fs";
import http from "node:http";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(root, "data");
const boardFile = path.join(dataDir, "board.json");
const keyFile = path.join(root, ".room-key");
const seatKeyFile = path.join(root, ".seat-keys");
const shelfFile = path.join(root, "shelves.json");
const ruleFile = path.join(root, "agent-rule", "RULE.md");
const contestRoot = process.env.JARI_CONTEST_ROOT || path.resolve(root, "../..");
const manifestFile = path.join(contestRoot, "knowledge", "kamp-guidebooks-manifest.csv");
const port = Number(process.env.JARI_PORT || 3040);
const indexFile = path.join(root, "public", "index.html");
const dashFile = path.join(root, "public", "dash.html");

const seats = ["정진우", "엄예지", "최연식"];
const contestSkills = new Set([
  "kamp-nba",
  "kamp-fusion-ablation",
  "kamp-baseline-gbdt",
  "kamp-leakage-audit",
  "kamp-submit-pack",
]);
const toolNames = new Set(["codex", "claude-code", "cursor"]);
const ideNames = new Set(["cursor", "vscode", "jetbrains", "terminal", "other"]);

function emptySeatCard() {
  return { now: "", done: ["", "", ""], blocked: "", next: "", file: "", phase: "", at: "" };
}

function emptyDecision() {
  return {
    votes: Object.fromEntries(seats.map((seat) => [seat, []])),
    finalists: [],
    finalistsBy: "",
    finalistsAt: "",
  };
}
const livedValues = new Set(["", "직접", "들어봄", "상상"]);
const joinValues = new Set(["모름", "LOT", "시간", "설비"]);
const progressStatus = new Set(["하는중", "막힘", "중간보고"]);
const progressKind = new Set(["주장", "증거", "다음"]);

function roomKey() {
  if (process.env.JARI_ROOM_KEY) return process.env.JARI_ROOM_KEY;
  if (fs.existsSync(keyFile)) return fs.readFileSync(keyFile, "utf8").trim();
  const key = `jari-${crypto.randomBytes(4).toString("hex")}`;
  fs.writeFileSync(keyFile, `${key}\n`, { encoding: "utf8" });
  return key;
}

const key = roomKey();

function loadSeatKeys() {
  let saved = {};
  if (fs.existsSync(seatKeyFile)) {
    try {
      saved = JSON.parse(fs.readFileSync(seatKeyFile, "utf8"));
    } catch {
      saved = {};
    }
  }
  const keys = {};
  let changed = false;
  for (const seat of seats) {
    const current = String(saved[seat] || "");
    if (/^seat-[0-9a-f]{8}$/.test(current)) keys[seat] = current;
    else {
      keys[seat] = `seat-${crypto.randomBytes(4).toString("hex")}`;
      changed = true;
    }
  }
  if (changed || !fs.existsSync(seatKeyFile)) {
    fs.writeFileSync(seatKeyFile, `${JSON.stringify(keys, null, 2)}\n`, { encoding: "utf8" });
  }
  return keys;
}

const seatKeys = loadSeatKeys();

function emptyBoard() {
  const ideas = [];
  for (const [prefix, owner] of [
    ["jw", "정진우"],
    ["ye", "엄예지"],
  ]) {
    for (let i = 1; i <= 10; i += 1) {
      ideas.push({
        id: `${prefix}-${i}`,
        owner,
        process: "",
        event: "",
        loss: "",
        lived: "",
        updatedAt: "",
      });
    }
  }
  return {
    rev: 1,
    startLine:
      "아이디어는 사람이 적는다. 현장의 불량·정지·과투입·낭비만 다룬다. 데이터는 KAMP 두 종류이고, 잇는 키가 확인되기 전에는 모름으로 둔다. 이 화면의 문장은 초안이다. 일요일 잠금은 대회 decision-log에 사람이 옮겨 적을 때만 성립한다.",
    ideas,
    decision: emptyDecision(),
    dataNotes: [1, 2, 3].map((i) => ({
      id: `data-${i}`,
      idA: "",
      idB: "",
      join: "모름",
      note: "",
      updatedAt: "",
    })),
    candidates: [1, 2, 3].map((i) => ({
      id: `cand-${i}`,
      name: "",
      sentence: "",
      idA: "",
      idB: "",
      kpi: "",
      updatedAt: "",
    })),
    now: { 정진우: "", 엄예지: "", 최연식: "" },
    cards: Object.fromEntries(seats.map((seat) => [seat, emptySeatCard()])),
    run: { id: "", at: "" },
    env: Object.fromEntries(seats.map((seat) => [seat, []])),
    evidence: {},
    messages: [],
    comments: [],
    progress: [],
    setup: { topic: "", note: "" },
    pair: { idA: "", nameA: "", idB: "", nameB: "", join: "모름", linkNote: "", ideaId: "" },
    started: false,
  };
}

function startMissing(current) {
  const missing = [];
  if (!String(current.setup?.topic || "").trim()) missing.push("주제 한 줄");
  const filled = current.ideas.filter((row) => [row.process, row.event, row.loss].every(v => String(v || "").trim())).length;
  if (!current.ideas.length || filled < current.ideas.length) missing.push(`아이디어 ${filled}/${current.ideas.length}`);
  const pair = current.pair || {};
  if (!String(pair.idA || "").trim() || !String(pair.idB || "").trim()) missing.push("데이터 2종 ID");
  if (pair.idA && pair.idA === pair.idB) missing.push("서로 다른 데이터 ID");
  if (!pair.join || pair.join === "모름" || !String(pair.linkNote || "").trim()) missing.push("데이터 연결 근거");
  return missing;
}

function loadBoard() {
  fs.mkdirSync(dataDir, { recursive: true });
  if (!fs.existsSync(boardFile)) {
    const created = emptyBoard();
    saveBoard(created);
    return created;
  }
  const loaded = JSON.parse(fs.readFileSync(boardFile, "utf8"));
  let changed = false;
  if (!Array.isArray(loaded.progress)) {
    loaded.progress = [];
    changed = true;
  }
  if (!loaded.setup) {
    loaded.setup = { topic: "", note: "" };
    changed = true;
  }
  if (!loaded.pair) {
    loaded.pair = { idA: "", nameA: "", idB: "", nameB: "", join: "모름", linkNote: "", ideaId: "" };
    changed = true;
  }
  if (!loaded.decision || typeof loaded.decision !== "object") {
    loaded.decision = emptyDecision();
    changed = true;
  } else {
    if (!loaded.decision.votes || typeof loaded.decision.votes !== "object") {
      loaded.decision.votes = {};
      changed = true;
    }
    for (const seat of seats) {
      const ids = loaded.decision.votes[seat];
      if (!Array.isArray(ids)) {
        loaded.decision.votes[seat] = [];
        changed = true;
      }
    }
    if (!Array.isArray(loaded.decision.finalists)) {
      loaded.decision.finalists = [];
      changed = true;
    }
    if (typeof loaded.decision.finalistsBy !== "string") {
      loaded.decision.finalistsBy = "";
      changed = true;
    }
    if (typeof loaded.decision.finalistsAt !== "string") {
      loaded.decision.finalistsAt = "";
      changed = true;
    }
  }
  if (loaded.started !== true) {
    loaded.started = false;
    changed = true;
  }
  if (!loaded.cards) {
    loaded.cards = {};
    changed = true;
  }
  for (const seat of seats) {
    if (!loaded.cards[seat]) {
      loaded.cards[seat] = emptySeatCard();
      changed = true;
    } else if (loaded.cards[seat].phase === undefined) {
      loaded.cards[seat].phase = "";
      changed = true;
    }
  }
  if (!loaded.run || typeof loaded.run !== "object") {
    loaded.run = { id: "", at: "" };
    changed = true;
  }
  if (!loaded.env || typeof loaded.env !== "object") {
    loaded.env = {};
    changed = true;
  }
  for (const seat of seats) {
    if (!Array.isArray(loaded.env[seat])) {
      loaded.env[seat] = [];
      changed = true;
    }
  }
  if (!loaded.evidence) { loaded.evidence = {}; changed = true; }
  if (!Array.isArray(loaded.messages)) { loaded.messages = []; changed = true; }
  if (changed) saveBoard(loaded);
  return loaded;
}

function saveBoard(board) {
  fs.mkdirSync(dataDir, { recursive: true });
  const tmp = `${boardFile}.tmp`;
  fs.writeFileSync(tmp, JSON.stringify(board, null, 2), "utf8");
  fs.renameSync(tmp, boardFile);
}

const board = loadBoard();
const clients = new Set();
const seen = new Map();
const sessions = new Map();

function clip(value, max) {
  return String(value ?? "").slice(0, max);
}

function touch(card) {
  card.updatedAt = new Date().toISOString();
}

function bump() {
  board.rev += 1;
  saveBoard(board);
  broadcast("board", board);
}

function safeEqual(a, b) {
  const left = Buffer.from(String(a));
  const right = Buffer.from(String(b));
  if (left.length !== right.length) return false;
  return crypto.timingSafeEqual(left, right);
}

function readCookie(header) {
  const out = {};
  for (const part of String(header || "").split(";")) {
    const i = part.indexOf("=");
    if (i < 0) continue;
    try { out[part.slice(0, i).trim()] = decodeURIComponent(part.slice(i + 1).trim()); } catch {}
  }
  return out;
}

function headerValue(req, name) {
  const value = req.headers[name];
  if (Array.isArray(value)) return value[0] || "";
  return value || "";
}

function authorized(req) {
  const header = headerValue(req, "x-room-key");
  if (header && safeEqual(header, key)) return true;
  const cookie = readCookie(req.headers.cookie).jari;
  return Boolean(cookie && safeEqual(cookie, key));
}

function seatFromKey(token) {
  if (!token) return "";
  for (const seat of seats) {
    if (safeEqual(token, seatKeys[seat])) return seat;
  }
  return "";
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;
    req.on("data", (chunk) => {
      size += chunk.length;
      if (size > 1_000_000) {
        reject(new Error("large"));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on("end", () => {
      if (!chunks.length) {
        resolve({});
        return;
      }
      try {
        const body = JSON.parse(Buffer.concat(chunks).toString("utf8"));
        if (req.member && ((body.seat && body.seat !== req.member) || (body.author && body.author !== req.member))) throw new Error("identity");
        resolve(body);
      } catch {
        reject(new Error("json"));
      }
    });
    req.on("error", reject);
  });
}

function sendJson(res, status, body) {
  const payload = JSON.stringify(body);
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
    "Content-Length": Buffer.byteLength(payload),
  });
  res.end(payload);
}

function presencePayload() {
  const now = Date.now();
  const payload = {};
  for (const seat of seats) {
    const at = seen.get(seat) || 0;
    payload[seat] = now - at < 12_000;
  }
  return payload;
}

function broadcast(event, data) {
  const payload = `event: ${event}\ndata: ${JSON.stringify(data)}\n\n`;
  for (const res of clients) res.write(payload);
}

function findCard(list, id) {
  return list.find((card) => card.id === id);
}

function patchIdea(body) {
  if (!/^(jw|ye)-(?:[1-9]|10)$/.test(body.id || "")) return false;
  const card = findCard(board.ideas, body.id);
  if (!card) return false;
  if (body.process !== undefined) card.process = clip(body.process, 200);
  if (body.event !== undefined) card.event = clip(body.event, 200);
  if (body.loss !== undefined) card.loss = clip(body.loss, 200);
  if (body.lived !== undefined && livedValues.has(body.lived)) card.lived = body.lived;
  touch(card);
  return true;
}

function validDecisionIds(ids) {
  return Array.isArray(ids)
    && ids.length <= 3
    && new Set(ids).size === ids.length
    && ids.every((id) => typeof id === "string"
      && /^(jw|ye)-(?:[1-9]|10)$/.test(id)
      && board.ideas.some((idea) => idea.id === id));
}

function newChoicesHaveContent(ids, previous) {
  return ids.every((id) => previous.includes(id) || board.ideas.some((idea) =>
    idea.id === id && [idea.process, idea.event, idea.loss].some((value) => String(value || "").trim())));
}

function patchData(body) {
  if (!/^data-[1-3]$/.test(body.id || "")) return false;
  const card = findCard(board.dataNotes, body.id);
  if (!card) return false;
  if (body.idA !== undefined) card.idA = clip(body.idA, 40);
  if (body.idB !== undefined) card.idB = clip(body.idB, 40);
  if (body.join !== undefined && joinValues.has(body.join)) card.join = body.join;
  if (body.note !== undefined) card.note = clip(body.note, 400);
  touch(card);
  return true;
}

function splitCsv(line) {
  const cells = [];
  let current = "";
  let quoted = false;
  for (let i = 0; i < line.length; i += 1) {
    const ch = line[i];
    if (quoted) {
      if (ch === '"' && line[i + 1] === '"') {
        current += '"';
        i += 1;
      } else if (ch === '"') quoted = false;
      else current += ch;
    } else if (ch === '"') quoted = true;
    else if (ch === ",") {
      cells.push(current);
      current = "";
    } else current += ch;
  }
  cells.push(current);
  return cells;
}

function loadCatalog() {
  if (!fs.existsSync(manifestFile)) return [];
  const lines = fs.readFileSync(manifestFile, "utf8").replace(/^\uFEFF/, "").split(/\r?\n/).filter(Boolean);
  const header = splitCsv(lines[0]);
  return lines.slice(1).map((line) => {
    const cells = splitCsv(line);
    const row = {};
    header.forEach((name, index) => {
      row[name] = cells[index] || "";
    });
    return {
      id: row.Dataset_ID,
      title: row.Dataset_Name,
      why: row.Task_Class,
      path: row.File,
      kind: "가이드북",
    };
  });
}

function loadShelves() {
  return JSON.parse(fs.readFileSync(shelfFile, "utf8"));
}

function searchHits(query) {
  const needle = query.trim().toLowerCase();
  if (!needle) return [];
  const shelves = loadShelves().map((item) => ({ ...item, where: "선반" }));
  const books = loadCatalog().map((item) => ({ ...item, where: "가이드북" }));
  return [...shelves, ...books]
    .filter((item) => `${item.title} ${item.why} ${item.path} ${item.id || ""}`.toLowerCase().includes(needle))
    .slice(0, 12);
}

function lines3(value) {
  const source = Array.isArray(value) ? value : String(value ?? "").split(/\r?\n/);
  return [0, 1, 2].map((index) => clip(source[index], 200));
}

function skillNames(value) {
  if (!Array.isArray(value) || value.length > 12) return null;
  const names = [];
  for (const item of value) {
    const name = String(item || "").trim().toLowerCase();
    if (!/^[a-z0-9][a-z0-9_-]{0,48}$/.test(name)) return null;
    if (!names.includes(name)) names.push(name);
  }
  return names;
}

function patchHarness(body) {
  if (!seats.includes(body.seat)) return null;
  const skills = skillNames(body.skills);
  const ruleHash = String(body.ruleHash || "").trim().toLowerCase();
  const tool = String(body.tool || "").trim();
  const ide = String(body.ide || "").trim();
  if (!skills || !/^[0-9a-f]{64}$/.test(ruleHash) || !toolNames.has(tool) || !ideNames.has(ide)) return null;
  const signature = `${[...skills].sort().join(",")}|${ruleHash}|${tool}|${ide}`;
  const list = board.env[body.seat];
  const last = list[list.length - 1];
  if (last && last.signature === signature) return { id: last.id, same: true };
  const sorted = [...skills].sort();
  const row = {
    id: `env-${crypto.randomBytes(4).toString("hex")}`,
    at: new Date().toISOString(),
    tool,
    ide,
    skills: sorted,
    ruleHash,
    note: clip(body.note, 120),
    outside: sorted.filter((name) => !contestSkills.has(name)),
    check: sorted.includes("kamp-leakage-audit") ? "" : "kamp-leakage-audit 없음",
    signature,
  };
  list.push(row);
  if (list.length > 20) list.splice(0, list.length - 20);
  return { id: row.id, same: false };
}

function agentWrite(req, body) {
  const token = headerValue(req, "x-seat-key");
  if (!token) return { ok: true, agent: false };
  const seat = seatFromKey(token);
  if (!seat || body.seat !== seat) return { ok: false, status: 403 };
  if (!board.started || !board.run?.id) return { ok: false, status: 409, missing: ["시작 전"] };
  if (body.run !== board.run.id) return { ok: false, status: 409, missing: ["시작 키"] };
  return { ok: true, agent: true };
}

const phases = new Set(["", "아이디어", "EDA", "모델링"]);

function patchCard(body) {
  if (!seats.includes(body.seat)) return false;
  const card = board.cards[body.seat];
  card.now = clip(body.now, 200);
  card.done = lines3(body.done);
  card.blocked = clip(body.blocked, 200);
  card.next = clip(body.next, 200);
  card.file = clip(body.file, 240);
  card.phase = phases.has(body.phase) ? body.phase : (card.phase || "");
  card.at = new Date().toISOString();
  board.now[body.seat] = card.now;
  return true;
}

function patchCandidate(body) {
  if (!/^cand-[1-3]$/.test(body.id || "")) return false;
  const card = findCard(board.candidates, body.id);
  if (!card) return false;
  if (body.name !== undefined) card.name = clip(body.name, 80);
  if (body.sentence !== undefined) card.sentence = clip(body.sentence, 400);
  if (body.idA !== undefined) card.idA = clip(body.idA, 40);
  if (body.idB !== undefined) card.idB = clip(body.idB, 40);
  if (body.kpi !== undefined) card.kpi = clip(body.kpi, 120);
  touch(card);
  return true;
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url || "/", `http://${req.headers.host || "localhost"}`);
  try {
    if (req.method === "GET" && url.pathname === "/api/health") {
      sendJson(res, 200, { ok: true, name: "jari", model: false, agentInside: false, rev: board.rev });
      return;
    }

    if (req.method === "POST" && url.pathname === "/api/login") {
      const body = await readBody(req);
      const nameLogin = seats.includes(body.key) && (!body.seat || body.seat === body.key);
      if (!nameLogin && (!body.key || !safeEqual(body.key, key))) {
        sendJson(res, 401, { ok: false });
        return;
      }
      let memberCookie = "jari-member=; HttpOnly; Path=/; SameSite=Strict; Max-Age=0";
      const loginSeat = nameLogin ? body.key : body.seat;
      if (loginSeat) {
        if (!nameLogin && seatFromKey(body.seatKey) !== loginSeat) return sendJson(res, 403, { ok: false });
        const token = crypto.randomBytes(32).toString("hex");
        sessions.set(token, { seat: loginSeat, expires: Date.now() + 86400000 });
        memberCookie = `jari-member=${token}; HttpOnly; Path=/; SameSite=Strict; Max-Age=86400`;
      }
      res.writeHead(200, {
        "Content-Type": "application/json; charset=utf-8",
        "Set-Cookie": [`jari=${encodeURIComponent(key)}; HttpOnly; Path=/; SameSite=Lax`, memberCookie],
        "Cache-Control": "no-store",
      });
      res.end(JSON.stringify({ ok: true }));
      return;
    }

    if (req.method === "GET" && (url.pathname === "/" || url.pathname === "/index.html")) {
      const html = fs.readFileSync(indexFile);
      res.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "no-store",
        "Content-Length": html.length,
      });
      res.end(html);
      return;
    }

    if (req.method === "GET" && url.pathname === "/dash") {
      const html = fs.readFileSync(dashFile);
      res.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "no-store",
        "Content-Length": html.length,
      });
      res.end(html);
      return;
    }

    if (req.method === "GET" && ["/collab.js", "/relationships.js"].includes(url.pathname)) {
      res.writeHead(200, { "Content-Type": "text/javascript; charset=utf-8", "Cache-Control": "no-store" });
      res.end(fs.readFileSync(path.join(root, "public", url.pathname.slice(1)))); return;
    }
    if (req.method === "GET" && url.pathname === "/install.ps1") {
      const host = String(req.headers.host || "");
      if (!/^[a-zA-Z0-9.-]+(?::[0-9]{1,5})?$/.test(host)) return sendJson(res, 400, { ok: false });
      const requestedSeat = url.searchParams.get("seat") || "";
      if (requestedSeat && !seats.includes(requestedSeat)) return sendJson(res, 400, { ok: false });
      const script = fs.readFileSync(path.join(root, "agent-install/install.ps1"), "utf8")
        .replace("__QAI_SERVER__", "http://" + host).replace("__QAI_SEAT__", requestedSeat);
      res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" });
      res.end(script); return;
    }
    if (!authorized(req)) {
      sendJson(res, 401, { ok: false });
      return;
    }

    const sessionToken = readCookie(req.headers.cookie)["jari-member"];
    const session = sessions.get(sessionToken);
    req.member = session && session.expires > Date.now() ? session.seat : "";
    if (req.method === "GET" && url.pathname === "/api/agent-pack") {
      if (!req.member) return sendJson(res, 401, { ok: false });
      return sendJson(res, 200, makePack(root, contestRoot, req.member, { room: key, seat: seatKeys[req.member] }, board));
    }
    if (req.method === "GET" && url.pathname === "/api/me") {
      return sendJson(res, 200, { seat: req.member, addresses: lanAddresses().filter(a => !a.startsWith("169.254.")).map(a => `http://${a}:${port}`) });
    }
    if (req.method === "POST") {
      if (req.headers.origin && req.headers.origin !== `http://${req.headers.host}` && req.headers.origin !== `https://${req.headers.host}`) return sendJson(res, 403, { ok: false });
      const agentRoute = ["/api/card", "/api/harness"].includes(url.pathname) && seatFromKey(headerValue(req, "x-seat-key"));
      if (!req.member && !agentRoute) return sendJson(res, 401, { ok: false, error: "이름을 선택해 다시 들어오세요." });
    }
    if (req.method === "POST" && url.pathname === "/api/logout") {
      sessions.delete(sessionToken);
      res.writeHead(200, { "Set-Cookie": ["jari=; Path=/; Max-Age=0", "jari-member=; Path=/; Max-Age=0"], "Content-Type": "application/json" });
      res.end('{"ok":true}'); return;
    }
    if (req.method === "POST" && url.pathname === "/api/message") {
      const body = await readBody(req);
      const text = clip(body.text, 2000).trim();
      const topic = body.topic || "general";
      if (!text || !(topic === "general" || board.ideas.some(i => i.id === topic))) return sendJson(res, 400, { ok: false });
      const reply = body.replyTo ? board.messages.find(m => m.id === body.replyTo && m.topic === topic && !m.replyTo) : null;
      if (body.replyTo && !reply) return sendJson(res, 400, { ok: false });
      if (!/^[a-zA-Z0-9-]{8,80}$/.test(body.clientId || "")) return sendJson(res, 400, { ok: false });
      const existing = board.messages.find(m => m.clientId === body.clientId && m.author === req.member);
      if (existing) return sendJson(res, 200, { ok: true, id: existing.id });
      const message = { id: crypto.randomUUID(), clientId: body.clientId, author: req.member, topic, text, replyTo: reply?.id || "", at: new Date().toISOString() };
      board.messages.push(message); bump();
      return sendJson(res, 200, { ok: true, id: message.id });
    }
    if (req.method === "POST" && url.pathname === "/api/evidence") {
      const body = await readBody(req);
      if (!board.ideas.some(i => i.id === body.id)) return sendJson(res, 400, { ok: false });
      const current = board.evidence[body.id] || { version: 0 };
      if (body.version !== current.version) return sendJson(res, 409, { ok: false, error: "다른 팀원이 수정했습니다. 최신 내용을 확인한 뒤 다시 저장하세요." });
      const row = { version: current.version + 1, by: req.member, at: new Date().toISOString() };
      for (const field of ["loss", "dataA", "dataB", "join", "action", "kpi", "evidence", "unknown", "reason"]) row[field] = clip(body[field], 1200);
      board.evidence[body.id] = row; bump();
      return sendJson(res, 200, { ok: true });
    }
    if (req.method === "GET" && url.pathname === "/api/relationship-map") {
      const file = path.join(dataDir, "intake", "relationship-map.json");
      if (!fs.existsSync(file)) return sendJson(res, 404, { ok: false, error: "관계도 자료가 아직 없습니다." });
      return sendJson(res, 200, JSON.parse(fs.readFileSync(file, "utf8")));
    }
    if (req.method === "GET" && url.pathname === "/api/board") {
      sendJson(res, 200, board);
      return;
    }

    if (req.method === "GET" && url.pathname === "/api/shelves") {
      sendJson(res, 200, { shelves: loadShelves() });
      return;
    }

    if (req.method === "GET" && url.pathname === "/api/search") {
      sendJson(res, 200, { hits: searchHits(url.searchParams.get("q") || "") });
      return;
    }

    if (req.method === "GET" && url.pathname === "/api/rule") {
      sendJson(res, 200, { text: fs.readFileSync(ruleFile, "utf8") });
      return;
    }

    if (req.method === "GET" && url.pathname === "/events") {
      res.writeHead(200, {
        "Content-Type": "text/event-stream; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
        Connection: "keep-alive",
      });
      res.write(`event: board\ndata: ${JSON.stringify(board)}\n\n`);
      res.write(`event: presence\ndata: ${JSON.stringify(presencePayload())}\n\n`);
      clients.add(res);
      req.on("close", () => clients.delete(res));
      return;
    }

    if (req.method === "POST" && url.pathname === "/api/pulse") {
      const body = await readBody(req);
      if (seats.includes(body.seat)) {
        seen.set(body.seat, Date.now());
        broadcast("presence", presencePayload());
      }
      sendJson(res, 200, { ok: true });
      return;
    }

    if (req.method === "POST" && url.pathname === "/api/setup") {
      const body = await readBody(req);
      board.setup.topic = clip(body.topic, 200);
      board.setup.note = clip(body.note, 2000);
      bump();
      sendJson(res, 200, { ok: true, rev: board.rev });
      return;
    }

    if (req.method === "POST" && url.pathname === "/api/pair") {
      const body = await readBody(req);
      if (body.idA !== undefined) board.pair.idA = clip(body.idA, 40);
      if (body.nameA !== undefined) board.pair.nameA = clip(body.nameA, 80);
      if (body.idB !== undefined) board.pair.idB = clip(body.idB, 40);
      if (body.nameB !== undefined) board.pair.nameB = clip(body.nameB, 80);
      if (body.join !== undefined && joinValues.has(body.join)) board.pair.join = body.join;
      if (body.linkNote !== undefined) board.pair.linkNote = clip(body.linkNote, 400);
      if (body.ideaId !== undefined && (body.ideaId === "" || /^(jw|ye)-(?:[1-9]|10)$/.test(body.ideaId))) {
        board.pair.ideaId = body.ideaId;
      }
      bump();
      sendJson(res, 200, { ok: true, rev: board.rev });
      return;
    }

    if (req.method === "POST" && url.pathname === "/api/begin") {
      if (board.started) {
        sendJson(res, 200, { ok: true, rev: board.rev, run: board.run?.id || "" });
        return;
      }
      const missing = startMissing(board);
      if (missing.length) {
        sendJson(res, 409, { ok: false, missing });
        return;
      }
      board.started = true;
      board.run = { id: `run-${crypto.randomBytes(4).toString("hex")}`, at: new Date().toISOString() };
      bump();
      sendJson(res, 200, { ok: true, rev: board.rev, run: board.run.id });
      return;
    }

    if (req.method === "POST" && url.pathname === "/api/start") {
      const body = await readBody(req);
      board.startLine = clip(body.text, 4000);
      bump();
      sendJson(res, 200, { ok: true, rev: board.rev });
      return;
    }

    if (req.method === "POST" && url.pathname === "/api/idea") {
      const body = await readBody(req);
      const owned = board.ideas.find(i => i.id === body.id);
      if (owned && owned.owner !== req.member) return sendJson(res, 403, { ok: false, error: "자기 아이디어만 수정할 수 있습니다." });
      if (!patchIdea(body)) {
        sendJson(res, 404, { ok: false });
        return;
      }
      bump();
      sendJson(res, 200, { ok: true, rev: board.rev });
      return;
    }

    if (req.method === "POST" && url.pathname === "/api/vote") {
      const body = await readBody(req);
      if (!seats.includes(body.seat) || !validDecisionIds(body.ids)
        || !newChoicesHaveContent(body.ids, board.decision.votes[body.seat])) {
        sendJson(res, 400, { ok: false });
        return;
      }
      if (JSON.stringify(board.decision.votes[body.seat]) !== JSON.stringify(body.ids)) {
        board.decision.votes[body.seat] = body.ids;
        bump();
      }
      sendJson(res, 200, { ok: true, rev: board.rev });
      return;
    }

    if (req.method === "POST" && url.pathname === "/api/shortlist") {
      const body = await readBody(req);
      if (!seats.includes(body.seat) || !validDecisionIds(body.ids)
        || !newChoicesHaveContent(body.ids, board.decision.finalists)) {
        sendJson(res, 400, { ok: false });
        return;
      }
      if (JSON.stringify(body.previous) !== JSON.stringify(board.decision.finalists)) return sendJson(res, 409, { ok: false, error: "후보가 변경되었습니다. 다시 선택하세요." });
      if (JSON.stringify(board.decision.finalists) !== JSON.stringify(body.ids)) {
        board.decision.finalists = body.ids;
        board.decision.finalistsBy = body.seat;
        board.decision.finalistsAt = new Date().toISOString();
        bump();
      }
      sendJson(res, 200, { ok: true, rev: board.rev });
      return;
    }

    if (req.method === "POST" && url.pathname === "/api/data") {
      const body = await readBody(req);
      if (!patchData(body)) {
        sendJson(res, 404, { ok: false });
        return;
      }
      bump();
      sendJson(res, 200, { ok: true, rev: board.rev });
      return;
    }

    if (req.method === "POST" && url.pathname === "/api/candidate") {
      const body = await readBody(req);
      if (!patchCandidate(body)) {
        sendJson(res, 404, { ok: false });
        return;
      }
      bump();
      sendJson(res, 200, { ok: true, rev: board.rev });
      return;
    }

    if (req.method === "POST" && url.pathname === "/api/now") {
      const body = await readBody(req);
      if (!seats.includes(body.seat)) {
        sendJson(res, 404, { ok: false });
        return;
      }
      board.now[body.seat] = clip(body.text, 500);
      bump();
      sendJson(res, 200, { ok: true, rev: board.rev });
      return;
    }

    if (req.method === "POST" && url.pathname === "/api/card") {
      const body = await readBody(req);
      const gate = agentWrite(req, body);
      if (!gate.ok) {
        sendJson(res, gate.status, { ok: false, missing: gate.missing || [] });
        return;
      }
      if (!patchCard(body)) {
        sendJson(res, 400, { ok: false });
        return;
      }
      bump();
      sendJson(res, 200, { ok: true, rev: board.rev });
      return;
    }

    if (req.method === "POST" && url.pathname === "/api/harness") {
      const body = await readBody(req);
      const token = headerValue(req, "x-seat-key");
      if (!token) {
        sendJson(res, 403, { ok: false });
        return;
      }
      const gate = agentWrite(req, body);
      if (!gate.ok) {
        sendJson(res, gate.status, { ok: false, missing: gate.missing || [] });
        return;
      }
      const result = patchHarness(body);
      if (!result) {
        sendJson(res, 400, { ok: false });
        return;
      }
      if (!result.same) bump();
      sendJson(res, 200, { ok: true, rev: board.rev, id: result.id, same: result.same });
      return;
    }

    if (req.method === "POST" && url.pathname === "/api/progress") {
      if (!board.started) {
        sendJson(res, 409, { ok: false, missing: startMissing(board) });
        return;
      }
      const body = await readBody(req);
      const note = clip(body.note, 500).trim();
      if (!seats.includes(body.seat) || !progressStatus.has(body.status) || !progressKind.has(body.kind) || !note) {
        sendJson(res, 400, { ok: false });
        return;
      }
      board.progress.push({
        id: crypto.randomBytes(4).toString("hex"),
        seat: body.seat,
        status: body.status,
        kind: body.kind,
        note,
        at: new Date().toISOString(),
      });
      if (board.progress.length > 200) board.progress.splice(0, board.progress.length - 200);
      board.now[body.seat] = note;
      bump();
      sendJson(res, 200, { ok: true, rev: board.rev });
      return;
    }

    if (req.method === "POST" && url.pathname === "/api/comment") {
      const body = await readBody(req);
      const text = clip(body.text, 500).trim();
      if (!seats.includes(body.author) || !text) {
        sendJson(res, 400, { ok: false });
        return;
      }
      board.comments.push({
        id: crypto.randomBytes(4).toString("hex"),
        author: body.author,
        text,
        at: new Date().toISOString(),
      });
      if (board.comments.length > 100) {
        board.comments.splice(0, board.comments.length - 100);
      }
      bump();
      sendJson(res, 200, { ok: true, rev: board.rev });
      return;
    }

    sendJson(res, 404, { ok: false });
  } catch {
    if (!res.headersSent) sendJson(res, 400, { ok: false });
  }
});

setInterval(() => {
  for (const [token, session] of sessions) if (session.expires <= Date.now()) sessions.delete(token);
  broadcast("presence", presencePayload());
  for (const res of clients) res.write(`: ping\n\n`);
}, 5000);

function lanAddresses() {
  const found = [];
  for (const entries of Object.values(os.networkInterfaces())) {
    for (const entry of entries || []) {
      if (entry.family === "IPv4" && !entry.internal) found.push(entry.address);
    }
  }
  return found;
}

server.listen(port, "0.0.0.0", () => {
  console.log(`jari http://localhost:${port}`);
  for (const address of lanAddresses()) console.log(`jari http://${address}:${port}`);
  console.log(`room ${key}`);
  for (const seat of seats) console.log(`seat ${seat} ${seatKeys[seat]}`);
  console.log("model none");
});
