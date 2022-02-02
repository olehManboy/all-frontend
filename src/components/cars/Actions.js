import React from 'react';
import { IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import PageviewIcon from '@mui/icons-material/Pageview'
import Link from 'next/link'

export default function Actions({ cellValues, setDetails, setDetailsOpen, setDeleteId, setDeleteOpen }) {
    function detailsClickHandler() {
        setDetails({ ...cellValues.row })
        setDetailsOpen(true)
    }

    function deleteClickHandler() {
        setDeleteId(cellValues.row.id)
        setDeleteOpen(true)
    }

    return <>
        <IconButton
            size="small"
            sx={{ mr: 1 }}
            onClick={(event) => {
                detailsClickHandler(event, cellValues)
            }}>
            <PageviewIcon />
        </IconButton>
        <Link href={`/cars/${cellValues.row.id}/edit`}>
            <IconButton size="small" sx={{ mr: 1 }}>
                <EditIcon />
            </IconButton>
        </Link>
        <IconButton
            size="small"
            onClick={(event) => {
                deleteClickHandler(event, cellValues)
            }}>
            <DeleteIcon />
        </IconButton>
    </>;
}
