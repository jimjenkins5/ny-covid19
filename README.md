# NY COVID-19 CLI Dashboard

A cli dashboard to tell you how many COVID 19 cases there are in New York state.

## How to use

Clone this project

```bash
node index.js
```

Or install globally.

```bash
npm i -g
covid-ny
```

### Options

   * `--refresh {number}` Refresh the display in a certain time interval in seconds.
     Defaults to false (do not refresh)
   * `--clear` If set, clear the console before displaying. Always true if refresh is set.
