# TO.md — Task Tracker & Open Loops

> Living document. Update whenever a task starts, finishes, or gets blocked.
> Format: `- [ ]` open · `- [x]` done · `- [-]` blocked/paused

---

## 🔴 Active — In Progress

- [ ] **Vitest + Supertest test suite** — write full test coverage for
      `/api/auth/register`: happy path ✅, password leak, duplicate email,
      missing fields, 500 via mock
- [ ] **Local RAG pipeline** — wire watchdog → ChromaDB re-index → Obsidian
      changelog note on file change; add debounce (2s)
- [ ] **Figma MCP in VS Code** — confirm Bearer token config works end-to-end;
      test on a real Figma file with components

---

## 🟡 Next — Ready to Start

- [ ] **SocratiCode setup** — add CLAUDE.md workflow block to active projects;
      verify index is fresh after last refactor
- [ ] **Monorepo: kohya_ss venv** — confirm `uv venv --seed --no-project` fix
      resolves `idol-generate` conflict; re-run CI
- [ ] **Ollama cloud models** — benchmark glm-5.1 vs devstral-small-2 on
      actual coding tasks; pick default for daily use
- [ ] **Add login endpoint** — POST `/api/auth/login` with bcrypt compare,
      return JWT; write HTTP-level tests (correct pw → 200, wrong → 401)

---

## 🔵 Backlog — Parked

- [ ] **RAG: Web UI for changelog** — realtime view of Obsidian changes in browser
- [ ] **Vtuber TTS web app** — kokoro-js + browser-native, UI polish, voice
      selector, pitch control
- [ ] **God of War sandbox game** — Phase 1 (isometric canvas, NPC AI, grab/throw
      physics); design questions still open (respawn? mana?)
- [ ] **Training monitor bot → Discord** — OpenClaw/webhook, poll wandb or log
      file, alert on plateau or crash

---

## ✅ Done

- [x] **Vitest + Supertest learning guide** — full annotated guide with 9 test
      cases, lifecycle explanation, mocking, cheat sheet (May 2026)
- [x] **CLAUDE.md + memory.md + TO.md setup** — this file (May 2026)
- [x] **Flappy Bird system architecture doc** — full .docx with UI, features,
      system layers (May 2026)
- [x] **pnpm-lock.yaml CI fix** — `git add -f` workaround documented
- [x] **uv venv isolation fix** — `--seed --no-project` flags
- [x] **OBS Studio 1080p 60fps guide** — NVENC H.264 settings for RTX 5070
- [x] **4K UHD wallpaper** — S09Z logo upscale + background removal

---

## 📌 Decisions to Make

| Question | Context | Deadline |
|---|---|---|
| God of War: villager respawn? | Affects Phase 1 scope | Before Phase 1 |
| God of War: spell mana or cooldown? | Affects UI complexity | Before Phase 1 |
| Ollama default model for coding? | glm-5.1 vs devstral-small-2 | After benchmark |
| RAG: ChromaDB vs Qdrant? | Current stack uses Chroma | Not urgent |

---

## 🐛 Known Issues / Blockers

| Issue | Status | Notes |
|---|---|---|
| Figma MCP not returning content | Investigating | Try Bearer header format |
| mongodb-memory-server install typo | Fixed in guide | Package is `mongodb-memory-server` not `mongoose-memory-server` |

---

_Last updated: May 2026_
