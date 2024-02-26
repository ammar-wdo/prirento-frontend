import { Crown } from 'lucide-react';
import Image from 'next/image';



type Props = {}

const LoadingComponent = (props: Props) => {
  return (
    <div className='flex items-center justify-center h-screen relative '>
         <Crown className='w-44 h-44 text-secondaryGold opacity-45 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[131%] ' />
    <div className='relative w-[300px] aspect-square animate-pulse'>

    <Image alt='loader'  fill src={'/loader-logo.png'}/>
    </div>
  
  </div>
  )
}

export default LoadingComponent