import { useTranslation } from 'react-i18next'
import { Avatar, Box, Button, ButtonGroup } from '@material-ui/core'
import { useSession, signOut } from 'next-auth/client'

import { routes } from 'common/routes'
import LinkButton from 'components/common/LinkButton'

export default function Nav() {
  const { t } = useTranslation()

  return (
    <Box textAlign="center">
      <ButtonGroup
        disableRipple
        variant="text"
        component="nav"
        color="primary"
        aria-label="text primary button group">
        <LinkButton href={routes.index}>{t('nav.home')}</LinkButton>
        <LinkButton href={routes.about}>{t('nav.about')}</LinkButton>
      </ButtonGroup>
    </Box>
  )
}
