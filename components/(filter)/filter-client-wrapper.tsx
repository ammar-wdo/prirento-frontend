'use client'
import { BrandType, carTypesArray, doors, electric, electricArray, seats } from "@/types";
import { useFilter } from '@/hooks/filter-component-hook';
import React from 'react'
import FilterSection from './filter-section';


type Props = {searchParams:{[key:string]:string | string[] | undefined}
,brands:BrandType[]

}

const FilterClientWrapper = ({searchParams,brands}: Props) => {
    const { seeMore, setSeeMore,handleFilterChange,filters} = useFilter(searchParams);
  return (
    <div>
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