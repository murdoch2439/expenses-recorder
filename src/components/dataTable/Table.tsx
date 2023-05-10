import  React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
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

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export const  Table : FunctionComponent=()=> {
    const {information:{contributions}} = useUserContext()
    return (
        <div style={{ height: 400, width: '100%' }}>
            {/*{*/}
            {/*    contributions.map((contribution:any, index:any) => (*/}
            {/*        <DataGrid*/}


            {/*            rowGetter={({ index }:any) => rows[index]}*/}
            {/*        />*/}
            {/*    ))*/}
            {/*}*/}

            {
                contributions
                    ?
                    <DataGrid
                        // rows={ rows}
                        rows={contributions? contributions : rows}
                        columns={columns}
                        getRowId={(row) => row._id}
                        initialState={{
                            pagination: {
                                paginationModel: { page: 0, pageSize: 5 },
                            },
                        }}
                        pageSizeOptions={[5, 10]}
                        checkboxSelection
                    />
                    :"Loading"
            }

        </div>
    );
}