import Banner from "@/components/(banner)/banner";
import BrandsSwiperServerWrapeer from "@/components/(brands swiper)/brands-swiper-server-wrapper";
import CarTypeFeedSkeleton from "@/components/(cars type feed)/car-type-feed-skeleton";
import CarsTypeComponent from "@/components/(cars type feed)/cars-type-component";

import CarsTypeFeed from "@/components/(cars type feed)/cars-type-feed";

import SearchComponentServerWrapper from "@/components/(search-component)/seatch-component-server-wrapper";
import { Suspense } from "react";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};
export const revalidate = 0;

export default function Home({ searchParams }: Props) {
  if (!searchParams.carType) {
    searchParams.carType = "super_cars";
  }
  return (
    <div className="">
      <Banner />

      <div className="container xl:-mt-[3rem] -mt-[12rem]">
        <SearchComponentServerWrapper />
      </div>



      <div className="container mt-20">
        <BrandsSwiperServerWrapeer />
      </div>
      <div className="mt-24">
      <div className="bg-gray-100 pt-24 pb-12">
      <div className="container">
        <h3 className="text-center  md:text-5xl sm:text-2xl text-xl font-bold">
          Our impressive collections of cars
        </h3>
        <p className="text-center mt-8 text-sm">
          Ranging from elegant sedans to powerful sports cars, all carefully
          selected to provide our <br />
          customers with the ultimate drivin experience.
        </p>
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
    </div>
  );
}
