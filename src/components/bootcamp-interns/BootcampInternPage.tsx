import BootcampInternGrid from './BootcampInternGrid'
import BootcampInternCreateForm from './BootcampInternCreateForm'
import { Grid } from '@mui/material'
import MyLayout from './MyLayout'
import BootcampModal from './BootcampModal'
import { useState } from 'react'

export default function BootcampInternPage(props: any) {
  return (
    <MyLayout>
      <Grid container>
        {/* <IconsMenu /> */}
        <BootcampInternGrid />
      </Grid>
    </MyLayout>
  )
}
