import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => {
  return {
    footer: {
      background: 'gray',
      width: '100%',
      position: 'absolute',
      height: '60px',
      bottom: 0,
      margin: 0,
    },
    footerParagraph: {
      textAlign: 'center',
      marginTop: '20px',
      fontWeight: 'bolder',
      fontSize: '18px',
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
