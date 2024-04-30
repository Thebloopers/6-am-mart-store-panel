import React from 'react'
import SearchExportForm from '../Components/SearchExportForm'
import OrderTable from '../Components/OrderTable'
import withAuth from '../HOC/withAuth'

function Delivered() {
  return (
    <div>
       <h1 className="page-header-title capitalize m-0 flex text-2xl gap-3 font-extrabold">
        <span className="page-header-icon">
          <img src="https://6ammart-admin.6amtech.com/public/assets/admin/img/order.png" className="w-26" alt="" />
        </span>
        <span>
        Delivered Orders 
          <span className="badge badge-soft-dark ml-2 text-sm bg-slate-300 p-1">9</span>
        </span>
      </h1>
      <SearchExportForm/>
      <OrderTable/>
    </div>
  )
}

export default withAuth(Delivered)
