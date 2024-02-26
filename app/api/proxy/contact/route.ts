import { poster } from "@/lib/utils";
import { CONTACT} from "@/links";

import { NextResponse } from "next/server";


export const POST = async(req:Request)=>{



    const body = await req.json()
  
    try {

     



  const res =await poster<{
    message?: string;
    error?: string;
    success: boolean;
  }>(CONTACT,body);
        return NextResponse.json({...res})

        
    } catch (error) {
        console.log("error",error)

        return NextResponse.json({error:'Internal server error',success:false,url:undefined},{status:200})
    }
}