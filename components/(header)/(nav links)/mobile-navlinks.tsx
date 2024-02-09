"use client";

import Link from "next/link";

import { ArrowLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import NavItemsMenu from "./nav-items-menu";
import { Button } from "../../ui/button";
import { AnimatePresence, motion } from "framer-motion";
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
    icon: <ChevronRight className="ml-1 w-3 h-3" />,
    brand: true,
  },
  {
    label: "Rent by type",
    icon: <ChevronRight className="ml-1 w-3 h-3" />,
    type: true,
  },
];

type Props = {brands:BrandType[]};

const MobileNavLinks = ({brands}:Props) => {
  const [showBrands, setShowBrands] = useState(false);
  const [showTypes, setShowTypes] = useState(false);

  const overlayVariants = {
    initial: { opacity: 0, x: -10 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 10 },
  };
  return (
    <AnimatePresence>
      {showBrands && (
        <motion.div className="flex flex-col "
    variants={overlayVariants}
    initial='initial'
    animate='animate'
    exit={'exit'}
        >
          <Button
            className=" self-start  "
            onClick={() => setShowBrands(false)}
            variant={'link'}
          >
            <ArrowLeft className="w-5 h-5"/>
            Back
          </Button>
          <NavItemsMenu aside={true} data={brands} type="brand"  title="Brands" />
        </motion.div>
      )}
      {showTypes && (
        <motion.div className="flex flex-col  "
        variants={overlayVariants}
        initial='initial'
        animate='animate'
        exit={'exit'}
        >
          <Button
            className="  self-start"
            onClick={() => setShowTypes(false)}
            variant={'link'}
          >
        <ArrowLeft className="w-5 h-5"/>
            Back
          </Button>
          <NavItemsMenu  type="type" title="Cars type" />
        </motion.div>
      )}
      {!showBrands && !showTypes && (
        <motion.nav
        variants={overlayVariants}
        initial='initial'
        animate='animate'
        exit={'exit'}
          className={cn(
            "flex items-start  text-main    text-sm font-normal flex-col  "
          )}
        >
          {links.map(({ label, href, icon, brand, type }) => {
            if (href)
              return (
                <Link
                  key={label}
                  href={href}
                  className="capitalize border-b py-8 w-full px-4"
                >
                  {label}
                </Link>
              );

            return (
              <span
              key={label}
                className="capitalize cursor-pointer flex items-center relative z-8  border-b py-10 w-full px-4"
                onClick={() =>
                  brand ? setShowBrands(true) : setShowTypes(true)
                }
              >
                {label}
                {icon}
              </span>
            );
          })}
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default MobileNavLinks;
