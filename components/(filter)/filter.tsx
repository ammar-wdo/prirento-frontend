import { fetcher } from "@/lib/utils";
import { GET_BRANDS } from "@/links";
import { BrandType} from "@/types";
import React from "react";
import FilterClientWrapper from "./filter-client-wrapper";

type Props = { searchParams: { [key: string]: string | string[] | undefined } };

const Filter = async ({ searchParams }: Props) => {
  const brands = await fetcher<{ brands: BrandType[] }>(GET_BRANDS).then(
    (data) => data.brands
  );

  return (
    <div className="border rounded-2xl p-6">
      <h3 className="capitalize pb-2 border-b font-bold">filter</h3>
     <FilterClientWrapper brands={brands} searchParams={searchParams}/>
    </div>
  );
};

export default Filter;
