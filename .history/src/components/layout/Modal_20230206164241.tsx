import MuiModal from '@mui/material/Modal'
import {useEffect, useState} from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import {BiLike} from 'react-icons/bi'
import {BsFillPlayFill} from 'react-icons/bs'
import {FiVolume2,FiVolumeX} from 'react-icons/fi'
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
          <div className='absolute flex bottom-10 left-9'>
            <div className='flex space-x-3 left-9'>
              <button className='rounded flex items-center bg-[#fff] text-black gap-2
                                px-8 font-bold text-xl transition hover:bg-[#acacac]'>
                <BsFillPlayFill className=' text-black h-8 w-8' />
                Play
              </button>

              <button className='modalButton'>
                <AiOutlinePlus className='w-6 h-6 absolute top-[5px]'/>
              </button>

              <button className='modalButton'>
                <BiLike className='h-6 w-6 absolute top-[5px]'/>
              </button>
          </div>

          <button 
            className='modalButton'
            onClick={() => setMuted(!muted)}>
            {muted ? (
              <FiVolumeX className='h-6 w-6 absolute top-[5px]'/>
            ) : (
              <FiVolume2 className='h-6 w-6 absolute top-[5px]'/>
            )}
          </button>
        </div>
      </div>

      <div className='flex sopace-x-16 rounded-b-md'>
        <div className='space-y-6 text-lg'>
          <div className='flex items-center space-x-2 text-sm'>
            <p className='text-[#61e482] font-semibold'>{movie!.vote_average * 10}% Match</p>
            <p className='font-light'>{movie?.release_date || movie?.first_air_date}</p>
            <div className='border-white border h-4 flex items-center rounded px-1.5 text-xs'>
              HD
            </div>
          </div>
          
          <div className=''>
            <p className='w-5/6'>{movie?.overview}</p>
            <div className='text-sm'>
              <div>
                <span className='text-[#838383]'>Genres: </span>
                {genres.map((genre) => genre.name).join(', ')}
              </div>
            </div>
          </div>
        </div>
      </div>

      
      </>
    </MuiModal>
  )
}

export default Modal