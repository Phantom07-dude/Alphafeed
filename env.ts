import { z } from "zod";
const schema=z.object({
  COINGECKO_API_KEY:z.string().optional(), DEXSCREENER_API_URL:z.string().url().default("https://api.dexscreener.com"),
  ETHERSCAN_API_KEY:z.string().optional(), ETHERSCAN_CHAIN_ID:z.string().regex(/^\d+$/).default("1"),
  CRYPTOPANIC_API_KEY:z.string().optional(), OPENAI_API_KEY:z.string().optional(),
  OPENAI_MODEL:z.string().default("gpt-5-mini"), ALLOW_DEMO_DATA:z.string().default("true")
});
export const env=schema.parse({
 COINGECKO_API_KEY:process.env.COINGECKO_API_KEY, DEXSCREENER_API_URL:process.env.DEXSCREENER_API_URL,
 ETHERSCAN_API_KEY:process.env.ETHERSCAN_API_KEY, ETHERSCAN_CHAIN_ID:process.env.ETHERSCAN_CHAIN_ID,
 CRYPTOPANIC_API_KEY:process.env.CRYPTOPANIC_API_KEY, OPENAI_API_KEY:process.env.OPENAI_API_KEY,
 OPENAI_MODEL:process.env.OPENAI_MODEL, ALLOW_DEMO_DATA:process.env.ALLOW_DEMO_DATA
});