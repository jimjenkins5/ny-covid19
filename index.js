#!/usr/bin/env node

const Table = require('cli-table3'),
      figlet = require('figlet'),
      chalk = require('chalk'),
      clear = require('clear'),
      fetch = require('node-fetch'),
      minimist = require('minimist'),
      argv = minimist(process.argv.splice(2)),
      refresh = argv.refresh || false,
      shouldClear = argv.clear || !!refresh;


async function getData() {
   const url = 'https://wrapapi.com/use/mluedke/covid-19/ny/latest?wrapAPIKey=9DWU2AcN3XbVvgKIJDOugyD0hnBOlPtf';

   return fetch(url).then(async (resp) => {
      const body = await resp.json();

      return body.data;
   });
}

async function drawData(data) {
   // Clear the old output
   if (shouldClear) {
      clear();
   }

   // Write header
   console.log(
      chalk.blueBright(
         figlet.textSync('NY COVID 19', { horizontalLayout: 'full' })
      )
   )

   console.log(chalk.redBright(`Total Cases: ${data.totalCases}`))

   console.log('');

   console.log('BY COUNTY')
   console.log(new Array(101).join('-'));

   const table = new Table({ head: ['County', 'Cases'] });

   data.byCounty.forEach((county) => {
      table.push([ county.name, county.count ]);
   });

   console.log(table.toString());
}

function run() {
   getData().then(drawData);

   if (refresh) {
      // refresh is set in hours
      setTimeout(run, refresh * 3600 * 1000);
   }
}

run();
