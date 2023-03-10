import React, { useEffect, useState } from 'react'
import {BsFillPlayFill} from 'react-icons/bs'
import {HiInformationCircle} from 'react-icons/hi'
import { useRecoilState } from 'recoil'
import { Movie } from 'typings'

import NextImage from "@/components/NextImage"

import { modalState, movieState } from '@/atoms/modalAtoms'
import { baseUrl } from '@/constant/movie'


interface Props{
  netflixOriginals: Movie[]
}

function Banner({netflixOriginals}: Props) {
  const [movie, setMovie] = useState<Movie | null>(null)
  const [showModal, setShowModal] = useRecoilState(modalState)
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState)


  useEffect(() => {
    setMovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)])
  }, [netflixOriginals])

  return (
    <div className='flex flex-col space-y-2 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12'>
      <div className="absolute -z-10 top-0 left-0 h-[95vh] w-screen">
        <NextImage 
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`} alt=""
          layout="fill"
          objectFit='cover'
          />
      </div>

      <div className='transform'>
        <h1 className='text-2xl md:text-4xl lg:text-7xl'>{movie?.title || movie?.name || movie?.original_name}</h1>
        <p className='max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl'>{movie?.overview}</p>
      </div>

      <div className='transform flex gap-x-3'>
        <button className='bannerButton bg-white text-black'>
          <BsFillPlayFill className='h-4 w-4 text-black md:w-7 md:h-7 lg:w-9'/>Play</button>
        <button 
          className='bannerButton bg-[gray]/70'
          onClick={() => {
            setShowModal(true)
            setCurrentMovie(movie)
          }}>
            More Info 
          <HiInformationCircle className='h-5 w-5 md:h-8 md:w-8'/>
        </button>
      </div>
      
    </div>
  )
}

export default Banner