import React from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { Movie } from 'typings'

interface Props{
  title: string
  movies: Movie[]
}

function Row({title, movies}: Props) {
  return (
    <div >
      <h2>{title}</h2>
      <div>
        <BsChevronRight className='absolute top-0 bottom-0 left-2 z-40 margin-auto h-9 w-9' />
        <BsChevronLeft />
      </div>
    </div>
  )
}

export default Row