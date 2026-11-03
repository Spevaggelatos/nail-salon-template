import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number | string): string {
  if (typeof price === "number") {
    return `${price}€`;
  }
  return price.includes("€") ? price : `${price}€`;
}

