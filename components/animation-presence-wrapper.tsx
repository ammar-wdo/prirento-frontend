'use client'

import { AnimatePresence} from 'framer-motion'
import { ReactNode } from 'react'

type Props = {
    children:ReactNode
}

const AnimationPresenceWrapper = ({children}: Props) => {
  return (
<AnimatePresence>
{children}
</AnimatePresence>
  )
}

export default AnimationPresenceWrapper