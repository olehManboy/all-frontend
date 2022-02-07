import React from 'react'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import { CampaignResponse } from 'gql/campaigns'
import makeStyles from '@mui/styles/makeStyles'
import createStyles from '@mui/styles/createStyles'
import { Grid, Theme, Typography } from '@mui/material'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bannerWrapper: {
      '& span': {
        position: 'inherit !important',
      },
    },
    banner: {
      zIndex: -1,
      minHeight: '504px !important',
      marginTop: `${theme.spacing(10)} !important`,
      [theme.breakpoints.up('md')]: {
        marginTop: `${theme.spacing(14)} !important`,
      },
    },
    campaignTitle: {
      height: theme.spacing(32),
      color: theme.palette.common.white,
      fontWeight: 500,
    },
    beneficiaryAvatarWrapper: {
      textAlign: 'center',
      [theme.breakpoints.up('md')]: {
        textAlign: 'left',
      },
    },
    beneficiaryAvatar: {
      borderRadius: '50%',
      border: `4px solid ${theme.palette.common.white} !important`,
      textAlign: 'center',
    },
    campaignInfoWrapper: {
      gap: theme.spacing(2),
      display: 'grid',
    },
    coordinatorAvatar: {
      borderRadius: '50%',
    },
  }),
)

type Props = {
  campaign: CampaignResponse
}

export default function CampaignDetails({ campaign }: Props) {
  const classes = useStyles()
  const { t } = useTranslation()

  const bannerSource = '/img/campaign-banner.png'
  const beneficiaryAvatarSource = '/img/support-us-image.png'
  const coordinatorAvatarSource = '/img/support-us-image.png'

  return (
    <Grid item xs={12} md={8}>
      <Grid className={classes.bannerWrapper}>
        <Image
          src={bannerSource}
          alt="Campaign banner image"
          layout="fill"
          objectFit="cover"
          className={classes.banner}
        />
      </Grid>
      <Typography paragraph variant="h2" component="h1" p={4} className={classes.campaignTitle}>
        {campaign.title}
      </Typography>
      <Grid item p={4} className={classes.beneficiaryAvatarWrapper}>
        <Image
          src={beneficiaryAvatarSource}
          alt={campaign.title}
          width={250}
          height={250}
          className={classes.beneficiaryAvatar}
        />
      </Grid>
      <Typography variant="subtitle2" component="p">
        {t('campaigns:campaign.start-date')} {campaign.startDate}
      </Typography>
      <Grid className={classes.campaignInfoWrapper}>
        <Typography variant="subtitle2" component="p">
          {t('campaigns:campaign.end-date')}
          {campaign.endDate}
        </Typography>
        <Typography variant="subtitle2" component="p">
          {campaign.description}
        </Typography>
        <Typography variant="h6" component="h6">
          {t('campaigns:campaign.coordinator.name')}
        </Typography>
        <Grid container alignItems="center" gap={4}>
          <Image
            src={coordinatorAvatarSource}
            alt={campaign.title}
            width={100}
            height={100}
            className={classes.coordinatorAvatar}
          />
          <Typography variant="h6" component="h6">
            {campaign.coordinator.person.firstName}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}
