'use client'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose
  } from "@/components/ui/sheet"
import { Settings2 } from "lucide-react"
import { usePathname, useSearchParams } from "next/navigation"


import { ReactNode, useEffect, useState} from "react"




type Props = {children:ReactNode}

const FilterSlidebar = ({children}: Props) => {

const [open, setOpen] = useState(false)
const searchParams = useSearchParams()

useEffect(()=>{
  setOpen(false)
},[searchParams])

  
  return (
    <Sheet  open={open} onOpenChange={setOpen} >
    <SheetTrigger className="rounded-full flex items-center justify-center w-full lg:hidden border py-4 bg-white "> <Settings2 className="mr-4"/>Filter</SheetTrigger>
    <SheetContent  side={'bottom'} className="w-full p-0 rounded-t-3xl max-h-[80%] overflow-y-auto">
        <div className="">
      
 {children}

        </div>
 
    </SheetContent>
  </Sheet>
  )
}

export default FilterSlidebar