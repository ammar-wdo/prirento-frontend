'use server'

import { CustomError } from "@/costum-error"
import { poster } from "@/lib/utils"
import { LOGIN } from "@/links"
import { Booking } from "@/types"



export const loginAction = async (values:any):Promise<{success:boolean,error?:string,booking:Booking | null}>=>{

try {

    const res = await poster<{success:boolean,booking:Booking | null,error?:string}>(LOGIN,values)
    console.log('res',res.error)

    if(res.error) throw new CustomError(res.error)

    return {...res}


}catch(error){
let message = "Internal server error"
if(error instanceof CustomError) message=error.message

return {success:false,booking:null,error:message}


}

}