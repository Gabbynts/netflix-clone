import React from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { Movie } from 'typings'

import Thumbnail from './Thumbnail'

interface Props{
  title: string
  movies: Movie[]
}

function Row({title, movies}: Props) {
  return (
    <div className='h-40 space-y-0.5 md:space-y-2'>
      <h2 className='w-56 cursor-pointer text-sm font-semibold text-[#afadad]
        transition-200 hover:text-white md:text-2xl'>{title}</h2>
      
      <div className='group relative md:-ml-2'>
        <BsChevronRight className='chevron margin-auto' />
        <BsChevronLeft className='chevron margin-auto'/>
      

        <div className='flex items-center space-x-0.5 md:space-x-2.5
        md:p-2 overflow-scroll scrollbar-hide'>
          {movies.map((movie) => {
            return (
              <Thumbnail
                key={movie.id}
                movie={movie}/>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Row