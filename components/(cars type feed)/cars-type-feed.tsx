import React from "react";
import CarsTypeComponent from "./cars-type-component";
import { GET_CARS_BY_TYPE } from "@/links";
import { fetcher } from "@/lib/utils";
import { CarCardType } from "@/types";
import CarByTypeCard from "./car-by-type-card";

type Props = {
    searchParams:{[ket:string]:string | string[] | undefined}
};

const CarsTypeFeed = async ({searchParams}: Props) => {
const cars = await fetcher<{cars:CarCardType[]}>(GET_CARS_BY_TYPE + `?carType=${searchParams.carType}`).then(data=>data.cars)
  return (
    <div className="bg-gray-100 pt-24">
      <div className="container">
        <h3 className="text-center  md:text-5xl sm:text-2xl text-xl font-bold">
          Our impressive collections of cars
        </h3>
        <p className="text-center mt-8 text-sm">
          Ranging from elegant sedans to powerful sports cars, all carefully
          selected to provide our <br />
          customers with the ultimate drivin experience.
        </p>
        <div className="mt-8 overflow-auto" >
          <CarsTypeComponent searchParams={searchParams} />
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
{cars.map(car=><CarByTypeCard key={car.id} car={car} />)}
        </div>
      </div>
    </div>
  );
};

export default CarsTypeFeed;
