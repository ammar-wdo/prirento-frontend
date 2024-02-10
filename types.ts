

export type BrandType = {
    id:string,
    brand:string,
    logo:string,
    createdAt:string,
    updatedAt:string

}

export type LocationType = {
    id:string,
    name:string
}


export const carTypes = [
    "SUV",
    "super_cars",
    "sports",
    "convertable",
    "classics",
    "business",
  ] as const;


  