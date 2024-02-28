
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { GiQueenCrown } from "react-icons/gi";



type Props = {

}

const LoadingComponent = (props: Props) => {
  return (
    <div className={cn('flex items-center justify-center h-screen relative flex-col gap-2')}>
     
      <GiQueenCrown className='md:w-28 md:h-28 w-20 h-20 text-secondaryGold opacity-45  ' />
    <div className='relative md:w-[170px] w-[110px] aspect-square animate-pulse -mt-[50px] md:-mt-[75px]'>

    <Image priority={true} alt='loader'  fill src={'/loader-logo.png'}/>

      </div>
     
  
  </div>
  )
}

export default LoadingComponent