import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Card } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ToggleButton from '../Components/ToggleButton'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const columns = [
  { field: "SL", headerName: "SL", width: 70 },
  { field: "Title", headerName: "Title", width: 130 },
  { field: "Description", headerName: "Description", width: 170 },
  {
    field: "Image",
    headerName: "Image",

    width: 90,
  },
  {
    field: "Zone",
    headerName: "Zone",
    width: 160,
    //   valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
  { field: "Target", headerName: "Target", width: 130 },
  { field: "Status", headerName: "Status", width: 130 , renderCell:(parms)=>(
    <div className="mt-3"><ToggleButton/></div>
      )},
  { field: "Action", headerName: "Action", width: 160,renderCell:(parms)=>(
    <div className="flex gap-2 mt-1">
    <Button variant="outlined" color="success">
    <EditIcon/>
    </Button>
    <Button variant="outlined" color="error" >
     <DeleteIcon/>
    </Button>
    </div>
  ) },
];

const rows = [
  {
    id: 1,
    SL: 1,
    Title: "Hello customer",
    Description:
      "We just spotted your favorite festive products at a great deal.",
    Image: "No Image",
    Zone: "All",
    Target: "Customer",
    Status: true,
    Action: true,
  },
];

function PushNotificationTable() {
  return (
    <> 
       
    <Card style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </Card>
    </>
 
  );
}

export default PushNotificationTable;
