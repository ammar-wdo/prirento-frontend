import React from 'react'
import SearchComponent from './search-component'
import { fetcher } from '@/lib/utils'
import { GET_LOCATIONS } from '@/links'
import { LocationType } from '@/types'

type Props = {
  searchParams?:{[key:string]:string | string[] | undefined},
  urlVar?:string
}

const SearchComponentServerWrapper = async({searchParams,urlVar}: Props) => {
  const locations = await fetcher<{locations:LocationType[]}>(GET_LOCATIONS).then(data=>data.locations)
  

  return (
   <SearchComponent urlVar={urlVar} searchParams={searchParams} locations={locations}/>
  )
}

export default SearchComponentServerWrapper