import { NextResponse } from 'next/server';
import { getClientKey, rateLimit } from './rate-limit';

export function guard(req: Request, route: string, limit: number, windowMs = 60_000) {
  const result = rateLimit(`${route}:${getClientKey(req)}`, limit, windowMs);
  if (!result.ok) {
    const response = NextResponse.json({ error: 'Too many requests. Please try again shortly.' }, { status: 429 });
    response.headers.set('Retry-After', String(Math.ceil(windowMs / 1000)));
    return response;
  }
  return null;
}
