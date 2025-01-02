import { type ClassValue, clsx } from "clsx";
    import { twMerge } from "tailwind-merge";
    import { format, formatDistanceToNow } from 'date-fns';

    export function cn(...inputs: ClassValue[]) {
      return twMerge(clsx(inputs));
    }

    export function calculateReadingTime(text: string | undefined | null): number {
      if (!text) return 1; // Default to 1 minute if no text
      const wordsPerMinute = 200;
      const words = text.trim().split(/\s+/).length;
      return Math.ceil(words / wordsPerMinute);
    }

    export function formatRelativeTime(dateString: string | null | undefined): string {
      if (!dateString) return 'Unknown';
      try {
        const date = new Date(dateString);
        return formatDistanceToNow(date, { addSuffix: true });
      } catch (error) {
        console.error("Error formatting relative time:", error);
        return 'Unknown';
      }
    }
