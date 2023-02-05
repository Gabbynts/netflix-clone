import React from 'react'

import NextImage from '@/components/NextImage'
import Seo from '@/components/Seo'

function login() {
  return (
    <div className='relative'>
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
        className='absolute cursor-pointer object-contain'
        width={150}
        height={150}
        />
    </div>
  )
}

export default login