# OddsCheckerScraper
Odds Checker Scraper

1. Install dependencies using `npm i` (This should create the `./node_modules` folder and install dependencies).\
   Then run code using `./start.sh` (This should create the `./dst` folder which will convert `index.ts` to `index.js`)\
![image](https://github.com/AbishakeSrithar/OddsCheckerScraper/assets/67220345/1c4e1663-4112-4772-8919-460be298d10a)

3. Select the fixture you want to scrape on https://www.oddschecker.com/horse-racing \
(e.g. \
`https://www.oddschecker.com/horse-racing/newmarket/16:15/winner`,\
`https://www.oddschecker.com/horse-racing/2023-10-01-epsom-downs/16:00/winner`)

Page with Horse Racing fixtures, listed by track and time with tabs for different days.
![image](https://github.com/AbishakeSrithar/OddsCheckerScraper/assets/67220345/9b705211-942f-480c-ab83-20ef6b9acc97)\
\
Page for specific chosen fixture.
![image](https://github.com/AbishakeSrithar/OddsCheckerScraper/assets/67220345/a2f1cdd3-1a43-4076-a9c6-bbf499ddb297)\
\
4. Extract the url component between `horse-racing/` and `/winner` of the fixture url, this contains the date (only if event is the next day or further in the future), track and time.\
(e.g. \
`newmarket/16:15`,\
`2023-10-01-epsom-downs/16:00`)\
\
5. Append as params to our endpoint `http://localhost:3000/odds/.../...` and hit enter\
(e.g. \
`http://localhost:3000/odds/newmarket/16:15`,\
`http://localhost:3000/odds/2023-10-01-epsom-downs/16:00`)\
\
This will load up a variant of Chrome, load the fixture url and scrape the odds before closing.\
![image](https://github.com/AbishakeSrithar/OddsCheckerScraper/assets/67220345/67001313-8f88-4518-a8d0-1c83698f8b02)\
\
6. Navigate back to the browser you used to access the `http://localhost:3000/odds/.../...` endpoint.\
![image](https://github.com/AbishakeSrithar/OddsCheckerScraper/assets/67220345/b123f4f9-c016-44b9-9a9d-78d8707f5c98)\
\
That should have a JSON of the odds for B365 as seen on OddsChecker!



