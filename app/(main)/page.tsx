import Banner from "@/components/(banner)/banner";
import BenefitsComponent from "@/components/(benefits)/benefits-component";
import BrandsSwiperServerWrapeer from "@/components/(brands swiper)/brands-swiper-server-wrapper";
import CarTypeFeedSkeleton from "@/components/(cars type feed)/car-type-feed-skeleton";
import CarsTypeComponent from "@/components/(cars type feed)/cars-type-component";

import CarsTypeFeed from "@/components/(cars type feed)/cars-type-feed";
import ReviewsComponent from "@/components/(reviews)/reviews-component";

import SearchComponentServerWrapper from "@/components/(search-component)/seatch-component-server-wrapper";
import TipsComponent from "@/components/(tips component)/tips-component";
import Heading from "@/components/heading";
import { searchParamsGenerate, setDefaultSearchParams } from "@/lib/utils";
import { Suspense } from "react";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};
export const revalidate = 0;

export default function Home({ searchParams }: Props) {
  if (!searchParams.carType) {
    searchParams.carType = "super_cars";
  }

setDefaultSearchParams(searchParams)

  return (
    <div className="">
      <Banner />
      {/* Search component */}
      <div className="container xl:-mt-[3rem] -mt-[12rem]">
        <SearchComponentServerWrapper />
      </div>
      {/* Brands logos component */}
      <div className="container mt-20">
        <BrandsSwiperServerWrapeer />
      </div>

      {/* Cars types feed component */}
      <div className="mt-24">
        <div className="bg-gray-100 pt-24 pb-12">
          <div className="container">
            <Heading title=" Our impressive collections of cars">
              <span>
                Ranging from elegant sedans to powerful sports cars, all
                carefully selected to provide our <br />
                customers with the ultimate drivin experience.
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
      <div className="mt-12">
        <BenefitsComponent />
      </div>


      {/* Reviews component */}
      <div className="mt-12">
        <ReviewsComponent />
      </div>
    </div>
  );
}
