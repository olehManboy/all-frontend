import React from 'react'
import { useTranslation } from 'next-i18next'
import { routes } from 'common/routes'
import Layout from 'components/layout/Layout'
import LinkButton from 'components/common/LinkButton'
import CampaignsList from './CampaignsList'
import { Box, Container, Typography } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import createStyles from '@mui/styles/createStyles'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'


const useStyles = makeStyles((theme) =>
  createStyles({
    subheading: {
      marginBottom: theme.spacing(3),
    },
    applyButton: {
      backgroundColor: theme.palette.primary.main,
      padding: theme.spacing(1.5, 6),
      margin: theme.spacing(5, 0),
    },
    arrowIcon: {
      fontSize: theme.spacing(8),
    },
  }),
)

export default function CampaignsPage() {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <Layout
      title={t('campaigns:cta.support-cause-today')}
      githubUrl="https://github.com/podkrepi-bg/frontend/tree/master/src/components/campaigns/CampaignsPage.tsx"
      figmaUrl="https://www.figma.com/file/MmvFKzUv6yE5U2wrOpWtwS/Podkrepi.bg?node-id=5100%3A21216">
      <Container maxWidth="lg">
        <Typography variant="subtitle2" component="p" className={classes.subheading}>
          {t('campaigns:campaign.subheading')}
        </Typography>
        <Typography variant="h6" component="p" className={classes.subheading}>
          {t('campaigns:campaign.subheading-bold')}
        </Typography>
        <Typography variant="h6" component="p" className={classes.subheading}>
          {t('campaigns:campaign.subheading-bold-secondary')}
        </Typography>
        <Box textAlign="center" marginBottom={4}>
          <LinkButton
            href={routes.campaigns.create}
            variant="contained"
            size="small"
            className={classes.applyButton}
            endIcon={<ArrowForwardIosIcon />}>
            {t('campaigns:cta.apply')}
          </LinkButton>
        </Box>
        <CampaignsList />
      </Container>
    </Layout>
  )
}
