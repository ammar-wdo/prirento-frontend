"use client";

import { useBooking } from "@/hooks/booking-hook";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import SectionWrapper from "./secion-wrapper";
import { Input } from "../ui/input";

type Props = {};

const BookingForm = (props: Props) => {
  const { form, onSubmit } = useBooking();
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <SectionWrapper title="Driver details">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email address</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First name</FormLabel>
                <FormControl>
                  <Input placeholder="First name" {...field} />
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
                <FormLabel>Last name</FormLabel>
                <FormControl>
                  <Input placeholder="Last name" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="contactNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contact number</FormLabel>
                <FormControl>
                  <PhoneInput
                    enableSearch={true}
                    buttonStyle={{
                        border:'none',
                        borderRight:"1px #DFE4ED solid",
                      padding: 3,
                      borderRadius: "7px",
                      borderTopRightRadius:0,
                      borderBottomRightRadius:0,
                      backgroundColor: "#FCFCFD",
                    }}
                    containerStyle={{
                      display: "flex",
                      gap: 40,
                      width: "100%",
                      border: "1px #DFE4ED solid",
                      borderRadius: "7px",

                    }}
                    inputStyle={{
                      border: "none",
                      height: "50px",
                      width: "100%",
                      marginLeft:10,
                      backgroundColor: "#FCFCFD",
                    }}
                    value={form.getValues("contactNumber")}
                    onChange={(phone) => form.setValue("contactNumber", phone)}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </SectionWrapper>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default BookingForm;
