import { test, expect } from '@playwright/test'

test('home page renders', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByText('Vite + React')).toBeVisible()
})

test('counter increments on click', async ({ page }) => {
  await page.goto('/')
  const button = page.getByRole('button', { name: /count is/i })
  await expect(button).toContainText('count is 0')
  await button.click()
  await expect(button).toContainText('count is 1')
})
