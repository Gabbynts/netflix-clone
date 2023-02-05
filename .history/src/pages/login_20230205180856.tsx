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
        src="/images/logo.png"
        alt=''
        className='absolute cursor-pointer left-0 object-contain md:left-10 md:top-6 '
        width={150}
        height={150}
      />

      <form className='bg-black/75 rounded relative mt-24 space-y-8 py-10 px-6 md:mt-0
      md:max-w-md md:px-14'>
        <h1>Sign In</h1>
        <div className='space-y-4'>
          <label className='inline-block w-full'>
            <input type="email" placeholder='Email' className='input'/>
          </label>
          <label className='inline-block w-full'>
            <input type="password" placeholder='Password' className='input'/>
          </label>
        </div>

        <button className='w-full bg-[#ca2828] rounded h-11'>Sign In</button>
      </form>

    </div>
  )
}

export default login