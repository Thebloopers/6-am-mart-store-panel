import { MdExpandMore } from "react-icons/md";
import React, { useState } from "react";
import {
  AiOutlineSearch,
  AiOutlineDownload,
  AiOutlineFilter,
  AiOutlineTable,
} from "react-icons/ai";
import { Link } from "react-router-dom";
function ExportButton() {
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
    <div className="relative hover:shadow-md">
            <button
              className="btn btn-outline  text-[#15B19E] h-10 px-4 flex items-center mt-1 hover:text-[#15B19E] hover:bg-white"
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
              } mt-1 absolute z-10 w-40 bg-white rounded-lg shadow-md top-12`}
            >
              <span className="dropdown-header bg-gray-200 text-gray-700 py-2 px-3 rounded-t-lg ">
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
  )
}
export default ExportButton