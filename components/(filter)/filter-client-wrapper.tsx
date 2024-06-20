'use client'
import { BrandType, carTypesArray, doors, electric, electricArray, seats } from "@/types";
import { useFilter } from '@/hooks/filter-component-hook';
import React from 'react'
import FilterSection from './filter-section';
import { Loader } from "lucide-react";


type Props = {searchParams:{[key:string]:string | string[] | undefined}
,brands:BrandType[]

}

const FilterClientWrapper = ({searchParams,brands}: Props) => {
    const { seeMore, setSeeMore,handleFilterChange,filters,pending} = useFilter(searchParams);
  return (
    <div className="relative">
      <div className="flex items-center pb-2 border-b">
      <h3 className="capitalize  font-bold">filter</h3>
      <div className="flex-1 flex justify-end ">{pending && <Loader className="animate-spin "/>}</div>
      </div>

      
         <div className="mt-2">
        <FilterSection
          title="Car Brand"
          data={{ type: "brand", brands }}
          searchParams={searchParams}
          seeMore={seeMore}
          setSeeMore={(val:boolean)=>setSeeMore(val)}
          filters={filters}
          handleFilterChange={handleFilterChange}
        />
        <FilterSection
          title="Car Type"
          data={{
            type: "carType",
            types: carTypesArray
          }}
          searchParams={searchParams}
          filters={filters}
          handleFilterChange={handleFilterChange}
        />
        <FilterSection
          title="Doors"
          data={{
            type: "doors",
            doors: doors
          }}
          searchParams={searchParams}
          filters={filters}
          handleFilterChange={handleFilterChange}
        />
        <FilterSection
          title="Seats"
          data={{
            type: "seats",
            seats: seats
          }}
          searchParams={searchParams}
          filters={filters}
          handleFilterChange={handleFilterChange}
        />
        <FilterSection
          title="Car electric"
          data={{
            type: "electric",
            electric: electricArray
          }}
          searchParams={searchParams}
          filters={filters}
          handleFilterChange={handleFilterChange}
        />
      </div>
    </div>
  )
}

export default FilterClientWrapper