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
import { useLogin } from "@/hooks/login.hook"
import { Loader } from "lucide-react"
import Link from "next/link"

type Props = {}

const LoginForm = (props: Props) => {
    const {form, onSubmit} = useLogin()
    const isLoading = form.formState.isLoading
  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 min-w-[300px] max-w-[550px] w-full">
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input  className="border-none bg-neutral-100 p-8" placeholder="Enter your email" {...field} />
            </FormControl>
         
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="bookingCode"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Booking Code</FormLabel>
            <FormControl>
              <Input className="border-none bg-neutral-100 p-8" placeholder="Enter your booking code" {...field} />
            </FormControl>
         
            <FormMessage />
          </FormItem>
        )}
      />
      <Button disabled={isLoading} variant={'siteMain'} className="py-6 w-full rounded-full" type="submit">Login {isLoading && <Loader className="ml-3 animate-spin w-4 h-4"/>}</Button>
      <div className="flex items-center justify-between mt-8">
        <span className="text-secondaryGreen">Need help? <Link href={'/contact-us'} className="hover:underline">Contact us</Link></span>
        <Link href={'/'} className="underline">Go Back</Link>
      </div>

    </form>
  </Form>
  )
}

export default LoginForm