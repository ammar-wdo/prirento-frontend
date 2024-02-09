'use client'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { BrandType } from "@/types"
import { LucideIcon } from "lucide-react"
import { useState } from "react"
import BrandNavCard from "./brand-nav-card"
  

type Props = {
    title:string,
    Icon:JSX.Element,
    data:BrandType[]
}

const NavPopover = ({title,Icon,data}: Props) => {
    const [open , setOpen] = useState(false)
  return (
    <Popover open={open} onOpenChange={setOpen}>
    <PopoverTrigger onMouseOver={()=>setOpen(true)}  > <span  className="capitalize cursor-pointer flex items-center relative z-10">
            {title}
            {Icon}
          </span></PopoverTrigger>
    <PopoverContent onMouseLeave={()=>setOpen(false)} sideOffset={40} className="min-w-[700px] grid grid-cols-4 w-full gap-4 gap-y-8 p-12 ">
       {data?.map((el)=><BrandNavCard brand={el} key={el.id}/>)}
    </PopoverContent>
    <div className={cn("fixed w-screen h-screen top-0 transition left-0  bg-black/60",!open && 'opacity-0 -z-10  ')} />
  </Popover>
  )
}

export default NavPopover