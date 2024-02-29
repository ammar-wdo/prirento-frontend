import { cn } from '@/lib/utils'
import React from 'react'

type Props = {
    title:string,
    description:string,
    className?:string
}

const KeyValue = ({title,description,className}: Props) => {
  return (
    <div className={cn('w-full flex items-center justify-between',className)}>
        <span className='capitalize text-muted-foreground'>
{title}
        </span>
        <span className='font-medium first-letter:capitalize'>
{description}
        </span>
    </div>
  )
}

export default KeyValue