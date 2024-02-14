import React from 'react'
import SearchComponent from './search-component'
import { fetcher } from '@/lib/utils'
import { GET_LOCATIONS } from '@/links'
import { LocationType } from '@/types'

type Props = {}

const SearchComponentServerWrapper = async(props: Props) => {
  // const locations = await fetcher<{locations:LocationType[]}>(GET_LOCATIONS).then(data=>data.locations)
  const locations = [
    {
    id:'1',
    name:"dubai",
    slug:'dubai'
  },
    {
    id:'2',
    name:"abu dhabi",
    slug:'abu-dhabi'
  },
]

  return (
   <SearchComponent locations={locations}/>
  )
}

export default SearchComponentServerWrapper