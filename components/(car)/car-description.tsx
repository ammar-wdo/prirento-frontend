import { SingleCarType } from "@/types";
import React from "react";
import CarFeaturesComponent from "../(cars type feed)/car-features-component";
import { Calendar, Car, CarFront, Settings2, Users } from "lucide-react";
import { GiCarDoor } from "react-icons/gi";
import { PiEngineFill } from "react-icons/pi";
import { MdElectricBolt } from "react-icons/md";
import { carsElectric } from "@/mapper";

type Props = {
  title: string;
  description:string
};

const CarDescription = ({ title,description='Nice car' }: Props) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-md">
      <h3 className="bg-secondaryGreen text-white p-4 capitalize">{title}</h3>
      <p className="p-4 text-sm first-letter:capitalize">
    {description}
      </p>
    </div>
  );
};

export default CarDescription;
