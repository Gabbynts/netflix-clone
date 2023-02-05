import React from 'react'

import NextImage from '@/components/NextImage'
import Seo from '@/components/Seo'

function login() {
  return (
    <div>
      <Seo title='Netflix'/>
      <NextImage
        src="https://rb.gy/p2hphi"
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
      />
    </div>
  )
}

export default login