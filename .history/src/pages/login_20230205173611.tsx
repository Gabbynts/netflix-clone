import React from 'react'

import NextImage from '@/components/NextImage'
import Seo from '@/components/Seo'

function login() {
  return (
    <div className='relative flex h-screen w-screen flex-col bg-black
    md:items-center md:justify-center md:bg-transparent'>
      <Seo title='Netflix'/>
      <NextImage
        src="https://rb.gy/p2hphi"
        alt=''
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
      />

      <NextImage
        src="https://rb.gy/ulxxee"
        alt=''
        className='absolute cursor-pointer object-contain md:left-10 md:top-6 left-4 top-4'
        width={150}
        height={150}
        />
    </div>
  )
}

export default login