import CheckoutHeader from '@/components/(header)/checkout-header'
import React from 'react'

type Props = {
    children:React.ReactNode
}

const layout = ({children}: Props) => {
  return (
    <div>
      <CheckoutHeader/>
      {children}</div>
  )
}

export default layout