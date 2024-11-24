import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function raise(message: string): never {
  throw new Error(message);
}

export function getAppUrl() {
  const vercelEnv = process.env.VERCEL_ENV ?? "development";

  switch (vercelEnv) {
    case "production":
      return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
    case "preview":
      return `https://${process.env.VERCEL_BRANCH_URL}`;
    case "development":
    default:
      return "http://localhost:3000";
  }
}
