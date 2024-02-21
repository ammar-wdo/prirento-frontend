"use client";

import { calculateDiscount, fetcher, poster } from "@/lib/utils";
import { DISCOUNT_PROXY, GET_CAR } from "@/links";
import { bookingSchema } from "@/schemas";
import { DiscountResponse, ReturnedDiscount } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useParams, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";


type Props = {
  subtotal:number,
  deliveryFee:number | null
  deposit:number

}
export const useBooking = ({subtotal,deliveryFee,deposit}:Props) => {
  const searchParams = useSearchParams();
  const params = useParams();

  const [loading, setLoading] = useState(false);
 
  const [discountResponse, setDiscountResponse] = useState<DiscountResponse>(null);

  const resetDiscount = ()=>{
    setDiscountResponse(null)
  }

  const discountValue =discountResponse?.discount ?calculateDiscount(subtotal,discountResponse.discount.type,discountResponse.discount.value) : null
  const totalAmount = subtotal + deposit + (deliveryFee || 0) - (discountValue || 0)

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
      console.log(process.env.API_SECRET);
      setLoading(true);

      const res = await axios
        .post<{
          success: boolean;
          error?: string;
          discount: ReturnedDiscount | null;
        }>(DISCOUNT_PROXY, body)
        .then((data) => data.data);

        setDiscountResponse(res)

   
     
    } catch (error) {
      console.log("error", error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

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
    },
  });

  function onSubmit(values: z.infer<typeof bookingSchema>) {
    alert(JSON.stringify(values));
    console.log(values);
  }


  

  return { form, onSubmit, applyPromo, discountResponse, loading ,resetDiscount ,discountValue,totalAmount};
};
