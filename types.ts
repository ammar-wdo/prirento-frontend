

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


export type CarCardType = {
id:string,
carName:string,
year:string,
seats:number,
kmIncluded:number,
carType:CarTyps,
gallary:string[],
transmition:Transmition,
oneDayPrice:number,
companyLogo:string,


}





export type CarTyps = typeof carTypes
export type Transmition = typeof transmition

export const carTypes = [
    "super_cars",
    "sports",
    "convertable",
    "business",
    "classics",
    "SUV",
  ] as const;

  export const transmition = ["auto", "manual"] as const;


  