import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateString: string | undefined | null): string {
  if (!dateString) return 'Unknown date'; // Handle null or undefined
  const date = new Date(dateString); // Convert to Date object
  if (isNaN(date.getTime())) return 'Invalid date'; // Handle invalid dates
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }); // Format the date
}

export function parseServerActionResponse<T>(response: T) {
  return JSON.parse(JSON.stringify(response))
}
