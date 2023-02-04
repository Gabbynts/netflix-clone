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

  return (
    <div>
      <div className="absolute top-0 z-0 left-0 h-[95vh] w-screen">
        <NextImage 
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`} alt=""
          layout="fill"
          objectFit='cover'
          />
      </div>
    </div>
  )
}

export default Banner