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

   * `--refresh {number}` Refresh the display in a certain time interval in hours.
     Defaults to false (do not refresh)
      * NOTE: the data is really only updated once per day, so there's really no need to
        set a refresh
   * `--clear` If set, clear the console before displaying. Always true if refresh is set.

## Output

```bash
  _   _  __   __     ____    ___   __     __  ___   ____      _    ___
 | \ | | \ \ / /    / ___|  / _ \  \ \   / / |_ _| |  _ \    / |  / _ \
 |  \| |  \ V /    | |     | | | |  \ \ / /   | |  | | | |   | | | (_) |
 | |\  |   | |     | |___  | |_| |   \ V /    | |  | |_| |   | |  \__, |
 |_| \_|   |_|      \____|  \___/     \_/    |___| |____/    |_|    /_/

Total Cases: 142

BY COUNTY
----------------------------------------------------------------------------------------------------
┌────────────────────┬───────┐
│ County             │ Cases │
├────────────────────┼───────┤
│ Westchester County │ 98    │
├────────────────────┼───────┤
│ Nassau County      │ 17    │
├────────────────────┼───────┤
│ Rockland County    │ 4     │
├────────────────────┼───────┤
│ Saratoga County    │ 2     │
├────────────────────┼───────┤
│ Suffolk County     │ 1     │
├────────────────────┼───────┤
│ Ulster County      │ 1     │
├────────────────────┼───────┤
│ New York City      │ 19    │
└────────────────────┴───────┘
```
