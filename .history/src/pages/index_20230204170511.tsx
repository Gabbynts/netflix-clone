import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

import Banner from '@/components/layout/Banner'

import Header from '../components/layout/Header'

const Home: NextPage = () => {
  return (
    <div className='relative h-screen bg-gradient-to-b from-[#555] to-[#161616]
    lg:h-[140vh]'>
      <Head>
        <title>Login</title>
      </Head>
      
      <Header />

      <main>
        <Banner/>
        <section>
          
        </section>
      </main>
    </div>
  )
}

export default Home