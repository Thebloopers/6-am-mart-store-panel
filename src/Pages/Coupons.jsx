import React, { useState } from "react";

import CouponsInput from "../Components/CouponsInput";
import CouponListTable from "../Components/CouponListTable";
import SearchIcon from "@mui/icons-material/Search";
import { Card } from "@mui/material";
import withAuth from "../HOC/withAuth";


function Coupons() {
  return (
    <>
    <div className="w-[350px] md:w-auto">
      
      <div className="page-header">
        <h1 className="page-header-title flex items-center">
          <span className="page-header-icon mr-2">
            <img
              src="https://6ammart-admin.6amtech.com/public/assets/admin/img/add.png"
              className="w-26"
              alt=""
            />
          </span>
          <span className=" text-xl">Add new coupon</span>
        </h1>
      </div> 
     <CouponsInput/>
     <Card className="">
     <div className="p-2">
        <div className="flex items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800 mr-4">
          Coupon List

          </h2>
          <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
            2
          </span>
          <form className="ml-auto flex items-center">
            <input
              id="datatableSearch"
              type="search"
              name="search"
              className="form-input border border-gray-300 rounded-l-lg px-4 py-2"
              placeholder="Search Notification"
              aria-label="Search here"
            />
            <button
              type="submit"
              className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold px-4 py-2 rounded-r-lg "
              >
              <SearchIcon />
            </button>
          </form>
        </div>
      </div>
      <CouponListTable/>
     </Card>
              </div>
    </>
  );
}

export default withAuth(Coupons);
