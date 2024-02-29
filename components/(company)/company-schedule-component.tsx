import { OpeningTimes } from "@/types";
import React from "react";

export const daysOrder: Day[] = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
export type Day =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

type Props = {
  openeingTimes: OpeningTimes;
};

const CompanyScheduleComponent = ({ openeingTimes }: Props) => {
  return (
    <div className=" rounded-xl h-fit p-8 flex flex-col w-full gap-[27px] relative">
      {daysOrder.map((day) => (
        <div key={day} className="grid grid-cols-2 gap-12 border-b pb-1">
          <p className="capitalize font-medium text-lg">{day}</p>{" "}
          {!!openeingTimes[day].closed ? (
            <p className="">OFF</p>
          ) : (
            <div className="flex items-center gap-2">
              <span>{openeingTimes[day].openTime}</span>-
              <span>{openeingTimes[day].closeTime}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CompanyScheduleComponent;
