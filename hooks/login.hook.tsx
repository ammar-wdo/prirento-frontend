
import { loginSchema } from "@/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"


export const useLogin = ()=>{



    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
          email: "",
          bookingCode:""
        },
      })



      function onSubmit(values: z.infer<typeof loginSchema>) {
    

      }

return {form, onSubmit}

}