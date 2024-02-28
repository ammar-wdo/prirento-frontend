import * as z from "zod";

const requiredString = z.string().min(1, "Required field");
const phoneNumberPattern = /^(?:[0-9]){1,3}(?:[ -]*[0-9]){6,14}$/;

const requiredNumber = z.preprocess((input) => {
  return input === "" ? undefined : Number(input);
}, z.number());



const timeSchema = z.object({
    startTime: z.string().min(1, "Start time is required"),
    endTime: z.string().min(1, "End time is required"),
  });
  
  const dateSchema = z.object({
    startDate: z.string().min(1, "Start date is required"),
    endDate: z.string().min(1, "End date is required"),
  });



export const paymentMethod = [ "CREDIT_CARD", "PAYPAL"] as const;
export const paymentStatus = ["PENDING", "SUCCEEDED", "EXPIRED", "CANCELED"] as const;
export const bookingStatus = [
  "ACTIVE",
  "REFUND_REQUEST",
  "REFUNDED",
  "CANCELED",
] as const;

const personInfoSchema = z.object({
  firstName: requiredString,
  lastName: requiredString,
  email: requiredString.email("Invalid email address"),
  contactNumber: z.string().regex(phoneNumberPattern, "Invalid phone number"),
  countryOfResidance: requiredString,
});

const billingInfoSchema = z.object({
  billingAddress: requiredString,
  billingFirstName: requiredString,
  billingLastname: requiredString,
  billingContactNumber: z
    .string()
    .regex(phoneNumberPattern, "Invalid phone number"),
  billingCountry: requiredString,
  billingCity: requiredString,
  billingZipcode: requiredString,
});

const companyInfoSchema = z
  .object({
    business: z.boolean().default(false),
    companyName: z.string().optional(),
    companyVat: z.string().optional(),
  })
  .refine((data) => !data.business || !!data.companyName, {
    message: "Company name is required",
    path: ["companyName"],
  })
  .refine((data) => !data.business || !!data.companyVat, {
    message: "Company VAT number is required",
    path: ["companyVat"],
  });



export const bookingSchema = z
  .object({
  

    terms: z.boolean().refine(data=>data===true,'You should agree to Terms & Conditions to go further'),
    paymentMethod:z.enum(paymentMethod),
    pickupLocation:requiredString,
    dropoffLocation:z.string().optional(),
   
  })
  .and(timeSchema)
  .and(dateSchema)
  .and(personInfoSchema)
  .and(billingInfoSchema)
  .and(companyInfoSchema)
  .refine(
    (data) => {
      const { startDate, endDate, startTime, endTime } = data;

      const startDateTime = new Date(`${startDate}T${startTime}`);
      const endDateTime = new Date(`${endDate}T${endTime}`);

      return startDateTime < endDateTime;
    },
    {
      message: "Start date must be before end date",
      path: ["endTime"],
    }
  )


  export const contactSchema = z.object({
    firstName:requiredString,
    lastName:requiredString,
    email:requiredString.email('Invalid email address'),
    subject:z.string().optional(),
    message:requiredString
  })


  export const loginSchema = z.object({
    email:requiredString.email('Invalid email address'),
    bookingCode:requiredString.min(9,'At least 9 characters').max(9,"Maximum 9 characters").startsWith('A',"Starts only with capital A")
  })
