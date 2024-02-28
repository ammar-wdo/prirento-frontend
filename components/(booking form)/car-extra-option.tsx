import { cn } from "@/lib/utils";
import { CarExtraOptions } from "@/types";
import { Check, Square } from "lucide-react";
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
        "p-4 rounded-xl flex  items-center justify-between gap-12 hover:bg-muted border cursor-pointer active:scale-[0.99] hover:opacity-80 transition",
        active && "   bg-muted"
      )}
      onClick={handleClick}
    >
      <div className="flex items-center  flex-1">
        <span className={cn("relative mr-2 w-5  h-5 rounded-sm flex items-center justify-center border border-black transition bg-white",active && 'bg-main')}>
         
            {active && <Check className=" text-white w-5 h-5 absolute" />}
        </span>
       
        <p className="capitalize text-xs sm:text-base">{carExtraOption.label}</p>
      </div>
      <div className="font-medium">{carExtraOption.price} AED</div>
      <div className="relative rounded-full w-12 h-12 hidden sm:block">
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
