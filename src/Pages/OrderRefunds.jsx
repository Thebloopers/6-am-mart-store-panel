import React, { useState } from "react";
import {
  AiOutlineSearch,
  AiOutlineDownload,
  AiOutlineFilter,
  AiOutlineTable,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { MdExpandMore } from "react-icons/md";
import withAuth from "../HOC/withAuth";

function OrderRefunds() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleExport = (type) => {
    // Implement export functionality here based on the selected type (e.g., Excel or CSV)
    console.log("Exporting as", type);
    // Close the dropdown after exporting
    setIsDropdownOpen(false);
  };

  return (
    <div>
      <div class="page-header">
        <div class="flex flex-wrap items-center">
          <div class="w-full md:w-8/12 lg:w-9/12 xl:w-10/12 mb-3 md:mb-0 sm:w-full">
            <h1 class="page-header-title text-capitalize m-0 flex items-center">
              <span class="page-header-icon">
                <img
                  src="https://6ammart-admin.6amtech.com/public/assets/admin/img/order.png"
                  class="w-26"
                  alt=""
                />
              </span>
              <span className="ml-4">
              Refund Requested
                <span className="badge badge-soft-dark ml-2 bg-slate-500 p-1 rounded-md ">
                {55}
                </span>
              </span>
            </h1>
          </div>
        </div>
      </div>

      <div class="card-header py-4 border-b-0 flex flex-wrap items-center justify-between">
        <form class="flex items-center">
          <div class="relative border rounded-md rounded-r-lg">
            <input
              id="datatableSearch_"
              type="search"
              name="search"
              class="form-control h-10 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Ex:101100"
              aria-label="Search"
            />
            <button
              type="submit"
              class="absolute right-0 top-0 bottom-0 flex items-center justify-center  text-white bg-[#99A7BA] h-10 w-10 rounded-r-lg"
            >
              <AiOutlineSearch size={20} />
            </button>
          </div>
        </form>

        <div class="flex items-center space-x-4">
          <div className="relative">
            <button
              className="btn btn-secondary h-10 px-4 flex items-center border"
              onClick={toggleDropdown}
            >
              <AiOutlineDownload size={20} className="mr-1" /> Export
              <span className="ml-2">
                <MdExpandMore />
              </span>
            </button>

            <div
              className={`dropdown-unfold dropdown-menu dropdown-menu-right ${
                isDropdownOpen ? "" : "hidden"
              } mt-1 absolute z-10 w-40 bg-white rounded-lg shadow-md`}
            >
              <span className="dropdown-header bg-gray-200 text-gray-700 py-2 px-3 rounded-t-lg">
                Download options
              </span>
              <Link
                className="dropdown-item flex items-center py-2 px-3 hover:bg-gray-100"
                onClick={() => handleExport("Excel")}
              >
                <img
                  className=" w-2 h-2 mr-2"
                  src="https://6ammart-admin.6amtech.com/public/assets/admin/svg/components/excel.svg"
                  alt="Excel"
                />
                Excel
              </Link>
              <Link
                className="dropdown-item flex items-center py-2 px-3 hover:bg-gray-100"
                onClick={() => handleExport("CSV")}
              >
                <img
                  className="avatar w-2 h-2  mr-2"
                  src="https://6ammart-admin.6amtech.com/public/assets/admin/svg/components/placeholder-csv-format.svg"
                  alt="CSV"
                />
                .CSV
              </Link>
            </div>
          </div>

          <div className="relative inline-block">
            <select
              name="slist"
              className="form-select border py-2 px-4 pr-12 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option selected>Refund Requests</option>
              <option value="">Refund</option>
              <option value="">Rejected</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"></div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="btn btn-white h-10 flex items-center border rounded-lg px-3 transition duration-300 ease-in-out hover:shadow-md">
              <AiOutlineFilter size={20} className="mr-1" /> Filter
              <span className="badge badge-success badge-pill ml-1">0</span>
            </button>

            <button className="btn btn-white h-10 flex items-center border rounded-lg px-3 transition duration-300 ease-in-out hover:shadow-md">
              <AiOutlineTable size={20} className="mr-1" /> Columns
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withAuth(OrderRefunds);
