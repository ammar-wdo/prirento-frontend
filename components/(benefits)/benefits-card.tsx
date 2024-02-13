'use client'
import {motion} from 'framer-motion'

type Props = {
    benefit:{
        title: string;
        description: string;
        icon: React.JSX.Element;
    },
    index:number
}

const BenefitsCard = ({benefit,index}: Props) => {
    const fadeIn = {
        initial:{
            y:20,opacity:0
        },
        whileInView:{
            y:0,opacity:100,
            transition:{
                delay:index * 0.3,
                duration:0.7
            }
        }
    }
  return (
    <motion.div
    variants={fadeIn}
    initial='initial'
    whileInView='whileInView'
    
    className='p-8 flex items-center flex-col text-white justify-self-center max-w-[350px] gap-4'>
        <span className='w-12 h-12 flex items-center justify-center bg-white  text-black rounded-full'>{benefit.icon}</span>
        <h3 className='font-bold capitalize'>{benefit.title}</h3>
        <p className='text-sm text-center font-light text-muted'>{benefit.description}</p>

    </motion.div>
  )
}

export default BenefitsCard