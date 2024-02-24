import {
  extractUTCTime,
  fetcher,
  formatDate,
  searchParamsGenerate,
  setDefaultSearchParams,
} from "@/lib/utils";
import React from "react";
import { GrCircleInformation } from "react-icons/gr";
import { GET_CAR } from "@/links";
import { CarAvailabilityType } from "@/types";
import CarDescription from "./car-description";
import InfoAnimator from "./info-animator";
import { Button } from "../ui/button";
import Link from "next/link";
import Scroller from "../scroller";
import CarInfo from "./car-info";
import ErrorComponent from "../error-component";

type Props = {
  params: { carSlug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const CarAvailability = async ({ searchParams, params }: Props) => {
  const urlParams = searchParamsGenerate(searchParams)



  const {
   data,
    success,
    error
    
  } = await fetcher<{
    data: CarAvailabilityType;
    success: boolean;
    error?: string;
  }>(GET_CAR + "/" + params.carSlug + `/check?${urlParams}`);

  if(!success)return <div className="lg:col-span-2 order-1 lg:order-2"><ErrorComponent description={error!}/></div>


  const {availability: { dropOffLocations, isAvailable, message, pickupLocations },
  deliveryFee,
  deposit,
  duration,
  endDate,
  kmIncluded,
  location,
  price,
  startDate} = data

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
          <CarInfo
            title="Rental price"
            value={price ? `${price} AED` : "N/A"}
          />
          <CarInfo title="Deposit Fee" value={`${deposit} AED`} />
         
          {deliveryFee && (
            <CarInfo title="Delivery Fee" value={`${deliveryFee} AED`} />
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
            <Link href={`/checkout/${params.carSlug}?${urlParams}`}>Book Now</Link>
          </Button>
        </InfoAnimator>
      )}

      {!isAvailable && (
        <InfoAnimator>
          <div className="p-4 border rounded-xl mt-12">
            <div className="flex items-start justify-between">
              <p>{message}</p>
              <GrCircleInformation className="w-5 h-5 shrink-0" />
            </div>

            {pickupLocations && dropOffLocations && (
              <div className="mt-3 text-xs space-y-3">
                <p className="flex items-center flex-wrap gap-1">
                  Pick-up locations:{" "}
                  {pickupLocations.split(",").map((el) => (
                    <span className="px-2 py-1 rounded-md  bg-muted" key={el}>
                      {el}
                    </span>
                  ))}
                </p>
                <p className="flex items-center flex-wrap gap-1">
                  Drop-off locations:{" "}
                  {dropOffLocations.split(",").map((el) => (
                    <span className="px-2 py-1 rounded-md  bg-muted" key={el}>
                      {el}
                    </span>
                  ))}
                </p>
              </div>
            )}
          </div>
        </InfoAnimator>
      )}
      <Scroller />
    </div>
  );
};

export default CarAvailability;
