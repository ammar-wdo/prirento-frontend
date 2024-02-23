"use client";

import { calculateDiscount, fetcher, poster } from "@/lib/utils";
import { CHECK_DISCOINT_PROXY, POST_BOOKING_PROXY } from "@/links";


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
 fee:number | false

}
export const useBooking = ({subtotal,deliveryFee,deposit,fee}:Props) => {
  const searchParams = useSearchParams();
  const params = useParams();

  const [loading, setLoading] = useState(false);
 
  const [discountResponse, setDiscountResponse] = useState<DiscountResponse>(null);

  const resetDiscount = ()=>{
    setDiscountResponse(null)
  }


  const discountValue =(discountResponse?.discount && !!fee) ?calculateDiscount(fee,discountResponse.discount.type,discountResponse.discount.value) : null

  console.log(discountResponse)
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
   
      setLoading(true);

      const res = await axios
        .post<{
          success: boolean;
          error?: string;
          discount: ReturnedDiscount | null;
        }>(CHECK_DISCOINT_PROXY, body)
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
      pickupLocation:searchParams.get("location") as string,
      dropoffLocation:searchParams.get("dropOffLocation") || "",
      
    },
  });

  async function onSubmit(values: z.infer<typeof bookingSchema>) {
   try {
    const res = await axios.post<{url:string|undefined,success:boolean,error?:string}>(POST_BOOKING_PROXY,{values,params:params.carSlug,discountCode:discountResponse?.discount?.promocode || null}).then(data=>data.data)
    console.log(res)
    if(!res.success){
      toast.error(res.error,{duration:10000})
    }

    else {
      toast.success(res.url)
    }
   } catch (error) {
    console.log(error)
    toast.error("Something went wrong")
   }
  }


  

  return { form, onSubmit, applyPromo, discountResponse, loading ,resetDiscount ,discountValue,totalAmount};
};
