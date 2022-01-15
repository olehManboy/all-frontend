import React, { useState } from 'react'
import { useTranslation } from 'next-i18next'
import { AccountCircle } from '@mui/icons-material'
import { Avatar, Grid, IconButton, Menu, Typography } from '@mui/material'

import { routes } from 'common/routes'
import { useSession } from 'common/util/useSession'
import LinkMenuItem from 'components/common/LinkMenuItem'

export default function PrivateMenu() {
  const { t } = useTranslation()
  const { session } = useSession()
  const [anchorEl, setAnchorEl] = useState<Element | null>(null)

  const handleMenu = (event: React.MouseEvent) => setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)

  if (!session) {
    return null
  }

  const title = `${session.name}\n(${session.email})`
  return (
    <Grid item>
      <IconButton onClick={handleMenu} size="large">
        {session.picture ? (
          <Avatar title={title} alt={title} src={session.picture} />
        ) : (
          <AccountCircle color="info" />
        )}
      </IconButton>
      <Menu
        keepMounted
        id="menu-appbar"
        anchorEl={anchorEl}
        onClose={handleClose}
        open={Boolean(anchorEl)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <LinkMenuItem href={routes.profile}>
          <Typography variant="button">{t('nav.profile')}</Typography>
        </LinkMenuItem>
        <LinkMenuItem href={routes.logout}>
          <Typography variant="button">{t('nav.logout')}</Typography>
        </LinkMenuItem>
      </Menu>
    </Grid>
  )
}
