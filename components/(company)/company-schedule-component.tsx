import { OpeningTimes } from "@/types";
import React from "react";

type Props = {
  openeingTimes: OpeningTimes;
};

const CompanyScheduleComponent = ({ openeingTimes }: Props) => {
  return (
    <div className="border rounded-xl h-fit p-8 flex flex-col w-full gap-8">
      {Object.entries(openeingTimes).map(([key, value],index) => (
        <div key={index} className="flex justify-between">
          <p className="capitalize font-medium text-lg">{key}</p>{" "}
          {!!value.closed ? (
            <p>OFF</p>
          ) : (
            <div className="flex items-center gap-2">
              <span>{value.openTime}</span>-<span>{value.closeTime}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CompanyScheduleComponent;
