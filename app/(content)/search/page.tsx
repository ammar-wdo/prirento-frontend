import SearchBanner from '@/components/(banner)/search-banner'
import Filter from '@/components/(filter)/filter'
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
        <div className='flex gap-8 xl:mt-12 mt-24'>
          <div className='w-[250px]'>
<Filter searchParams={searchParams}/>
          </div>
          <div className='bg-blue-400 flex-1'>
cars
          </div>

        </div>


        </section>
    </div>
  )
}

export default page