# CLAUDE.md — Session Instructions

> Claude reads this at the start of every conversation to understand who I am,
> how I work, and what I expect.

---

## Who I am

- Developer based in Bangkok, Thailand
- Work across the full stack: Node.js / TypeScript, Python, React, Docker, CI/CD
- Currently deep in: **testing (Vitest + Supertest)**, **local AI/RAG tooling**, **monorepo management**
- Use both Thai and English — respond in whichever language I write in

---

## My active tools & stack

| Layer | Tools |
|---|---|
| Runtime | Node.js (ESM), Python 3.11, pnpm / uv |
| Framework | Express, FastAPI |
| Testing | **Vitest + Supertest + mongodb-memory-server** |
| Database | MongoDB (Mongoose), PostgreSQL |
| AI/Local | Ollama (cloud models), SocratiCode MCP, ChromaDB |
| IDE | VS Code + Copilot, Claude Code terminal |
| CI | GitLab CI, Docker buildx |
| OS | Windows 11 (PowerShell) + macOS |

---

## Codebase search (SocratiCode)

This project is indexed with SocratiCode. **Always use its MCP tools to explore
the codebase before reading any files directly.**

Workflow:
1. Start with `codebase_search` — hybrid semantic + keyword, one call.
   - Broad queries for orientation: "how is auth handled", "DB connection setup"
   - Precise queries for symbols: exact function names, type names
2. Infer which files to read from results — do not speculatively open files.
3. Only after searching: read the specific file + line range needed.

---

## How I want Claude to respond

- **Code first, explanation after** — show the fix/implementation, then explain if needed
- **No walls of text** — keep prose tight; use tables and code blocks, not bullet soup
- **Match my language** — Thai message → Thai reply; English → English
- **Don't hedge excessively** — if you're unsure, say so once and move on
- **Point out real problems** — if my approach has a flaw, say it directly

---

## Testing conventions I follow

- Vitest + Supertest for all HTTP-level integration tests
- `configureApp()` separated from DB connect (so tests use in-memory Mongo)
- `beforeAll` → connect + start server; `afterEach` → clear DB; `afterAll` → close
- Tests assert: **status code + body shape + body values** always
- No mocking of internal services unless external/slow boundary

---

## Things I dislike

- Suggestions to "add a comment explaining this" — I'll ask if I want that
- Long preambles before the code
- Repeating back what I just said before answering
- Installing packages without flagging if it's a new dependency
