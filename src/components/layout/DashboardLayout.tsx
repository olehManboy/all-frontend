import { makeStyles } from '@mui/styles'

import Snackbar from 'components/layout/Snackbar'

import DashboardDrawer from './DashboardDrawer'

type Props = {
  children: React.ReactNode
  title: string
}

const useStyles = makeStyles(() => {
  return {
    pageContainer: {
      position: 'relative',
      minHeight: '100vh',
    },
    contentWrapper: {
      paddingBottom: '55px',
    },
    footer: {
      backgroundColor: '#fff',
      textAlign: 'center',
      position: 'absolute',
      bottom: 0,
      padding: '16px',
      width: '100%',
      height: '55px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1201,
      boxShadow:
        '0px 2px 4px -1px rgb(0 0 0 / 35%), 0px 4px 5px 0px rgb(0 0 0 / 74%), 0px 1px 10px 0px rgb(0 0 0 / 49%)',
    },
  }
})

export default function DashboardLayout({ children, title }: Props) {
  const classes = useStyles()
  return (
    <div className={classes.pageContainer}>
      <div className={classes.contentWrapper}>
        <DashboardDrawer title={title}>{children}</DashboardDrawer>
        <Snackbar />
        <footer className={classes.footer}>
          <p>This is footer &copy;</p>
        </footer>
      </div>
    </div>
  )
}
