'use client'

import { bookingSchema } from "@/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"


export const useBooking = ()=>{



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
          billingContactNumber:"",
          billingCountry:"",
          billingCity:"",
          billingZipcode:"",
          business:false,
          companyName:"",
          campanyVat:"",
          startDate:"",
          endDate:"",
          startTime:"",
          endTime:"",
          subtotal:undefined,
          reservationFee:undefined,
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