import React from 'react'
import Logo from './logo'
import Link from 'next/link'

type Props = {}

const CheckoutHeader = (props: Props) => {
  return (
    <header className='bg-main h-16 flex items-center'>
<div className='container '>
   <Link href={'/'}> <Logo/></Link>
</div>
    </header>
  )
}

export default CheckoutHeader