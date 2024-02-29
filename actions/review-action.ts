'use server'

import { CustomError } from "@/costum-error"
import { poster } from "@/lib/utils"
import { CHECK_FOR_REVIEW, LOGIN } from "@/links"
import { Booking } from "@/types"



export const reviewAction = async (values:any,slug:string):Promise<{success:boolean,error?:string}>=>{

    if(!slug || typeof slug !=='string')throw new CustomError('Slug is required')

try {

    const res = await poster<{success:boolean,error?:string}>(CHECK_FOR_REVIEW + '/' + slug,values)
    console.log('res',res.error)

    if(res.error) throw new CustomError(res.error)

    return {...res}


}catch(error){
let message = "Internal server error"
if(error instanceof CustomError) message=error.message

return {success:false,error:message}


}

}