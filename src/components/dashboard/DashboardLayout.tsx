import Head from 'next/head'
import { useMemo } from 'react'
import { useTranslation } from 'next-i18next'
import { Box, Container, ContainerProps } from '@mui/material'
import createStyles from '@mui/styles/createStyles'
import makeStyles from '@mui/styles/makeStyles'

import { defaultOgImage } from 'common/routes'
import Snackbar from 'components/layout/Snackbar'

import DashboardAppBar from './DashboardAppBar'
import DashboardFooter from './DashboardFooter'

type LayoutProps = React.PropsWithChildren<
  ContainerProps & {
    title?: string
    ogImage?: string
  }
>

const useStyles = makeStyles((theme) =>
  createStyles({
    layout: {
      position: 'relative',
      minHeight: '100vh',
      paddingBottom: 20,
    },
    pageTitle: {
      padding: theme.spacing(4),
    },
    offset: {
      ...theme.mixins.toolbar,
      marginBottom: theme.spacing(6),
      [theme.breakpoints.down('lg')]: {
        marginBottom: theme.spacing(0),
      },
    },
    content: {
      paddingTop: '80px',
    },
  }),
)

export default function DashboardLayout({
  title,
  ogImage,
  children,
  maxWidth = 'lg',
  ...containerProps
}: LayoutProps) {
  const classes = useStyles()
  const { t } = useTranslation()
  const suffix = t('meta.title')
  const metaTitle = useMemo(() => (title ? `${title} | ${suffix}` : suffix), [title, suffix])

  return (
    <Container className={classes.layout} maxWidth={false} disableGutters>
      <Container maxWidth={maxWidth} {...containerProps}>
        <Head>
          <title>{metaTitle}</title>
          <meta key="og:title" property="og:title" content={metaTitle} />
          <meta key="og:image" property="og:image" content={ogImage ?? defaultOgImage} />
          <meta key="og:image:width" property="og:image:width" content="1910" />
          <meta key="og:image:height" property="og:image:height" content="1000" />
        </Head>
        <Box pt={4} className={classes.content}>
          <DashboardAppBar />
          {children}
        </Box>
        <Snackbar />
      </Container>
      <DashboardFooter />
    </Container>
  )
}
