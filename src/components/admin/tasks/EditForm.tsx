import { Button, CardActions, Container } from '@mui/material'
import { Typography } from '@mui/material'
import { useQuery } from 'react-query'
import { useRouter } from 'next/router'
import Link from 'next/link'
import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import LayoutPanel from '../navigation/LayoutPanel'
import axios from 'axios'
export default function EditForm({ car }: any) {
  const router = useRouter()
  const carId = router.query.id
  const { data }: any = useQuery(['car', carId], async () => {
    return await axios.get(`http://localhost:5010/api/car/${car.id}`), { initialData: car }
  })

  return (
    <div
      style={{
        height: '100vh',
        background: '#f7f7f7',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <LayoutPanel />
      <Typography color="primary" sx={{ m: 2, fontWeight: 'bold' }} variant="h4">
        Edit your car
      </Typography>
      <Container sx={{ justifyContent: 'center', display: 'flex' }}>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': {
              m: 2,
              width: '300px',
              display: 'flex',
              flexDirection: 'column',
            },
          }}
          noValidate
          autoComplete="off">
          <TextField required id="outlined-required" label="Brand" defaultValue={car.brand} />
          <TextField required id="outlined-required" label="Model" defaultValue={car.model} />
          <TextField required id="outlined-required" label="Year" defaultValue={car.year} />
          <TextField required id="outlined-required" label="Engine" defaultValue={car.engine} />
          <TextField required id="outlined-required" label="Price" defaultValue={car.price} />
        </Box>
      </Container>
      <CardActions sx={{ m: 2 }}>
        <Button variant="contained" size="large">
          Save
        </Button>
        <Link href="/admin/panel/tasks">
          <Button variant="outlined" size="large">
            Cancel
          </Button>
        </Link>
      </CardActions>
    </div>
  )
}
