import React from 'react'
import { Movie } from 'typings'

interface Props{
  movies: Movie
}

function Thumbnail({movies}: Props) {
  return (
    <div>Thumbnail</div>
  )
}

export default Thumbnail