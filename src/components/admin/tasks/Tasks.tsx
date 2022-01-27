import { Container, Typography } from '@mui/material'
import TasksGrid from './Grid'
import Slider from '@mui/material/Slider'
import ClippedDrawer from '../navigation/Drawer'
import Search from '../navigation/Search'
import Layout from 'components/layout/Layout'
import SearchIcon from '@mui/icons-material/Search'
import Box from '@mui/material/Box'
import LayoutPanel from '../navigation/LayoutPanel'
import AppBarMenu from '../navigation/AppBar'
const Tasks = () => {
  return (
    <div style={{ height: '100vh', background: '#f2f2f2' }}>
      <LayoutPanel />
      <Container disableGutters>
        <AppBarMenu />
        <TasksGrid />
      </Container>
    </div>
  )
}

export default Tasks
