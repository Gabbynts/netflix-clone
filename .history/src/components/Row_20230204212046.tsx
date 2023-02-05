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
        <BsChevronRight />
        <BsChevronLeft />
      </div>
    </div>
  )
}

export default Row