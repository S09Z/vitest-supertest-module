# CLAUDE.md — Session Instructions

> Claude reads this at the start of every conversation to understand who I am,
> how I work, and what I expect.

---

## Who I am

- Developer based in Bangkok, Thailand
- Work across the full stack: TypeScript, Python, React, Docker, CI/CD
- Use both Thai and English — respond in whichever language I write in

---

## Stack (current, as-built)

| Layer | Tools |
| --- | --- |
| Runtime | **Bun 1.3+** (replaced Node.js / pnpm) |
| API framework | **Hono** + `@hono/zod-openapi` + `@hono/swagger-ui` |
| Validation | **Zod** (via `@hono/zod-openapi`) |
| Auth / hashing | `bcryptjs` |
| Database (NoSQL) | **MongoDB** via Mongoose + `mongodb-memory-server` for tests |
| Database (SQL) | **PostgreSQL** via Prisma 7 + `@prisma/adapter-pg` |
| Testing | **`bun test`** + `app.request()` (no Supertest — replaced when migrated to Bun) |
| UI | React 19 + Vite (scaffolded, `ui/` folder) |
| E2E | Playwright (configured in `ui/`, not yet wired) |
| AI/Local | Ollama, SocratiCode MCP, ChromaDB |
| IDE | VS Code + Copilot, Claude Code terminal |
| CI | GitLab CI, Docker buildx |
| OS | Windows 11 (PowerShell) + macOS |

---

## Project structure

```text
api/
  app.ts                  ← configureApp() — mounts routes, middleware, onError
  server.ts               ← entry: mongoose.connect + Bun.serve()
  constants/
    httpStatus.ts         ← HTTP_STATUS map + getStatusText(code)
  lib/
    defaultHook.ts        ← Zod validation error → { msg, code, status }
  middleware/
    responseFormat.ts     ← wraps every JSON response: { msg, code, status }
  models/
    user.model.ts         ← Mongoose User schema
  modules/
    user/
      user.schema.ts      ← Zod schemas with .openapi() metadata
      user.controller.ts  ← DB logic only, returns plain data / null / boolean
      user.handler.ts     ← c.req.valid() + call controller + throw HTTPException
  routes/
    user.routes.ts        ← createRoute() definitions + openapi() bindings
  types/
    user.types.ts         ← Mongoose document interface
  tests/
    setup.ts              ← mongodb-memory-server lifecycle (imported by test files)
    user.test.ts          ← bun test integration tests
prisma/
  schema.prisma           ← 6 models: Employee, Customer, Product, Order, OrderItem, Payment
  migrations/             ← gitignored
prisma.config.ts          ← Prisma 7 config (datasource.url via dotenv)
ui/                       ← React + Vite scaffold (standalone package)
  e2e/                    ← Playwright tests (not yet running)
```

---

## Architecture rules (enforced, don't break)

**API layer split (inside each module folder):**

- `routes/` — `createRoute()` config + `openapi()` bindings only. No logic.
- `modules/<domain>/` — handler, controller, schema per domain:
  - `*.handler.ts` — `c.req.valid()` + call controller + `c.json()` / `throw HTTPException`. No DB.
  - `*.controller.ts` — DB operations only. Returns plain `UserDto | null | boolean`. No Hono.
  - `*.schema.ts` — Zod schemas shared across all three layers.
- `models/` — Mongoose schema + model per domain.
- `types/` — TypeScript interfaces for Mongoose documents.

**Response shape — every endpoint returns:**

```json
{ "msg": "<data or string>", "code": 404, "status": "Not Found" }
```

- `responseFormat` middleware wraps handler responses
- `defaultHook` formats Zod validation errors (same shape)
- `app.onError` formats `HTTPException` and uncaught errors (same shape)
- 204 responses have no body — middleware skips them

**Error flow in handlers:**

```ts
try {
  // controller call
} catch (err) {
  if (err instanceof HTTPException) throw err   // re-throw known errors
  throw new HTTPException(500, { message: '...' })
}
```

---

## Codebase search (SocratiCode)

This project is indexed with SocratiCode. **Always use its MCP tools to explore
the codebase before reading any files directly.**

1. Start with `codebase_search` — one call, hybrid semantic + keyword.
2. Infer which files to read from results — do not speculatively open files.
3. Only after searching: read the specific file + line range needed.

---

## Testing conventions

- `bun test api/tests` — runs all integration tests
- `api/tests/setup.ts` is imported at the top of each test file (not via preload)
- Lifecycle: `beforeAll` connect → `afterEach` clear collections → `afterAll` disconnect
- Tests use `app.request()` directly — no HTTP server, no Supertest
- Every test asserts: **HTTP status + `body.code` + `body.status` + `body.msg` shape**
- No mocking of internal services unless external/slow boundary

---

## Prisma (PostgreSQL)

- Provider: PostgreSQL, database: `mock`, schema: `public`
- Config: `prisma.config.ts` uses `dotenv` + `defineConfig` (Prisma 7 style — no `url` in schema.prisma)
- 6 models from `END SEM III.sql`: Employee, Customer, Product, Order, OrderItem, Payment
- Commands: `bun run db:migrate` / `bun run db:push` / `bun run db:generate`

---

## How I want Claude to respond

- **Code first, explanation after** — show the fix/implementation, then explain if needed
- **No walls of text** — keep prose tight; use tables and code blocks, not bullet soup
- **Match my language** — Thai message → Thai reply; English → English
- **Don't hedge excessively** — if you're unsure, say so once and move on
- **Point out real problems** — if my approach has a flaw, say it directly

---

## Things I dislike

- Suggestions to "add a comment explaining this" — I'll ask if I want that
- Long preambles before the code
- Repeating back what I just said before answering
- Installing packages without flagging it's a new dependency
- Deleting files without asking (gitignored ≠ unwanted)
