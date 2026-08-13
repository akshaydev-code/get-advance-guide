import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

export interface AuthTokenPayload {
  userId: string;
  email: string;
  role: "student" | "mentor";
}

function getJWTSecret(): string {
  if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in .env.local");
  }

  return JWT_SECRET;
}

export function createAuthToken(payload: AuthTokenPayload) {
  return jwt.sign(payload, getJWTSecret(), {
    expiresIn: "7d",
  });
}

export function verifyAuthToken(token: string) {
  try {
    return jwt.verify(token, getJWTSecret()) as AuthTokenPayload;
  } catch {
    return null;
  }
}