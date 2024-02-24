"use client";

import { useBooking } from "@/hooks/booking-hook";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

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
import { Checkbox } from "../ui/checkbox";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ArrowRight, Check, Loader } from "lucide-react";
import ViewSection from "./view-section";
import { CarExtraOptions, CarSuperAdminRule } from "@/types";
import CarExtraOption from "./car-extra-option";
import SuperadminRule from "./superadmin-rule";

type Props = {
  carImage: string;
  startDate: Date;
  endDate: Date;
  carName: string;
  subtotal: number;
  deposit: number;
  deliveryFee: number | null;
  fee: number | false;
  carExtraOptions: CarExtraOptions[];
  mandatorySuperAdminRules: CarSuperAdminRule[];
  optionalSuperAdminRules: CarSuperAdminRule[];
};

const BookingForm = ({
  carImage,
  startDate,
  endDate,
  carName,
  subtotal,
  deliveryFee,
  deposit,
  fee,
  carExtraOptions,
  mandatorySuperAdminRules,
  optionalSuperAdminRules,
}: Props) => {
  const {
    form,
    onSubmit,
    applyPromo,
    loading,
    discountResponse,
    resetDiscount,
    discountValue,
    totalAmount,
    payLater,
    payNow,
    carExtraOptions: carExtraOptionsState,
    handleExtraOptions,
    handleOptionalSuperAdminRule,
    optionalSuperAdminRules :optionalSuperAdminRulesState
  } = useBooking({
    subtotal,
    deliveryFee,
    deposit,
    fee,
    mandatorySuperAdminRules,
  });

  const isLoading = form.formState.isSubmitting;
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="container space-y-8"
      >
        <div className="md:mt-12 mt-8  grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8 order-1 sm:order-2">
            {/* driver details */}
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
                          border: "none",
                          borderRight: "1px #DFE4ED solid",
                          padding: 3,
                          borderRadius: "7px",
                          borderTopRightRadius: 0,
                          borderBottomRightRadius: 0,
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
                          marginLeft: 10,
                          backgroundColor: "#FCFCFD",
                        }}
                        value={form.getValues("contactNumber")}
                        onChange={(phone) =>
                          form.setValue("contactNumber", phone)
                        }
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="countryOfResidance"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Country of residance</FormLabel>
                    <FormControl>
                      <Input placeholder="Country of residance" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </SectionWrapper>

            {/* billing address */}

            <SectionWrapper title="billing address">
              <FormField
                control={form.control}
                name="billingFirstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First name</FormLabel>
                    <FormControl>
                      <Input placeholder="first name" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="billingLastname"
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
                name="billingContactNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contact number</FormLabel>
                    <FormControl>
                      <PhoneInput
                        enableSearch={true}
                        buttonStyle={{
                          border: "none",
                          borderRight: "1px #DFE4ED solid",
                          padding: 3,
                          borderRadius: "7px",
                          borderTopRightRadius: 0,
                          borderBottomRightRadius: 0,
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
                          marginLeft: 10,
                          backgroundColor: "#FCFCFD",
                        }}
                        value={form.getValues("billingContactNumber")}
                        onChange={(phone) =>
                          form.setValue("billingContactNumber", phone)
                        }
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="billingCountry"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Country</FormLabel>
                    <FormControl>
                      <Input placeholder="Country" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="billingCity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input placeholder="Your city" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="billingAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="House/Apartment number and street name"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="billingZipcode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Postcode</FormLabel>
                    <FormControl>
                      <Input placeholder="Postcode" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="business"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md mt-3">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Is this a business booking?</FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              {!!form.watch("business") && (
                <div className="flex w-full flex-col gap-4">
                  <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company name</FormLabel>
                        <FormControl>
                          <Input placeholder="Company name" {...field} />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="companyVat"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company VAT or tax ID number</FormLabel>
                        <div className="flex items-center p-1 px-2 border rounded-lg bg-gray-50/70 ">
                          <span className="shrink-0 text-muted-foreground text-sm">
                            AE |
                          </span>
                          <FormControl>
                            <Input
                              className="border-none bg-transparent p-0 focus-visible:ring-0 focus:ring-0 focus:ring-transparent focus-visible:ring-transparent pl-2   focus-visible:ring-offset-0"
                              placeholder=""
                              {...field}
                            />
                          </FormControl>
                        </div>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}
            </SectionWrapper>

            {/* extra options */}
            {(!!carExtraOptions.length || !!optionalSuperAdminRules.length) && (
              <SectionWrapper title="extra options">
                <h3>Choose many extra options</h3>
               
                {!!carExtraOptions.length &&
                  carExtraOptions.map((el) => (
                    <CarExtraOption
                      key={el.id}
                      carExtraOption={el}
                      handleClick={() => {
                        handleExtraOptions(el);
                      }}
                      active={
                        !!carExtraOptionsState.find(
                          (option) => option.id === el.id
                        )
                      }
                    />
                  ))}

                {!!optionalSuperAdminRules.length &&
                  optionalSuperAdminRules.map((el) => (
                    <SuperadminRule
                      active={!!optionalSuperAdminRulesState.find(element=>element.id === el.id)}
                      handleClick={() => handleOptionalSuperAdminRule(el)}
                      key={el.id}
                      superAdminRule={el}
                    />
                  ))}
              </SectionWrapper>
            )}

            {/* pament methods */}
            <SectionWrapper title="Payment method">
              <div className="flex flex-col w-full gap-4">
                <p>How would you like to pay?</p>

                <FormField
                  control={form.control}
                  name="paymentMethod"
                  render={({ field }) => (
                    <FormItem className=" space-y-3">
                      <div
                        onClick={() =>
                          form.setValue("paymentMethod", "CREDIT_CARD")
                        }
                        className={cn(
                          "flex items-center justify-between  w-full  p-4 border  rounded-xl hover:bg-muted transition cursor-pointer",
                          !!(form.watch("paymentMethod") === "CREDIT_CARD") &&
                            "bg-muted"
                        )}
                      >
                        <FormLabel className="flex items-center gap-2 font-medium ">
                          {form.watch("paymentMethod") === "CREDIT_CARD" && (
                            <Check />
                          )}
                          Credit Card
                        </FormLabel>
                        <div className="relative w-20 h-10 ">
                          <Image
                            src={"/credit.png"}
                            fill
                            alt="credit"
                            className="object-contain"
                          />
                        </div>
                      </div>

                      <div
                        onClick={() => form.setValue("paymentMethod", "PAYPAL")}
                        className={cn(
                          "flex items-center justify-between   p-4 border rounded-xl hover:bg-muted w-full transition  cursor-pointer",
                          !!(form.watch("paymentMethod") === "PAYPAL") &&
                            "bg-muted"
                        )}
                      >
                        <FormLabel className=" font-medium flex items-center gap-2">
                          {form.watch("paymentMethod") === "PAYPAL" && (
                            <Check />
                          )}
                          PayPal
                        </FormLabel>
                        <div className="relative w-20 h-10 ">
                          <Image
                            src={"/paypal.png"}
                            fill
                            alt="paypal"
                            className="object-contain"
                          />
                        </div>
                      </div>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="terms"
                render={({ field }) => (
                  <FormItem className="flex flex-col space-y-4 rounded-md mt-3">
                    <div className="flex gap-2 items-start">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>

                      <FormLabel className="space-y-1 leading-4 p-0">
                        I accept the terms and conditions of Prirento and the
                        terms and conditions of Company Name
                      </FormLabel>
                    </div>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </SectionWrapper>
            {/* big screens submit button */}
            <Button
              disabled={isLoading}
              variant={"siteMain"}
              className="rounded-full ml-auto hidden lg:flex py-5 px-7 h-12"
              type="submit"
            >
              Checkout{" "}
              {isLoading ? (
                <Loader className="ml-2 w-4 h-4 animate-spin" />
              ) : (
                <ArrowRight className="ml-2 w-4 h-4 " />
              )}
            </Button>
          </div>

          {/* View section */}
          <ViewSection
            mandatorySuperAdminRules={mandatorySuperAdminRules}
            carExtraOptionsState={carExtraOptionsState}
            resetDiscount={resetDiscount}
            loading={loading}
            discountResponse={discountResponse}
            applyPromo={(val: string) => {
              applyPromo(val);
            }}
            carImage={carImage}
            startDate={startDate}
            endDate={endDate}
            carName={carName}
            deliveryFee={deliveryFee}
            deposit={deposit}
            subtotal={subtotal}
            discountValue={discountValue as number | null}
            totalAmount={totalAmount}
            payLater={payLater}
            payNow={payNow}
          />
        </div>
        {<span>{JSON.stringify(form.formState.errors)}</span>}

        {/* mobile submit button */}
        <Button
          disabled={isLoading}
          variant={"siteMain"}
          className="rounded-full ml-auto flex lg:hidden py-5 px-7 h-12"
          type="submit"
        >
          Checkout
          {isLoading ? (
            <Loader className="ml-2 w-4 h-4 animate-spin" />
          ) : (
            <ArrowRight className="ml-2 w-4 h-4 " />
          )}
        </Button>
      </form>
    </Form>
  );
};

export default BookingForm;
