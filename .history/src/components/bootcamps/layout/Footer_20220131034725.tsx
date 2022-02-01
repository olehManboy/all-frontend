import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => {
  return {
    footer: {
      background: 'silver',
      width: '100%',
      position: 'fixed',
      height: '60px',
      bottom: 0,
      margin: 0,
    },
    footerParagraph: {
      textAlign: 'center',

    },
  }
})

export default function MyFooter() {
  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <p className={classes.footerParagraph}> Подкрепи БГ &copy;</p>
    </footer>
  )
}
