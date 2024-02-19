import { formatDate } from "@/lib/utils";
import React from "react";
import CarDescription from "./car-description";
import { Button } from "../ui/button";
import Link from "next/link";
import { GrCircleInformation } from "react-icons/gr";
import InfoAnimator from "./info-animator";

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
  price: number;
  deposit: number;
  deliveryFee: number | null;
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
  price,
  deposit,
  deliveryFee,
}: Props) => {
  return (
    <div className="lg:col-span-2 order-1 lg:order-2 ">
      <article className="flex gap-3 flex-col">
        <CarDescription title={`Location: ${location}`}>
          <div className="flex items-center justify-between text-sm sm:text-base">
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

        {/* Info */}
        <div className="flex flex-col gap-3 mt-6 text-sm">
          <div className="flex items-center justify-between  pb-3 border-b">
            <span className="text-muted-foreground">Rental Price</span>
            <span className=" font-medium capitalize">{price} AED</span>
          </div>
          <div className="flex items-center justify-between pb-3 border-b">
            <span className="text-muted-foreground">Deposit Fee</span>
            <span className=" font-medium capitalize">{deposit} AED</span>
          </div>
          {deliveryFee && (
            <div className="flex items-center justify-between pb-3 border-b">
              <span className="text-muted-foreground">Delivery Fee</span>
              <span className=" font-medium capitalize">{deliveryFee} AED</span>
            </div>
          )}
        </div>
      </article>

      {isAvailable && (
        <InfoAnimator>
 <Button
          className="w-full rounded-full mt-6 py-6"
          asChild
          variant={"siteMain"}
        >
          <Link href="/book">Book Now</Link>
        </Button>
        </InfoAnimator>
       
      )}

      {!isAvailable && (
        <InfoAnimator>

    
        <div className="p-4 border rounded-xl mt-12">
            <div className="flex items-center justify-between">
            <p>{message}</p>
            <GrCircleInformation className="w-5 h-5"/>
            </div>
       
          {pickupLocations && dropOffLocations && (
            <div className="mt-2">
          
              <p className="">
                Pick-up locations: {pickupLocations}
              </p>
              <p className="">
                Drop-off locations: {dropOffLocations}
              </p>
            </div>
          )}
        </div>
        </InfoAnimator>
      )}
    </div>
  );
};

export default CarAvailability;
