const sslChecker = require("ssl-checker");

async function getDetails(hostname) {
  details = await sslChecker(hostname, { method: "GET", port: 443 });
  console.log(details);
}

getDetails("github.com");
