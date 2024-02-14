import SearchBanner from '@/components/(banner)/search-banner'
import SearchComponentServerWrapper from '@/components/(search-component)/seatch-component-server-wrapper'
import { convertDateToISOString, setDefaultSearchParams } from '@/lib/utils'


type Props = {
  searchParams:{[key:string]:string | string[] | undefined}
}

const page = ({searchParams}: Props) => {

setDefaultSearchParams(searchParams)





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