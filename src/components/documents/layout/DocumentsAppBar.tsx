import React from 'react'
import Link from 'next/link'
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

import ProfileAvatar from 'components/documents/layout/ProfileAvatar'
import { routes } from 'common/routes'
import { DrawerStore } from 'stores/DrawerStore'
import { observer } from 'mobx-react'

export default observer(function DocumentsAppBar() {
  const { toggle } = DrawerStore

  return (
    <>
      <AppBar sx={{ backgroundColor: 'white' }} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggle}
            sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Link href={routes.documents.index}>
            <Box
              component="img"
              sx={{
                height: 50,
                width: 50,
                mr: 3,
                '&:hover': {
                  cursor: 'pointer',
                },
              }}
              alt="logo"
              src="/android-chrome-192x192.png"
            />
          </Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
            Admin panel
          </Typography>
          <ProfileAvatar />
        </Toolbar>
      </AppBar>
    </>
  )
})
