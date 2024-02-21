import { SingleCarType } from "@/types";
import React from "react";
import CarSwiper from "./car-swiper";
import SpecificationsWrapper from "./specifications-wrapper";
import CarDescription from "./car-description";

type Props = {
  car: SingleCarType;
};

const CarFeed = async ({ car }: Props) => {
  return (
    <article>
      {/* Siwper */}
      <div>
        <CarSwiper images={car.gallary} />
      </div>

      {/* specifications */}
      <div className="mt-12">
        <SpecificationsWrapper car={car} />
      </div>

      {/* car availability */}
      <div className="mt-12">
        <CarDescription title="rental details">
          <p className="mt-4">
            km Included:{" "}
            <span className="capitalize text-sm px-3 py-1 rounded-lg bg-muted">
              {car.kmIncluded} km
            </span>
          </p>
          {car.minimumHours && (
            <p className="mt-6">
              Minimum renting hours:{" "}
              <span className=" text-sm px-3 py-1 rounded-lg bg-muted">
                {car.minimumHours} Hour(s)
              </span>
            </p>
          )}

          {/* pick-up locations */}
          <div className="flex items-center gap-2 flex-wrap w-full mt-6">
            <span>Available pick-up locations:</span>

            {car.pickupLocations.map((el) => (
              <span
                key={el}
                className="capitalize text-sm  px-3 py-1 rounded-lg bg-muted"
              >
                {el}
              </span>
            ))}
          </div>
          {/* drop-off locations */}
          <div className="flex items-center gap-2 flex-wrap w-full mt-6">
            <span>Available drop-off locations:</span>

            {car.dropoffLocations.map((el) => (
              <span
                key={el}
                className="capitalize text-sm px-3 py-1 rounded-lg bg-muted"
              >
                {el}
              </span>
            ))}
          </div>
        </CarDescription>
      </div>

      {/* description */}
      <div className="mt-12">
        <CarDescription title="Description" description={car.description} />
      </div>
    </article>
  );
};

export default CarFeed;
