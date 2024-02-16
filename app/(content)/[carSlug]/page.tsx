import React from 'react'

type Props = {
    params:{carSlug:string}
}

const page = ({params}: Props) => {
  return (
    <div>{params.carSlug}</div>
  )
}

export default page