import React from 'react'
import { Movie } from 'typings'

import NextImage from '@/components/NextImage'

interface Props{
  movie: Movie
}

function Thumbnail({movie}: Props) {
  return (
    <div className='relative h-28 min-w-[180px]'>
      <NextImage 
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`} 
        alt=''
        layout='fill'
      />
    </div>
  )
}

export default Thumbnail