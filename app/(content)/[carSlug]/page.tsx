import SearchBanner from "@/components/(banner)/search-banner";
import CarFeed from "@/components/(car)/car-feed";
import SearchComponentServerWrapper from "@/components/(search-component)/seatch-component-server-wrapper";
import { fetcher, formatDate, setDefaultSearchParams } from "@/lib/utils";
import { GET_CAR } from "@/links";
import { SingleCarType } from "@/types";
import React from "react";

type Props = {
  params: { carSlug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const page = async ({ params, searchParams }: Props) => {
  setDefaultSearchParams(searchParams);

  const urlParams = new URLSearchParams();

  Object.entries(searchParams).forEach(([key, value]) => {
    if (typeof value === "string") {
      urlParams.append(key, value);
    } else if (Array.isArray(value)) {
      value.forEach((item) => urlParams.append(key, item));
    }
  });

  const res = await fetcher<{
    car: SingleCarType;
    success: boolean;
    error?: string;
  }>(GET_CAR + "/" + params.carSlug + `?${urlParams}`);

  if (!res.success)
    return (
      <div className="min-h-[900px] flex items-center justify-center">
        <div className="bg-rose-500/20 border border-rose-500 capitalize min-w-[300px] p-8 rounded-xl">
          {res.error}
        </div>
      </div>
    );

  const car = res.car;

  const startDate = new Date(car.startDate);
  const endDate = new Date(car.endDate);

  return (
    <div>
      <SearchBanner carName={car.carName} />

      <section className="min-h-[800px] container pb-24">
        {/* Search component */}
        <div className="-mt-16">
          <SearchComponentServerWrapper
            searchParams={searchParams}
            urlVar={params.carSlug}
          />
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Car info */}
          <div className="lg:col-span-3">
            <CarFeed car={car} />
          </div>

          {/* Car availability */}
          <div className="lg:col-span-2">
            <article className="flex gap-3 flex-col">
              <span>
                {car.availability.isAvailable ? "Available" : "Not available"}
              </span>
              <span>{car.availability.message}</span>
              <span>{car.duration}</span>
              <span>{car.location}</span>
              <span>
                {formatDate(startDate, "en-GB", {
                  timeZone: "UTC",
                  weekday: "short", // "Sat"
                  day: "2-digit", // "17"
                  month: "short", // "Feb"
                  year: "numeric", // "2024"
                })}
              </span>
              <span>
                {formatDate(endDate, "en-GB", {
                  timeZone: "UTC",
                  weekday: "short", // "Sat"
                  day: "2-digit", // "17"
                  month: "short", // "Feb"
                  year: "numeric", // "2024"
                })}
              </span>
              <span>
                {car.availability.pickupLocations &&
                  car.availability.pickupLocations}
              </span>
              <span>
                {car.availability.dropOffLocations &&
                  car.availability.dropOffLocations}
              </span>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
