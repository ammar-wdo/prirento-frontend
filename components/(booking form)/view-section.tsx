"use client";

import ImageDateWrapper from "./image-date-wrapper";
import PromocodeInput from "./promocode-input";
import ViewItemsWrapper from "./view-items-wrapper";
import CarFixedValues from "./car-fixed-values";
import { DiscountResponse } from "@/types";

import KeyValue from "./key-value";

type Props = {
  discountValue: number | null;
  resetDiscount: () => void;
  carImage: string;
  startDate: Date;
  endDate: Date;
  carName: string;
  discountResponse: DiscountResponse;
  loading: boolean;
  applyPromo: (val: string) => void;
  deliveryFee: number | null;
  subtotal: number;
  deposit: number;
  totalAmount: number;
};

const ViewSection = ({
  discountValue,
  resetDiscount,
  carImage,
  startDate,
  endDate,
  carName,
  discountResponse,
  loading,
  applyPromo,
  deliveryFee,
  deposit,
  subtotal,
  totalAmount,
}: Props) => {
  return (
    <article className="border rounded-xl p-6 pb-8 self-start sticky top-8 order-1 sm:order-2">
      <h3 className="text-3xl font-bold pb-4 border-b">Booking Summary</h3>

      <ViewItemsWrapper>
        <ImageDateWrapper
          carImage={carImage}
          carName={carName}
          startDate={startDate}
          endDate={endDate}
        />
      </ViewItemsWrapper>

      <ViewItemsWrapper>
        <PromocodeInput
          resetDiscount={resetDiscount}
          loading={loading}
          discountResponse={discountResponse}
          submit={(val: string) => {
            applyPromo(val);
          }}
        />
      </ViewItemsWrapper>

      <ViewItemsWrapper>
        <CarFixedValues
          deliveryFee={deliveryFee}
          deposit={deposit}
          subtotal={subtotal}
        />
      </ViewItemsWrapper>

      {!!discountValue && (
        <ViewItemsWrapper>
          <KeyValue title="Discount" description={`${discountValue} AED`} />
        </ViewItemsWrapper>
      )}

      <ViewItemsWrapper>
        <KeyValue title="Total amount" description={`${totalAmount} AED`} />
      </ViewItemsWrapper>
    </article>
  );
};

export default ViewSection;
