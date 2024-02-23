import { poster } from "@/lib/utils";
import { POST_BOOKING } from "@/links";

import { NextResponse } from "next/server";


export const POST = async(req:Request)=>{



    const body = await req.json()
  
    try {

        const {params,...rest} = body



  const res =await poster<{
    url?: string;
    error?: string;
    success: boolean;
  }>(POST_BOOKING + "/" + body.params,rest);
        return NextResponse.json({...res})

        
    } catch (error) {
        console.log("error",error)

        return NextResponse.json({error:'Internal server error',success:false,url:undefined},{status:200})
    }
}