# vitest-supertest-module

A full-stack utility scaffold for building and testing APIs fast.

## Stack

| | |
| --- | --- |
| Runtime | Bun |
| API | Hono + Zod + OpenAPI |
| Database | MongoDB (Mongoose) · PostgreSQL (Prisma 7) |
| Testing | `bun test` + in-memory MongoDB |
| UI | React 19 + Vite + Playwright |

## Get started

```bash
bun install
cp .env.example .env   # fill in DATABASE_URL and MONGO_URI
bun dev                # http://localhost:3000
bun run db:migrate     # apply Prisma migrations
```

## Test

```bash
bun test
```

Docs available at `http://localhost:3000/ui` when the server is running.
