import { Collapse, List, ListItemButton, ListItemText, useMediaQuery } from '@mui/material'
import { Add, Remove } from '@mui/icons-material'
import React, { useState } from 'react'
import theme from '../../common/theme'

interface Props {
  header: string
  content: string
}

const withAccentColor = (open: boolean) => (open ? theme.palette.primary.main : 'black')

const ExpandableListItem = ({ header, content }: Props) => {
  const [open, setOpen] = useState(false)
  const isMobile = useMediaQuery('(max-width:900px)')
  const isVerySmall = useMediaQuery('(max-width:600px)')

  return (
    <List
      sx={{
        margin: `0 1rem 1rem ${isVerySmall ? '1' : '2'}rem`,
        width: `${isMobile ? '85vw' : '60vw'}`,
        border: '0.2px',
        borderRadius: '6px',
        boxShadow: '0px 0.5px 1px #888888',
      }}>
      <ListItemButton onClick={() => setOpen(!open)}>
        <ListItemText
          primary={header}
          sx={{ padding: '1rem' }}
          primaryTypographyProps={{ variant: 'subtitle1', color: `${withAccentColor(open)}` }}
        />
        {open ? (
          <Remove sx={{ color: `${withAccentColor(open)}` }} />
        ) : (
          <Add sx={{ color: `${withAccentColor(open)}` }} />
        )}
      </ListItemButton>
      <Collapse in={open} unmountOnExit>
        <List>
          <ListItemText
            sx={{ pl: 6, pb: 2, pr: 2 }}
            primary={content}
            primaryTypographyProps={{ variant: 'subtitle1', color: theme.palette.text.secondary }}
          />
        </List>
      </Collapse>
    </List>
  )
}

export default ExpandableListItem
