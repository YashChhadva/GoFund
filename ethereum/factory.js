import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

// console.log("this is the campaignfaory",JSON.parse(CampaignFactory));
const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory).abi,
  '0x8362A5BB1A49Ee297776E86b1a171C42DD8455DA'
);

export default instance;