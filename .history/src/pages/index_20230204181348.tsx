import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

import Banner from '@/components/layout/Banner'

import requests from '@/utils/requests'

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

export const getServerSideProps = async () => {
  const[
    netflixOriginals,
    trendingNow,
    topRated,
    actingMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ])
}