import MainHeader from '@/components/(header)/main-header'
import React from 'react'

type Props = {
    children:React.ReactNode
}

const layout = ({children}: Props) => {
  return (
    <div>
      <MainHeader white={true}/>
      {children}</div>
  )
}

export default layout