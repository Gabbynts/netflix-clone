import MuiModal from '@mui/material/Modal'
import {useEffect, useState} from 'react'
import {BsFillPlayFill} from 'react-icons/bs'
import {IoCloseSharp} from 'react-icons/io5'
import ReactPlayer from 'react-player'
import { useRecoilState } from 'recoil'
import { Element, Genre } from 'typings'

import { modalState, movieState } from '@/atoms/modalAtoms'

function Modal() {
  const [showModal, setShowModal] = useRecoilState(modalState)
  const [movie, setMovie] = useRecoilState(movieState)
  const [trailer, setTrailer] = useState("")
  const [genres, setGenres] = useState<Genre[]>([])
  const [muted, setMuted] = useState(true)

  useEffect(() => {
    if(!movie) return
      async function fetchMovie() {
        const data = 
          await fetch(`https://api.themoviedb.org/3/${
            movie?.media_type === 'tv' ? 'tv' : 'movie'
          }/${movie?.id}?api_key=${
            process.env.NEXT_PUBLIC_API_KEY
          }&language=en-US&append_to_response=videos`
        ).then((response) => response.json())

        if(data?.videos){
          const index = data.videos.results.findIndex((element: Element) => element.type === "Trailer")
          setTrailer(data.videos?.results[index]?.key)
        }

        if(data?.genres){
          setGenres(data.genres)
        }
      }
      fetchMovie()
  }, [movie])

  const handleClose = () => {
    setShowModal(false)
  }

  console.log(trailer)

  return (
    <MuiModal 
      open={showModal} 
      onClose={handleClose}
      className='fixed !top-7 left-0 right-0 mx-auto w-full max-w-5xl overflow-hidden
                overflow-y-scroll rounded-md scrollbar-hide'> 
      <>
      <button className='right-5 absolute top-5 !z-30 h-9 w-9 bg-[#0e0d0d]/75 rounded-full
                        flex justify-center hover:bg-[#333]/75' 
              onClick={handleClose}>
        <IoCloseSharp className ="h-6 w-6 mt-1" />
      </button>
      
      <div className='relative pt-[56.25%]'>
      <ReactPlayer
            url={`https://www.youtube.com/watch?v=${trailer}`}
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: '0', left: '0' }}
            playing
            muted={muted}
          />
        <div className='absolute bottom-10 left-9'>
          <div>
            <button className='flex items-center bg-[#fff] text-black'>
              <BsFillPlayFill className=' text-black h-7 w-7' />Play</button>
          </div>
        </div>
      </div>

      
      </>
    </MuiModal>
  )
}

export default Modal