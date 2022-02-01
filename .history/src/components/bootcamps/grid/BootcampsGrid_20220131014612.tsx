import React from 'react'
import { DataGrid, GridActionsCellItem, GridColumns } from '@mui/x-data-grid'
import { useTranslation } from 'next-i18next'

import { useBootcampsList } from 'common/hooks/bootcamps'
import router from 'next/router'
import { routes } from 'common/routes'
import BootcampForm from './BootcampCreateForm'

import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/DeleteOutlined'
import SaveIcon from '@mui/icons-material/Save'
import CancelIcon from '@mui/icons-material/Close'
import { AlertStore } from 'stores/AlertStore'
import { deleteBootcamp, editBootcamp } from 'common/rest'
import { useMutation } from 'react-query'
import Drawer from './Drawer'
import PageviewIcon from '@mui/icons-material/Pageview'
import { endpoints } from 'common/api-endpoints'
import { BootcampFormData, BootcampResponse } from 'gql/bootcamps'
import { FormikHelpers } from 'formik/dist/types'
import { AxiosError, AxiosResponse } from 'axios'
import { ApiErrors, isAxiosError, matchValidator } from 'common/api-errors'
import Link from 'next/link'
import { IconButton } from '@mui/material'

export default function BootcampsGrid() {
  const { data } = useBootcampsList()

  const columns: GridColumns = [
    { field: 'id', headerName: 'ID', hide: true },
    {
      field: 'firstName',
      headerName: 'First Name',
      editable: true,
      width: 200,
    },
    {
      field: 'lastName',
      headerName: 'Last Name',
      editable: true,
      width: 200,
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 600,
      renderCell: (cellValues) => {
        return (
          <>
            <Link href={`/bootcamps/${cellValues.row.id}`}>
              <IconButton size="small" sx={{ mr: 1 }}>
                <PageviewIcon />
              </IconButton>
            </Link>
            <Link href={`/bootcamps/edit/${cellValues.row.id}`}>
              <IconButton size="small" sx={{ mr: 1 }}>
                <EditIcon />
              </IconButton>
            </Link>
            <Link href="test">
              <IconButton size="small" sx={{ mr: 1 }}>
                <DeleteIcon />
              </IconButton>
            </Link>
          </>
        )
      },
    },
  ]

  const { t } = useTranslation()
  const mutation = useMutation({
    mutationFn: deleteBootcamp,
    onError: () => AlertStore.show(t('common:alerts.error'), 'error'),
    onSuccess: () => AlertStore.show(t('common:alerts.message-sent'), 'success'),
  })
  const handleDeleteClick = (id: string) => async () => {
    try {
      await mutation.mutateAsync({ id: id })
      router.push(routes.bootcamps.home)
    } catch (error) {
      console.error(error)
      AlertStore.show(t('common:alert.error'), 'error')
    }
    router.push(routes.bootcamps.home)
  }

  return (
    <>
      <Drawer></Drawer>
      <DataGrid
        rows={data || []}
        columns={columns}
        pageSize={5}
        editMode="row"
        autoHeight
        autoPageSize
        checkboxSelection
        disableSelectionOnClick
        // onRowClick={(row) => {
        //   const id = row.getValue(row.id, 'id')
        //   if (typeof id !== 'string') return
        //   router.push(routes.bootcamps.viewBootcampById(id))
        // }}
      />
    </>
  )
}
