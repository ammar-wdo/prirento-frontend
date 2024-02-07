import React from "react";
import NavLinks from "../nav-links";
import Image from "next/image";
import { Menu, UserRound } from "lucide-react";
import Link from "next/link";
import SidebarSheet from "../sidebar-sheet";
import { cn } from "@/lib/utils";

type Props = {
    white?:boolean
};

const MainHeader = ({white}: Props) => {
  return (
    <header className={cn("bg-main",white && 'bg-white')}>
      <div className="container h-24 flex items-center justify-between">
        {!white ?<div>
          <Image src={"/main-logo.png"} width={100} height={100} alt="logo" />
        </div>
         :<div>
          <Image src={"/logo-content.png"} width={100} height={100} alt="logo" />
        </div>}

        <div className="hidden md:block">
          <NavLinks white={white}/>
        </div>
        <div className="md:hidden flex items-center gap-4">
          <Link href={"/booking"}>
            {" "}
            <span className={cn("w-10 h-10 flex items-center justify-center bg-white rounded-full text-main cursor-pointer",white && 'bg-main text-white')}>
              <UserRound />
            </span>
          </Link>

          <SidebarSheet white={white} />
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
