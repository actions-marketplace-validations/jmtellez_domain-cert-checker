const core = require('@actions/core');
const sslChecker = require("ssl-checker");

// Get inputs
const hostname = core.getInput('hostname');
const port = core.getInput('port');

async function getDetails() {
  details = await sslChecker(hostname, { method: "GET", port: port });
  
  // log details
  console.log(details);
  // set output
  core.setOutput('details', details);
}

// call getDetails
getDetails(hostname);
