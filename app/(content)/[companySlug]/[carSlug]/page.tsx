import SearchBanner from "@/components/(banner)/search-banner";
import CarAvailability from "@/components/(car)/car-availability";
import CarDescription from "@/components/(car)/car-description";
import CarFeed from "@/components/(car)/car-feed";
import CarReviewsComponent from "@/components/(car)/car-reviews-component";
import SearchComponentServerWrapper from "@/components/(search-component)/seatch-component-server-wrapper";
import ErrorComponent from "@/components/error-component";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {  getCarInfo, setDefaultSearchParams } from "@/lib/utils";
import { Metadata } from "next";

import Link from "next/link";
import { notFound } from "next/navigation";
import React, { Suspense } from "react";

type Props = {
  params: { carSlug: string; companySlug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params }: Props,

): Promise<Metadata> {


//   const carDetails = await getCarInfo(params.carSlug)

// if(!carDetails.car || !carDetails.success) return {
//   title:'Not found',
//   description:'This slug does not exist'
// }



 
  return {
    title:` ${params.carSlug} | PRIRENTO` ,
    description:`Amazing${params.carSlug}.`,
    
    openGraph: {
      title:` ${params.carSlug} | PRIRENTO` ,
    description:`Amazing${params.carSlug}.`,
      // images: [...carDetails.car.gallary],
    },
  }
}

const page = async ({ params, searchParams }: Props) => {
  setDefaultSearchParams(searchParams);

  //fetch car's details
  const carDetails = await getCarInfo(params.carSlug)

  if (!carDetails.success)
    return (
      <div className="min-h-[900px] flex items-center justify-center flex-col gap-3">
        <ErrorComponent description={carDetails.error!} />
        <Button>
          <Link href={`/`}>main page</Link>
        </Button>
      </div>
    );

  if (!carDetails.car) notFound();

  const car = carDetails.car;

  return (
    <div>
      <SearchBanner carName={car.carName} />

      <section className="min-h-[800px] container pb-24">
        {/* Search component */}
        <div className="-mt-16">
          <SearchComponentServerWrapper
            label="Check"
            searchParams={searchParams}
            urlVar={`${params.companySlug}/${params.carSlug}`}
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
              <div className="lg:col-span-2 order-1 lg:order-2 aspect-square ">
                <Skeleton className="w-full rounded-xl h-36" />
                <Skeleton className="mt-4 w-60 mx-auto p-3 rounded-full" />
                <Skeleton className="w-full rounded-xl h-36 mt-8" />
                <Skeleton className="w-[90%] rounded-full h-12 mt-8 mx-auto" />
              </div>
            }
          >
            <CarAvailability params={params} searchParams={searchParams} />
          </Suspense>
        </div>

        {/* car reviews */}
        <div className="mt-24">
          <CarDescription title="Reviews">
            <Suspense fallback={<Skeleton className="h-[350px]" />}>
              <CarReviewsComponent carSlug={car.slug} />
            </Suspense>
          </CarDescription>
        </div>
      </section>
    </div>
  );
};

export default page;
