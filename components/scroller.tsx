"use client";

import { useSearchParams } from "next/navigation";
import React, { useEffect, useRef } from "react";

type Props = {};

const Scroller = (props: Props) => {
  const scrollerRef = useRef<null | HTMLDivElement>(null);
const searchParams = useSearchParams()
  useEffect(()=>{
    if(searchParams.get('carType')){
      scrollerRef.current?.scrollIntoView({behavior:'smooth'})
    }
 
  },[])
  return <div ref={scrollerRef} />;
};

export default Scroller;
