import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import ToggleButton from './ToggleButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'SL', headerName: 'SL', width: 70 },
    { field: 'Name', headerName: 'Name', width: 130 },
    { field: 'Status', headerName: 'Status', width: 130, renderCell:(parms)=>(
        <div className="mt-3"><ToggleButton/></div>
          ) },
    { field: 'Featured', headerName: 'Featured', width: 130, renderCell:(parms)=>(
        <div className="mt-3"><ToggleButton/></div>
          ) },
    { field: 'Priority', headerName: 'Priority', width: 130, },
    { field: 'Action', headerName: 'Action', width: 170 ,renderCell:(parms)=>(
        <div className="flex gap-2 mt-2">
        <Button variant="outlined" color="success">
        <EditIcon/>
        </Button>
        <Button variant="outlined" color="error" >
         <DeleteIcon/>
        </Button>
        </div>
      )},

  
  ];
const rows = [
    { id: 1, SL: 'Snow', Name: 'Jon', Status: 35,Featured:true,Priority:true,Action:true },
   
   
  ];

function CategoryListTable() {
  return (
    <div className='max-w-[400px] md:max-w-full overflow-auto' style={{ height: 400, width: '100%' }}>
    <DataGrid
      rows={rows}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 5 },
        },
      }}
      pageSizeOptions={[5, 10]}
      checkboxSelection
    />
  </div>
  )
}

export default CategoryListTable
