import Banner from "@/components/(banner)/banner";
import BenefitsComponent from "@/components/(benefits)/benefits-component";
import BrandsSwiperServerWrapeer from "@/components/(brands swiper)/brands-swiper-server-wrapper";
import CarTypeFeedSkeleton from "@/components/(cars type feed)/car-type-feed-skeleton";
import CarsTypeComponent from "@/components/(cars type feed)/cars-type-component";

import CarsTypeFeed from "@/components/(cars type feed)/cars-type-feed";
import MainInfo from "@/components/(main info)/main-info";
import ReviewsComponent from "@/components/(reviews)/reviews-component";

import SearchComponentServerWrapper from "@/components/(search-component)/seatch-component-server-wrapper";
import TipsComponent from "@/components/(tips component)/tips-component";
import Heading from "@/components/heading";
import { Skeleton } from "@/components/ui/skeleton";
import { searchParamsGenerate, setDefaultSearchParams } from "@/lib/utils";
import { Metadata } from "next";
import { Suspense } from "react";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};
export const revalidate = 0;


export const metadata: Metadata = {
  title: "PRIRENTO - Luxurious car rental - UAE",
  description:
    "Descover the most luxorious car rental service in UAE, get hustle free experience, 24/7 support,money back guarantee, no fees, full  protection. ",
  openGraph: {
    title: "PRIRENTO - Luxurious car rental - UAE",
    description:
      "Descover the most luxorious car rental service in UAE, get hustle free experience, 24/7 support,money back guarantee, no fees, full  protection. ",
      images:['/banner.png']
  },
};

export default function Home({ searchParams }: Props) {
  if (!searchParams.carType) {
    searchParams.carType = "super_cars";
  }

  setDefaultSearchParams(searchParams);

  return (
    <div className="">
      <Banner />
      {/* Search component */}
      <div className="container xl:-mt-[3rem] -mt-[12rem]">
        <SearchComponentServerWrapper />
      </div>
      {/* main info */}
      <div className="container mt-20">
        <MainInfo />
      </div>

      {/* Cars types feed component */}
      <div className="mt-12 sm:mt-24">
        <div className="bg-gray-100 pt-12 sm:pt-24 pb-12">
          <div className="container">
            <Heading title=" Your extraordinary journey starts now!">
              <span>
              Find your perfect match in our stunning car selection!
              </span>
            </Heading>
          </div>

          <div className="mt-8 overflow-auto px-4">
            <CarsTypeComponent searchParams={searchParams} />
          </div>
          <Suspense
            key={searchParams.carType as string}
            fallback={<CarTypeFeedSkeleton />}
          >
            <CarsTypeFeed searchParams={searchParams} />
          </Suspense>
        </div>
      </div>

      {/* Tips component */}
      <div className="mt-12">
        <TipsComponent />
      </div>

      {/* Benefits component */}
      <div className="mt-6 sm:mt-12">
        <BenefitsComponent />
      </div>

      {/* Reviews component */}
      <div className="my-4 container ">
        <Suspense fallback={<Skeleton className="min-h-[300px]"/>}>
          <ReviewsComponent />
        </Suspense>
      </div>
    </div>
  );
}
