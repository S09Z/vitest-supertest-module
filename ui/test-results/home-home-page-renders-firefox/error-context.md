# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: home.spec.ts >> home page renders
- Location: e2e/home.spec.ts:3:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Vite + React')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('Vite + React')

```

```yaml
- img "React logo"
- img "Vite logo"
- heading "Get started" [level=1]
- paragraph:
  - text: Edit
  - code: src/App.tsx
  - text: and save to test
  - code: HMR
- button "Count is 0"
- heading "Documentation" [level=2]
- paragraph: Your questions, answered
- list:
  - listitem:
    - link "Explore Vite":
      - /url: https://vite.dev/
  - listitem:
    - link "Learn more":
      - /url: https://react.dev/
- heading "Connect with us" [level=2]
- paragraph: Join the Vite community
- list:
  - listitem:
    - link "GitHub":
      - /url: https://github.com/vitejs/vite
  - listitem:
    - link "Discord":
      - /url: https://chat.vite.dev/
  - listitem:
    - link "X.com":
      - /url: https://x.com/vite_js
  - listitem:
    - link "Bluesky":
      - /url: https://bsky.app/profile/vite.dev
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test'
  2  | 
  3  | test('home page renders', async ({ page }) => {
  4  |   await page.goto('/')
> 5  |   await expect(page.getByText('Vite + React')).toBeVisible()
     |                                                ^ Error: expect(locator).toBeVisible() failed
  6  | })
  7  | 
  8  | test('counter increments on click', async ({ page }) => {
  9  |   await page.goto('/')
  10 |   const button = page.getByRole('button', { name: /count is/i })
  11 |   await expect(button).toContainText('count is 0')
  12 |   await button.click()
  13 |   await expect(button).toContainText('count is 1')
  14 | })
  15 | 
```