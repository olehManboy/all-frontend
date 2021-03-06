import { Grid, Box } from '@mui/material'
import { useTranslation } from 'next-i18next'
import makeStyles from '@mui/styles/makeStyles'
import createStyles from '@mui/styles/createStyles'

import Heading from 'components/common/Heading'
import TeamPie from 'components/index/helpers/chart/TeamPie'

const useStyles = makeStyles((theme) =>
  createStyles({
    heading: {
      paddingTop: theme.spacing(10),
      paddingBottom: theme.spacing(7),
      color: theme.palette.primary.dark,
      fontWeight: 500,
    },
  }),
)

const TeamChartSection = () => {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <Box component="section" mb={10} textAlign="center">
      <Grid container direction="column" justifyContent="center" spacing={3}>
        <Grid item>
          <Heading id="team-chart" variant="h5" component="h2" className={classes.heading} linkable>
            {t('index:team-chart-section.heading')}
          </Heading>
        </Grid>
        <Grid item>
          <Box textAlign="center" overflow="hidden">
            <TeamPie />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default TeamChartSection
