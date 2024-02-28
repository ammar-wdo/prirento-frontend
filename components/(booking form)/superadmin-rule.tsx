"use client";

import { cn } from "@/lib/utils";
import { CarSuperAdminRule } from "@/types";
import { Check } from "lucide-react";
import Image from "next/image";
import React from "react";
import PopOver from "../pop-over";

type Props = {
  superAdminRule: CarSuperAdminRule;
  active: boolean;
  handleClick: () => void;
};

const SuperadminRule = ({ superAdminRule, active, handleClick }: Props) => {
  return (
    <div
      className={cn(
        "p-4 rounded-xl flex  items-center justify-between hover:bg-muted border cursor-pointer active:scale-[0.99] hover:opacity-80 sm:gap-12 gap-2 transition",
        active && "   bg-muted"
      )}
      onClick={handleClick}
    >
      <div className="flex items-center  flex-1">
        <span
          className={cn(
            "relative mr-2 w-5  h-5 rounded-sm flex items-center justify-center border border-black transition shrink-0 bg-white",
            active && "bg-main"
          )}
        >
          {active && <Check className=" text-white w-5 h-5 absolute " />}
        </span>

        <p className="capitalize text-xs sm:text-base">
          {superAdminRule.label}
        </p>
      </div>


      {/* right */}
      <div className="flex items-center gap-4">
        {" "}
        <div className="font-medium">{superAdminRule.valueToPay} AED</div>
        <div className="relative rounded-full w-12 h-12 hidden sm:block">
          <Image
            src={"/loader-logo.png"}
            fill
            alt="logo"
            className="object-contain"
          />
        </div>
        <span className="ml-auto">
          <PopOver description={superAdminRule.description} />
        </span>
      </div>
    </div>
  );
};

export default SuperadminRule;
