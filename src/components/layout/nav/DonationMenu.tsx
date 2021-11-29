import { Button, Menu, MenuItem } from '@mui/material'
import { routes } from 'common/routes'
import LinkButton from 'components/common/LinkButton'
import { useTranslation } from 'next-i18next'
import React, { useState } from 'react'

export default function LocaleMenu() {
  const { t } = useTranslation()
  const [anchorEl, setAnchorEl] = useState<Element | null>(null)

  const handleMenu = (event: React.MouseEvent) => setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)

  return (
    <>
      <Button variant="text" color="primary" onClick={handleMenu} style={{ whiteSpace: 'nowrap' }}>
        {t('nav.donation-menu')}
      </Button>
      <Menu
        id="menu-donation"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}>
        <MenuItem onClick={handleClose}>
          <LinkButton
            variant="text"
            color="primary"
            href={routes.campaigns.index}
            style={{ whiteSpace: 'nowrap' }}>
            {t('nav.campaigns.index')}
          </LinkButton>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <LinkButton
            variant="text"
            color="primary"
            href={routes.campaigns.create}
            style={{ whiteSpace: 'nowrap' }}>
            {t('nav.campaigns.create')}
          </LinkButton>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <LinkButton
            variant="text"
            color="primary"
            href={routes.termsOfService}
            style={{ whiteSpace: 'nowrap' }}>
            {t('components.footer.terms-of-service')}
          </LinkButton>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <LinkButton
            variant="text"
            color="primary"
            href={routes.termsOfService}
            style={{ whiteSpace: 'nowrap' }}>
            {t('nav.faq')}
          </LinkButton>
        </MenuItem>
      </Menu>
    </>
  )
}
