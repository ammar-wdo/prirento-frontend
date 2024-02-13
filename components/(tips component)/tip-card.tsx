import { cn } from '@/lib/utils';
import React from 'react'

type Props = {
    tip: {title: string;
    descriptions: string;
    icon: React.JSX.Element;
    image: string;},
    index:number,
    chosenIndex:number | undefined
    setIndex:(num:number)=>void
}

const TipCard = ({tip,index,setIndex,chosenIndex}: Props) => {
  return (
    <article
            onMouseOver={() => setIndex(index)}
            key={tip.title}
            className={cn("p-6 py-8 border rounded-xl flex gap-4 bg-white group transition duration-300  ",chosenIndex === index && 'bg-secondaryGreen')}
          >
            <span className={cn("self-center p-6 px-3 bg-muted rounded-xl  transition  duration-300",chosenIndex === index && 'text-white bg-main ')}>
              {tip.icon}
            </span>
            <div>
              <h3 className={cn("text-lg font-medium capitalize duration-300 transition ",chosenIndex === index && 'text-white  ')}>
                {tip.title}
              </h3>
              <p className={cn("mt-3 text-sm text-muted-foreground first-letter:capitalize  duration-300 transition",chosenIndex === index && 'text-white  ')}>
                {tip.descriptions}
              </p>
            </div>
          </article>
  )
}

export default TipCard