import SearchBanner from '@/components/(banner)/search-banner'
import SearchComponentServerWrapper from '@/components/(search-component)/seatch-component-server-wrapper'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <SearchBanner/>
      <section className='min-h-[800px] container'>
        <div className='-mt-16'>
          <SearchComponentServerWrapper/>
        </div>

        </section>
    </div>
  )
}

export default page