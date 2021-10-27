import React, { useMemo } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import LinearProgress from '@material-ui/core/LinearProgress'
import { Grid, Typography } from '@material-ui/core'
import { money } from 'common/util/money'
const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 20,
    borderRadius: 5,
    padding: theme.spacing(1),
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
  },
}))(LinearProgress)

const useStyles = makeStyles((theme) => ({
  donationProgress: {
    width: '100%',

    '> div p': {
      color: theme.palette.text.secondary,
      padding: theme.spacing(1),
    },
  },

  cardActions: {
    padding: '0',
  },
}))

type Props = {
  raised: number
  target: number
}
export default function CampaignProgress({ raised, target }: Props) {
  const classes = useStyles()
  const percentage = useMemo(() => (raised / target) * 100, [raised, target])
  return (
    <Grid className={classes.donationProgress} container>
      <Grid item xs={12}>
        <BorderLinearProgress variant="determinate" value={percentage > 100 ? 100 : percentage} />
      </Grid>
      <Grid item xs={6}>
        <Typography gutterBottom color="primary" variant="body1" align="left">
          {money(raised)}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography gutterBottom color="primary" variant="body1" align="right">
          {money(target)}
        </Typography>
        {raised > target && (
          <Typography gutterBottom color="primary" variant="body1" align="right">
            (+ {money(raised - target)})
          </Typography>
        )}
      </Grid>
    </Grid>
  )
}
