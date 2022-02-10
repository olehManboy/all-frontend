import React from 'react'
import { Container } from '@mui/material'
import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import CustomLayout from '../../../components/bootcamp-dimitar/CustomLayout'
import EditForm from 'components/bootcamp-dimitar/EditForm'
import { getBootcampDimitar } from '../../../common/rest'

function EditBootcampDimitar({ data }: { data: any }) {
  return (
    <CustomLayout>
      <Container maxWidth="sm">
        <EditForm data={data} />
      </Container>
    </CustomLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ locale, params }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'bg', [
      'common',
      'auth',
      'validation',
      'campaigns',
    ])),
    data: await getBootcampDimitar(params?.id as string),
  },
})

export default EditBootcampDimitar
