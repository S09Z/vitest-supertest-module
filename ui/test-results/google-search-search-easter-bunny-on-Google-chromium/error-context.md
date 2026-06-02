# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: google-search.spec.ts >> search "easter bunny" on Google
- Location: e2e/google-search.spec.ts:3:1

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /q=easter\+bunny/
Received string:  "https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Deaster%2Bbunny%26sca_esv%3D0fbb8f91d07ef4fb%26source%3Dhp%26ei%3DW4sZasCePKrV1e8PqoKSkAE%26iflsig%3DAFdpzrgAAAAAahmZbFInO6Ush8Ca0zbW5QtrdwUvnVCC%26ved%3D0ahUKEwiAuNG1xN6UAxWqavUHHSqBBBIQ4dUDCBw%26uact%3D5%26oq%3Deaster%2Bbunny%26gs_lp%3DEgdnd3Mtd2l6IgxlYXN0ZXIgYnVubnkyBRAuGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyCRAAGIAEGAoYCzIJEAAYgAQYChgLMgkQABiABBgKGAsyCRAAGIAEGAoYC0iQA1DTAVjTAXABeACQAQCYAVagAVaqAQExuAEDyAEA-AEBmAICoAJmqAIKwgIKEAAYAxiPARjqAsICChAuGAMYjwEY6gKYAwvxBTkzeDVFkF1_kgcBMqAH9wWyBwExuAdbwgcFMi0xLjHIBw2ACAE%26sclient%3Dgws-wiz%26sei%3DXosZaoOWI-PRwcsPgMiT0Q8&q=EhAkBZgAvJDcNFHsd15GKCVwGN6W5tAGIjAvuuMLzhTJqZCFxLnhGCly3nTAJVqXUe8WrDaBhdEZ3pGPgMlAbIndHGreUqspCUUyAVJaAUM"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    - waiting for" https://www.google.com/search?q=easter+bunny&sca_esv=0fbb8f91d07ef4fb&source=hp&ei=W4sZasCePKrV1e8PqoKSkAE&iflsig=AFdpzrgAAAAAahmZbFInO6Ush8Ca0zbW5QtrdwUvnVCC&ved=0ahUKEwiAuNG1xN6UAxWqavUHHSqBBBIQ4dU…" navigation to finish...
    - navigated to "https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Deaster%2Bbunny%26sca_esv%3D0fbb8f91d07ef4fb%26source%3Dhp%26ei%3DW4sZasCePKrV1e8PqoKSkAE%26iflsig%3DAFdpzrgAAAAAahmZbFI…"
    12 × unexpected value "https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Deaster%2Bbunny%26sca_esv%3D0fbb8f91d07ef4fb%26source%3Dhp%26ei%3DW4sZasCePKrV1e8PqoKSkAE%26iflsig%3DAFdpzrgAAAAAahmZbFInO6Ush8Ca0zbW5QtrdwUvnVCC%26ved%3D0ahUKEwiAuNG1xN6UAxWqavUHHSqBBBIQ4dUDCBw%26uact%3D5%26oq%3Deaster%2Bbunny%26gs_lp%3DEgdnd3Mtd2l6IgxlYXN0ZXIgYnVubnkyBRAuGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyCRAAGIAEGAoYCzIJEAAYgAQYChgLMgkQABiABBgKGAsyCRAAGIAEGAoYC0iQA1DTAVjTAXABeACQAQCYAVagAVaqAQExuAEDyAEA-AEBmAICoAJmqAIKwgIKEAAYAxiPARjqAsICChAuGAMYjwEY6gKYAwvxBTkzeDVFkF1_kgcBMqAH9wWyBwExuAdbwgcFMi0xLjHIBw2ACAE%26sclient%3Dgws-wiz%26sei%3DXosZaoOWI-PRwcsPgMiT0Q8&q=EhAkBZgAvJDcNFHsd15GKCVwGN6W5tAGIjAvuuMLzhTJqZCFxLnhGCly3nTAJVqXUe8WrDaBhdEZ3pGPgMlAbIndHGreUqspCUUyAVJaAUM"

```

```yaml
- separator
- iframe
- separator
- text: About this page Our systems have detected unusual traffic from your computer network. This page checks to see if it's really you sending the requests, and not a robot.
- link "Why did this happen?":
  - /url: "#"
- text: "IP address: 2405:9800:bc90:dc34:51ec:775e:4628:2570 Time: 2026-05-29T12:49:35Z URL: https://www.google.com/search?q=easter+bunny&sca_esv=0fbb8f91d07ef4fb&source=hp&ei=W4sZasCePKrV1e8PqoKSkAE&iflsig=AFdpzrgAAAAAahmZbFInO6Ush8Ca0zbW5QtrdwUvnVCC&ved=0ahUKEwiAuNG1xN6UAxWqavUHHSqBBBIQ4dUDCBw&uact=5&oq=easter+bunny&gs_lp=Egdnd3Mtd2l6IgxlYXN0ZXIgYnVubnkyBRAuGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyCRAAGIAEGAoYCzIJEAAYgAQYChgLMgkQABiABBgKGAsyCRAAGIAEGAoYC0iQA1DTAVjTAXABeACQAQCYAVagAVaqAQExuAEDyAEA-AEBmAICoAJmqAIKwgIKEAAYAxiPARjqAsICChAuGAMYjwEY6gKYAwvxBTkzeDVFkF1_kgcBMqAH9wWyBwExuAdbwgcFMi0xLjHIBw2ACAE&sclient=gws-wiz&sei=XosZaoOWI-PRwcsPgMiT0Q8"
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test'
  2  | 
  3  | test('search "easter bunny" on Google', async ({ page }) => {
  4  |   await page.goto('https://www.google.com')
  5  | 
  6  |   const searchBox = page.locator('textarea[name="q"]')
  7  |   await searchBox.click()
  8  |   await searchBox.fill('easter bunny')
  9  |   await searchBox.press('Enter')
  10 | 
  11 |   // Google may redirect to CAPTCHA in headless mode; asserting the search query in URL is sufficient
> 12 |   await expect(page).toHaveURL(/q=easter\+bunny/)
     |                      ^ Error: expect(page).toHaveURL(expected) failed
  13 | })
  14 | 
```