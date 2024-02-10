import CarsTypeComponent from "./cars-type-component";

import CarByTypeCard from "./car-by-type-card";
import { GET_CARS_BY_TYPE } from "@/links";
import { CarCardType } from "@/types";
import { fetcher } from "@/lib/utils";

type Props = {
  searchParams: { [ket: string]: string | string[] | undefined };
};

const CarsTypeFeed = async ({ searchParams }: Props) => {
  const cars = await fetcher<{ cars: CarCardType[] }>(
    GET_CARS_BY_TYPE + `?carType=${searchParams.carType}`
  ).then((data) => data.cars);
  return (
    <div className="container">
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
        {cars.map((car) => (
          <CarByTypeCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default CarsTypeFeed;
