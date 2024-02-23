import { poster } from "@/lib/utils";
import { GET_CAR } from "@/links";
import { ReturnedDiscount } from "@/types";
import { NextResponse } from "next/server";


export const POST = async(req:Request)=>{



    const body = await req.json()
  
    try {

        const {params,...rest} = body

  const res =await poster<{
    discount: ReturnedDiscount | null;
    error?: string;
    success: boolean;
  }>(GET_CAR + "/" + body.params + `/discount`,rest);
        return NextResponse.json({...res})

        
    } catch (error) {
        console.log("error",error)

        return NextResponse.json({error:'Internal error',success:false,discount:null},{status:200})
    }
}