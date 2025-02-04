const puppeteer = require('puppeteer');

async function run() {
  const browser = await puppeteer.launch({
    executablePath: 'C:/ProgramData/Microsoft/Windows/Start Menu/Programs/chrome.exe', 
    headless: false 
  });
  
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await page.screenshot({ path: 'example.png' }); 
  await browser.close();
}

run().catch(console.error);