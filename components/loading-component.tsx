
import Image from 'next/image';
import { GiQueenCrown } from "react-icons/gi";



type Props = {}

const LoadingComponent = (props: Props) => {
  return (
    <div className='flex items-center justify-center h-screen relative flex-col gap-2'>
         <GiQueenCrown className='md:w-44 md:h-44 w-32 h-32 text-secondaryGold opacity-45  ' />
    <div className='relative md:w-[300px] w-[200px] aspect-square animate-pulse -mt-[90px] md:-mt-[130px]'>

    <Image priority={true} alt='loader'  fill src={'/loader-logo.png'}/>
    </div>
  
  </div>
  )
}

export default LoadingComponent