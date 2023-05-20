import  React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import {FunctionComponent} from "react";
import {useUserContext} from "../../context/UserContext";

const columns: GridColDef[] = [
    { field: '_id', headerName: 'ID', width: 70 },
    { field: 'member', headerName: 'Member', width: 130 },
    { field: 'amount', headerName: 'Amount', width: 130 },
    {
        field: 'currency',
        headerName: 'Currency',
        type: 'string',
        width: 90,
    },
    {
        field: 'date',
        headerName: 'Date',
        // description: 'This column has a value getter and is not sortable.',
        // sortable: false,
        width: 160,
        // valueGetter: (params: GridValueGetterParams) =>
        //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
        field: 'operation_type',
        headerName: 'Operation',
        // description: 'This column has a value getter and is not sortable.',
        // sortable: false,
        width: 160,
        // valueGetter: (params: GridValueGetterParams) =>
        //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
];



export const  Table : FunctionComponent=()=> {
    const {information:{contributions}} = useUserContext()
    return (
        <div style={{ height: 400, width: '100%' }}>

            {
                contributions
                    ?
                    <DataGrid
                        rows={contributions}
                        columns={columns}
                        getRowId={(row) => row._id}
                        initialState={{
                            pagination: {
                                paginationModel: { page: 0, pageSize: 10 },
                            },
                        }}
                        pageSizeOptions={[5, 10]}
                        checkboxSelection
                    />
                    :
                    <Stack spacing={1}>
                        <Skeleton variant="rounded" width={"100%"} height={40} />
                        <Skeleton variant="rounded" width={"100%"} height={40} />
                        <Skeleton variant="rounded" width={"100%"} height={40} />
                        <Skeleton variant="rounded" width={"100%"} height={40} />
                        <Skeleton variant="rounded" width={"100%"} height={40} />
                        <Skeleton variant="rounded" width={"100%"} height={40} />
                    </Stack>

            }

        </div>
    );
}