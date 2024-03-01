"use client";
import { Booking } from "@/types";
import React from "react";
import KeyValue from "./(booking form)/key-value";
import { formatDate, stringParser } from "@/lib/utils";
import { Button } from "./ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Props = {
  booking: Booking;
  resetBooking: () => void;
};

const LoginBookingInfo = ({ booking, resetBooking }: Props) => {
  const { extraOptions, adminRules, startDate, endDate, createdAt, ...rest } =
    booking;

  const formattedStartDate = formatDate(new Date(startDate));
  const formattedEndDate = formatDate(new Date(endDate));
  const formattedCreatedAt = formatDate(new Date(createdAt),"en-GB",{
    timeZone: "Asia/Dubai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false, 
  });

  return (
    <Accordion type="multiple">
      {/* Car Details */}
      <AccordionItem value="Car Details">
        <AccordionTrigger>Booking Details</AccordionTrigger>
        <AccordionContent>
          <KeyValue
            className="py-3 hover:bg-muted transition"
            title={"Booking Code"}
            description={booking.bookingCode}
          />
          <KeyValue
            className="py-3 hover:bg-muted transition"
            title={"Car Name"}
            description={booking.carName}
          />
          <KeyValue
            className="py-3 hover:bg-muted transition"
            title={"Pick-up Location"}
            description={booking.pickupLocation}
          />
          <KeyValue
            className="py-3 hover:bg-muted transition"
            title={"Drop-off Location"}
            description={booking.dropoffLocation || booking.pickupLocation}
          />
          <KeyValue
            className="py-3 hover:bg-muted transition"
            title={"Booking Date"}
            description={formattedCreatedAt}
          />
          <KeyValue
            className="py-3 hover:bg-muted transition"
            title={"Pick-up Date"}
            description={formattedStartDate}
          />
          <KeyValue
            className="py-3 hover:bg-muted transition"
            title={"Drop-off Date"}
            description={formattedEndDate}
          />
        </AccordionContent>
      </AccordionItem>
        {/* Driver Details */}
      <AccordionItem value="Driver Details">
        <AccordionTrigger>Driver Details</AccordionTrigger>
        <AccordionContent>
          <KeyValue
            className="py-3 hover:bg-muted transition"
            title={"First Name"}
            description={booking.firstName}
          />
          <KeyValue
            className="py-3 hover:bg-muted transition"
            title={"Last Name"}
            description={booking.lastName}
          />
          <KeyValue
            className="py-3 hover:bg-muted transition"
            title={"Contact Number"}
            description={`+${booking.contactNumber}`}
          />
          <KeyValue
            className="py-3 hover:bg-muted transition"
            title={"E-mail"}
            description={booking.email}
          />
        </AccordionContent>
      </AccordionItem>
        {/* Billing Details */}
      <AccordionItem value="Billing Details">
        <AccordionTrigger>Billing Details</AccordionTrigger>
        <AccordionContent>
          <KeyValue
            className="py-3 hover:bg-muted transition"
            title={"Billing First Name"}
            description={booking.billingFirstName}
          />
          <KeyValue
            className="py-3 hover:bg-muted transition"
            title={"Billing Last Name"}
            description={`+${booking.billingLastname}`}
          />
          <KeyValue
            className="py-3 hover:bg-muted transition"
            title={"Billing Contact Number"}
            description={`+${booking.billingContactNumber}`}
          />
          <KeyValue
            className="py-3 hover:bg-muted transition"
            title={"Billing Country"}
            description={booking.billingCountry}
          />
          <KeyValue
            className="py-3 hover:bg-muted transition"
            title={"Billing City"}
            description={booking.billingCity}
          />
          <KeyValue
            className="py-3 hover:bg-muted transition"
            title={"Billing Address"}
            description={booking.billingAddress}
          />
          <KeyValue
            className="py-3 hover:bg-muted transition"
            title={"Billing Postcode"}
            description={booking.billingZipcode}
          />
        </AccordionContent>
      </AccordionItem>
        {/* Payment Details */}
      <AccordionItem value="Payment Details">
        <AccordionTrigger>Payment Details</AccordionTrigger>
        <AccordionContent>
          <KeyValue
            className="py-3 hover:bg-muted transition"
            title={"Payment Method"}
            description={booking.paymentMethod}
          />
          <KeyValue
            className="py-3 hover:bg-muted transition"
            title={"Paid Amount"}
            description={`AED ${booking.payNow.toFixed(2)}`}
          />
          <KeyValue
            className="py-3 hover:bg-muted transition"
            title={"To Pay "}
            description={`AED ${booking.payLater.toFixed(2)}`}
          />
          <KeyValue
            className="py-3 hover:bg-muted transition"
            title={"Total"}
            description={`AED ${booking.total.toFixed(2)}`}
          />
     
        </AccordionContent>
      </AccordionItem>

      <Button
        className="mt-12 p-0 h-auto"
        variant={"link"}
        onClick={resetBooking}
      >
        Back
      </Button>
    </Accordion>
  );
};

export default LoginBookingInfo;
