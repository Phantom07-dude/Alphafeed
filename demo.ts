import {Token,NewsItem} from "./types";
const now=new Date().toISOString();
export const demoTokens:Token[]=[
{id:"bitcoin",symbol:"BTC",name:"Bitcoin",chain:"Bitcoin",price:114820,change24h:2.41,marketCap:2280000000000,volume24h:48200000000,liquidity:null,fdv:2279000000000,verified:true,source:"DEMO — not live data",updatedAt:now},
{id:"ethereum",symbol:"ETH",name:"Ethereum",chain:"Ethereum",price:4320.12,change24h:3.18,marketCap:521000000000,volume24h:27100000000,liquidity:null,fdv:521000000000,verified:true,source:"DEMO — not live data",updatedAt:now},
{id:"solana",symbol:"SOL",name:"Solana",chain:"Solana",price:241.88,change24h:6.72,marketCap:117000000000,volume24h:7800000000,liquidity:null,fdv:143000000000,verified:true,source:"DEMO — not live data",updatedAt:now},
{id:"chainlink",symbol:"LINK",name:"Chainlink",chain:"Ethereum",price:27.41,change24h:4.91,marketCap:17500000000,volume24h:820000000,liquidity:410000000,fdv:27400000000,verified:true,source:"DEMO — not live data",updatedAt:now},
{id:"ondo",symbol:"ONDO",name:"Ondo",chain:"Ethereum",price:1.24,change24h:8.62,marketCap:1930000000,volume24h:430000000,liquidity:125000000,fdv:12400000000,verified:true,source:"DEMO — not live data",updatedAt:now},
{id:"hyperliquid",symbol:"HYPE",name:"Hyperliquid",chain:"Hyperliquid",price:52.18,change24h:5.84,marketCap:17400000000,volume24h:930000000,liquidity:690000000,fdv:50100000000,verified:true,source:"DEMO — not live data",updatedAt:now}
];
export const demoNews:NewsItem[]=[
{id:"1",title:"Crypto markets extend gains as liquidity returns to majors",url:"https://www.coindesk.com/",source:"CoinDesk",publishedAt:now},
{id:"2",title:"On-chain activity accelerates across major L1 ecosystems",url:"https://cointelegraph.com/",source:"Cointelegraph",publishedAt:now},
{id:"3",title:"DeFi volumes rise as traders rotate into high-beta protocols",url:"https://www.theblock.co/",source:"The Block",publishedAt:now}
];