"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

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
  },
  {
    label: "Rent by type",
    icon: <ChevronDown className="ml-1 w-3 h-3" />,
  },
  {
    label: "My booking",
    button: true,
  },
];

type Props = {white?:boolean};

const NavLinks = ({white}: Props) => {
  return (
    <nav className={cn("flex md:items-center lg:gap-12 md:gap-6 md:text-white text-main  text-lg sm:text-xs items-start lg:text-base font-normal md:flex-row flex-col gap-12",white && 'md:text-main')}>
      {links.map(({ label, href, button, icon }) => {
        if (href)
          return (
            <Link key={label} href={href} className="capitalize">
              {label}
            </Link>
          );
        if (button)
          return (
            <Button key={label}
              className={cn("bg-white hover:bg-white/90 text-main rounded-xl lg:text-base md:block hidden",white && 'bg-main hover:bg-main/90 text-white')}
              asChild
            >
              <Link href={"/booking"}>My booking</Link>
            </Button>
          );

        return (
          <span key={label} className="capitalize cursor-pointer flex items-center">
            {label}
            {icon}
          </span>
        );
      })}
    </nav>
  );
};

export default NavLinks;
