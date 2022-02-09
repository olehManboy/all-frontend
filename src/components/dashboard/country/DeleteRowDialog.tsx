import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material'
import { useTranslation } from 'next-i18next'

type Props = {
  open: boolean
  closeFn: () => void
  countryName: string
  deleteRow: () => void
}

const DeleteRowDialog = ({ open, closeFn, countryName, deleteRow }: Props) => {
  const { t } = useTranslation('country')

  return (
    <Dialog open={open} onClose={closeFn} maxWidth="xs">
      <DialogTitle>
        {t('alerts.delete-row.question')} ({countryName})?
      </DialogTitle>
      <DialogActions>
        <Button variant="contained" color="secondary" fullWidth onClick={deleteRow}>
          {t('btns.confirm')}
        </Button>
        <Button variant="contained" color="primary" fullWidth onClick={closeFn}>
          {t('btns.cancel')}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default DeleteRowDialog
