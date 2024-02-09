import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import axios from 'axios';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}





export const fetcher = async <T>(url: string): Promise<T> => {
  try {
 
    const response = await axios.get<T>(url, {
      headers: {
        'api-Secret': process.env.NEXT_PUBLIC_API_SECRET, 
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
throw new Error('Something wnt wrong')
  }
};
