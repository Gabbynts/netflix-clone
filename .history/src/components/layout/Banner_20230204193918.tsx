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
    <div>
      <div className="absolute top-0 left-0 h-[95vh] w-screen">
        <NextImage 
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`} alt=""
          layout="fill"
          objectFit='cover'
          />
      </div>

      <div>
        <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
        <p>{movie?.overview}</p>
      </div>

      
    </div>
  )
}

export default Banner