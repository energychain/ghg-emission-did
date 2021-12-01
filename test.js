const ghgdid = require("./lib.js");

const app = async function() {
  let did = new ghgdid({
    co2eq:10
  });
  console.log(await did.getJWT());
}

app();
