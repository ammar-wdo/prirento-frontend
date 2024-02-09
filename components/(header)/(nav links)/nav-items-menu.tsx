import { BrandType, carTypes } from "@/types";
import React from "react";
import BrandNavCard from "./brand-nav-card";

import TypeNavCard from "./type-nav-card";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  data?: BrandType[];
  type: "brand" | "type";
  
};

const NavItemsMenu = ({ title, data, type }: Props) => {
  return (
    <>
      <h3 className="capitalize my-4 px-8 font-medium">{title}</h3>
      <div className={cn("grid grid-cols-4 gap-4 p-4 ",type==='type' && 'grid-cols-3')}>
        {type === "brand" &&
          data?.map((brand) => <BrandNavCard key={brand.id} brand={brand} />)}
        {type === "type" &&
          carTypes?.map((type) => (
         <TypeNavCard type={type} key={type}/>
          ))}
      </div>
    </>
  );
};

export default NavItemsMenu;
