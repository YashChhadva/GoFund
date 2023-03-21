const path = require("path");
const solc = require("solc");
const fs = require("fs-extra");

const buildPath = path.resolve(__dirname, "build");
fs.removeSync(buildPath);

const campaignPath = path.resolve(__dirname, "contracts", "Campaign.sol");
const source = fs.readFileSync(campaignPath, "utf8");

const input = {
  language: 'Solidity',
  sources: {
    'Campaign.sol': {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['*'],
      },
    },
  },
};

// module.exports = JSON.parse(solc.compile(JSON.stringify(input))).contracts[
//   'Inbox.sol'
// ].Inbox;

const output = JSON.parse(solc.compile(JSON.stringify(input))).contracts[
  'Campaign.sol'
];
// console.log("this is the log output");
// console.log(output.CampaignFactory);

fs.ensureDirSync(buildPath);

fs.outputJsonSync(
  path.resolve(buildPath, "Campaign.json"),
  JSON.stringify(output.Campaign)
);

fs.outputJsonSync(
  path.resolve(buildPath, "CampaignFactory.json"),
  JSON.stringify(output.CampaignFactory)
);

