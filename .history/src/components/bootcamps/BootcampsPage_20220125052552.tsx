/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { useTranslation } from 'next-i18next'
import { Box, Container, Typography } from '@mui/material'

import Layout from 'components/layout/Layout'
import makeStyles from '@mui/styles/makeStyles'
import createStyles from '@mui/styles/createStyles'

import BootcampList from './BootcampsList'

const useStyles = makeStyles((theme) =>
  createStyles({
    subheading: {
      marginBottom: theme.spacing(3),
    },
    applyButton: {
      backgroundColor: theme.palette.primary.main,
      padding: theme.spacing(1.5, 6),
      margin: theme.spacing(5, 0),
    },
    arrowIcon: {
      fontSize: theme.spacing(8),
    },
  }),
)

export default function CampaignsPage() {
  const { t } = useTranslation()

  return (
    <Layout
      title={t('nav.campaigns.support')}
      githubUrl="https://github.com/podkrepi-bg/frontend/tree/master/src/components/campaigns/CampaignsPage.tsx"
      figmaUrl="https://www.figma.com/file/MmvFKzUv6yE5U2wrOpWtwS/Podkrepi.bg?node-id=5100%3A21216">
      <Container maxWidth="lg">
        <Box textAlign="center" marginBottom={1}></Box>
        <BootcampList />
      </Container>
    </Layout>
  )
}
