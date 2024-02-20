"use client";

import { extractUTCTime, formatDate } from "@/lib/utils";
import Image from "next/image";
import ImageDateWrapper from "./image-date-wrapper";
import PromocodeInput from "./promocode-input";
import ViewItemsWrapper from "./view-items-wrapper";
import CarFixedValues from "./car-fixed-values";

type Props = {
  carImage: string;
  startDate: Date;
  endDate: Date;
  carName: string;
  promocode: string | undefined;
  loading: boolean;
  applyPromo: (val: string) => void;
  deliveryFee: number | null;
  subtotal: number;
  deposit: number;
};

const ViewSection = ({
  carImage,
  startDate,
  endDate,
  carName,
  promocode,
  loading,
  applyPromo,
  deliveryFee,
  deposit,
  subtotal,
}: Props) => {
  return (
    <article className="border rounded-xl p-6 pb-8 self-start sticky top-8">
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
          loading={loading}
          promocode={promocode}
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
    </article>
  );
};

export default ViewSection;
