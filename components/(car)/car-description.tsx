import { SingleCarType } from "@/types";
import React, { ReactNode } from "react";
import CarFeaturesComponent from "../(cars type feed)/car-features-component";
import { Calendar, Car, CarFront, Settings2, Users } from "lucide-react";
import { GiCarDoor } from "react-icons/gi";
import { PiEngineFill } from "react-icons/pi";
import { MdElectricBolt } from "react-icons/md";
import { carsElectric } from "@/mapper";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  description?:string
  children?:ReactNode
  className?:string
};

const CarDescription = ({ title,description,children,className}: Props) => {
  return (
    <div className={cn("rounded-xl overflow-hidden shadow-md",className)}>
      <h3 className="bg-secondaryGreen text-white p-4 capitalize">{title}</h3>
     { description && <p className="p-4 text-sm first-letter:capitalize">
    {description}
      </p>}
      {children && <div className="p-4 text-sm">{children}</div>}
    </div>
  );
};

export default CarDescription;
