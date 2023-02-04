import React, { useEffect, useState } from 'react'
import { Movie } from 'typings'

import NextImage from '@/components/NextImage'

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
      <div>
        <NextImage 
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}/>
          layout="fill"
      </div>
    </div>
  )
}

export default Banner