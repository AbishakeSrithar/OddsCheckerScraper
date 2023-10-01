# OddsCheckerScraper
**MacOS**/**Windows** instructions

1. Clone repo and install dependencies using `npm i` (This should create the `./node_modules` folder).
2. Whilst in the directory with the `start.sh` file, go to the terminal and give it permission by entering the command\
   Linux/MacOS: `chmod +x ./start.sh`\
   Windows: We won't be using the `start.sh` file so can skip this step.
3. Then run the project using\
   **Linux/MacOS**: `./start.sh` command\
   **Windows**: `tsc` command to compile into `.dst/index.js` and then the `node ./dst/index.js` command to run the code.

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
5. Using Postman or your prefered API platform, set to POST and use this url: `http://localhost:3000/odds`.\
Input these credentials as Basic Auth underneath the Authorization header:\
**User:** `admin123`\
**Password:** `password123`\
![image](https://github.com/AbishakeSrithar/OddsCheckerScraper/assets/67220345/03a64950-6652-4ad1-a0f9-f6269db290db)\
\
6. Insert eventUrl into the body as a JSON and hit enter.\
(e.g. \
`{
"eventUrl": "https://www.oddschecker.com/horse-racing/newmarket/16:15/winner"
}`\
`{
"eventUrl": "https://www.oddschecker.com/horse-racing/2023-10-01-epsom-downs/16:00/winner"
}`)
\
![image](https://github.com/AbishakeSrithar/OddsCheckerScraper/assets/67220345/38e15238-0bbe-4e33-b206-f5761f670fb4)\
\
This will load up a variant of Chrome, load the event url and scrape the odds for the B365 column before closing.\
![image](https://github.com/AbishakeSrithar/OddsCheckerScraper/assets/67220345/67001313-8f88-4518-a8d0-1c83698f8b02)\
\
7. Navigate back to your preferred API platform.\
![image](https://github.com/AbishakeSrithar/OddsCheckerScraper/assets/67220345/0cb66443-07b8-4659-b524-77fb76c17849)\
\
That should have a JSON of the odds for B365 as seen on OddsChecker!

**TODO**:\
Add support for other providers.\
Improve Authentication.

