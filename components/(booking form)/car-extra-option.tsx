import { cn } from "@/lib/utils";
import { CarExtraOptions } from "@/types";
import { Check } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {
  carExtraOption: CarExtraOptions;
  handleClick: () => void;
  active: boolean;
};

const CarExtraOption = ({ carExtraOption, active, handleClick }: Props) => {
  return (
    <div
      className={cn(
        "p-4 rounded-md flex  items-center justify-between bg-muted cursor-pointer active:scale-[0.98] hover:opacity-80 transition",
        active && "ring-2 ring-black"
      )}
      onClick={handleClick}
    >
      <div className="flex items-center ">
        {active && <Check className="mr-2" />}
        <p className="capitalize ">{carExtraOption.label}</p>
      </div>
      <div className="font-medium">{carExtraOption.price} AED</div>
      <div className="relative rounded-full w-12 h-12">
        <Image
          src={carExtraOption.logo}
          fill
          alt="logo"
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default CarExtraOption;
