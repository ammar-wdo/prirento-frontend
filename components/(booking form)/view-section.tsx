"use client";

import ImageDateWrapper from "./image-date-wrapper";
import PromocodeInput from "./promocode-input";
import ViewItemsWrapper from "./view-items-wrapper";
import CarFixedValues from "./car-fixed-values";
import { CarExtraOptions, CarSuperAdminRule, DiscountResponse } from "@/types";

import KeyValue from "./key-value";
import FinalPayment from "./final-payment";
import InfoAnimator from "../(car)/info-animator";


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
  payLater: number;
  payNow: number;
  carExtraOptionsState: CarExtraOptions[];
  mandatorySuperAdminRules:CarSuperAdminRule[]
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
  payLater,
  payNow,
  carExtraOptionsState,
  mandatorySuperAdminRules
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
      {/* mandatory super admin rules */}
      {!!mandatorySuperAdminRules.length &&  <ViewItemsWrapper>
          {mandatorySuperAdminRules.map((rules) => (
          
              <KeyValue
              key={rules.id}
                title={rules.label}
                description={`${rules.value} AED or %`}
              />
       
          ))}
        </ViewItemsWrapper> }

      {/* car extra options */}
      {!!carExtraOptionsState.length  && (
        <ViewItemsWrapper>
          {carExtraOptionsState.map((option) => (
            <InfoAnimator key={option.id}>
              <KeyValue
                title={option.label}
                description={`${option.price} AED`}
              />
            </InfoAnimator>
          ))}
        </ViewItemsWrapper>
      )}

      {/* discount value */}
      {!!discountValue && (
        <ViewItemsWrapper>
          <KeyValue title="Discount" description={`${discountValue} AED`} />
        </ViewItemsWrapper>
      )}

      {/* total amount */}
      <ViewItemsWrapper>
        <KeyValue title="Total amount" description={`${totalAmount} AED`} />
      </ViewItemsWrapper>

      {/* pay now and later */}
      <ViewItemsWrapper>
        <FinalPayment
          title="Pay now"
          description={"Overall price that you will pay now via checkout"}
          value={payNow}
        />

        <FinalPayment
          title="Pay later"
          description={"Overall price that you will pay at the rental company"}
          value={payLater}
        />
      </ViewItemsWrapper>
    </article>
  );
};

export default ViewSection;
