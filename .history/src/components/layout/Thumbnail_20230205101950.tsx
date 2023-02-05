import React from 'react'
import { Movie } from 'typings'

import NextImage from '@/components/NextImage'

interface Props{
  movies: Movie
}

function Thumbnail({movies}: Props) {
  return (
    <div>
      <NextImage
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}/>
    </div>
  )
}

export default Thumbnail