import { useRef } from 'react'
import { Container } from '@mui/material'

import Layout from 'components/layout/Layout'

import Jumbotron from './sections/Jumbotron'
import ActivitySection from './sections/ActivitySection'
import TeamSection from './sections/TeamSection'
import TeamChartSection from './sections/TeamChartSection'
import MissionVisionGoalsSection from './sections/MissionVisionGoalsSection'
import SupportUsSection from './sections/SupportUsSection'
import { RefObject } from 'react-transition-group/node_modules/@types/react'

export default function IndexPage() {
  const scrollElement = useRef<HTMLAnchorElement>(null)
  return (
    <Layout maxWidth={false} disableOffset disableGutters>
      <Jumbotron scrollTo={scrollElement} />
      <Container ref={scrollElement as RefObject<HTMLDivElement>} maxWidth="md">
        <ActivitySection />
        <TeamSection />
        <TeamChartSection />
      </Container>
      <MissionVisionGoalsSection />
      <SupportUsSection />
    </Layout>
  )
}
