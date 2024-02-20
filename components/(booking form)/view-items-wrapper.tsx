import React, { ReactNode } from 'react'

type Props = {
    children:ReactNode
}

const ViewItemsWrapper = ({children}: Props) => {
  return (
    <div className='mt-6 pb-6 border-b'>
        {children}
    </div>
  )
}

export default ViewItemsWrapper