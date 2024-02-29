'use client'

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useReview } from "@/hooks/review.hook"
import { Textarea } from "./ui/textarea"
import ReactStars from 'react-stars'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Loader } from "lucide-react"

type Props = {}

const ReviewForm = (props: Props) => {
    const {form,onSubmit} = useReview()

    const isLoading = form.formState.isSubmitting
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col max-w-[700px] w-full gap-12  ">

        <FormField
          control={form.control}
          name="rate"
          render={({ field }) => (
            <FormItem className="self-center text-center">
              <FormLabel className="text-center ">Rate</FormLabel>
              <FormControl>
              <ReactStars
              edit={true}
              onChange={value=>field.onChange(value)}
              size={30}
              color2="gold"
              color1="gray"
              count={5}
              value={field.value}

        />
              </FormControl>
          
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="reviewContent"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message (Optional)</FormLabel>
              <FormControl>
                <Textarea placeholder="message" {...field} />
              </FormControl>
          
              <FormMessage />
            </FormItem>
          )}
        />

<FormField
          control={form.control}
          name="visibility"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Visibility</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="FIRSTNAME" />
                    </FormControl>
                    <FormLabel className="font-normal">
                     First name
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="FULLNAME" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Full name
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="ANOUNYMOS" />
                    </FormControl>
                    <FormLabel className="font-normal">ANOUNYMOS</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isLoading} type="submit">Submit{isLoading && <Loader className="ml-3 w-4 h-3 animate-spin" />}</Button>
      </form>
    </Form>
  )
}

export default ReviewForm