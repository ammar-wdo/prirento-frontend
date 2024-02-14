"use client";

import Link from "next/link";
import { Button } from "../../ui/button";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import NavPopover from "./nav-popoever";
import { BrandType } from "@/types";

export const links = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About us",
    href: "/about-us",
  },
  {
    label: "All vehicles",
    href: "/search",
  },
  {
    label: "Rent by brand",
    icon: <ChevronDown className="ml-1 w-3 h-3" />,
    brand:true
  },
  {
    label: "Rent by type",
    icon: <ChevronDown className="ml-1 w-3 h-3" />,
    type:true
  },
  {
    label: "My booking",
    button: true,
  },
];

type Props = {white?:boolean,brands:BrandType[]};

const NavLinks = ({white,brands}: Props) => {

 
  return (
    <nav className={cn("flex items-center lg:gap-12 text-white text-sm gap-4   lg:text-base font-normal flex-row  ",white && 'text-main')}>
      {links.map(({ label, href, button, icon,type,brand }) => {
        if (href)
          return (
            <Link key={label} href={href} className="capitalize">
              {label}
            </Link>
          );
        if (button)
          return (
            <Button key={label}
              className={cn("bg-white hover:bg-white/90 text-secondaryGreen rounded-xl lg:text-base md:block hidden",white && 'bg-secondaryGreen hover:bg-secondaryGreen/90 text-white')}
              asChild
            >
              <Link href={"/booking"}>My booking</Link>
            </Button>
          );

        return (
         <NavPopover key={label} data={brands} title={label} Icon={icon!} type={type} brand={brand}/>
        );
      })}
    </nav>
  );
};

export default NavLinks;
