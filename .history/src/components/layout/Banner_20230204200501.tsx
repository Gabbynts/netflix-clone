import React, { useEffect, useState } from 'react'
import {BsFillPlayFill} from 'react-icons/bs'
import { Movie } from 'typings'

import NextImage from "@/components/NextImage"

import { baseUrl } from '@/constants/movie'


interface Props{
  netflixOriginals: Movie[]
}

function Banner({netflixOriginals}: Props) {
  const [movie, setMovie] = useState<Movie | null>(null)

  useEffect(() => {
    setMovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)])
  }, [netflixOriginals])

  console.log(movie)

  return (
    <div className='flex flex-col space-y-2 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12'>
      <div className="absolute top-0 left-0 h-[95vh] w-screen">
        <NextImage 
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`} alt=""
          layout="fill"
          objectFit='cover'
          />
      </div>

      <div className='transform'>
        <h1 className='text-2xl md:text-4xl lg:text-7xl'>{movie?.title || movie?.name || movie?.original_name}</h1>
        <p className='max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl'>{movie?.overview}</p>
      </div>

      <div className='transform'>
        <button className='bannerButton'>
          <BsFillPlayFill className='h-4 w-4 text-black md:w-7 md:h-7 lg:w-9'/>Play</button>
        <button className='bannerButton'>More Info</button>
      </div>
      
    </div>
  )
}

export default Banner