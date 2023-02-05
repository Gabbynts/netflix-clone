import React, { useRef, useState } from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { Movie } from 'typings'

import Thumbnail from './Thumbnail'

interface Props{
  title: string
  movies: Movie[]
}

function Row({title, movies}: Props) {
  const rowRef = useRef<HTMLDivElement>(null)
  const [isMoved, setIsMoved] = useState(false)

  const handleClick = (direction: string) => {
    setIsMoved(true)

    if(rowRef.current) {
      const {scrollLeft, clientWidth} = rowRef.current

      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth

      rowRef.current.scrollTo({left: scrollTo, behavior: "smooth"})
    }
  }

  return (
    <div className='h-40 space-y-0.5 md:space-y-2'>
      <h2 className='w-56 cursor-pointer text-sm font-semibold text-[#afadad]
        transition-200 hover:text-white md:text-2xl'>{title}</h2>
      
      <div className='group relative md:-ml-2'>
        <BsChevronRight className={`chevron right-2 margin-auto ${!isMoved && 'hidden'}!`} onClick={() => handleClick('right')}/>
        <BsChevronLeft className='chevron left-2 margin-auto' onClick={() => handleClick('left')}/>
      

        <div className='flex items-center space-x-0.5 md:space-x-2.5
        md:p-2 overflow-x-scroll scrollbar-hide '>
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