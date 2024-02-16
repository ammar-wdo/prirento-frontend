'use client'

import { cn, convertDateToISOString } from "@/lib/utils"
import { Calendar } from "./ui/calendar"
import { useState } from "react"
import { Button } from "@/components/ui/button"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"

type Props = {
    open:boolean,
    setOpen:(val:boolean)=>void
    dateString:string | undefined,
    setDateString:(val:Date | undefined)=>void
    startDateString?:string
}

const DatepickerComponent = ({open,setOpen,dateString,setDateString,startDateString}: Props) => {

    const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild className="border-none shrink-0">
        <Button
          variant={"outline"}
          className={cn(
            "sm:w-[200px] w-fit justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {dateString ? format(new Date(dateString), "dd/MM/yyyy") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={new Date(new Date(dateString || '').setHours(0,0,0,0))}
          onSelect={(date)=>setDateString(date)}
          initialFocus
          disabled={(date)=> (date < new Date(new Date().setHours(0,0,0,0)) || date < new Date(new Date(startDateString || '').setHours(0,0,0,0)))}
        />
      </PopoverContent>
    </Popover>
  )
}

export default DatepickerComponent