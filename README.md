# electron-printtopdf-iframe

Demo of iframes not showing up in printToPDF.

## Steps
 1. Clone this repo
 2. `npm i`
 3. `npm start`

Observe the following:
 1. The window shows 2 iframes: the first with the same origin as the loaded page, the second with a different origin. Both render correctly.
 2. The console output will have a `Wrote PDF successfully to [location]` message with the results of `printToPDF()`. The first iframe shows up in the PDF, and the second iframe is blank (unlike the rendered page).
