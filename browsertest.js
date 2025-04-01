import { chromium } from 'k6/browser';
//import { options } from './options.js'; // Import the options from the options.js file  
export const options = {
    scenarios: {
        browser_test: {
            executor: 'constant-vus',
            vus: 2,
            duration: '30s',
            options: {
                type: 'chromium',
            }
        }
    }
}

export default async function() {
    const browser = chromium.launch();
    try {
        const page = await browser.newPage();
        page.goto('https://www.myglamm.com/');
        page.waitForLoadState('domcontentloaded');
        page.screenshot({ path: 'D:/K6_scripts/screenshot.png' });
        page.close();
    } finally {
        browser.close();
    }
}