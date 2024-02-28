import { OpeningTimes } from "@/types";
import React from "react";

type Props = {
  openeingTimes: OpeningTimes;
};

const CompanyScheduleComponent = ({ openeingTimes }: Props) => {
  return (
    <div className=" rounded-xl h-fit p-8 flex flex-col w-full gap-[27px] relative">
        
      {Object.entries(openeingTimes).map(([key, value],index) => (
        <div key={index} className="grid grid-cols-2 gap-12 border-b pb-1">
          <p className="capitalize font-medium text-lg">{key}</p>{" "}
          {!!value.closed ? (
            <p className="">OFF</p>
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
