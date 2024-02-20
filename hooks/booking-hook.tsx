'use client'

import { bookingSchema } from "@/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { useSearchParams } from "next/navigation"
import { useForm } from "react-hook-form"
import { z } from "zod"


export const useBooking = ()=>{


    const searchParams = useSearchParams()


    const form = useForm<z.infer<typeof bookingSchema>>({
        resolver: zodResolver(bookingSchema),
        defaultValues: {
          firstName: "",
          lastName:"",
          email:"",
          contactNumber:"+971",
          countryOfResidance:"",
          billingAddress:"",
          billingFirstName:"",
          billingLastname:"",
          billingContactNumber:"+971",
          billingCountry:"",
          billingCity:"",
          billingZipcode:"",
          business:false,
          companyName:"",
          companyVat:"",
          startDate:searchParams.get('startDate') as string,
          endDate:searchParams.get("endDate") as string,
          startTime:searchParams.get("startTime") as string,
          endTime:searchParams.get("endTime") as string,
          terms:false,
          paymentMethod:'CREDIT_CARD', 
        },
      })



      function onSubmit(values: z.infer<typeof bookingSchema>) {
      alert(JSON.stringify(values))
        console.log(values)
      }

      return {form,onSubmit}
}