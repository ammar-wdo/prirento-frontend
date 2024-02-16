"use client";

import { useSearchParams } from "next/navigation";
import React, { useEffect, useRef } from "react";

type Props = {};

const Scroller = (props: Props) => {
  const scrollerRef = useRef<null | HTMLDivElement>(null);
const searchParams = useSearchParams()
  useEffect(()=>{
    console.log('searchParams keys',searchParams.toString())
    if(!!searchParams.toString()){
  
      scrollerRef.current?.scrollIntoView({behavior:'smooth',block:'center'})
    }
 
  },[searchParams.toString()])
  return <div ref={scrollerRef} />;
};

export default Scroller;
