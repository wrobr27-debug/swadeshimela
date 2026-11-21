import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isValidUrl(url: string): boolean {
  if (!url || url === "#" || url === "") return false;
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}
