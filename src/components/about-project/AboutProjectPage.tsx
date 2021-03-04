import React from 'react'
import { useTranslation } from 'react-i18next'
import { Container, Typography } from '@material-ui/core'

import Layout from 'components/layout/Layout'
import Timeline from './sections/Timeline'
import WhatIsDone from './sections/WhatIsDone'
import SelfFinancing from './sections/SelfFinancing'
import AboutPlatform from './sections/AboutPlatform'

export default function AboutProject() {
  const { t } = useTranslation()

  return (
    <Layout title={'За проекта'}>
      <Container maxWidth="lg">
        <AboutPlatform />
        <WhatIsDone />
        <Timeline />
        <SelfFinancing />
      </Container>
    </Layout>
  )
}
