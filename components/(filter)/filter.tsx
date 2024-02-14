import { fetcher } from "@/lib/utils";
import { GET_BRANDS } from "@/links";
import { BrandType, carTypes, carTypesArray } from "@/types";
import React from "react";
import FilterSection from "./filter-section";

type Props = { searchParams: { [key: string]: string | string[] | undefined } };

const Filter = async ({ searchParams }: Props) => {
  const brands = await fetcher<{ brands: BrandType[] }>(GET_BRANDS).then(
    (data) => data.brands
  );

  return (
    <div className="border rounded-2xl p-6">
      <h3 className="capitalize pb-2 border-b font-bold">filter</h3>
      <div className="mt-2">
        <FilterSection
          title="Car Brand"
          data={{ type: "brand", brands }}
          searchParams={searchParams}
        />
        <FilterSection
          title="Car Type"
          data={{
            type: "type",
            types: carTypesArray
          }}
          searchParams={searchParams}
        />
      </div>
    </div>
  );
};

export default Filter;
