import puppeteer from "puppeteer";

const express = require('express');
const basicAuth = require('express-basic-auth')
const app = express();

// Define your username and password for basic authentication
const basicAuthConfig = {
  users: { 'admin123': 'password123' }, // Replace with your desired username and password
  challenge: true, // This will prompt for authentication
};

// Add basic authentication to the endpoint
app.use('/odds/:track/:time', basicAuth(basicAuthConfig));

/* Compute URL from endpoint params
   'https://www.oddschecker.com/horse-racing/gowran-park/14:05/winner'
                                         -> /gowran-park/14:05
               -> http://localhost:3000/odds/gowran-park/14:05
*/
// @ts-ignore
app.get('/odds/:track/:time', (req, res) => {
  try {
    scrapePage(`https://www.oddschecker.com/horse-racing/${ req.params.track }/${ req.params.time }`).then(r => res.send((r)));
  } catch (e) {
    res.status(500).json({ error: "An error occurred while fetching odds data." });
  }
});

app.listen(3000, () => console.log('Listening on port 3000'));

let scrapePage = async (url: string) => {
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    const URL = url;
    await page.setViewport({
      width: 1280, height: 800,
      deviceScaleFactor: 1
    });
    await page.goto(URL);

    await page.waitForSelector('.diff-row.evTabRow.bc'); // Will time out after 30secs if not found. Check if URL is correct.

    const scrapedOdds = await page.evaluate(async () => {

      class HorseNameAndOdds {
        horseName: string = "";
        horseOdds: string = "";
      }

      const nameAndOddsRow = document.querySelectorAll('.diff-row.evTabRow.bc');
      const res: HorseNameAndOdds[] = [];

      for (let i = 0; i < nameAndOddsRow.length; i++) {

        const horseNameSel = nameAndOddsRow[i].querySelector('.popup.selTxt ');
        const horseOddsSel = nameAndOddsRow[i].querySelectorAll('.bc,.np')[0]; // bc is for Pre Match Odds, np is for Post Match Historic Odds
        // ToDo: Iterate for all providers Odds ( 0: B365, 1: SkyBet, 2: PaddyPower, 3: WilliamHill etc)
        const horseNameAndOdds = new HorseNameAndOdds()
        // @ts-ignore
        horseNameAndOdds.horseName = horseNameSel?.innerText || ''
        // @ts-ignore
        horseNameAndOdds.horseOdds = horseOddsSel?.innerText || ''
        // @ts-ignore
        res.push(horseNameAndOdds);
      }

      return res;
    });
    
    await browser.close()
    return scrapedOdds
    
  } catch (e) {
    console.log(e);
    throw e;
  }
};
