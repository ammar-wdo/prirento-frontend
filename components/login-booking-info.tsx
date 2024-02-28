import { Booking } from "@/types";
import React from "react";
import KeyValue from "./(booking form)/key-value";
import { formatDate, stringParser } from "@/lib/utils";

type Props = {
  booking: Booking;
  resetBooking: () => void;
};

const LoginBookingInfo = ({ booking, resetBooking }: Props) => {
  const { extraOptions, adminRules, startDate, endDate, createdAt, ...rest } =
    booking;

  const formattedStartDate = formatDate(new Date(startDate));
  const formattedEndDate = formatDate(new Date(endDate));
  const formattedCreatedAt = formatDate(new Date(createdAt));

  return (
    <div className="w-full">
      {Object.entries(rest).map(([key, value], index) => (
        <KeyValue
          title={key}
          description={stringParser(value) || "N/A"}
          key={index}
        />
      ))}
      <KeyValue title={"Start Date"} description={formattedStartDate} />
      <KeyValue title={"End Date"} description={formattedEndDate} />
      <KeyValue title={"Booked at"} description={formattedCreatedAt} />
    </div>
  );
};

export default LoginBookingInfo;