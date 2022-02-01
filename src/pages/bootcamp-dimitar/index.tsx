import * as React from 'react'
import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useBootcampDimitarList } from '../../common/hooks/bootcampDimitar'
import { DataGrid, GridColumns, RowId } from '@mui/x-data-grid'
import CustomLayout from './layout'
import EditIcon from '@mui/icons-material/Edit'
import Link from 'next/link'
import { Button, IconButton } from '@mui/material'
import PageviewIcon from '@mui/icons-material/Pageview'
import DeleteIcon from '@mui/icons-material/Delete'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { deleteBootcampDimitar } from '../../common/rest'
import { useRouter } from 'next/router'
import { BootcampDimitarResponse } from 'gql/bootcampDimitar'
import DeleteSelectedModal from 'components/bootcamp-dimitar/DeleteSelectedModal'

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
}

function BootcampDimitarList() {
  const { data = [] } = useBootcampDimitarList()
  const [open, setOpen] = React.useState(false)
  const [row, setRow] = React.useState<{ firstName: string; lastName: string; company: string }>()
  const [isDeleteModalOpen, setIsDeleteModalOpen] = React.useState(false)
  const [isDeleteSelectedModalOpen, setIsDeleteSelectedModalOpen] = React.useState(false)
  const [rowToDelete, setRowToDelete] = React.useState<{ id: string }>()
  const [selectedRows, setSelectedRows] = React.useState<BootcampDimitarResponse[]>([])
  const [selectionModel, setSelectionModel] = React.useState<RowId[]>([])
  const router = useRouter()

  const handleDeleteModalOpen = (row: any) => {
    return () => {
      setRowToDelete(row)
      setIsDeleteModalOpen(true)
    }
  }

  const handleDeleteModalClose = () => {
    setIsDeleteModalOpen(false)
  }

  const handleOpen = (row: any) => {
    return () => {
      setOpen(true)
      setRow(row)
    }
  }

  const handleClose = () => {
    setOpen(false)
  }

  const deleteHandler = () => {
    deleteBootcampDimitar(rowToDelete?.id as string).then(() => {
      handleDeleteModalClose()
      router.reload()
    })
  }

  const deleteAllHandler = () => {
    selectedRows.forEach((row: any) => {
      deleteBootcampDimitar(row?.id).then((_) => {
        router.reload()
      })
    })
  }

  const closeDeleteSelectedHandler = () => {
    setIsDeleteSelectedModalOpen(false)
    setSelectedRows([])
    setSelectionModel([])
  }

  const columns: GridColumns = [
    {
      field: 'id',
      headerName: 'ID',
      valueGetter: (p) => p.row.id,
      width: 250,
    },
    {
      field: 'name',
      headerName: 'Name',
      valueGetter: (p) => `${p.row.firstName} ${p.row.lastName}`,
      width: 350,
    },
    {
      field: 'company',
      headerName: 'Company',
      valueGetter: (p) => p.row.company,
      width: 350,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      renderCell: (cellValues) => {
        return (
          <>
            <IconButton size="small" sx={{ mr: 1 }} onClick={handleOpen(cellValues.row)}>
              <PageviewIcon />
            </IconButton>
            <Link href={`/bootcamp-dimitar/${cellValues.row.id}/edit`}>
              <IconButton size="small" sx={{ mr: 1 }}>
                <EditIcon />
              </IconButton>
            </Link>
            <IconButton size="small" sx={{ mr: 1 }} onClick={handleDeleteModalOpen(cellValues.row)}>
              <DeleteIcon />
            </IconButton>
          </>
        )
      },
      width: 500,
    },
  ]

  return (
    <CustomLayout>
      <h1>All bootcampers</h1>
      <DataGrid
        rows={data || []}
        columns={columns}
        pageSize={5}
        autoHeight
        autoPageSize
        checkboxSelection
        disableSelectionOnClick
        selectionModel={selectionModel}
        onSelectionModelChange={(ids) => {
          setSelectionModel(ids)
          const selectedIDs = new Set(ids)
          const selectedRows = data.filter((row) => selectedIDs.has(row.id))
          setSelectedRows(selectedRows)
        }}
      />
      {selectedRows.length > 0 ? (
        <Button variant="contained" onClick={() => setIsDeleteSelectedModalOpen(true)}>
          Delete selected
        </Button>
      ) : (
        ''
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {row?.firstName} {row?.lastName}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {row?.company}
          </Typography>
        </Box>
      </Modal>
      <Modal
        open={isDeleteModalOpen}
        onClose={handleDeleteModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Delete?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Button variant="contained" onClick={deleteHandler}>
              Yes
            </Button>
            <Button variant="contained" onClick={handleDeleteModalClose}>
              No
            </Button>
          </Typography>
        </Box>
      </Modal>
      <DeleteSelectedModal
        isOpen={isDeleteSelectedModalOpen}
        deleteHandler={deleteAllHandler}
        handleDeleteModalClose={closeDeleteSelectedHandler}></DeleteSelectedModal>
    </CustomLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'bg', ['common'])),
  },
})

export default BootcampDimitarList
