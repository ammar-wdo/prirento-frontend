import { extractUTCTime, formatDate } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

type Props = {
    carImage:string
    startDate:Date
    endDate:Date
    carName:string
}

const ImageDateWrapper = ({carImage,startDate,endDate,carName}: Props) => {

    const startDateValue = new Date(startDate);
    const endDateValue = new Date(endDate);
  
    const startTime = extractUTCTime(startDateValue);
    const endTime = extractUTCTime(endDateValue);
  return (
    <div className=" flex  gap-4 ">
    <div className="w-48 aspect-video relative rounded-xl overflow-hidden">
      <Image
        src={carImage}
        fill
        className="object-cover  "
        alt="car image"
      />
    </div>
    <div className="p-4">
      <h3 className="text-lg font-medium capitalize">{carName}</h3>
      <p className="text-muted-foreground mt-2">
        Pick-up date:{" "}
        <span>
          on{" "}
          {formatDate(startDateValue, "en-GB", {
            timeZone: "UTC",
            weekday: "short", // "Sat"
            day: "2-digit", // "17"
            month: "short", // "Feb"
            year: "numeric", // "2024"
          })}
          , at{" "}
        </span>
        <span>{startTime}</span>
      </p>
      <p className="text-muted-foreground">
        Drop-off date:{" "}
        <span>
          on{" "}
          {formatDate(endDateValue, "en-GB", {
            timeZone: "UTC",
            weekday: "short", // "Sat"
            day: "2-digit", // "17"
            month: "short", // "Feb"
            year: "numeric", // "2024"
          })}
          , at{" "}
        </span>
        <span>{endTime}</span>
      </p>
    </div>
  </div>
  )
}

export default ImageDateWrapper