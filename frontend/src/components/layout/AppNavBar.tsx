import clsx from 'clsx'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { GitHub, Menu } from '@material-ui/icons'
import { useSession } from 'next-auth/client'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, IconButton, Grid, Hidden } from '@material-ui/core'

import { routes, staticUrls } from 'common/routes'
import PodkrepiLogo from 'components/brand/PodkrepiLogo'

import LocaleButton from './LocaleButton'
import PublicMenu from './nav/PublicMenu'
import PrivateMenu from './nav/PrivateMenu'
import MainNavMenu from './nav/MainNavMenu'

const useStyles = makeStyles((theme) =>
  createStyles({
    appBar: {
      overflow: 'hidden',
      transition: 'height .5s, background-color .5s ease 0s',
      height: theme.spacing(14),
      lineHeight: theme.spacing(14),
      [theme.breakpoints.down('sm')]: {
        height: theme.spacing(10),
      },
      '&.shrink': {
        height: theme.spacing(10),
        lineHeight: theme.spacing(10),
        backgroundColor: 'hsla(0,0%,100%,0.85)',
        backdropFilter: 'saturate(180%) blur(5px)',
      },
      backgroundColor: theme.palette.common.white,
    },
    toolbar: {
      height: '100%',
      display: 'flex',
      justifyContent: 'space-between',
    },
    toolboxGrid: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(5),
      [theme.breakpoints.up('lg')]: {
        marginRight: theme.spacing(10),
      },
    },
    logo: {
      transition: 'height .5s',
      height: theme.spacing(7.5),
      minWidth: theme.spacing(15),
      marginLeft: theme.spacing(5),
      [theme.breakpoints.up('lg')]: {
        marginLeft: theme.spacing(10),
      },
      [theme.breakpoints.down('sm')]: {
        marginLeft: 0,
        width: '100%',
        height: '50%',
      },
      '&.shrink': {
        height: '50%',
      },
      '& > svg': {
        display: 'block',
        height: '100%',
      },
    },
  }),
)

type AppBarDeckProps = {
  navMenuToggle: () => void
}
export default function AppNavBar({ navMenuToggle }: AppBarDeckProps) {
  const { locale } = useRouter()
  const classes = useStyles()
  const [session] = useSession()
  const shrink = useScrollTrigger()
  return (
    <AppBar position="fixed" className={clsx(classes.appBar, { shrink })}>
      <Toolbar className={classes.toolbar}>
        <Link href={routes.index}>
          <a className={clsx(classes.logo, { shrink })}>
            <PodkrepiLogo locale={locale} variant="adaptive" />
          </a>
        </Link>
        <Hidden smDown>
          <Grid
            container
            wrap="nowrap"
            direction="row"
            justify="flex-end"
            className={classes.toolboxGrid}>
            <Grid item>
              <MainNavMenu>
                <Grid item>
                  <LocaleButton />
                </Grid>
                <Grid item>
                  <IconButton
                    size="small"
                    target="_blank"
                    rel="noreferrer noopener"
                    href={staticUrls.github}>
                    <GitHub fontSize="small" />
                  </IconButton>
                </Grid>
                {session ? <PrivateMenu /> : <PublicMenu disableAuth />}
              </MainNavMenu>
            </Grid>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <IconButton size="small" edge="end" onClick={navMenuToggle} aria-label="navigation menu">
            <Menu fontSize="large" />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  )
}
