import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Spinner from '../components/Spinner';
import useAdminActions from './hooks/useAdminActions';

export default function CrmSystemPage() {
    const { users, getAllUsers, isLoading, handleDeleteUser, rows, setRows, handleChangeStatus, handleSearch } = useAdminActions();

    useEffect(() => {
        getAllUsers();
    }, [getAllUsers]);

    useEffect(() => {

        if (users.length > 0) {
            const newRows = users.map((user, index) => ({
                id: index + 1,
                lastName: user.name.last,
                firstName: user.name.first,
                isBusiness: user.isBusiness ? "Yes" : "No",
                isAdmin: user.isAdmin ? "Yes" : "No",
                DeleteUser: user._id,
                ChangeStatus: user.isBusiness ? "Demote to Regular" : "Promote to Business",
            }));
            setRows(newRows);
        }
    }, [users]);



    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        { field: 'isBusiness', headerName: 'Business User', width: 130 },
        { field: 'isAdmin', headerName: 'Admin User', width: 130 },
        {
            field: 'DeleteUser',
            headerName: 'Delete User',
            width: 130,
            renderCell: (params) => (
                <Button
                    variant="contained"
                    color="error"
                    startIcon={<DeleteIcon />}
                    onClick={() => handleDeleteUser(params.row.DeleteUser)}
                >
                    Delete
                </Button>
            ),
        },
        {
            field: 'ChangeStatus',
            headerName: 'Change Status',
            width: 200,
            renderCell: (params) => (
                <Button
                    variant="contained"
                    color={params.row.isBusiness === "Yes" ? "warning" : "primary"}
                    onClick={() => handleChangeStatus(params.row.DeleteUser)}
                >
                    {params.row.isBusiness === "Yes" ? "Demote to Regular" : "Promote to Business"}
                </Button>
            ),
        },
    ];

    const paginationModel = { page: 0, pageSize: 9 };

    if (isLoading) return <Spinner />;

    return (
        <Paper sx={{ height: 600, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[9]}
                sx={{ border: 0, cursor: 'pointer' }}
            />
        </Paper>
    );
}
