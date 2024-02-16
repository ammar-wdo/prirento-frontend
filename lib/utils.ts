import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import axios from "axios";

import qs from "query-string";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const fetcher = async <T>(url: string): Promise<T> => {
 
    const response = await axios.get<T>(url, {
      headers: {
        "api-Secret": process.env.API_SECRET,
      },
    });


    return response.data;
  }

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
  for (let hour = 0; hour <= 24; hour++) {
    // Pad the hour with a leading zero if it's less than 10
    const formattedHour = hour.toString().padStart(2, "0");
    times.push(`${formattedHour}:00`);
  }
  return times;
}

export const pushSearchParams = (
  params: { [key: string]: string | string[] | undefined },
  url: string,
  searchParams: { [ket: string]: string | string[] | undefined }
) => {
  let currentQuery = { ...searchParams };

  Object.entries(params).forEach(([key, value]) => {
    if (Array.isArray(value) ? value.length > 0 : value !== undefined) {
      currentQuery[key] = Array.isArray(value) ? value : value;
    } else {
      delete currentQuery[key];
    }
  });

  console.log("current query after", currentQuery);
  const returnedUrl = qs.stringifyUrl(
    {
      url: url,
      query: currentQuery,
    },
    { skipNull: true }
  );

  return returnedUrl;
};

export function setDefaultSearchParams(searchParams: {
  [key: string]: string | string[] | undefined;
}) {
  // Set default location
  if (!searchParams.location) {
    searchParams.location = "dubai";
  }

  // Set default startDate to today
  if (!searchParams.startDate) {
    const date = new Date();
    const startDate = convertDateToISOString(date);
    searchParams.startDate = startDate;
  }

  // Set default endDate to tomorrow
  if (!searchParams.endDate) {
    const date = new Date();
    date.setDate(date.getDate() + 1); // Add one day
    const endDate = convertDateToISOString(date);
    searchParams.endDate = endDate;
  }

  // Set default startTime to the next whole hour
  if (!searchParams.startTime) {
    const date = new Date();
    let hours = date.getHours() + 1;
    const minutes = date.getMinutes();

    if (minutes > 0) {
      hours += 1;
    }
    if (hours > 24) {
      hours = 24;
    }

    // Handle hour overflow
    if (hours >= 24) {
      hours = 0; // Reset to 00 for midnight
    }

    const formattedHours = hours.toString().padStart(2, "0");
    searchParams.startTime = `${formattedHours}:00`;
  }

  // Set default endTime
  if (!searchParams.endTime) {
    searchParams.endTime = "23:00";
  }
}
