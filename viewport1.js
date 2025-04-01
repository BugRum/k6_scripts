import { browser } from 'k6/browser';

export const options = {
  scenarios: {
    browser_test: {
      executor: 'constant-vus',
      vus: 1,
      duration: '30s',
      options: {
        browser: {
          type: 'chromium'
        }
      }
    }
  }
}

export default async function () {
  const page = browser.newPage()
  page.viewport({
    width: 375,
    height: 812
  })

  await page.goto('https://www.google.com')
  page.screenshot({
    fullPage: true,
    path: 'screenshots/test2.png'
  })
  page.close()
}