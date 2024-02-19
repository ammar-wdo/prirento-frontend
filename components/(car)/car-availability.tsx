import { formatDate } from "@/lib/utils";
import React from "react";
import CarDescription from "./car-description";

type Props = {
  location: string;
  startDate: Date;
  endDate: Date;
  isAvailable: boolean;
  message?: string;
  pickupLocations?: string;
  dropOffLocations?: string;
  duration: string;
  startTime: string;
  endTime: string;
};

const CarAvailability = ({
  location,
  endDate,
  isAvailable,
  startDate,
  pickupLocations,
  dropOffLocations,
  message,
  duration,
  startTime,
  endTime,
}: Props) => {
  return (
    <div className="lg:col-span-2">
      <article className="flex gap-3 flex-col">
        <CarDescription
          title={`Location: ${location.charAt(0).toUpperCase()}${location.slice(
            1
          )}`}
        >
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1 items-center font-medium">
              <span>
                {" "}
                {formatDate(startDate, "en-GB", {
                  timeZone: "UTC",
                  weekday: "short", // "Sat"
                  day: "2-digit", // "17"
                  month: "short", // "Feb"
                  year: "numeric", // "2024"
                })}
              </span>
              <span>{startTime}</span>
            </div>

            <span className="rounded-full h-12 w-12 bg-secondaryGreen flex items-center justify-center text-white font-medium">
              To
            </span>
            <div className="flex flex-col gap-1 items-center font-medium">
              <span>
                {" "}
                {formatDate(endDate, "en-GB", {
                  timeZone: "UTC",
                  weekday: "short", // "Sat"
                  day: "2-digit", // "17"
                  month: "short", // "Feb"
                  year: "numeric", // "2024"
                })}
              </span>
              <span>{endTime}</span>
            </div>
          </div>
        </CarDescription>
        <p className="font-medium text-center">Duration: {duration}</p>
      </article>
    </div>
  );
};

export default CarAvailability;
