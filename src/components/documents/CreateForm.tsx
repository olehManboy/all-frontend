import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Box, Button, Grid } from '@mui/material'
import CarField from 'components/cars/CarField'
import notify from 'components/cars/helpers/notify'
import { DocumentInput, DocumentType } from 'gql/document'
import { useDocument } from 'common/hooks/documents'
import { MutationFunction, useMutation, UseQueryResult } from 'react-query'
import GenericForm from 'components/common/form/GenericForm'
import FormTextField from 'components/common/form/FormTextField'
import SubmitButton from 'components/common/form/SubmitButton'
import { AxiosError, AxiosResponse } from 'axios'
import { axios } from 'common/api-client'
import { ApiErrors } from 'common/api-errors'
import { endpoints } from 'common/api-endpoints'

export default function CreateForm() {
  const router = useRouter()

  const initialValues: DocumentInput = {
    type: '',
    name: '',
    filename: '',
    filetype: '',
    description: '',
    sourceUrl: '',
  }

  const createDocument: MutationFunction<AxiosResponse<DocumentType>, DocumentInput> = async (
    data: DocumentInput,
  ) => {
    return await axios.post<DocumentInput, AxiosResponse<DocumentType>>(
      endpoints.documents.createDocument.url,
      data,
    )
  }

  const mutation = useMutation<AxiosResponse<DocumentType>, AxiosError<ApiErrors>, DocumentInput>({
    mutationFn: createDocument,
    onSuccess: () => {
      router.push('/documents')
    },
  })

  async function onCreateSubmit(data: DocumentInput) {
    mutation.mutate(data)
  }

  return (
    <>
      <GenericForm onSubmit={onCreateSubmit} initialValues={initialValues}>
        <Box sx={{ mt: 15, ml: 75, width: 600 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <FormTextField type="text" label="Type" name="type" />
            </Grid>
            <Grid item xs={6}>
              <FormTextField type="text" label="Name" name="name" />
            </Grid>
            <Grid item xs={6}>
              <FormTextField type="text" label="File name" name="filename" />
            </Grid>
            <Grid item xs={6}>
              <FormTextField type="text" label="File type" name="filetype" />
            </Grid>
            <Grid item xs={6}>
              <FormTextField type="text" label="Description" name="description" />
            </Grid>
            <Grid item xs={6}>
              <FormTextField type="text" label="Source url" name="sourceUrl" />
            </Grid>
            <Grid item xs={6}>
              <SubmitButton fullWidth label="Submit" />
            </Grid>
            <Grid item xs={6}>
              <Link href="/documents">
                <Button>Cancel</Button>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </GenericForm>
    </>
  )
}
