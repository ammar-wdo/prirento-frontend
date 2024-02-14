"use client";
import { BrandType, CarTypes } from "@/types";
import { Checkbox } from "@/components/ui/checkbox";

import { useFilter } from "@/app/hooks/filter-component-hook";
import SeeMoreButton from "./seemore-button";
import { carsMapper } from "@/mapper";

type Props = {
  title: string;
  data:
    | { type: "brand"; brands: BrandType[] }
    | { type: "type"; types: string[] }
    | { type: "seats"; seats: string[] }
    | { type: "doors"; doors: string[] }
    | { type: "electric"; electric: string[] };

  searchParams: { [key: string]: string | string[] | undefined };
};

const FilterSection = ({ title, data, searchParams }: Props) => {
  const { seeMore, setSeeMore, handleFilterChange } = useFilter(searchParams);
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
                value={brand.brand}
                className=""
                onCheckedChange={(e) =>
                  handleFilterChange(data.type, brand.brand, true)
                }
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
            seeMore={seeMore}
            setSeeMore={(val: boolean) => setSeeMore(val)}
          />
        </div>
      )}

      {data.type === "type" && (
        <div className="mt-2 flex flex-col w-full gap-2">
          {" "}
          {(data.types).map((theType) => (
            <div className="flex items-center gap-2">
              <Checkbox
                id={theType}
                value={theType}
                className=""
                onCheckedChange={(e) =>
                  handleFilterChange(data.type, theType, true)
                }
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
