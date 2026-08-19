# AlphaFeed — On-chain Intelligence Edition

Full-stack crypto intelligence dashboard built with Next.js 14, TypeScript, Tailwind CSS and server-side route handlers.

## What changed in this edition

- Real ERC-20 holder count and holder distribution through Etherscan API V2.
- Top-holder concentration (top 10 / top 20).
- Transparent whale definition: a sampled holder with at least 1% of reported total supply. This is a heuristic, not a claim about identity or intent.
- Recent token transfers involving sampled whales.
- Buy/sell classification only when the transfer counterparty matches a DexScreener liquidity-pair address supplied to the server. Otherwise activity is labelled `transfer`.
- Explainable Alpha Score from market momentum, market activity, holder dispersion and sampled whale flow.
- AI now receives provider facts only and returns schema-validated JSON. Unsupported catalysts should be stated as unknown rather than invented.
- Per-route process-local rate limits.
- Upstream request timeouts.
- Bounded in-process cache.
- Security headers / CSP.
- Search cancellation to prevent stale results winning races.
- Watchlist capped at 100 entries.

## Data integrity

AlphaFeed does not fabricate holder, whale, market or news values. If a provider does not return a field, the UI shows `—` or an explicit unavailable state.

The Etherscan holder-list endpoint is a PRO endpoint on Etherscan's current API documentation, so holder analytics require an API plan that includes it. Etherscan documents a 1,000-record maximum for Free-tier affected endpoints from July 1, 2026; AlphaFeed requests only the first 100 holders for its current concentration sample.

Whale activity is **sampled transfer activity**, not a complete order-flow reconstruction. ERC-20 transfers alone do not prove a market buy or sell; AlphaFeed only labels buy/sell when a sampled transfer is between a whale and a known DexScreener pair address.

## Environment

```text
DEXSCREENER_API_URL=https://api.dexscreener.com
ETHERSCAN_API_KEY=
ETHERSCAN_CHAIN_ID=1
CRYPTOPANIC_API_KEY=
OPENAI_API_KEY=
OPENAI_MODEL=gpt-5-mini
ALLOW_DEMO_DATA=true
```

`ETHERSCAN_CHAIN_ID` is the fallback chain. AlphaFeed also maps common DexScreener chain names such as `ethereum`, `base`, `arbitrum`, `optimism`, `polygon`, `bsc`, `avalanche`, `linea` and `monad` to Etherscan V2 chain IDs.

## Run

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

Production build:

```bash
npm run build
npm start
```

## Production hardening still recommended

The included rate limiter and cache are process-local. For a multi-instance deployment, replace them with Redis/Upstash or equivalent shared infrastructure. Add authentication, user quotas, durable watchlists, observability, structured logs, background indexing and alert workers before opening the service to large public traffic.

## Provider references

Etherscan API V2 exposes token holder counts/lists, token supply and ERC-20 transfer endpoints. DexScreener supplies token/pair discovery and pair addresses.
