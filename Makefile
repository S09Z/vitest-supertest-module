.PHONY: test test-api test-e2e test-e2e-ui test-e2e-report dev dev-ui install

# ── API ──────────────────────────────────────────────────────────────────────
test-api:
	bun test api/tests

# ── E2E ──────────────────────────────────────────────────────────────────────
test-e2e:
	cd ui && bunx playwright test

test-e2e-ui:
	cd ui && bunx playwright test --ui

test-e2e-report:
	cd ui && bunx playwright show-report

# ── All tests ─────────────────────────────────────────────────────────────────
test: test-api test-e2e

# ── Dev servers ───────────────────────────────────────────────────────────────
dev:
	bun run api/server.ts

dev-ui:
	cd ui && bun run dev

# ── Install ───────────────────────────────────────────────────────────────────
install:
	bun install
	cd ui && bun install
	cd ui && bunx playwright install --with-deps
