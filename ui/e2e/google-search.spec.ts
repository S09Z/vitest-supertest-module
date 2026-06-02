import { test, expect } from '@playwright/test'

test('search "easter bunny" on Google', async ({ page }) => {
  await page.goto('https://www.google.com')

  const searchBox = page.locator('textarea[name="q"]')
  await searchBox.click()
  await searchBox.fill('easter bunny')
  await searchBox.press('Enter')

  // Google may redirect to CAPTCHA in headless mode; asserting the search query in URL is sufficient
  await expect(page).toHaveURL(/q=easter\+bunny/)
})
