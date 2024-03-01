import CarsTypeComponent from "./cars-type-component";

import CarByTypeCard from "./car-by-type-card";
import { GET_CARS_BY_TYPE } from "@/links";
import { CarCardType } from "@/types";
import { fetcher } from "@/lib/utils";
import Scroller from "../scroller";
import NoResult from "../no-result";
import Pagination from "../pagination";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ErrorComponent from "../error-component";

type Props = {
  searchParams: { [ket: string]: string | string[] | undefined };
};

const CarsTypeFeed = async ({ searchParams }: Props) => {
  const carsRes = await fetcher<{ cars: CarCardType[] ,success:boolean,error?:string}>(
    GET_CARS_BY_TYPE +
      `?carType=${searchParams.carType}&page=${searchParams.page}`
  );

  const startDate = searchParams.startDate as string;
  const endDate = searchParams.endDate as string;
  const startTime = searchParams.startTime as string;
  const endTime = searchParams.endTime as string;
  const location = searchParams.location as string
  const dropOffLocation = searchParams.dropOffLocation as string

  if(!carsRes.success) return <div className="min-h-[600px] flex items-center justify-center"><ErrorComponent description={carsRes.error as  string}/></div>
  return (
    <div className="container">
      {!carsRes.cars.length && <NoResult />}
      {!!carsRes.cars.length && (
        <div className="w-full ">
          <Scroller />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8 ">
            {carsRes.cars.map((car, i) => (
              <CarByTypeCard
                key={car.id}
                car={car}
           
                startDate={startDate}
                endDate={endDate}
                startTime={startTime}
                endTime={endTime}
                pickupLocation={location}
                dropOffLocation={dropOffLocation}
              />
            ))}
          </div>
          <Button
            asChild
            variant={"siteMain"}
            className="mt-12 flex w-fit mx-auto rounded-full px-6"
          >
            <Link
              href={`${process.env.NEXT_PUBLIC_BASE_URL}/search${
                searchParams.carType && `?carType=${searchParams.carType} `
              }`}
            >
              See more <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default CarsTypeFeed;
