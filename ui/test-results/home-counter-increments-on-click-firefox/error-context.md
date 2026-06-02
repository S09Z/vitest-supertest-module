# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: home.spec.ts >> counter increments on click
- Location: e2e/home.spec.ts:8:1

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: getByRole('button', { name: /count is/i })
Expected substring: "count is 0"
Received string:    "Count is 0"
Timeout: 5000ms

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for getByRole('button', { name: /count is/i })
    11 × locator resolved to <button type="button" class="counter">Count is 0</button>
       - unexpected value "Count is 0"

```

```yaml
- button "Count is 0"
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test'
  2  | 
  3  | test('home page renders', async ({ page }) => {
  4  |   await page.goto('/')
  5  |   await expect(page.getByText('Vite + React')).toBeVisible()
  6  | })
  7  | 
  8  | test('counter increments on click', async ({ page }) => {
  9  |   await page.goto('/')
  10 |   const button = page.getByRole('button', { name: /count is/i })
> 11 |   await expect(button).toContainText('count is 0')
     |                        ^ Error: expect(locator).toContainText(expected) failed
  12 |   await button.click()
  13 |   await expect(button).toContainText('count is 1')
  14 | })
  15 | 
```