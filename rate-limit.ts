type Bucket = { started: number; count: number };
const buckets = new Map<string, Bucket>();

export function getClientKey(req: Request) {
  const forwarded = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim();
  return forwarded || req.headers.get('x-real-ip') || 'local';
}

export function rateLimit(key: string, limit: number, windowMs: number) {
  const now = Date.now();
  const current = buckets.get(key);
  if (!current || now - current.started >= windowMs) {
    buckets.set(key, { started: now, count: 1 });
    return { ok: true, remaining: Math.max(0, limit - 1) };
  }
  current.count += 1;
  return { ok: current.count <= limit, remaining: Math.max(0, limit - current.count) };
}
