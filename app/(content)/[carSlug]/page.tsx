import SearchBanner from "@/components/(banner)/search-banner";
import CarAvailability from "@/components/(car)/car-availability";
import CarFeed from "@/components/(car)/car-feed";
import SearchComponentServerWrapper from "@/components/(search-component)/seatch-component-server-wrapper";
import ErrorComponent from "@/components/error-component";
import { Button } from "@/components/ui/button";
import { extractUTCTime, fetcher, formatDate, setDefaultSearchParams } from "@/lib/utils";
import { GET_CAR } from "@/links";
import { SingleCarType } from "@/types";
import Link from "next/link";
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
      <div className="min-h-[900px] flex items-center justify-center flex-col gap-3">
        <ErrorComponent description={res.error!} />
        <Button>
          <Link href={`/${params.carSlug}`}>Refresh</Link>
        </Button>
      </div>
    );

  const car = res.car;

  const startDate = new Date(car.startDate);
  const endDate = new Date(car.endDate);

  const startTime = extractUTCTime(startDate)
  const endTime = extractUTCTime(endDate)

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
          <CarAvailability
            startDate={startDate}
            endDate={endDate}
            startTime={startTime}
            endTime={endTime}
            duration={car.duration}
            isAvailable={car.availability.isAvailable}
            location={car.location}
            dropOffLocations={car.availability.dropOffLocations}
            message={car.availability.message}
            pickupLocations={car.availability.pickupLocations}
            
          />
        </div>
      </section>
    </div>
  );
};

export default page;
