'use client'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Settings2 } from "lucide-react"


import { ReactNode, useEffect, useState } from "react"
import {useSearchParams } from "next/navigation"



type Props = {children:ReactNode}

const FilterSlidebar = ({children}: Props) => {

    const [open, setOpen] = useState(false)

    const searcParams = useSearchParams()

    useEffect(()=>{
        setOpen(false)
    },[searcParams])
  return (
    <Sheet   open={open} onOpenChange={setOpen}>
    <SheetTrigger className="rounded-full flex items-center justify-center w-full lg:hidden border py-4"> <Settings2 className="mr-4"/>Filter</SheetTrigger>
    <SheetContent  side={'bottom'} className="w-full p-0 rounded-t-3xl max-h-[600px] overflow-y-auto">
        <div className="mt-12">
 {children}
        </div>
 
    </SheetContent>
  </Sheet>
  )
}

export default FilterSlidebar