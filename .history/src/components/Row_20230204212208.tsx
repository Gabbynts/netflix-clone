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
      <h2 className='transform'>{title}</h2>
      <div>
        <BsChevronRight className='absolute top-0 bottom-0 left-2' />
        <BsChevronLeft />
      </div>
    </div>
  )
}

export default Row