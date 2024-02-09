import { carsMapper } from "@/mapper";
import Image from "next/image";
import React from "react";

type Props = {
  type:
    | "SUV"
    | "super_cars"
    | "sports"
    | "convertable"
    | "classics"
    | "business";
};

const TypeNavCard = ({ type }: Props) => {
  return (
    <div key={type}>
      {" "}
      <div className="justify-self-center cursor-pointer p-4 transition rounded-xl hover:border-main border border-transparent group hover:scale-110 duration-500">
        <div className="relative w-[50px] h-[50px] mx-auto">
          <Image
            className="object-contain transition group-hover:-rotate-[16deg] duration-500"
            src={carsMapper[type].src}
            alt="logo"
            fill
          />
        </div>
        <p className="text-center text-xs md:text-sm capitalize font-medium transition">
          {carsMapper[type].title}
        </p>
      </div>
    </div>
  );
};

export default TypeNavCard;
