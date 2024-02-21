"use client";

import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Loader, XIcon } from "lucide-react";
import { DiscountResponse } from "@/types";
import ErrorComponent from "../error-component";
import InfoAnimator from "../(car)/info-animator";

type Props = {
  submit: (val: string) => void;
  discountResponse: DiscountResponse;
  loading: boolean;
  resetDiscount: () => void;
};

const PromocodeInput = ({
  submit,
  discountResponse,
  loading,
  resetDiscount,
}: Props) => {
  const [text, setText] = useState("");

  let errorMessage = discountResponse?.error;
  const discount = discountResponse?.discount;

  const handleType = (val: string) => {
    setText(val);
    if (!discount && errorMessage) {
      resetDiscount();
    }
  };

  return (
    <div className="w-full">
      <div className="flex items-stretch gap-3">
        <Input
          value={text}
          onChange={(e) => {
            handleType(e.target.value);
          }}
          placeholder="Gift or discount code"
          className="focus-visible:ring-offset-0 focus-visible:ring-0 focus:ring-0 focus:ring-transparent focus-visible:ring-transparent"
        />
        <Button
          variant={"siteMain"}
          type="button"
          disabled={!text || loading || !!discount}
          onClick={() => {
            submit(text);
            setText("");
          }}
          className="self-stretch h-auto md:w-[150px] sm:w-[100px] text-sm sm:text-base"
        >
          Apply {loading && <Loader className="animate-spin ml-2 w-4 h-4" />}
        </Button>
      </div>

      {errorMessage && (
        <div className="mt-4">
          <ErrorComponent description={errorMessage} />
        </div>
      )}
      {discount && (
        <InfoAnimator>
          {" "}
          <div className="flex items-center gap-9 px-6 py-4 rounded-xl bg-muted w-fit text-xs mt-4 relative">
            <span>{discount.promocode}</span>
            <button
              onClick={resetDiscount}
              type="button"
              className="absolute -top-2 -right-2 cursor-pointer p-1 rounded-full border-black border bg-white"
            >
              <XIcon className="h-3 w-3" />
            </button>
          </div>
        </InfoAnimator>
      )}
    </div>
  );
};

export default PromocodeInput;
