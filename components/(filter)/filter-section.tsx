"use client";
import { BrandType, CarTypes } from "@/types";
import { Checkbox } from "@/components/ui/checkbox";

import { FilterQuery, Filters, useFilter } from "@/app/hooks/filter-component-hook";
import SeeMoreButton from "./seemore-button";
import { carsMapper } from "@/mapper";

type Props = {
  title: string;
  data:
    | { type: "brand"; brands: BrandType[] }
    | { type: "carType"; types: string[] }
    | { type: "seats"; seats: string[] }
    | { type: "doors"; doors: string[] }
    | { type: "electric"; electric: string[] };

  searchParams: { [key: string]: string | string[] | undefined };
  seeMore?:boolean,
  setSeeMore?:(val:boolean)=>void,
  filters:Filters,
  handleFilterChange:(category: FilterQuery, value: string, isChecked: boolean) => void
};

const FilterSection = ({ title, data,seeMore,setSeeMore,handleFilterChange,filters }: Props) => {

  const slicedBrands = data.type === "brand" ? data.brands.slice(0, 4) : [];

  return (
    <div>
      <h3 className="font-semibold first-letter:capitalize">{title}</h3>

      {data.type === "brand" && (
        <div className="mt-2 flex flex-col w-full gap-2">
          {" "}
          {(!seeMore ? slicedBrands : data.brands).map((brand) => (
            <div className="flex items-center gap-2">
              <Checkbox
                id={brand.brand}
                checked={!!filters[data.type]?.includes(brand.brand)}
                value={brand.brand}
                className=""
                onCheckedChange={() =>{handleFilterChange(data.type,brand.brand,!!filters[data.type]?.includes(brand.brand))}}
              />

              <label
                htmlFor={brand.brand}
                className="text-sm font-medium first-letter:capitalize leading-none peer-disabled:cursor-not-allowed opacity-70 cursor-pointer"
              >
                {brand.brand}
              </label>
            </div>
          ))}
          <SeeMoreButton
            seeMore={seeMore!}
            setSeeMore={(val: boolean) => setSeeMore!(val)}
          />
        </div>
      )}

      {data.type === "carType" && (
        <div className="mt-2 flex flex-col w-full gap-2">
          {" "}
          {(data.types).map((theType) => (
            <div className="flex items-center gap-2">
              <Checkbox
                id={theType}
                checked={!!filters[data.type]?.includes(theType)}
                value={theType}
                className=""
                onCheckedChange={() =>{handleFilterChange(data.type,theType,!!filters[data.type]?.includes(theType))}}
              />

              <label
                htmlFor={theType}
                className="text-sm font-medium first-letter:capitalize leading-none peer-disabled:cursor-not-allowed opacity-70 cursor-pointer"
              >
                {carsMapper[theType].title}
              </label>
            </div>
          ))}
       
      
        </div>
      )}
    </div>
  );
};

export default FilterSection;
