import React from 'react'
import { useRecoilState } from 'recoil'
import { Movie } from 'typings'

import NextImage from '@/components/NextImage'

import { modalState, movieState } from '@/atoms/modalAtoms'

interface Props{
  movie: Movie
}

function Thumbnail({movie}: Props) {
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState)
  const [showModal, setShowModal] = useRecoilState(modalState)

  return (
    <div className='relative h-28 min-w-[180px] transition hover:scale-110'
         onClick={() => {
          setCurrentMovie(movie)
          setShowModal(true)
         }}>
      <NextImage 
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`} 
        alt=''
        layout='fill'
      />
    </div>
  )
}

export default Thumbnail