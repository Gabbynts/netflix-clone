import MuiModal from '@mui/material/Modal'
import React from 'react'
import {IoCloseSharp} from 'react-icons/io5'
import { useRecoilState } from 'recoil'

import { modalState } from '@/atoms/modalAtoms'

function Modal() {
  const [showModal, setShowModal] = useRecoilState(modalState)

  const handleClose = () => {
    setShowModal(false)
  }

  return (
    <MuiModal open={showModal} onClose={handleClose}> 
      <>
      <button onClick={handleClose}>
        <IoCloseSharp className ="h-6 w-6" />
      </button>
      </>
    </MuiModal>
  )
}

export default Modal