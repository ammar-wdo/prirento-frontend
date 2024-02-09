'use client'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import NavLinks from "./nav-links"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import MobileNavLinks from "./mobile-navlinks"
import { BrandType } from "@/types"

type Props = {white?:boolean,brands:BrandType[]}

const SidebarSheet = ({white,brands}: Props) => {

    const [open, setOpen] = useState(false)

    const pathname = usePathname()

    useEffect(()=>{
        setOpen(false)
    },[pathname])
  return (
    <Sheet open={open} onOpenChange={setOpen}>
    <SheetTrigger> <Menu className={cn('text-white cursor-pointer',white && 'text-main')} /></SheetTrigger>
    <SheetContent className="w-full p-0">
        <div className="mt-12">
      <MobileNavLinks brands={brands}/>
        </div>
 
    </SheetContent>
  </Sheet>
  )
}

export default SidebarSheet