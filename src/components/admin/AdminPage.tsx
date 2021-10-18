import React from 'react'
import { useTranslation } from 'next-i18next'
import { Container } from '@material-ui/core'
import { DataGrid } from '@mui/x-data-grid'

import { routes } from 'common/routes'
import Layout from 'components/layout/Layout'
import LinkButton from 'components/common/LinkButton'

const columns = [
  { field: 'id', headerName: 'ID', hidden: true },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 200,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 200,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 200,
    editable: true,
  },
]

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', email: 'john@example.com' },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', email: 'john@example.com' },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', email: 'john@example.com' },
  { id: 4, lastName: 'Stark', firstName: 'Arya', email: 'john@example.com' },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', email: 'john@example.com' },
  { id: 6, lastName: 'Melisandre', firstName: null, email: 'john@example.com' },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', email: 'john@example.com' },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', email: 'john@example.com' },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', email: 'john@example.com' },
]

export default function AdminPage() {
  const { t } = useTranslation()
  return (
    <Layout title={t('nav.admin.index')}>
      <Container maxWidth="lg">
        <LinkButton variant="contained" color="primary" href={routes.admin.infoRequests}>
          Info requests
        </LinkButton>
        <LinkButton variant="contained" color="primary" href={routes.admin.supporters}>
          Supporters
        </LinkButton>

        <div style={{ height: '50vh', width: '100%', marginTop: '1rem' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
          />
        </div>
      </Container>
    </Layout>
  )
}
