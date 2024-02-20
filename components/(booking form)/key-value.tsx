import React from 'react'

type Props = {
    title:string,
    description:string
}

const KeyValue = ({title,description}: Props) => {
  return (
    <div className='w-full flex items-center justify-between'>
        <span className='capitalize text-muted-foreground'>
{title}
        </span>
        <span className='font-medium'>
{description}
        </span>
    </div>
  )
}

export default KeyValue