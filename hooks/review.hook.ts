import { reviewAction } from "@/actions/review-action"
import { reviewSchema } from "@/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { useParams, useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"


export const useReview = ()=>{

    const form = useForm<z.infer<typeof reviewSchema>>({
        resolver: zodResolver(reviewSchema),
        defaultValues: {
          rate: 3,
          reviewContent:"",
          visibility:'FULLNAME'
        },
      })

      const params = useParams()
      const router = useRouter()

      async function onSubmit(values: z.infer<typeof reviewSchema>) {
     try {

            const res = await reviewAction(values,params.bookingId as string)

            if(!res.success) return toast.error(res.error)

            else {
                toast.success("You have succesfully left a review, thank you!",{duration:3000})
                setTimeout(()=>router.push('/'),3000)

            }

   
            
        
      
     } catch (error) {
        console.log(error)
        toast.error("Something went wrong")
     }
      }

      return {form,onSubmit}
}