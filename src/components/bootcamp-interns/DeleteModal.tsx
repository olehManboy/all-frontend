import { useContext } from 'react'
import { useRouter } from 'next/router'
import { Dialog, DialogTitle, DialogActions, Button, Modal } from '@mui/material'

import { routes } from 'common/routes'
import { axios } from 'common/api-client'
import { endpoints } from 'common/api-endpoints'
import { DrawerContext } from 'context/SwipeableDrawerContext'

export default function DeleteModal(props: any) {
  const { setNotificationMessage, setNotificationsOpen }: any = useContext(DrawerContext)
  const {
    deleteData: { id, email, dialogTitle },
    setDeleteOpen,
    deleteOpen,
  } = props.modalProps
  const router = useRouter()

  const handleDelete = async () => {
    await axios.delete(endpoints.bootcampIntern.listBootcampIntern.url + '/' + id)
    setNotificationsOpen(true)
    setNotificationMessage(`Sucessfully deleted ${email}`)
    setDeleteOpen(false)
    router.push(routes.bootcampIntern.index)
  }

  return (
    <Modal open={deleteOpen} onClose={() => setDeleteOpen(false)}>
      <Dialog open={deleteOpen} onClose={() => setDeleteOpen(false)}>
        <DialogTitle>{dialogTitle}</DialogTitle>
        <DialogActions>
          <Button onClick={() => setDeleteOpen(false)}>No</Button>
          <Button onClick={handleDelete} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </Modal>
  )
}
