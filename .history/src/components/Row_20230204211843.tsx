import React from 'react'
import { Movie } from 'typings'

interface Props{
  title: string
  movies: Movie[]
}

function Row({title, movies}: Props) {
  return (
    <div className='transform'>
      <h2>{title}</h2>
    </div>
  )
}

export default Row