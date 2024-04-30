import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ToggleButton  from "../Components/ToggleButton";
import { Button, Card } from "@mui/material";


const columns = [
  { field: "id", headerName: "SL", width: 100 },
  { field: "Title", headerName: "Title", width: 130 },
  { field: "Code", headerName: "Code", width: 130 },
  {
    field: "Type",
    headerName: "Type",

    width: 90,
  },
  {
    field: "TotalUsers",
    headerName: "Total Users",

    sortable: false,
    width: 160,
    //   valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
  {
    field: "MinPurchase",
    headerName: "Min Purchase",

    width: 100,
  },
  {
    field: "MaxDiscount",
    headerName: "Max Discount",

    width: 100,
  },
  {
    field: "Discount",
    headerName: "Discount",

    width: 100,
  },
  {
    field: "DiscountType",
    headerName: "Discount Type",

    width: 130,
  },
  { field: "Startdate", headerName: "Start date", width: 130 },
  { field: "Expiredate", headerName: "Expire date", width: 130 },
  { field: "Status", headerName: "Status", width: 130 , renderCell:(parms)=>(
<div className="mt-3"><ToggleButton/></div>
  )
   },
  { field: "Action", headerName: "Action", width: 160,renderCell:(parms)=>(
    <div className="flex gap-2">
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
  { id: 1, SL: 1, Title: "festival Offer", Code: "fest	", Type: 'Store wise', TotalUsers: 0,MinPurchase:100,MaxDiscount:300,Discount:25,DiscountType:"Percent %",Startdate:Date.now(),Expiredate:Date.now(),Status:<ToggleButton/>, },
  { id: 2, SL: 2, Title: "festival Offer", Code: "fest	", Type: 'Store wise', TotalUsers: 0,MinPurchase:100,MaxDiscount:300,Discount:25,DiscountType:"Percent %",Startdate:Date.now(),Expiredate:Date.now(),Status:<ToggleButton/>, },
];


function CouponListTable() {
  return (
    <Card style={{ height: 400, width: "100%" }}>
    <Card></Card>
    
      <DataGrid className="max-w-[400px] md:max-w-full overflow-auto "
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
  );
}

export default CouponListTable;
