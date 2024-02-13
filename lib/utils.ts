import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import axios from "axios";

import qs from 'query-string'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const fetcher = async <T>(url: string): Promise<T> => {
  try {
    const response = await axios.get<T>(url, {
      headers: {
        "api-Secret": process.env.API_SECRET,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Something wnt wrong");
  }
};

export function convertDateToISOString(date: Date | undefined) {
  if (!date) {
    return undefined;
  }

  // Manually construct the ISO string in YYYY-MM-DD format
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // getMonth() returns 0-11
  const day = date.getDate();

  // Pad single digit month and day with leading zeros
  const paddedMonth = month.toString().padStart(2, "0");
  const paddedDay = day.toString().padStart(2, "0");

  return `${year}-${paddedMonth}-${paddedDay}`;
}

export function generateHourlyTimes() {
  const times = [];
  for (let hour = 0; hour < 24; hour++) {
    // Pad the hour with a leading zero if it's less than 10
    const formattedHour = hour.toString().padStart(2, "0");
    times.push(`${formattedHour}:00`);
  }
  return times;
}

export const pushSearchParams = (
  params: { [key: string]: string | string[] | undefined },
  url:string,
  searchParams: {[ket:string]:string | string[] | undefined}
) => {

  let currentQuery = {...searchParams}


  
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) {
      currentQuery[key] = Array.isArray(value) ? value.join(',') : value;
    } else {
      // Here, delete the key only if the new value is explicitly undefined
      // The check for existence is implicit in the delete operation
      delete currentQuery[key];
    }
  })
  const returnedUrl = qs.stringifyUrl({
    url: url,
    query: currentQuery
  }, { skipNull: true });

return returnedUrl
};
