import { Avatar, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'

export default function ProfileAvatar() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <Avatar
        onClick={handleClick}
        alt="profile-avatar"
        src="/img/avatar.jpg"
        sx={{
          '&:hover': {
            cursor: 'pointer',
          },
        }}
      />
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Notifications</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </>
  )
}
