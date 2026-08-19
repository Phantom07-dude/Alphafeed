type Entry={expires:number;value:any}; const cache=new Map<string,Entry>(); const MAX=500;
export function getCached<T>(key:string):T|undefined{const e=cache.get(key); if(!e)return; if(e.expires<Date.now()){cache.delete(key);return;} return e.value as T;}
export function setCached(key:string,value:any,ttlMs=30000){if(cache.size>=MAX&&!cache.has(key)){const first=cache.keys().next().value;if(first)cache.delete(first);}cache.set(key,{value,expires:Date.now()+ttlMs});}
