import React, { useEffect, useState } from 'react'
import { Movie } from 'typings'

interface Props{
  netflixOriginals: Movie[]
}

function Banner({netflixOriginals}: Props) {
  const [movie, setMovie] = useState<Movie | null>(null)

  useEffect(() => {
    setMovie(Math.floor(Math.random() * movie.lenght))
  }, [])

  return (
    <div></div>
  )
}

export default Banner