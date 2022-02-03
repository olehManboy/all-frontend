import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import React, { useState } from 'react'
import Link from '@mui/material/Link'
import theme from 'common/theme'
import { PersonOutlined } from '@mui/icons-material'

import { drawerWidth } from './MyDrawer'
import { createStyles, makeStyles } from '@mui/styles'
import SearchInput from './SearchInput'

const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

const useStyles = makeStyles((theme) => {
  return {
    appbar: {
      width: `calc(100% - ${drawerWidth}px)`,
      backgroundColor: theme.palette.primary.light,
    },
  }
})

export default function ResponsiveAppBar() {
  const classes = useStyles()
  console.log(classes)
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <AppBar elevation={2} className={classes.appbar}>
      <Toolbar disableGutters>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit">
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}></Menu>
        </Box>

        <SearchInput />

        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar
                alt="Petar Dzhunov"
                src="https://scontent-sof1-1.xx.fbcdn.net/v/t1.6435-9/52945541_2493036137391235_2219405297733074944_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_ohc=4-pxJOyTyrQAX8_ej13&tn=K55rxxwKg1iVRyW3&_nc_ht=scontent-sof1-1.xx&oh=00_AT86bqrdtIiIgqLHizEVD5Tp3NSyV1pLNbSD5yBPMnM5Mw&oe=6218B694"
              />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}>
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
