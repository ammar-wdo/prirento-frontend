"use client";

import {
  calculateDiscount,
  extractsuperadminRuleWithValueToPay,
  fetcher,
  poster,
} from "@/lib/utils";
import { CHECK_DISCOINT_PROXY, POST_BOOKING_PROXY } from "@/links";

import { bookingSchema } from "@/schemas";
import { CarSuperAdminRule, DiscountResponse, ReturnedDiscount } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { CarExtraOptions } from "@/types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

type Props = {
  subtotal: number;
  deliveryFee: number | null;
  deposit: number;
  fee: number | false;
  mandatorySuperAdminRules: CarSuperAdminRule[];
};
export const useBooking = ({
  subtotal,
  deliveryFee,
  deposit,
  fee,
  mandatorySuperAdminRules,
}: Props) => {
  const searchParams = useSearchParams();
  const params = useParams();

  const [loading, setLoading] = useState(false);

  const [discountResponse, setDiscountResponse] =
    useState<DiscountResponse>(null);
  const [carExtraOptions, setCarExtraOptions] = useState<CarExtraOptions[]>([]);

  const [optionalSuperAdminRules, setOptionalSuperAdminRues] = useState<
    CarSuperAdminRule[]
  >([]);

  //handle click on extra option component
  const handleExtraOptions = (clickedExtraOption: CarExtraOptions) => {
    if (!clickedExtraOption.id) return;
    const options = carExtraOptions;

    if (!options.find((el) => el.id === clickedExtraOption.id)) {
      return setCarExtraOptions((prev) => [...prev, clickedExtraOption]);
    }

    const newOptions = options.filter((el) => el.id !== clickedExtraOption.id);
    setCarExtraOptions(newOptions);
  };

  //the ids of extra options
  const carExtraOptionsIds = carExtraOptions.map((option) => option.id);

  // the price of all extra options
  const carExtraOptionPrice = carExtraOptions.reduce(
    (acc, val) => val.price + acc,
    0
  );

  //handle click on optional super admin  rule

  const handleOptionalSuperAdminRule = (rule: CarSuperAdminRule) => {
    if (!rule.id) return;
    if (!optionalSuperAdminRules.find((el) => el.id === rule.id))
      return setOptionalSuperAdminRues((prev) => [...prev, rule]);

    const newOptionalRules = optionalSuperAdminRules.filter(
      (el) => el.id !== rule.id
    );
    setOptionalSuperAdminRues(newOptionalRules);
  };

  //the ids of optional super admin rules
  const optionalSuperAdminRulesIds = optionalSuperAdminRules.map(
    (rule) => rule.id
  );

  // reset discount
  const resetDiscount = () => {
    setDiscountResponse(null);
  };

  // calculate discount if any
  const discountValue =
    discountResponse?.discount && !!fee
      ? calculateDiscount(
          fee,
          discountResponse.discount.type,
          discountResponse.discount.value
        )
      : null;

  //extract price o pay from mandatory super admin rules

  const mandatoryRulesPriceToPay = !!mandatorySuperAdminRules.length
    ? mandatorySuperAdminRules.reduce((acc, val) => acc + val.valueToPay, 0)
    : 0;

  //extract price o pay from optional super admin rules

  const optionalRulesPriceToPay = !!optionalSuperAdminRules.length
    ? optionalSuperAdminRules.reduce((acc, val) => acc + val.valueToPay, 0)
    : 0;

  // calculate total amount
  const totalAmount =
    subtotal +
    deposit +
    mandatoryRulesPriceToPay +
    optionalRulesPriceToPay +
    (deliveryFee || 0) -
    (discountValue || 0) +
    carExtraOptionPrice;

  //calculate pay now which is our percentage minuse discount if exists
  const payNow = (fee as number) - (discountValue || 0);

  //calculate the remaining value after substracting our value (the payNow value)
  const payLater = totalAmount - payNow;

  // apply promocode function
  const applyPromo = async (val: string) => {
    const body = {
      startDate: searchParams.get("startDate"),
      endDate: searchParams.get("endDate"),
      startTime: searchParams.get("startTime"),
      endTime: searchParams.get("endTime"),
      promocode: val,
      params: params.carSlug,
    };

    try {
      setLoading(true);

      const res = await axios
        .post<{
          success: boolean;
          error?: string;
          discount: ReturnedDiscount | null;
        }>(CHECK_DISCOINT_PROXY, body)
        .then((data) => data.data);

      setDiscountResponse(res);
    } catch (error) {
      console.log("error", error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  //form definition
  const form = useForm<z.infer<typeof bookingSchema>>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      contactNumber: "+971",
      countryOfResidance: "",
      billingAddress: "",
      billingFirstName: "",
      billingLastname: "",
      billingContactNumber: "+971",
      billingCountry: "",
      billingCity: "",
      billingZipcode: "",
      business: false,
      companyName: "",
      companyVat: "",
      startDate: searchParams.get("startDate") as string,
      endDate: searchParams.get("endDate") as string,
      startTime: searchParams.get("startTime") as string,
      endTime: searchParams.get("endTime") as string,
      terms: false,
      paymentMethod: "CREDIT_CARD",
      pickupLocation: searchParams.get("location") as string,
      dropoffLocation: searchParams.get("dropOffLocation") || "",
    },
  });
const router = useRouter()
  async function onSubmit(values: z.infer<typeof bookingSchema>) {
    try {
      const res = await axios
        .post<{ url: string | undefined; success: boolean; error?: string }>(
          POST_BOOKING_PROXY,
          {
            values,
            params: params.carSlug,
            discountCode: discountResponse?.discount?.promocode || null,
            carExtraOptionsIds: !!carExtraOptionsIds.length
              ? carExtraOptionsIds
              : null,
            optionalSuperAdminRulesIds: !!optionalSuperAdminRulesIds.length
              ? optionalSuperAdminRulesIds
              : null,
          }
        )
        .then((data) => data.data);
      console.log(res);
      if (!res.success) {
     return   toast.error(res.error, { duration: 10000 });
      } else {
       router.push(res.url as string);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  }

  return {
    form,
    onSubmit,
    applyPromo,
    discountResponse,
    loading,
    resetDiscount,
    discountValue,
    totalAmount,
    payLater,
    payNow,
    handleExtraOptions,
    carExtraOptions,
    handleOptionalSuperAdminRule,
    optionalSuperAdminRules,
  };
};
