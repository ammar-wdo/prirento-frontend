"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { BrandType, carTypes } from "@/types";

import { useState } from "react";
import BrandNavCard from "./brand-nav-card";
import { carsMapper } from "@/mapper";
import Image from "next/image";
import TypeNavCard from "./type-nav-card";

type Props = {
  title: string;
  Icon: JSX.Element;
  data: BrandType[];
  type?: boolean;
  brand?: boolean;
};

const NavPopover = ({ title, Icon, data, type, brand }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger onMouseOver={() => setOpen(true)}>
        {" "}
        <span className="capitalize cursor-pointer flex items-center relative z-20">
          {title}
          {Icon}
        </span>
      </PopoverTrigger>
      <PopoverContent
        onMouseLeave={() => setOpen(false)}
        sideOffset={40}
        className={cn("min-w-[700px] grid grid-cols-4 w-full gap-4 gap-y-8 p-12 ",type && 'grid-cols-3')}
      >
        {brand && data?.map((el) => <BrandNavCard brand={el} key={el.id} />)}
        {type &&
          carTypes.map((type) => (
         <TypeNavCard type={type} key={type}/>
          ))}
      </PopoverContent>
      <div
        className={cn(
          "fixed w-screen h-screen top-0 transition left-0  bg-black/60 z-10",
          !open && "opacity-0 -z-10  "
        )}
      />
    </Popover>
  );
};

export default NavPopover;
