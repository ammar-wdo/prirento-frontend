"use client";
import { carTypes } from "@/types";
import React from "react";
import { Button } from "../ui/button";
import { carsMapper } from "@/mapper";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { cn, pushSearchParams } from "@/lib/utils";

type Props = { searchParams:{[ket:string]:string | string[] | undefined}};

const CarsTypeComponent = ({searchParams}: Props) => {

  const pathname = usePathname();
  const router = useRouter();

  const handlePushParam = (type: string | string[] | undefined) => {
    const newUrl = pushSearchParams(
      { carType: type },
      `${process.env.NEXT_PUBLIC_BASE_URL}/${pathname}`,
      searchParams
    );
    router.push(newUrl);
  };

  const isActive = (type: string) => {
    const value = searchParams.carType
    if (value === type) return true;
    return false;
  };

  return (
    <div className="flex items-center mx-auto  w-fit gap-8  overflow-x-auto pb-8">
      {carTypes.map((type) => (
        <Button
          onClick={() => handlePushParam(type)}
          key={type}
          variant={"default"}
          className={cn(
            "rounded-full bg-white hover:bg-secondaryGreen hover:text-white capitalize text-secondaryGreen shrink-0",
            isActive(type) && "bg-secondaryGreen  text-white hover:bg-secondaryGreen /20 border-secondaryGreen  "
          )}
        >
          {carsMapper[type].title}
        </Button>
      ))}
    </div>
  );
};

export default CarsTypeComponent;
