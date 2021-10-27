import {
  Grid,
  Container,
  createStyles,
  makeStyles,
  lighten,
  useTheme,
  useMediaQuery,
} from '@material-ui/core'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { Facebook, Instagram, LinkedIn, YouTube } from '@material-ui/icons'

import PodkrepiLogo from 'components/brand/PodkrepiLogo'
import ExternalLink from 'components/common/ExternalLink'
import { routes, socialUrls, staticUrls } from 'common/routes'

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      backgroundColor: theme.palette.primary.dark,
      color: lighten(theme.palette.primary.main, 0.75),
      '& a': {
        color: lighten(theme.palette.primary.main, 0.75),
        '&:hover': {
          color: lighten(theme.palette.primary.main, 0.55),
        },
      },
    },
    footer: {
      padding: theme.spacing(3),
      textAlign: 'center',
      [theme.breakpoints.up('sm')]: {
        textAlign: 'left',
        padding: theme.spacing(5),
      },
    },
  }),
)

type FooterLink = {
  label: string
  href: string
  external?: boolean
}
const footerItems: FooterLink[][] = [
  [
    { label: 'components.footer.about-us', href: routes.about },
    { label: 'components.footer.about-project', href: routes.aboutProject },
    { label: 'components.footer.support', href: routes.support },
    { label: 'components.footer.contact', href: routes.contact },
    { external: true, label: 'nav.blog', href: staticUrls.blog },
  ],
  [
    { external: true, label: 'GitHub', href: staticUrls.github },
    { external: true, label: 'components.footer.docs', href: staticUrls.docs },
    { external: true, label: 'components.footer.dev-docs', href: staticUrls.devDocs },
  ],
  [
    { label: 'components.footer.privacy-policy', href: routes.privacyPolicy },
    { label: 'components.footer.terms-of-service', href: routes.termsOfService },
  ],
]

export default function Footer() {
  const classes = useStyles()
  return (
    <Container component="footer" maxWidth="xl" disableGutters className={classes.container}>
      <Container maxWidth="lg" disableGutters>
        <Grid container className={classes.footer}>
          <Grid item xs={12} sm={8} md={6}>
            <InfoGrid />
          </Grid>
          <Grid item xs={12} sm={4} md={6}>
            <FooterLinks />
          </Grid>
        </Grid>
      </Container>
    </Container>
  )
}

const InfoGrid = () => {
  const { t } = useTranslation()
  const { locale } = useRouter()
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Link href={routes.index}>
          <a>
            <PodkrepiLogo locale={locale} size="large" variant="fixed" />
          </a>
        </Link>
      </Grid>
      <Grid item>
        <SocialIcons />
      </Grid>
      <Grid item>{t('components.footer.copyrights')}</Grid>
      <Grid item>
        {t('components.footer.hosting-partner')}{' '}
        <ExternalLink href={staticUrls.hostingProvider}>
          <strong>SuperHosting.BG</strong>
        </ExternalLink>
      </Grid>
      <Grid item>
        {t('components.footer.version')} {process.env.APP_VERSION}
      </Grid>
    </Grid>
  )
}

const SocialIcons = () => {
  const theme = useTheme()
  const sm = useMediaQuery(theme.breakpoints.up('sm'))
  return (
    <Grid direction="row" container spacing={2} justify={sm ? 'flex-start' : 'center'}>
      <Grid item>
        <ExternalLink href={socialUrls.facebook}>
          <Facebook />
        </ExternalLink>
      </Grid>
      <Grid item>
        <ExternalLink href={socialUrls.linkedin}>
          <LinkedIn />
        </ExternalLink>
      </Grid>
      <Grid item>
        <ExternalLink href={socialUrls.youtube}>
          <YouTube />
        </ExternalLink>
      </Grid>
      <Grid item>
        <ExternalLink href={socialUrls.instagram}>
          <Instagram />
        </ExternalLink>
      </Grid>
    </Grid>
  )
}
const FooterLinks = () => {
  const { t } = useTranslation()
  return (
    <Grid container spacing={3}>
      {footerItems.map((links, column) => (
        <Grid key={column} item xs={12} md={4}>
          <Grid container direction="column" spacing={1}>
            {links.map(({ label, href, external }, row) => (
              <Grid key={`${column}-${row}`} item>
                {external ? (
                  <ExternalLink href={href}>{t(label)}</ExternalLink>
                ) : (
                  <Link href={href}>
                    <a>{t(label)}</a>
                  </Link>
                )}
              </Grid>
            ))}
          </Grid>
        </Grid>
      ))}
    </Grid>
  )
}
