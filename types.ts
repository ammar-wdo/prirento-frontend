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
  slug: string;

};

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
  dropoffLocations:string[]

 

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
  mandatory: boolean;
  applyToAll: boolean;
  carId: string | null;
  createdAt: Date;
  updatedAt: Date;
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
  carExtraOptions:CarExtraOptions[],
  mandatorySuperAdminRules:CarSuperAdminRule[],
  optionalSuperAdminRules:CarSuperAdminRule[]

  availability: {
    isAvailable: boolean;
    message: string;
    pickupLocations: string;
    dropOffLocations: string;
  };
};


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



