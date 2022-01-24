import * as React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { ModalContext } from 'context/ModalContext'
import { useContext, useState } from 'react'
import { useRouter } from 'next/router'
import { useFetchCar } from 'common/hooks/useCarsList'
import EditForm from './EditForm'
import CarCard from './CarCard'
const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

export default function DetailsModal() {
  const [editOpen, setEditOpen] = useState(false)
  const router = useRouter()
  const id: any = router.query.id
  const car = useFetchCar(id)
  const modal: any = useContext(ModalContext)

  return (
    <div>
      <Modal
        open={modal.isOpen}
        onClose={modal.closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          {!editOpen ? (
            <CarCard car={car.data} setEditOpen={setEditOpen}></CarCard>
          ) : (
            <EditForm car={car.data} setEditOpen={setEditOpen}></EditForm>
          )}
        </Box>
      </Modal>
    </div>
  )
}
