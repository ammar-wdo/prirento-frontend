import React from "react";
import KeyValue from "./key-value";

type Props = {
  subtotal: number;
  deliveryFee: number | null;
  deposit: number;
};

const CarFixedValues = ({ subtotal, deliveryFee, deposit }: Props) => {
  return (
    <div className="flex w-full flex-col gap-3">
      <KeyValue title="rental price" description={`${subtotal} AED`} />
      <KeyValue title="refundable deposit" description={`${deposit} AED`} />
      {!!deliveryFee && (
        <KeyValue title="delivery fee" description={`${deliveryFee} AED`} />
      )}
    </div>
  );
};

export default CarFixedValues;
