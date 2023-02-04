import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

import Header from '../components/layout/Header'

const Home: NextPage = () => {
  return (
    <div className='flex min-h-screen'>
      <Head>
        <title>Login</title>
      </Head>
      
      <Header />

      <main>
        <section>
          
        </section>
      </main>
    </div>
  )
}

export default Home