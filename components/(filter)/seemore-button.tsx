'use client'

import React from 'react'
import { Button } from '../ui/button'

type Props = {
    seeMore:boolean,
    setSeeMore:(val:boolean)=>void
}

const SeeMoreButton = ({seeMore,setSeeMore}: Props) => {
  return (
    <Button
    className="w-fit font-semibold px-0"
    onClick={() => setSeeMore(!!seeMore ? false : true)}
    variant={"link"}
  >
    {seeMore ? "See less" : "See more"}
  </Button>
  )
}

export default SeeMoreButton