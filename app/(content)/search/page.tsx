import SearchBanner from '@/components/(banner)/search-banner'
import SearchComponentServerWrapper from '@/components/(search-component)/seatch-component-server-wrapper'
import React, { Suspense } from 'react'

type Props = {
  searchParams:{[key:string]:string | string[] | undefined}
}

const page = ({searchParams}: Props) => {
  return (
    <div>
      <SearchBanner/>
      <section className='min-h-[800px] container'>
        <div className='-mt-16'>

          <SearchComponentServerWrapper searchParams={searchParams}/>
    
        </div>

        </section>
    </div>
  )
}

export default page