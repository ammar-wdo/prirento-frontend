'use client'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"
import { useState } from "react"
  

type Props = {
    title:string,
    Icon:JSX.Element
}

const NavPopover = ({title,Icon}: Props) => {
    const [open , setOpen] = useState(false)
  return (
    <Popover open={open} onOpenChange={setOpen}>
    <PopoverTrigger onMouseOver={()=>setOpen(true)}  > <span  className="capitalize cursor-pointer flex items-center relative z-10">
            {title}
            {Icon}
          </span></PopoverTrigger>
    <PopoverContent onMouseLeave={()=>setOpen(false)} sideOffset={40} className="min-w-[700px] grid grid-cols-4 w-full gap-4 p-12 ">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>4</span>
        <span>4</span>
        <span>4</span>
        <span>4</span>
        <span>4</span>
    </PopoverContent>
    <div className={cn("fixed w-screen h-screen top-0 transition left-0  bg-black/60",!open && 'opacity-0 -z-10  ')} />
  </Popover>
  )
}

export default NavPopover