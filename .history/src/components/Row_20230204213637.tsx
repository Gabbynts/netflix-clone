import React from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { Movie } from 'typings'

interface Props{
  title: string
  movies: Movie[]
}

function Row({title, movies}: Props) {
  return (
    <div className='h-40 space-y-0.5 md:space-y-2'>
      <h2 className='w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5'>{title}</h2>
      <div className='group relative md:-ml-2'>
        <BsChevronRight className='chevron margin-auto' />
        <BsChevronLeft className='chevron margin-auto'/>
      </div>
    </div>
  )
}

export default Row