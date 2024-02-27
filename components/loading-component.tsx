import { Crown } from 'lucide-react';
import Image from 'next/image';



type Props = {}

const LoadingComponent = (props: Props) => {
  return (
    <div className='flex items-center justify-center h-screen relative '>
         <Crown className='md:w-44 md:h-44 w-32 h-32 text-secondaryGold opacity-45 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[131%] ' />
    <div className='relative md:w-[300px] w-[200px] aspect-square animate-pulse'>

    <Image priority={true} alt='loader'  fill src={'/loader-logo.png'}/>
    </div>
  
  </div>
  )
}

export default LoadingComponent