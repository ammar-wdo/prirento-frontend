'use client'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Settings2 } from "lucide-react"


import { ReactNode} from "react"




type Props = {children:ReactNode}

const FilterSlidebar = ({children}: Props) => {



  
  return (
    <Sheet   >
    <SheetTrigger className="rounded-full flex items-center justify-center w-full lg:hidden border py-4"> <Settings2 className="mr-4"/>Filter</SheetTrigger>
    <SheetContent  side={'bottom'} className="w-full p-0 rounded-t-3xl max-h-[80%] overflow-y-auto">
        <div className="">
 {children}
        </div>
 
    </SheetContent>
  </Sheet>
  )
}

export default FilterSlidebar