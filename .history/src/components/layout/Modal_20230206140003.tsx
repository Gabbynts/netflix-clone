import MuiModal from '@mui/material/Modal'
import {useEffect, useState} from 'react'
import {IoCloseSharp} from 'react-icons/io5'
import { useRecoilState } from 'recoil'
import { Movie } from 'typings'

import { modalState } from '@/atoms/modalAtoms'

function Modal() {
  const [showModal, setShowModal] = useRecoilState(modalState)
  const [movie, setMovie] = useState<Movie | null>(null)

  useEffect(() => {
    if(!movie) return
      async function fetchMovie() {
        const data = 
          await fetch(`https://api.themoviedb.org/3/${movie?.media_type === 
          'tv' ? 'tv' : 'movie'}/${movie?.id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}
          &language=en-US&append_to_response=videos`
        ).then((response) => response.json())

        console.log(data)
      }
      fetchMovie()
  }, [movie])

  const handleClose = () => {
    setShowModal(false)
  }

  return (
    <MuiModal open={showModal} onClose={handleClose}> 
      <>
      <button className='right-5 absolute top-5 !z-30 h-9 w-9 bg-[#0e0d0d]/75 rounded-full
                        flex justify-center hover:bg-[#333]/75' 
              onClick={handleClose}>
        <IoCloseSharp className ="h-6 w-6 mt-1" />
      </button>
      </>
    </MuiModal>
  )
}

export default Modal