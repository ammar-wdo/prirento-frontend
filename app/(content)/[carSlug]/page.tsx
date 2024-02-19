import SearchBanner from "@/components/(banner)/search-banner";
import CarAvailability from "@/components/(car)/car-availability";
import CarFeed from "@/components/(car)/car-feed";
import SearchComponentServerWrapper from "@/components/(search-component)/seatch-component-server-wrapper";
import ErrorComponent from "@/components/error-component";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {

  fetcher,

  setDefaultSearchParams,
} from "@/lib/utils";
import { GET_CAR } from "@/links";
import { SingleCarType } from "@/types";
import Link from "next/link";
import React, { Suspense } from "react";

type Props = {
  params: { carSlug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const page = async ({ params, searchParams }: Props) => {
  setDefaultSearchParams(searchParams);


  const res = await fetcher<{
    car: SingleCarType;
    success: boolean;
    error?: string;
  }>(GET_CAR + "/" + params.carSlug);

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

  return (
    <div>
      <SearchBanner carName={car.carName} />

      <section className="min-h-[800px] container pb-24">
        {/* Search component */}
        <div className="-mt-16">
          <SearchComponentServerWrapper
          label="Check"
            searchParams={searchParams}
            urlVar={params.carSlug}
          />
        </div>

        <div className="mt-24  grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Car info */}
          <div className="lg:col-span-3 lg:order-1 order-2">
            <CarFeed car={car} />
          </div>

          {/* Car availability */}
          <Suspense
            key={`${searchParams.location} ${searchParams.dropOffLocation} ${searchParams.startDate} ${searchParams.endDate} ${searchParams.startTime} ${searchParams.endTime}`}
            fallback={
              <Skeleton className="lg:col-span-2 order-1 lg:order-2 aspect-square" />
            }
          >
            <CarAvailability params={params} searchParams={searchParams} />
          </Suspense>
        </div>
      </section>
    </div>
  );
};

export default page;
