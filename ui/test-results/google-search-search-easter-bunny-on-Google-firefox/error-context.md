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
Received string:  "https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Deaster%2Bbunny%26sca_esv%3Da2dd8ae1fec179c6%26source%3Dhp%26ei%3Da4sZasW7DrGj1e8PtK_ekQY%26iflsig%3DAFdpzrgAAAAAahmZe5ystHaDBkVnSnnCtJixwCAPHdyX%26ved%3D0ahUKEwiFnfS8xN6UAxWxUfUHHbSXN2IQ4dUDCBw%26uact%3D5%26oq%3Deaster%2Bbunny%26gs_lp%3DEgdnd3Mtd2l6IgxlYXN0ZXIgYnVubnkyBRAuGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyCRAAGIAEGAoYCzIJEAAYgAQYChgLMgkQABiABBgKGAsyCRAAGIAEGAoYC0jGKVCqFFiqFHABeACQAQCYAbQGoAG0BqoBAzYtMbgBA8gBAPgBAZgCAqACrweoAgrCAgoQLhgDGI8BGOoCwgIKEAAYAxiPARjqApgDSPEFCmzPi4gFS8aSBwUxLjYtMaAH9wWyBwM2LTG4B-cGwgcFMy0xLjHIBzGACAE%26sclient%3Dgws-wiz%26sei%3DfIsZaoSTB9H31e8Po9jwkQo&q=EhAkBZgAvJDcNFHsd15GKCVwGP6W5tAGIjB5ZTrXxNnTgmgPpUsjZG1mfsuA7vHokZ8NH2qjG4bThhw_4RsQ_RwYjgp-Hk7RErkyAVJaAUM"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    - waiting for" https://www.google.com/search?q=easter+bunny&sca_esv=a2dd8ae1fec179c6&source=hp&ei=a4sZasW7DrGj1e8PtK_ekQY&iflsig=AFdpzrgAAAAAahmZe5ystHaDBkVnSnnCtJixwCAPHdyX&ved=0ahUKEwiFnfS8xN6UAxWxUfUHHbSXN2IQ4dU…" navigation to finish...
    - navigated to "https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Deaster%2Bbunny%26sca_esv%3Da2dd8ae1fec179c6%26source%3Dhp%26ei%3Da4sZasW7DrGj1e8PtK_ekQY%26iflsig%3DAFdpzrgAAAAAahmZe5y…"
    4 × unexpected value "https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Deaster%2Bbunny%26sca_esv%3Da2dd8ae1fec179c6%26source%3Dhp%26ei%3Da4sZasW7DrGj1e8PtK_ekQY%26iflsig%3DAFdpzrgAAAAAahmZe5ystHaDBkVnSnnCtJixwCAPHdyX%26ved%3D0ahUKEwiFnfS8xN6UAxWxUfUHHbSXN2IQ4dUDCBw%26uact%3D5%26oq%3Deaster%2Bbunny%26gs_lp%3DEgdnd3Mtd2l6IgxlYXN0ZXIgYnVubnkyBRAuGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyCRAAGIAEGAoYCzIJEAAYgAQYChgLMgkQABiABBgKGAsyCRAAGIAEGAoYC0jGKVCqFFiqFHABeACQAQCYAbQGoAG0BqoBAzYtMbgBA8gBAPgBAZgCAqACrweoAgrCAgoQLhgDGI8BGOoCwgIKEAAYAxiPARjqApgDSPEFCmzPi4gFS8aSBwUxLjYtMaAH9wWyBwM2LTG4B-cGwgcFMy0xLjHIBzGACAE%26sclient%3Dgws-wiz%26sei%3DfIsZaoSTB9H31e8Po9jwkQo&q=EhAkBZgAvJDcNFHsd15GKCVwGP6W5tAGIjB5ZTrXxNnTgmgPpUsjZG1mfsuA7vHokZ8NH2qjG4bThhw_4RsQ_RwYjgp-Hk7RErkyAVJaAUM"

```

```yaml
- separator
- iframe
- separator
- text: About this page Our systems have detected unusual traffic from your computer network. This page checks to see if it's really you sending the requests, and not a robot.
- link "Why did this happen?":
  - /url: "#"
- text: "IP address: 2405:9800:bc90:dc34:51ec:775e:4628:2570 Time: 2026-05-29T12:50:06Z URL: https://www.google.com/search?q=easter+bunny&sca_esv=a2dd8ae1fec179c6&source=hp&ei=a4sZasW7DrGj1e8PtK_ekQY&iflsig=AFdpzrgAAAAAahmZe5ystHaDBkVnSnnCtJixwCAPHdyX&ved=0ahUKEwiFnfS8xN6UAxWxUfUHHbSXN2IQ4dUDCBw&uact=5&oq=easter+bunny&gs_lp=Egdnd3Mtd2l6IgxlYXN0ZXIgYnVubnkyBRAuGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyCRAAGIAEGAoYCzIJEAAYgAQYChgLMgkQABiABBgKGAsyCRAAGIAEGAoYC0jGKVCqFFiqFHABeACQAQCYAbQGoAG0BqoBAzYtMbgBA8gBAPgBAZgCAqACrweoAgrCAgoQLhgDGI8BGOoCwgIKEAAYAxiPARjqApgDSPEFCmzPi4gFS8aSBwUxLjYtMaAH9wWyBwM2LTG4B-cGwgcFMy0xLjHIBzGACAE&sclient=gws-wiz&sei=fIsZaoSTB9H31e8Po9jwkQo"
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