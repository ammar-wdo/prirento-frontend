'use client'
import { BrandType, carTypesArray, doors, electric, electricArray, seats } from "@/types";
import { useFilter } from '@/hooks/filter-component-hook';
import React from 'react'
import FilterSection from './filter-section';
import { Loader } from "lucide-react";
import { Button } from "../ui/button";


type Props = {searchParams:{[key:string]:string | string[] | undefined}
,brands:BrandType[]

}

const FilterClientWrapper = ({searchParams,brands}: Props) => {
    const { seeMore, setSeeMore,handleFilterChange,filters,pending,activeFiltersCount,handlePush,handleReset,pendingReset} = useFilter(searchParams);
  return (
    <div className="relative">
      <div className="flex flex-col py-4 border-b gap-3 sticky top-0 bg-white z-10 ">
      <h3 className="capitalize  font-bold">filter{!!activeFiltersCount && `(${activeFiltersCount})`}</h3>
      <Button onClick={handlePush} disabled={pending} variant={'siteMain'}>Search {pending && <Loader size={14} className="ml-3 animate-spin" />}</Button>
      <Button onClick={handleReset} disabled={pendingReset} variant={'ghost'}>Reset Filter {pendingReset && <Loader size={14} className="ml-3 animate-spin" />}</Button>
    
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