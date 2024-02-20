"use client";

import { extractUTCTime, formatDate } from "@/lib/utils";
import Image from "next/image";

type Props = {
  carImage: string;
  startDate: Date;
  endDate: Date;
  carName: string;
};

const ViewSection = ({ carImage, startDate, endDate, carName }: Props) => {
  const startDateValue = new Date(startDate);
  const endDateValue = new Date(endDate);

  const startTime = extractUTCTime(startDateValue);
  const endTime = extractUTCTime(endDateValue);
  return (
    <article className="border rounded-xl p-6 pb-8 self-start sticky top-2">
      <h3 className="text-3xl font-bold pb-4 border-b">Booking Summary</h3>
      <div className="mt-4 flex  gap-4">
        <div className="w-36 aspect-video relative rounded-xl overflow-hidden">
          <Image
            src={carImage}
            fill
            className="object-cover  "
            alt="car image"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium capitalize">{carName}</h3>
          <p className="text-muted-foreground mt-2">
            Pick-up date:{" "}
            <span>
              on{" "}
              {formatDate(startDateValue, "en-GB", {
                timeZone: "UTC",
                weekday: "short", // "Sat"
                day: "2-digit", // "17"
                month: "short", // "Feb"
                year: "numeric", // "2024"
              })}
              , at{" "}
            </span>
            <span>{startTime}</span>
          </p>
          <p className="text-muted-foreground">
            Drop-off date:{" "}
            <span>
              on{" "}
              {formatDate(endDateValue, "en-GB", {
                timeZone: "UTC",
                weekday: "short", // "Sat"
                day: "2-digit", // "17"
                month: "short", // "Feb"
                year: "numeric", // "2024"
              })}
              , at{" "}
            </span>
            <span>{endTime}</span>
          </p>
        </div>
      </div>
    </article>
  );
};

export default ViewSection;
