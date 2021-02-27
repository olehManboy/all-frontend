import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { teamPieData, teamPieOptions, TeamPieItem } from 'components/chart/pieData'
import { useTranslation } from 'react-i18next'
import handleViewport from 'react-in-viewport'

export type TeamPieProps = {
  inViewport: boolean
  forwardedRef: React.RefObject<HTMLDivElement>
  enterCount: number
}

const TeamPie = ({ inViewport, forwardedRef, enterCount }: TeamPieProps) => {
  const { t } = useTranslation()
  teamPieData.forEach((item: TeamPieItem): void => {
    item.name = t(`index:team-chart-section.data.${item.id}`)
  })
  const runAnimation: boolean = inViewport || enterCount > 0

  return (
    <div ref={forwardedRef}>
      {runAnimation && <HighchartsReact highcharts={Highcharts} options={teamPieOptions} />}
    </div>
  )
}

export default handleViewport(TeamPie, {}, { disconnectOnLeave: true })
