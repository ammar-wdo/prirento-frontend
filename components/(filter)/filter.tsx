import { cn, fetcher } from "@/lib/utils";
import { GET_BRANDS } from "@/links";
import { BrandType} from "@/types";
import React from "react";
import FilterClientWrapper from "./filter-client-wrapper";

type Props = { searchParams: { [key: string]: string | string[] | undefined } ,noBorder?:boolean};

const Filter = async ({ searchParams,noBorder }: Props) => {
  const brands = await fetcher<{ brands: BrandType[] }>(GET_BRANDS).then(
    (data) => data.brands
  );

  return (
    <div className={cn("border rounded-2xl p-6 sticky top-2",noBorder && 'border-none')}>
     
     <FilterClientWrapper brands={brands} searchParams={searchParams}/>
    </div>
  );
};

export default Filter;
