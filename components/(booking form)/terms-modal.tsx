
'use client'
import {
    Dialog,
    DialogContent,

    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"


  import React, { ReactNode, useEffect, useState } from 'react'
import { Button } from "../ui/button"

import dynamic from "next/dynamic"
const Editor = dynamic(()=>import('@/components/editor'),{ssr:false})
  
  type Props = {

    initialContent:string
    companyName:string
  }
  
  const TermsModal = ({companyName,initialContent}: Props) => {
    const [mount, setMount] = useState(false)

    useEffect(()=>{setMount(true)},[])
    if(!mount) return null
    return (
        <Dialog>
        <DialogTrigger className="inline" asChild><span className="underline inline cursor-pointer text-blue-500">Terms and conditions of {companyName}</span></DialogTrigger>
        <DialogContent className="max-h-[600px] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{companyName} - Terms and conditions</DialogTitle>
         
          </DialogHeader>
          <Editor initialContent={initialContent}/>
        </DialogContent>
      </Dialog>
    )
  }
  
  export default TermsModal