import React from "react";
import SearchExportForm from "../Components/SearchExportForm";
import withAuth from "../HOC/withAuth";

function Cooking() {
  return (
    <div>
      <h1 className="page-header-title capitalize m-0 flex text-2xl gap-3 font-extrabold">
        <span className="page-header-icon">
          <img
            src="https://6ammart-admin.6amtech.com/public/assets/admin/img/order.png"
            className="w-26"
            alt=""
          />
        </span>
        <span>
          Cooking
          <span className="badge badge-soft-dark ml-2 text-sm bg-slate-300 p-1">
            0
          </span>
        </span>
      </h1>
      <SearchExportForm />

      <div className="empty-data flex flex-col items-center justify-center border p-6 shadow-md ">
        <img
          src="https://6ammart-admin.6amtech.com/public/assets/admin/svg/illustrations/sorry.svg"
          alt="public"
          className="w-48 h-48 mb-4"
        />
        <h5 className="text-center font-bold text-gray-600">No data found</h5>
      </div>
    </div>
  );
}

export default withAuth(Cooking);
