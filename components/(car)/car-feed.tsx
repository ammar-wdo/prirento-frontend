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
        <CarDescription title="Car availability">
          {car.minimumHours && (
            <p>Minimum renting hours: {car.minimumHours} hour(s)</p>
          )}
          {/* pick-up locations */}
          <div className="flex items-center gap-2 flex-wrap w-full mt-4">
            Available pick-up locations:{" "}
            <div className="flex items-center gap-1 flex-wrap flex-1">
              {car.pickupLocations.map((el) => (
                <span key={el} className="capitalize text-sm  px-3 py-1 rounded-lg bg-muted">
                  {el}
                </span>
              ))}
            </div>
          </div>
          {/* drop-off locations */}
          <div className="flex items-center gap-2 flex-wrap w-full mt-4">
            Available drop-off locations:{" "}
            <div className="flex items-center gap-1 flex-wrap flex-1">
              {car.dropoffLocations.map((el) => (
                <span key={el} className="capitalize text-sm px-3 py-1 rounded-lg bg-muted">
                  {el}
                </span>
              ))}
            </div>
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
