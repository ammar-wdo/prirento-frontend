import React from 'react'

type Props = {
    searchParams:{
        success:string,
        failed:string
    }
}

const page = ({searchParams}: Props) => {

    if(searchParams.success) return <div>{searchParams.success}</div>
  return (
    <div>{searchParams.failed}</div>
  )
}

export default page