import MuiModal from '@mui/material/Modal'
import React from 'react'
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
      <button>
        <XIcon className ="" />
      </button>
      </>
    </MuiModal>
  )
}

export default Modal