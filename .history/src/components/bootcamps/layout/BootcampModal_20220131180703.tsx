import { Button, DialogTitle, Modal } from '@mui/material'
import { Dialog } from '@mui/material'
import { Box } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => {
  return {
    modal: {
      width: '400px',
      height: '200px',
    },
    field: {
      fontSize: '23px',
      textAlign: 'center',
      padding: '8px',
    },
    title: {
      fontSize: '32px',
      textAlign: 'center',
    },
    dialog: {
      color: 'orange',
    },
    // modal: {
    //   position: 'fixed',
    //   background: 'lightblue',
    //   width: '50%',
    //   height: '50%',
    //   top: '5%',
    //   left: '50%',
    //   right: 'auto',
    //   bottom: 'auto',
    // },
  }
})

export default function BootcampModal(props: any) {
  const styles = useStyles()
  const { firstName, lastName, open, setOpen } = props.modalProps
  return (
    <Modal open={open} onClose={() => setOpen(false)} className={styles.modal}>
      <Dialog open={open} className={styles.dialog} onClose={() => setOpen(false)}>
        <DialogTitle className={styles.title}>Info</DialogTitle>
        <Box className={styles.field}>{firstName}</Box>
        <Box className={styles.field}>{lastName}</Box>
        <Button sx={{ mb: 5 }} variant="contained" onClick={() => setOpen(false)}>
          Close
        </Button>
      </Dialog>
    </Modal>
  )
}
