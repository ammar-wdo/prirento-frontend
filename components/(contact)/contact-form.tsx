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

import { useContact } from "@/hooks/contact.hook"
import { Loader, Mail } from "lucide-react"
import { Textarea } from "../ui/textarea"
import { cn } from "@/lib/utils"

type Props = {}

const ContactForm = (props: Props) => {

  const {form, onSubmit} = useContact()
  const isLoading = form.formState.isSubmitting
  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      <FormField
        control={form.control}
        name="firstName"
        render={({ field }) => (
          <FormItem>
           
            <FormControl>
              <Input placeholder="First name" className=" input" {...field} />
            </FormControl>
           
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="lastName"
        render={({ field }) => (
          <FormItem>
            
            <FormControl>
              <Input placeholder="Last Name" className=" input" {...field} />
            </FormControl>
         
            <FormMessage />
          </FormItem>
        )}
      />
      </div>
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem >
            <div className="relative flex items-center">
            <Mail className="absolute left-8  text-muted-foreground z-10" />
            <FormControl className="relative items-center flex">
           
              <Input style={{paddingLeft:60}} placeholder="Email" className={cn("pl-24  input")} {...field} />
            </FormControl>
            </div>
          
         
         
            <FormMessage />
        
          </FormItem>
             
        )}
      />
      <FormField
        control={form.control}
        name="subject"
        render={({ field }) => (
          <FormItem>
            
            <FormControl>
              <Input placeholder="Subject" className=" input" {...field} />
            </FormControl>
           
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="message"
        render={({ field }) => (
          <FormItem>
            
            <FormControl>
              <Textarea value={field.value} onChange={field.onChange} placeholder="Message" className="resize-none input min-h-[250px]"/>
            </FormControl>
        
            <FormMessage />
          </FormItem>
        )}
      />
   
      <Button disabled={isLoading} className="w-full rounded-full py-6" variant={'siteMain'} type="submit">Submit {isLoading && <Loader className="bl-3 w-3 h-3 animate-spin ml-3"/>}</Button>
    </form>
  </Form>
  )
}

export default ContactForm