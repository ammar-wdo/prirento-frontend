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
  slug:string
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
  slug:string
};

export type CarPublicType = Omit<CarCardType, 'oneDayPrice'> & {
  availablePrice: number | null;
  notAvailable: boolean;
  period:string
};




export type CarTypes =
  | "super_cars"
  | "sports"
  | "convertable"
  | "business"
  | "classics"
  | "SUV";
export type Transmition = "auto" | "manual";


export const doors =['2 doors','4+ doors']
export const seats =['2 seats','4+ seats']
export const electricArray = ["fully_electric", "hybrid"]

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
] 
export const electric = ["fully_electric", "hybrid"] as const;

export const transmition = ["auto", "manual"] as const;
