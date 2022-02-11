import React from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from '@mui/material'
import { axios } from 'common/api-client'
import { useTranslation } from 'react-i18next'
import { observer } from 'mobx-react'
import { DeleteManyModalStore } from './DeleteManyModalStore'
import { useTheme } from '@mui/styles'
import { AlertStore } from '../NotificationsAlert/AlertStore'
import { useQuery } from 'react-query'
import { CampaignTypesResponse } from 'gql/campaign-types'
import { endpoints } from 'common/api-endpoints'

function DetailsModal() {
  const theme = useTheme()
  const { getDialogs } = DeleteManyModalStore
  const handleClose = () => DeleteManyModalStore.hide()
  const { t } = useTranslation()
  const query = useQuery<CampaignTypesResponse[]>(endpoints.campaignTypes.listCampaignTypes.url)

  const onYesButtonClick = async (ids: string[]) => {
    try {
      ids.map((x) => {
        axios.delete(`/person/remove/${x}`)
      })
      DeleteManyModalStore.clear()
      AlertStore.show('Successfully removed persons', 'success')
      query.refetch()
    } catch (e) {
      AlertStore.show('An error occured', 'error')
    }
  }

  return (
    <>
      {getDialogs.map(({ ids, show }) => {
        return (
          <Dialog
            key={ids[0]}
            onClose={handleClose}
            open={show}
            maxWidth="md"
            PaperProps={{ elevation: 5 }}
            BackdropProps={{ style: { opacity: 0.3 } }}>
            <DialogTitle>Campaign types removing</DialogTitle>
            <DialogContent dividers>
              <Grid item xs={12}>
                <Typography variant="h5" style={{ textAlign: 'center' }} component="h2">
                  Are you sure you want to remove these persons?
                </Typography>
                <div style={{ textAlign: 'center', marginTop: '2%' }}>
                  <Button
                    onClick={async () => await onYesButtonClick(ids.map(String))}
                    variant="outlined"
                    sx={{
                      backgroundColor: theme.palette.secondary.main,
                      color: 'white',
                    }}>
                    Yes
                  </Button>
                  <Button
                    onClick={() => DeleteManyModalStore.clear()}
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      color: theme.palette.background.default,
                    }}
                    variant="outlined"
                    style={{ marginLeft: '1%' }}>
                    No
                  </Button>
                </div>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleClose} color="primary">
                {t('common:close')}
              </Button>
            </DialogActions>
          </Dialog>
        )
      })}
    </>
  )
}

export default observer(DetailsModal)
