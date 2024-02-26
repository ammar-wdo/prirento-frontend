import { poster } from "@/lib/utils"
import { CONTACT_PROXY } from "@/links"
import { contactSchema } from "@/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"


export const useContact = ()=>{


    const form = useForm<z.infer<typeof contactSchema>>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
          firstName: "",
          lastName:"",
          email:"",
          subject:"",
          message:""
        },
        
      })


      async function onSubmit(values: z.infer<typeof contactSchema>) {
        try {

            const res = await axios.post<{success:boolean,error?:string,message?:string}>(CONTACT_PROXY,values).then(data=>data.data)

            if(!res.success) return toast.error(res.error as string)

            toast.success(res.message as string)
            
        } catch (error) {
            toast.error('Something went wrong')
            console.log(error)
        }
   
      }


      return {form, onSubmit}
}