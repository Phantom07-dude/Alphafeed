export type Token = {
  id:string; symbol:string; name:string; chain:string; price:number|null; change24h:number|null;
  marketCap:number|null; volume24h:number|null; liquidity:number|null; fdv:number|null;
  logo?:string; address?:string; pairAddresses?:string[]; verified:boolean; source:string; updatedAt:string;
};
export type NewsItem={id:string;title:string;url:string;source:string;publishedAt:string;summary?:string};
export type Holder = { address:string; rawBalance:string; balance:number; sharePct:number|null; isWhale:boolean; rank:number };
export type WhaleActivity = { hash:string; timestamp:string; from:string; to:string; rawValue:string; value:number|null; direction:'buy'|'sell'|'transfer'; whaleAddress:string; counterparty:string };
export type TokenIntelligence = {
  configured:boolean;
  provider?:string;
  warning?:string;
  holderCount?:number|null;
  totalSupply?:number|null;
  top10ConcentrationPct?:number|null;
  top20ConcentrationPct?:number|null;
  holders?:Holder[];
  whaleActivity?:WhaleActivity[];
  whaleBuys24h?:number;
  whaleSells24h?:number;
  netWhaleFlow?:number|null;
  alphaScore?:number|null;
  scoreBreakdown?:{label:string;score:number;max:number;reason:string}[];
  updatedAt?:string;
};
export type AIInsight={summary:string;whyTrending:string;catalysts:{bullish:string[];bearish:string[]};confidence:'low'|'medium'|'high';generatedAt:string;source:string};
