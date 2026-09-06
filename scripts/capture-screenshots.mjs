import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';

const sites = [
  {
    name: 'ana-laboratories',
    url: 'https://www.analaboratories.co.in/',
    waitTime: 6000
  },
  {
    name: 'msv-freight',
    url: 'https://msvfreight.com/',
    waitTime: 8000 // allows flight preloader to settle
  },
  {
    name: 'genesis-marketing',
    url: 'https://www.marketingwithgenesis.com/',
    waitTime: 4000
  },
  {
    name: 'ekids-india',
    url: 'https://ekidsindia.com/',
    waitTime: 4000
  },
  {
    name: 'farhan-transport',
    url: 'https://www.farhantransportservice.com',
    waitTime: 4000
  },
  {
    name: 'clickmycart',
    url: 'https://clickmycart.in',
    waitTime: 4000
  },
  {
    name: 'awaazfm',
    url: 'https://Awaazfm.in',
    waitTime: 4000
  },
  {
    name: 'karuna-tutorials',
    url: 'https://www.karunapunjabitutorials.com/',
    waitTime: 4000
  }
];

const outDir = path.resolve('public/projects');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function capture() {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    headless: 'new',
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-web-security', '--ignore-certificate-errors']
  });

  for (const site of sites) {
    console.log(`Navigating to ${site.name}: ${site.url}`);
    const page = await browser.newPage();
    try {
      await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1.5 });
      await page.goto(site.url, { waitUntil: 'networkidle2', timeout: 40000 }).catch(() => {});
      await new Promise(r => setTimeout(r, site.waitTime));

      // Remove any leftover preloader overlay
      await page.evaluate(() => {
        document.querySelectorAll('.pl, .preloader, #preloader').forEach(el => el.remove());
      });
      await new Promise(r => setTimeout(r, 1000));
      
      const outPath = path.join(outDir, `${site.name}.jpg`);
      await page.screenshot({ path: outPath, type: 'jpeg', quality: 92, clip: { x: 0, y: 0, width: 1440, height: 900 } });
      console.log(`Saved screenshot to ${outPath}`);
    } catch (err) {
      console.error(`Error capturing ${site.name}:`, err.message);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  console.log('All screenshots captured successfully.');
}

capture();
