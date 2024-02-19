import { extractUTCTime, fetcher, formatDate, setDefaultSearchParams } from "@/lib/utils";
import React from "react";
import { GrCircleInformation } from "react-icons/gr";
import { GET_CAR } from "@/links";
import { CarAvailabilityType } from "@/types";
import CarDescription from "./car-description";
import InfoAnimator from "./info-animator";
import { Button } from "../ui/button";
import Link from "next/link";

type Props = {
  params: { carSlug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const CarAvailability = async ({ searchParams, params }: Props) => {




  setDefaultSearchParams(searchParams);

  const urlParams = new URLSearchParams();

  Object.entries(searchParams).forEach(([key, value]) => {
    if (typeof value === "string") {
      urlParams.append(key, value);
    } else if (Array.isArray(value)) {
      value.forEach((item) => urlParams.append(key, item));
    }
  });

  const {
    availability: { dropOffLocations, isAvailable, message, pickupLocations },
    deliveryFee,
    deposit,
    duration,
    endDate,
    kmIncluded,
    location,
    price,
    startDate,
  } = await fetcher<{ availability: CarAvailabilityType }>(
    GET_CAR + "/" + params.carSlug + `/check?${urlParams}`
  ).then((data) => data.availability);


  const availabilityStart = new Date(startDate);
  const availabilityEnd = new Date(endDate);

  const startTime = extractUTCTime(availabilityStart);
  const endTime = extractUTCTime(availabilityEnd);

  return (

    <div className="lg:col-span-2 order-1 lg:order-2 ">
      <article className="flex gap-3 flex-col">
        <CarDescription title={`Location: ${location}`}>
          <div className="flex items-center justify-between text-sm sm:text-base">
            <div className="flex flex-col gap-1 items-center font-medium">
              <span>
                {" "}
                {formatDate(availabilityStart, "en-GB", {
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
                {formatDate(availabilityEnd, "en-GB", {
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
          <div className="flex items-center justify-between pb-3 border-b">
            <span className="text-muted-foreground">km Included</span>
            <span className=" font-medium capitalize">{kmIncluded}</span>
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
              <GrCircleInformation className="w-5 h-5" />
            </div>

            {pickupLocations && dropOffLocations && (
              <div className="mt-2">
                <p className="">Pick-up locations: {pickupLocations}</p>
                <p className="">Drop-off locations: {dropOffLocations}</p>
              </div>
            )}
          </div>
        </InfoAnimator>
      )}
    </div>
  );
};

export default CarAvailability;
