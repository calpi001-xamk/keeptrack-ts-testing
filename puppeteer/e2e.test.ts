

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch( {
    headless: false,
    slowMo: 3000
  });
  const page = await browser.newPage();
  const linkToProjects = "#root > header > a:nth-child(3)";

  // Siirtyy sivulle localhost
  await page.goto('http://localhost:3000/');

  // Menee sivulle projects
  await page.click(linkToProjects);

  // Ottaa screenshotin Projects etusivusta
  await page.screenshot( { path:"projects.png"});

  // Sulkee selaimen
  await browser.close();
})();
