import Image from 'next/image';



type Props = {}

const LoadingComponent = (props: Props) => {
  return (
    <div className='flex items-center justify-center h-screen '>
    <div className='relative w-[300px] aspect-square animate-pulse'>

    <Image alt='loader'  fill src={'/loader-logo.png'}/>
    </div>
     
  </div>
  )
}

export default LoadingComponent