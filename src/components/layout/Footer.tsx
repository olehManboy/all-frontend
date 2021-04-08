import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

import { Grid, Container, createStyles, makeStyles, lighten } from '@material-ui/core'
import { Instagram, Facebook, Twitter, LinkedIn, YouTube } from '@material-ui/icons'

import PodkrepiLogo from 'components/brand/PodkrepiLogo'
import { routes, staticUrls } from 'common/routes'

const useStyles = makeStyles((theme) =>
  createStyles({
    footer: {
      backgroundColor: theme.palette.primary.dark,
      padding: theme.spacing(3),
      textAlign: 'center',
      [theme.breakpoints.up('sm')]: {
        textAlign: 'left',
        padding: theme.spacing(5),
      },
      [theme.breakpoints.up('lg')]: {
        padding: theme.spacing(7, 15),
      },
      '& a': {
        color: lighten(theme.palette.primary.main, 0.75),
      },
    },
    rightGrid: {
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    socialContainer: {
      padding: theme.spacing(1, 0),
    },
    socialLink: {
      marginRight: theme.spacing(1),
    },
    copyrights: {
      color: lighten(theme.palette.primary.main, 0.75),
    },
    link: {
      padding: theme.spacing(0.5, 0),
    },
  }),
)

type FooterLink = {
  label: string
  href?: string
  external: boolean
}
const footerItems: FooterLink[][] = [
  [
    {
      label: 'footerLabels.aboutUs',
      href: routes.about,
      external: false,
    },
    {
      label: 'footerLabels.aboutProject',
      href: routes.aboutProject,
      external: false,
    },
    {
      label: 'footerLabels.docs',
      href: staticUrls.docs,
      external: true,
    },
    {
      label: 'footerLabels.dev-docs',
      href: staticUrls.devDocs,
      external: true,
    },
    {
      label: 'GitHub',
      href: staticUrls.github,
      external: true,
    },
  ],
  [
    {
      label: 'footerLabels.contact',
      href: routes.contact,
      external: false,
    },
    {
      label: 'footerLabels.support',
      href: routes.support,
      external: false,
    },
    {
      label: 'footerLabels.terms',
      // terms route is not implemented yet
      // href: routes.terms,
      external: false,
    },
  ],
  [
    {
      label: 'footerLabels.confidentiality',
      // confidentiality route is not implemented yet
      // href: routes.gdpr,
      external: false,
    },
    {
      label: 'footerLabels.gdpr',
      // gdpr route is not implemented yet
      // href: routes.gdpr,
      external: false,
    },
  ],
]

const socialLinks = {
  facebook: '/',
  twitter: '/',
  linkedin: '/',
  youtube: '/',
  instagram: '/',
}

export default function Footer() {
  const { t } = useTranslation()
  const classes = useStyles()
  const { locale } = useRouter()

  return (
    <Container component="footer" maxWidth="xl" disableGutters>
      <Grid container className={classes.footer}>
        <Grid item xs={12} sm={8} md={6}>
          <Link href={routes.index}>
            <a>
              <PodkrepiLogo locale={locale} size="large" variant="fixed" />
            </a>
          </Link>
          <div className={classes.socialContainer}>
            <a href={socialLinks.facebook} target="_blank" rel="noreferrer noopener">
              <Facebook className={classes.socialLink} />
            </a>
            <a href={socialLinks.twitter} target="_blank" rel="noreferrer noopener">
              <Twitter className={classes.socialLink} />
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer noopener">
              <LinkedIn className={classes.socialLink} />
            </a>
            <a href={socialLinks.youtube} target="_blank" rel="noreferrer noopener">
              <YouTube className={classes.socialLink} />
            </a>
            <a href={socialLinks.instagram} target="_blank" rel="noreferrer noopener">
              <Instagram className={classes.socialLink} />
            </a>
          </div>
          <span className={classes.copyrights}>{t('footerCopyrights')}</span>
        </Grid>
        <Grid item xs={12} sm={4} md={6} className={classes.rightGrid}>
          {footerItems.map((subarr: FooterLink[], column) => (
            <Grid key={column} item xs={12} md={4}>
              <ul>
                {subarr.map(({ label, href, external }, row) => (
                  <li key={`${column}-${row}`} className={classes.link}>
                    <Link href={href || routes.index}>
                      <a
                        rel={external ? 'noreferrer noopener' : undefined}
                        target={external ? '_blank' : undefined}>
                        {t(label)}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  )
}
