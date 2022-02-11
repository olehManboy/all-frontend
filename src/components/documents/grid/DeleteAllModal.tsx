import React from 'react'
import { MutationFunction, useMutation, useQueryClient } from 'react-query'
import { AxiosError, AxiosResponse } from 'axios'
import { Dialog, Card, CardContent, Box, Button, Modal, Typography, CSSObject } from '@mui/material'
import { GridSelectionModel } from '@mui/x-data-grid'

import { DocumentResponse } from 'gql/document'
import { ApiErrors } from 'common/api-errors'
import { axios } from 'common/api-client'
import { endpoints } from 'common/api-endpoints'
import { ModalStore } from 'stores/ModalStore'
import { observer } from 'mobx-react'

type Props = {
  idsToDelete: GridSelectionModel
}

export default observer(function DeleteAllModal({ idsToDelete }: Props) {
  const queryClient = useQueryClient()
  const { isDeleteAllOpen, hideDeleteAll } = ModalStore

  const deleteDocuments: MutationFunction<AxiosResponse<DocumentResponse>, GridSelectionModel> =
    async () => {
      return await axios.post<DocumentResponse, AxiosResponse<DocumentResponse>>(
        endpoints.documents.deleteDocuments.url,
        idsToDelete,
      )
    }

  const deleteMutation = useMutation<
    AxiosResponse<DocumentResponse>,
    AxiosError<ApiErrors>,
    GridSelectionModel
  >({
    mutationFn: deleteDocuments,
    onSuccess: () => {
      hideDeleteAll()
      queryClient.invalidateQueries('/document')
    },
  })

  function deleteHandler() {
    deleteMutation.mutate(idsToDelete)
  }

  return (
    <Dialog open={isDeleteAllOpen} onClose={hideDeleteAll} sx={{ top: '-35%' }}>
      <Card>
        <CardContent>
          <Typography variant="h6" sx={{ marginBottom: '16px', textAlign: 'center' }}>
            Are you sure?
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '16px', textAlign: 'center' }}>
            This action will delete all selected items permanently!
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button color="error" onClick={deleteHandler}>
              Delete
            </Button>
            <Button onClick={hideDeleteAll}>Cancel</Button>
          </Box>
        </CardContent>
      </Card>
    </Dialog>
  )
})
