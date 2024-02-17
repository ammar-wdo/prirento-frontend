import { SingleCarType } from "@/types";
import React from "react";
import CarFeaturesComponent from "../(cars type feed)/car-features-component";
import { GiCarDoor } from "react-icons/gi";
import { PiEngineFill } from "react-icons/pi";
import { MdElectricBolt } from "react-icons/md";
import { carsElectric } from "@/mapper";
import { IoCarSport } from "react-icons/io5";
import { IoCarSharp } from "react-icons/io5";
import { GiGearStickPattern } from "react-icons/gi";
import { FaCalendarAlt } from "react-icons/fa";
import { GiCarSeat } from "react-icons/gi";

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
          icon={<IoCarSport className="w-6 h-6"/>}
        />
        <CarFeaturesComponent row={true} title={car?.carType} icon={<IoCarSharp className="w-6 h-6"/>} />
        <CarFeaturesComponent
          row={true}
          title={car?.transmition}
          icon={<GiGearStickPattern className="w-6 h-6"/>}
        />
        <CarFeaturesComponent
          row={true}
          title={car?.year}
          icon={<FaCalendarAlt className="w-6 h-6"/>}
        />
        <CarFeaturesComponent
          row={true}
          title={car?.engine}
          icon={<PiEngineFill className="w-6 h-6"/>}
        />
        <CarFeaturesComponent
          row={true}
          title={`${car?.seats.toString()} Seats`}
          icon={<GiCarSeat className="w-6 h-6"/>}
        />
        <CarFeaturesComponent
          row={true}
          title={`${car?.doors.toString()} Doors`}
          icon={<GiCarDoor className="w-6 h-6"/>}
        />
        {!(car.electric === "none") && (
          <CarFeaturesComponent
            row={true}
            title={carsElectric[car.electric]}
            icon={<MdElectricBolt className="w-6 h-6"/>}
          />
        )}
      </div>
    </div>
  );
};

export default SpecificationsWrapper;
