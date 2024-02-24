import React from 'react'

type Props = {
    params:{blogSlug:string}
}

const page = ({params}: Props) => {
  return (
    <div>{params.blogSlug}</div>
  )
}

export default page