import React, { useEffect, useState } from 'react'
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
    <div className='space-b-2'>
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

      
    </div>
  )
}

export default Banner