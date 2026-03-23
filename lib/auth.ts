const TOKEN_KEY = "printtie_tokens";

type Tokens = {
  accessToken: string;
  refreshToken: string;
};

// Save tokens to localStorage (if available) for client usage
export function saveTokens(accessToken: string, refreshToken: string) {
  if (typeof window === "undefined") return;
  try {
    const payload: Tokens = { accessToken, refreshToken };
    localStorage.setItem(TOKEN_KEY, JSON.stringify(payload));
  } catch (e) {
    // ignore storage errors
  }
}

export function getTokens(): Tokens | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(TOKEN_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as Tokens;
  } catch (e) {
    return null;
  }
}

export function clearTokens() {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(TOKEN_KEY);
  } catch (e) {
    // ignore
  }
}

// The server API routes expect several helper functions from this module:
// - signAccessToken
// - signRefreshToken
// - verifyToken
// - getAuthUser
// Provide minimal implementations compatible with the server usage.

import { createSecretKey } from 'crypto';
import { jwtVerify, SignJWT, UnsecuredJWT, JWTPayload } from 'jose';

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || 'dev_access_secret';
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET || 'dev_refresh_secret';
const ACCESS_TOKEN_EXP = '15m';
const REFRESH_TOKEN_EXP = '7d';

// The routes call signAccessToken/signRefreshToken with a user id string.
// jose SignJWT expects a plain object payload. Wrap the id into an object { sub: id }.
export async function signAccessToken(userId: string) {
  const alg = 'HS256';
  const secret = createSecretKey(Buffer.from(ACCESS_TOKEN_SECRET));
  const payload = { sub: String(userId) };
  const token = await new SignJWT(payload)
    .setProtectedHeader({ alg })
    .setExpirationTime(ACCESS_TOKEN_EXP)
    .sign(secret as any);
  return token;
}

export async function signRefreshToken(userId: string) {
  const alg = 'HS256';
  const secret = createSecretKey(Buffer.from(REFRESH_TOKEN_SECRET));
  const payload = { sub: String(userId) };
  const token = await new SignJWT(payload)
    .setProtectedHeader({ alg })
    .setExpirationTime(REFRESH_TOKEN_EXP)
    .sign(secret as any);
  return token;
}

// verifyToken: verify a token with either access or refresh secret depending on type
export async function verifyToken(token: string, type: 'access' | 'refresh' = 'access') {
  const secretStr = type === 'access' ? ACCESS_TOKEN_SECRET : REFRESH_TOKEN_SECRET;
  const secret = createSecretKey(Buffer.from(secretStr));
  try {
    const { payload } = await jwtVerify(token, secret as any);
    // normalize payload to include sub as string if present
    const normalized: JWTPayload = { ...payload };
    return { valid: true, payload: normalized } as const;
  } catch (err) {
    return { valid: false, error: (err as Error).message } as const;
  }
}

// getAuthUser: helper to extract user info from Authorization header (Bearer token)
// This function is used in server route app/api/auth/me/route.ts which runs server-side.
// It accepts a Request object and returns the decoded payload or null.
export async function getAuthUser(req: Request) {
  try {
    const auth = req.headers.get('authorization') || '';
    if (!auth.startsWith('Bearer ')) return null;
    const token = auth.replace('Bearer ', '');
    const res = await verifyToken(token, 'access');
    if (!res.valid) return null;
    return res.payload;
  } catch (e) {
    return null;
  }
}
