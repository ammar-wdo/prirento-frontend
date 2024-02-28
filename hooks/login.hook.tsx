
import { loginAction } from "@/actions/login-action"
import { loginSchema } from "@/schemas"
import { Booking } from "@/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"


export const useLogin = ()=>{

  const [error, setError] = useState('')
  const [booking, setBooking] = useState<Booking | null>(null)
  const resetBooking = ()=>{
    setBooking(null)
  }




    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
          email: "",
          bookingCode:""
        },
      })


      const email = form.watch('email')
      const bookingCode = form.watch('bookingCode')
      
      useEffect(()=>{
        setError('')
      },[email,bookingCode ])



      async function onSubmit(values: z.infer<typeof loginSchema>) {
    
try {
  setError('')
  const res = await loginAction(values)
if(res.error) return setError(res.error)
if(res.booking) setBooking(res.booking)

} catch (error) {
  console.log(error)
  toast.error("Something went wrong")
}
      }

return {form, onSubmit,error, booking, resetBooking}

}