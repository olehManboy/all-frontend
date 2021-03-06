import Typewriter from 'typewriter-effect'
import { useTranslation } from 'next-i18next'

import { Typography } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import createStyles from '@mui/styles/createStyles'

const useStyles = makeStyles((theme) =>
  createStyles({
    typewriter: {
      height: theme.spacing(21),
      fontWeight: 500,
      [theme.breakpoints.up('md')]: {
        height: theme.spacing(15),
      },
      [theme.breakpoints.up('lg')]: {
        height: theme.spacing(10),
      },
    },
  }),
)

export default function Index() {
  const classes = useStyles()
  const { i18n, t } = useTranslation()

  return (
    <Typography variant="h4" component="div" className={classes.typewriter}>
      <Typewriter
        key={i18n.language}
        onInit={(typewriter) => {
          typewriter
            .typeString(t('index:jumbotron.maximum-transparency'))
            .pauseFor(1000)
            .deleteAll(20)
            .typeString(t('index:jumbotron.zero-commission'))
            .pauseFor(1000)
            .deleteAll(20)
            .typeString(t('index:jumbotron.eliminate-misuse'))
            .pauseFor(1000)
            .deleteAll(20)
            .typeString(t('index:jumbotron.improve-donation-culture'))
            .pauseFor(1000)
            .deleteAll(20)
            .typeString(t('index:jumbotron.open-source'))
            .pauseFor(1000)
            .deleteAll(20)
            .start()
        }}
        options={{
          loop: true,
          delay: 70,
        }}
      />
    </Typography>
  )
}
