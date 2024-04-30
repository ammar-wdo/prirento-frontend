import { fetcher } from "@/lib/utils";
import qs from "query-string";
import { CarPublicType } from "@/types";
import React, { Suspense } from "react";
import { GET_CARS } from "@/links";
import CarByTypeCard from "../(cars type feed)/car-by-type-card";
import NoResult from "../no-result";
import Scroller from "../scroller";
import ErrorComponent from "../error-component";
import { Button } from "../ui/button";
import Link from "next/link";
import { Skeleton } from "../ui/skeleton";
import RatingComponent from "../(cars type feed)/rating-component";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const CarsFeed = async ({ searchParams }: Props) => {
  const url = qs.stringifyUrl({
    url: GET_CARS,
    query: { ...searchParams },
  });

  

  const startDate = searchParams.startDate as string;
  const endDate = searchParams.endDate as string;
  const startTime = searchParams.startTime as string;
  const endTime = searchParams.endTime as string;
  const location = searchParams.location as string;
  const dropOffLocation = searchParams.dropOffLocation as string;

  const res = await fetcher<{
    availableCars: CarPublicType[];
    notAvailableCars: CarPublicType[];
    success: boolean;
    error?: string;
  }>(url);

  const availableCars = res.availableCars;
  const notAvailableCars = res.notAvailableCars;
  if (!res.success)
    return (
      <div className="flex flex-col items-center gap-3">
        <ErrorComponent description={res.error!} />
        <Button>
          <Link href={`/search`}>Refresh</Link>
        </Button>
      </div>
    );

  if (!availableCars.length && !notAvailableCars.length) return <NoResult />;
  return (
    <>
      <Scroller />
      <div className=" grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 ">
        {availableCars.map((car, i) => (
          <CarByTypeCard
            car={car}
            border={true}
            key={car.id}
            startDate={startDate}
            endDate={endDate}
            startTime={startTime}
            endTime={endTime}
            pickupLocation={location}
            dropOffLocation={dropOffLocation}
            toLink
          >
         
              <RatingComponent carSlug={car.slug} />
        
          </CarByTypeCard>
        ))}
        {notAvailableCars.map((car, i) => (
          <div
            className=" grayscale-[15]  h-full self-stretch opacity-60 "
            key={car.id}
          >
            <CarByTypeCard
              border={true}
              notAvailable={true}
              car={car}
              startDate={startDate}
              endDate={endDate}
              startTime={startTime}
              endTime={endTime}
              pickupLocation={location}
              dropOffLocation={dropOffLocation}
            >
          
                <RatingComponent carSlug={car.slug} />
         
            </CarByTypeCard>
          </div>
        ))}
      </div>
    </>
  );
};

export default CarsFeed;
