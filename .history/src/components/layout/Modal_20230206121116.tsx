import MuiModal from '@mui/material/Modal'
import React from 'react'
import { useRecoilValue } from 'recoil'

import { modalState } from '@/atoms/modalAtoms'

function Modal() {
  const showModal = useRecoilValue(modalState)

  return (
    <MuiModal open={showModal}> 
      <>
      Modal
      </>
    </MuiModal>
  )
}

export default Modal