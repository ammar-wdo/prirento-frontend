'use client'
import Script from 'next/script';
import { useEffect, useState } from 'react';

const MetriCool = () => {
    const [mount, setMount] = useState(false)
    useEffect(()=>{
        setMount(true)
    },[])

    if(!mount) return null
  return (

      <Script
        src="https://tracker.metricool.com/resources/be.js"
        strategy="lazyOnload"
        onLoad={() => {
            window.beTracker?.t({hash:"22a168115b3d7b63a5ac636351178ff6"});
        }}
      />
 

  );
};

export default MetriCool;