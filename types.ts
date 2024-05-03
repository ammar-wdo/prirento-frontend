export type BrandType = {
  id: string;
  brand: string;
  logo: string;
  createdAt: string;
  updatedAt: string;
};

export type LocationType = {
  id: string;
  name: string;
  slug: string;
};

export type CarCardType = {
  id: string;
  carName: string;
  year: string;
  seats: number;
  kmIncluded: number;
  carType: CarTypes;
  gallary: string[];
  transmition: Transmition;
  oneDayPrice: number;
  companyLogo: string;
  companySlug:string
  slug: string;

};


export type OpeningTimes = {
  Monday: {
    openTime: string;
    closeTime: string;
    closed: boolean;
};
Tuesday: {
    openTime: string;
    closeTime: string;
    closed: boolean;
};
Wednesday: {
    openTime: string;
    closeTime: string;
    closed: boolean;
};
Thursday: {
  openTime: string;
  closeTime: string;
  closed: boolean;
};
Friday: {
  openTime: string;
  closeTime: string;
  closed: boolean;
};
Saturday: {
  openTime: string;
  closeTime: string;
  closed: boolean;
};
Sunday:{
  openTime: string;
  closeTime: string;
  closed: boolean;
};

}

export type Company = {
  name: string;
  id: string;
  content: string;
  openingTime:OpeningTimes
  gallary:string[]
}

export type CarPublicType = Omit<CarCardType, "oneDayPrice"> & {
  availablePrice: number | null;
  notAvailable: boolean;
  period: string;
};

export type SingleCarType = {
  id: string;
  carName: string;
  brand: string;
  year: string;
  transmition: Transmition;
  engine: string;
  doors: number;
  electric: Electric;
  carType: CarTypes;
  seats: number;
  description: string;
  specifications: { title: string; icon: string }[];
  gallary: string[];
  slug:string,
  kmIncluded:number;
  minimumHours:number|null,
  pickupLocations:string[],
  dropoffLocations:string[],
  terms:string,
  companyName:string

 

};

export type CarExtraOptions = {
  id: string;
  label: string;
  description: string;
  price: number;
  status: 'active' | 'pending';
  logo: string;
  carId: string;
  createdAt: Date;
  updatedAt: Date;
}

export type CarSuperAdminRule = {
  id: string;
  label: string;
  description: string;
  type: 'fixed' | 'percentage';
  value: number;
  valueToPay:number
  mandatory: boolean;
  applyToAll: boolean;
  carId: string | null;
  createdAt: Date;
  updatedAt: Date;
}


export type Booking = {
  firstName:string
  lastName:string
  email:string
  contactNumber:string
  countryOfResidance:string

  billingAddress :string
  billingFirstName   :string
  billingLastname:string
  billingContactNumber:string
  billingCountry :string
  billingCity    :string
  billingZipcode :string

  business?:boolean
  companyName?:string
  companyVat ?:string

  startDate :Date
  endDate   :Date

  pickupLocation :string
  dropoffLocation?:string

  extraOptions:CarExtraOptions[]
  adminRules:CarSuperAdminRule[]

  subtotal       :number
  reservationFee :number
  discount       :number
  deliveryFee?   :number
  total          :number
  payNow         :number
  payLater       :number

  bookingCode:string

  terms:boolean


  paymentMethod :'card' | 'paypal'
  paymentStatus :"PENDING" | "SUCCEEDED" | "EXPIRED" | "CANCELED"
  bookingStatus :"ACTIVE"| "REFUND_REQUEST" | "REFUNDED" | "CANCELED"

  
  carName  :string

  createdAt :Date
}

export type CarAvailabilityType = {
  location: string;
  kmIncluded: number;
  deliveryFee: number | null;
  deposit: number;
  fee:number | false,
  price: number | null;
  duration: string;
  startDate: Date;
  endDate: Date;
  slug:string;
  companySlug:string,
  carExtraOptions:CarExtraOptions[],
  mandatorySuperAdminRules:CarSuperAdminRule[],
  optionalSuperAdminRules:CarSuperAdminRule[]

  availability: {
    isAvailable: boolean;
    message: string;
    pickupLocations: string;
    dropOffLocations: string;
    reservationDates:{startDate:Date,endDate:Date}[]
  };
};

export type Review =  {
  companyName: string;
  carName: string;
  carSlug: string | null;
  companySlug: string;
  companyLogo:string,
  user: string;
  id: string;
  bookingId: string;
  carId: string;
  companyId: string;
  reviewContent: string
  rate: number;
  createdAt: Date;
  updatedUt: Date;
  placeholderDate:Date | null
}

export type AboutType = {
  content:string
}

export type Faq  ={
  id:string,
  question:string,
  answer:string
}

export type Blog ={
  id: string;
    title: string;
    content: string;
    slug: string;
    tags: string[];
    category:{label:string}
    featuredImage: string;
    categoryId: string;
    author: string;
    shortDescription: string;
    createdAt: Date;
    updatedUt: Date;
}

export type BlogCardType = Omit<Blog,'content'>

export type CarTypes =
  | "super_cars"
  | "sports"
  | "convertable"
  | "business"
  | "classics"
  | "SUV";
export type Transmition = "auto" | "manual";
export type Electric = "fully_electric" | "hybrid" | "none";

export const doors = ["2 doors", "4+ doors"];
export const seats = ["2 seats", "4+ seats"];
export const electricArray = ["fully_electric", "hybrid", "none"];

export const carTypes = [
  "super_cars",
  "sports",
  "convertable",
  "business",
  "classics",
  "SUV",
] as const;

export const carTypesArray = [
  "super_cars",
  "sports",
  "convertable",
  "business",
  "classics",
  "SUV",
];
export const electric = ["fully_electric", "hybrid", "none"] as const;

export const transmition = ["auto", "manual"] as const;





export type ReturnedDiscount = {
  id:string,
  type:"fixed" | "percentage",
  discountApplyType: "created" | "booked"
  value:number,
 promocode:string, 
}

export type DiscountResponse = {
  discount: ReturnedDiscount | null;
  error?: string;
  success: boolean;
} | null



