import { Typography, Card, CSSObject } from '@mui/material'
import CardContent from '@mui/material/CardContent'
import { ModalStore } from 'stores/cars/ModalStore'
import { useViewCar } from 'common/hooks/cars'
import { UseQueryResult } from 'react-query'
import { CarResponse } from 'gql/cars'
import { observer } from 'mobx-react'

export default observer(function BasicCard() {
  const containerStyles: CSSObject = {
    minWidth: 275,
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    p: 4,
  }

  const { data }: UseQueryResult<CarResponse> = useViewCar(ModalStore.carId)

  return (
    <Card sx={containerStyles}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          {data?.model}
        </Typography>
        <Typography sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
          Brand: {data?.brand}
        </Typography>
        <Typography color="text.secondary" gutterBottom>
          Year: {data?.year}
        </Typography>
        <Typography variant="body2" gutterBottom>
          Engine: {data?.engine}
        </Typography>
        <Typography variant="body2" gutterBottom>
          Price: {data?.price}
        </Typography>
      </CardContent>
    </Card>
  )
})
