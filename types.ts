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
};




export type CarTypes =
  | "super_cars"
  | "sports"
  | "convertable"
  | "business"
  | "classics"
  | "SUV";
export type Transmition = "auto" | "manual";




export const carTypes = [
  "super_cars",
  "sports",
  "convertable",
  "business",
  "classics",
  "SUV",
] as const;

export const transmition = ["auto", "manual"] as const;
