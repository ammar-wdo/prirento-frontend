import Footer from '@/components/(footer)/footer'
import MainHeader from '@/components/(header)/main-header'
import React from 'react'

type Props = {
    children:React.ReactNode
}

const layout = ({children}: Props) => {
  return (
    <div className='min-h-screen'>
     
        {children}
        <Footer/>
        </div>
  )
}

export default layout