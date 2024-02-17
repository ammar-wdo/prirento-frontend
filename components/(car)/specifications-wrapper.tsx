import { SingleCarType } from "@/types";
import React from "react";
import CarFeaturesComponent from "../(cars type feed)/car-features-component";
import { Calendar, Car, CarFront, Settings2, Users } from "lucide-react";
import { GiCarDoor } from "react-icons/gi";
import { PiEngineFill } from "react-icons/pi";
import { MdElectricBolt } from "react-icons/md";
import { carsElectric } from "@/mapper";

type Props = {
  car: SingleCarType;
};

const SpecificationsWrapper = ({ car }: Props) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-md">
      <h3 className="bg-secondaryGreen text-white p-4">Specifications</h3>
      <div className="p-4 grid grid-cols-2 sm:grid-cols-4 gap-y-5">
        <CarFeaturesComponent
          row={true}
          title={car?.brand}
          icon={<CarFront />}
        />
        <CarFeaturesComponent row={true} title={car?.carType} icon={<Car />} />
        <CarFeaturesComponent
          row={true}
          title={car?.transmition}
          icon={<Settings2 />}
        />
        <CarFeaturesComponent
          row={true}
          title={car?.year}
          icon={<Calendar />}
        />
        <CarFeaturesComponent
          row={true}
          title={car?.engine}
          icon={<PiEngineFill />}
        />
        <CarFeaturesComponent
          row={true}
          title={`${car?.seats.toString()} Seats`}
          icon={<Users />}
        />
        <CarFeaturesComponent
          row={true}
          title={`${car?.doors.toString()} Doors`}
          icon={<GiCarDoor />}
        />
        {!(car.electric === "none") && (
          <CarFeaturesComponent
            row={true}
            title={carsElectric[car.electric]}
            icon={<MdElectricBolt />}
          />
        )}
      </div>
    </div>
  );
};

export default SpecificationsWrapper;
