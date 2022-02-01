import React from 'react'
import { Container } from '@mui/material'

import Layout from 'components/layout/Layout'

import BootcampsGrid from './BootcampsGrid'

export default function BootcampsGridPage() {
  return (
    <Layout>
      <Container maxWidth="lg">
        <BootcampsGrid />
      </Container>
    </Layout>
  )
}
