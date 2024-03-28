import React from "react";
import NavLinks from "./(nav links)/nav-links";
import Image from "next/image";
import { Menu, UserRound } from "lucide-react";
import Link from "next/link";
import SidebarSheet from "./(nav links)/sidebar-sheet";
import { cn, fetcher } from "@/lib/utils";
import Logo from "./logo";
import { GET_BRANDS } from "@/links";
import { BrandType } from "@/types";

type Props = {
  white?: boolean;
  transparent?:boolean
};

const MainHeader = async({ white,transparent }: Props) => {
  const brands = await fetcher<{brands:BrandType[]}>(GET_BRANDS).then(data=>data.brands)

  return (
    <header className={cn("bg-main", white && "bg-white",transparent && 'bg-transparent relative ')}>
      <div className="container h-24 flex items-center justify-between">
        <Link href={'/'}>
       <Logo white={white}/>
        </Link>
      

        <div className="hidden md:block">
          <NavLinks brands={brands} white={white} />
        </div>
        <div className="md:hidden flex items-center gap-4">
          <Link href={"/booking"}>
            {" "}
            <span
              className={cn(
                "w-10 h-10 flex items-center justify-center bg-white rounded-full text-main cursor-pointer",
                white && "bg-main text-white"
              )}
            >
              <UserRound />
            </span>
          </Link>

          <SidebarSheet brands={brands} white={white} />
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
