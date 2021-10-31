const path = require("path");
const fs = require("fs");
const solc = require("solc");

const myTokenPath = path.resolve(__dirname, "contracts", "MyToken.sol");
const source = fs.readFileSync(myTokenPath, "utf8");

var input = {
  language: "Solidity",
  sources: {
    "MyToken.sol": {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      "*": {
        "*": ["*"],
      },
    },
  },
};

console.log(solc.compile(JSON.stringify(input)));

module.exports = solc.compile(JSON.stringify(input));
