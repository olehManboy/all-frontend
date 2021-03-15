import { Grid, Typography } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import { makeStyles, createStyles } from '@material-ui/core/styles'

import DonorsIcon from './icons/DonorsIcon'
import CampaignApplicantsIcon from './icons/CampaignApplicantsIcon'
import OrganizationsIcon from './icons/OrganizationsIcon'
import VolunteersIcon from './icons/VolunteersIcon'
import AddressIcon from './icons/AddressIcon'
import PhoneIcon from './icons/PhoneIcon'
import MailIcon from './icons/MailIcon'

const useStyles = makeStyles((theme) =>
  createStyles({
    heading: {
      marginBottom: theme.spacing(5),
      color: theme.palette.primary.dark,
    },
    container: {
      marginBottom: theme.spacing(12),
      textAlign: 'center',
    },
    info: {
      marginTop: theme.spacing(4),
    },
    infoIcon: {
      fontSize: theme.spacing(10),
      fill: theme.palette.primary.main,
      stroke: theme.palette.primary.main,
      padding: theme.spacing(1),
    },
    infoLabel: {
      color: theme.palette.primary.dark,
    },
    contact: {
      textAlign: 'center',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'left',
      },
    },
    contactIcon: {
      fontSize: theme.spacing(8),
      fill: theme.palette.primary.main,
      stroke: theme.palette.primary.main,
      padding: theme.spacing(1),
    },
    contactText: {
      flexBasis: '50%',
      color: theme.palette.primary.dark,
    },
  }),
)

const infoIcons = [
  { Icon: DonorsIcon, label: 'contact:info-options.donors' },
  { Icon: CampaignApplicantsIcon, label: 'contact:info-options.campain-applicants' },
  { Icon: OrganizationsIcon, label: 'contact:info-options.organizations' },
  { Icon: VolunteersIcon, label: 'contact:info-options.volunteers' },
]

const contactIcons = [
  {
    Icon: AddressIcon,
    labelKey: 'contact:contact-options.address.key',
    labelValue: 'contact:contact-options.address.value',
  },
  {
    Icon: PhoneIcon,
    labelKey: 'contact:contact-options.phone.key',
    labelValue: 'contact:contact-options.phone.value',
  },
  {
    Icon: MailIcon,
    labelKey: 'contact:contact-options.other.key',
    labelValue: 'contact:contact-options.other.value',
  },
]

export default function ActivitySection() {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <Grid container component="section">
      <Grid container direction="column" className={classes.container}>
        <Typography variant="h6" component="p">
          {t('contact:subtitle')}
        </Typography>
      </Grid>
      <Grid container direction="column" className={classes.container}>
        <Grid item>
          <Typography variant="h5" component="h2" className={classes.heading}>
            {t('contact:heading')}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2">{t('contact:content')}</Typography>
        </Grid>
        <Grid container>
          {infoIcons.map(({ label, Icon }, key) => (
            <Grid item key={key} xs={12} sm={6} md={3} className={classes.info}>
              <Icon className={classes.infoIcon} />
              <Typography variant="body2" className={classes.infoLabel}>
                {t(label)}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid container justify="center" spacing={5} className={classes.container}>
        <Grid item container justify="center" spacing={4}>
          {contactIcons.map(({ Icon, labelKey, labelValue }, key) => (
            <Grid item key={key} xs={12} className={classes.contact}>
              <Icon className={classes.contactIcon} />
              <Grid item className={classes.contactText}>
                <Typography variant="body2" className={classes.contactText}>
                  {t(labelKey)}
                </Typography>
                <Typography variant="body2" className={classes.contactText}>
                  {t(labelValue)}
                </Typography>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}
