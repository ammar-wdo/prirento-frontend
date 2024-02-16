import { BrandType, carTypes } from "@/types";
import React from "react";
import BrandNavCard from "./brand-nav-card";

import TypeNavCard from "./type-nav-card";
import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = {
  title: string;
  data?: BrandType[];
  type: "brand" | "type";
  aside?: boolean;
};

const NavItemsMenu = ({ title, data, type, aside }: Props) => {
  return (
    <div className="mt-12">
      <h3 className="capitalize  px-4 font-medium">{title}</h3>
      <div
        className={cn(
          "grid grid-cols-4 gap-4 mt-4 ",
          (aside || type === "type") && "grid-cols-3"
        )}
      >
        {type === "brand" &&
          data?.map((brand) => (
        
            <Link
            target="_blank"
              key={brand.id}
              href={`${process.env.NEXT_PUBLIC_BASE_URL}/search?brand=${brand.brand}`}
            >
              <BrandNavCard key={brand.id} brand={brand} />
            </Link>
  
          ))}
        {type === "type" &&
          carTypes?.map((type) => (
         
            <Link
            target="_blank"
              key={type}
              href={`${process.env.NEXT_PUBLIC_BASE_URL}/search?carType=${type}`}
            >
              <TypeNavCard type={type} key={type} />
            </Link>
          
          ))}
      </div>
    </div>
  );
};

export default NavItemsMenu;
