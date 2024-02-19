import React from 'react'

type Props = {
    title:string,
    value:string | number
}

const CarInfo = ({title,value}: Props) => {
  return (
    <div className="flex items-center justify-between  pb-3 border-b">
    <span className="text-muted-foreground">{title}</span>
    <span className=" font-medium capitalize">{value}</span>
  </div>
  )
}

export default CarInfo