import { GridColumns } from '@mui/x-data-grid'
import StarIcon from '@mui/icons-material/Star'
import CircleIcon from '@mui/icons-material/Circle'
const types = [
  { icon: <StarIcon color="action" /> },
  { icon: <CircleIcon color="warning" /> },
  { icon: <StarIcon color="info" /> },
  { icon: <CircleIcon color="success" /> },
  { icon: <StarIcon color="error" /> },
]
const random = (arr: any): any => {
  return arr[Math.floor(Math.random() * types.length)].icon
}

export const columns: GridColumns = [
  { field: 'id', headerName: 'ID', hide: true },
  {
    field: 'type',
    headerName: 'тип',
    width: 50,
    renderCell: () => {
      return (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {random(types)}
        </div>
      )
    },
  },
  {
    field: 'taskName',
    headerName: 'име на задачата',
    width: 280,
    renderCell: (cellValues) => {
      return (
        <div style={{ fontWeight: 'bold', width: '100%', textAlign: 'center' }}>
          {cellValues.value}
        </div>
      )
    },
  },
  {
    field: 'keyword',
    headerName: 'кл.дума',
    width: 100,
    renderCell: (cellValues) => {
      return (
        <div style={{ fontWeight: 'bold', width: '100%', textAlign: 'center' }}>
          {cellValues.value}
        </div>
      )
    },
  },
  {
    field: 'description',
    headerName: 'описание',
    width: 220,
    renderCell: (cellValues) => {
      return (
        <div style={{ fontWeight: 'bold', width: '100%', textAlign: 'center' }}>
          {cellValues.value}
        </div>
      )
    },
  },
  {
    field: 'status',
    headerName: 'статус',
    width: 80,
    renderCell: (cellValues) => {
      return (
        <div style={{ fontWeight: 'bold', width: '100%', textAlign: 'center' }}>
          {cellValues.value}
        </div>
      )
    },
  },
  {
    field: 'deadline',
    headerName: 'краен срок',
    width: 120,
    renderCell: (cellValues) => {
      return (
        <div style={{ fontWeight: 'bold', width: '100%', textAlign: 'center' }}>
          {cellValues.value}
        </div>
      )
    },
  },
  {
    field: 'operator',
    headerName: 'оператор',
    width: 100,
    renderCell: (cellValues) => {
      return (
        <div style={{ fontWeight: 'bold', width: '100%', textAlign: 'center' }}>
          {cellValues.value}
        </div>
      )
    },
  },
  {
    field: 'others',
    headerName: 'други',
    width: 100,
  },
]
