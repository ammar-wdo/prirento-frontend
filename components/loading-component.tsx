import animationData from '../public/lotti.json';
import LottieAnimation from './lotti-wrapper'

type Props = {}

const LoadingComponent = (props: Props) => {
  return (
    <div className='flex items-center justify-center h-screen'>
    <div className='w-[300px] aspect-square'>
    <LottieAnimation animationData={animationData}/>
    </div>
     
  </div>
  )
}

export default LoadingComponent