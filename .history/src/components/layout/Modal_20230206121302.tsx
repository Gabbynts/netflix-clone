import MuiModal from '@mui/material/Modal'
import React from 'react'
import { useRecoilState } from 'recoil'

import { modalState } from '@/atoms/modalAtoms'

function Modal() {
  const [showModal, setShowModal] = useRecoilState(modalState)

  const handleClose = () => {
    set
  }

  return (
    <MuiModal open={showModal} onClose={handleClose}> 
      <>
      Modal
      </>
    </MuiModal>
  )
}

export default Modal