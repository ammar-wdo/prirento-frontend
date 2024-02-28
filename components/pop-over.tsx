import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"

  import { FaInfoCircle } from "react-icons/fa";

type Props = {description:string}

const PopOver = ({description}: Props) => {
  return (
    <Popover>
    <PopoverTrigger onClick={(e)=>e.stopPropagation()}>{<FaInfoCircle className="text-blue-600 hover:scale-125 transition sm:w-5 sm:h-5" />}</PopoverTrigger>
    <PopoverContent className="max-w-[200px] p-2 rounded-xl text-sm text-muted-foreground px-4">{description}</PopoverContent>
  </Popover>
  )
}

export default PopOver