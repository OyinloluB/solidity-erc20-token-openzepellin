const path = require("path");
const fs = require("fs");
const solc = require("solc");

const myTokenPath = path.resolve(__dirname, "contracts", "MyToken.sol");
const source = fs.readFileSync(myTokenPath, "utf8");

module.exports = solc.compile(source, 1).contracts[":MyToken"];