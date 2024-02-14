import { pushSearchParams } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState } from "react"




export const useFilter = (searchParams:{[key:string]:string | string[] | undefined})=>{
    type Filters ={
        brand: string[];
        type: string[];
        seats: string[];
        doors: string[]; 
        electric: string[]
      }

      const initialState = {
        brand: searchParams.brand as string[] || [],
        type: searchParams.type as string[] || [],
        seats: searchParams.seats as string[] || [],
        doors: searchParams.doors as string[] || [],
        electric: searchParams.electric as string[] || []}

      const [filters, setFilters] = useState<Filters>(initialState)


const [seeMore, setSeeMore] = useState(false)
const router = useRouter()


const handleFilterChange = (category: keyof Filters, value: string, isChecked: boolean) => {
    console.log(category,value)

    const updatedFilters = {
      ...filters,
      [category]: !filters[category].includes(value)
        ? [...filters[category], value]
        : filters[category].filter((item) => item !== value),
    };
  
    setFilters(updatedFilters);
    console.log(filters)
const url = pushSearchParams(filters,process.env.NEXT_PUBLIC_BASE_URL + '/search' as string,searchParams)
router.push(url)

  };


return {seeMore,setSeeMore,handleFilterChange}
}