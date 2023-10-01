# OddsCheckerScraper
**MacOS** instructions (No support for Windows)

1. Clone repo and install dependencies using `npm i` (This should create the `./node_modules` folder).
2. Whilst in the directory with the `start.sh` file, go to the terminal and give it permission by entering the command `chmod +x ./start.sh`.
3. Then run the project using the `./start.sh` command (This should create the `./dst` folder which will convert `index.ts` to `index.js`)

4. Select the fixture you want to scrape on https://www.oddschecker.com/horse-racing \
(e.g. \
`https://www.oddschecker.com/horse-racing/newmarket/16:15/winner`,\
`https://www.oddschecker.com/horse-racing/2023-10-01-epsom-downs/16:00/winner`)

Page with Horse Racing fixtures, listed by track and time with tabs for different days.
![image](https://github.com/AbishakeSrithar/OddsCheckerScraper/assets/67220345/9b705211-942f-480c-ab83-20ef6b9acc97)\
\
Page for specific chosen fixture.
![image](https://github.com/AbishakeSrithar/OddsCheckerScraper/assets/67220345/a2f1cdd3-1a43-4076-a9c6-bbf499ddb297)\
\
4. Append eventUrl to our endpoint `http://localhost:3000/odds?eventUrl={eventUrl}` and hit enter.\
(e.g. \
`http://localhost:3000/odds?eventUrl=https://www.oddschecker.com/horse-racing/newmarket/16:15/winner`,\
`http://localhost:3000/odds?eventUrl=https://www.oddschecker.com/horse-racing/2023-10-01-epsom-downs/16:00/winner`)

Log in using these credentials if prompted (should only need this on first attempt):\
**User:** `admin123`\
**Password:** `password123`\
\
This will load up a variant of Chrome, load the fixture url and scrape the odds for the B365 column before closing.\
![image](https://github.com/AbishakeSrithar/OddsCheckerScraper/assets/67220345/67001313-8f88-4518-a8d0-1c83698f8b02)\
\
6. Navigate back to the browser you used to access the `http://localhost:3000/odds?eventUrl={eventUrl}` endpoint.\
![image](https://github.com/AbishakeSrithar/OddsCheckerScraper/assets/67220345/e401b1ce-ea9f-4c4e-a6c8-4b3c49afff4a)\
\
That should have a JSON of the odds for B365 as seen on OddsChecker!

**TODO**:\
Figure out why it doesn't work on Windows.\
Add support for other providers.\
Improve Authentication.

