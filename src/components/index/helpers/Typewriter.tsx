import Typewriter from 'typewriter-effect'
import { useTranslation } from 'react-i18next'

import { Typography } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) =>
  createStyles({
    typewriter: {
      marginBottom: theme.spacing(5),
      textShadow: '0px 2px 2px #000',
      fontWeight: 600,
    },
  }),
)

export default function Index() {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <Typography variant="h4" className={classes.typewriter}>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString(t('index:jumbotron.maximum-transparency'))
            .pauseFor(1000)
            .deleteAll(20)
            .typeString(t('index:jumbotron.eliminate-misuse'))
            .pauseFor(1000)
            .deleteAll(20)
            .typeString(t('index:jumbotron.zero-commission'))
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
