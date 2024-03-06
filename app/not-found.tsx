import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const NotFound = (props: Props) => {
  return (
    <div className='h-screen flex items-center justify-center flex-col gap-2'>
        <div className='md:w-[400px] w-[300px] aspect-square relative'>
            <Image src={'/404.png'} className='object-contain' alt='404-placeholder-image' fill />

        </div>
        <h3 className='text-muted-foreground'>The requested page does not exist!</h3>
        <div className='mt-12 flex items-center gap-4'>
<Button asChild variant={'siteMain'}><Link href={'/'}>Home Page</Link></Button>
<Button asChild variant={'siteMain'}><Link href={'/contact-us'}>Contact us</Link></Button>

        </div>
    </div>
  )
}

export default NotFound