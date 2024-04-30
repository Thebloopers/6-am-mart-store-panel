import React, { useState } from "react";
import { Link } from "react-router-dom";
import ToggleButton from "./ToggleButton";
import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';

function FlashsalelistTable() {
  const [flashSales, setFlashSales] = useState([
    {
      id: 1,
      title: "😊'Grocery Galore Flash Sale: Unbeatable Deals Await!'",
      duration: "19/Oct/2023 - 31/Dec/2023",
      activeProducts: 10,
      publish: false,
    },
    {
        id: 2,
        title: "😊'Grocery Galore Flash Sale: Unbeatable Deals Await!'",
        duration: "19/Oct/2023 - 31/Dec/2023",
        activeProducts: 10,
        publish: false,
      },
  ]);
  return (
    <div className="container mx-auto px-2 sm:px-4 py-8">
      <div className="bg-white shadow-md rounded-lg">
        <div className="p-4 sm:p-6 border-b">
          <h2 className="text-lg sm:text-2xl font-semibold text-gray-800 flex items-center justify-between">
            Flash Sale List
            <span className="bg-gray-200 text-gray-700 px-3 py-1 text-xs font-semibold rounded-full mt-2 sm:mt-0 ml-2">
              {flashSales.length}
            </span>
          </h2>
        </div>
        <div className="p-4 sm:p-6">
          <form className="flex justify-center sm:flex-row items-stretch sm:items-center  mb-4">
            <input
              id="datatableSearch_"
             
              type="search"
              name="search"
              className="form-input w-[80%] sm:w-2/3 mb-2 sm:mb-0 mr-0 sm:mr-2 py-2 px-3 border border-gray-400 rounded-md"
              placeholder="Ex : flash sale title"
              aria-label="Search"
            />
            <button
              type="submit"
              className="py-2"
            >
          <SearchIcon/>
            </button>
          </form>
          <div className="overflow-x-auto max-w-[400px] md:max-w-full">
            <table className="w-full whitespace-no-wrap">
              <thead className="bg-[#F8FAFD]">
                <tr className="text-left font-semibold text-gray-700">
                  <th className="py-2 sm:py-4 px-4 sm:px-6">Sl</th>
                  <th className="py-2 sm:py-4 px-4 sm:px-6">Title</th>
                  <th className="py-2 sm:py-4 px-4 sm:px-6">Duration</th>
                  <th className="py-2 sm:py-4 px-4 sm:px-6">Active Products</th>
                  <th className="py-2 sm:py-4 px-4 sm:px-6">Publish</th>
                  <th className="py-2 sm:py-4 px-4 sm:px-6 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {flashSales.map((sale, index) => (
                  <tr key={sale.id} className="border-b border-gray-200">
                    <td className="py-2 sm:py-4 px-4 sm:px-6">{index + 1}</td>
                    <td className="py-2 sm:py-4 px-4 sm:px-6">{sale.title}</td>
                    <td className="py-2 sm:py-4 px-4 sm:px-6">
                      {sale.duration}
                    </td>
                    <td className="py-2 sm:py-4 px-4 sm:px-6">
                      {sale.activeProducts}
                    </td>
                    <td className="py-2 sm:py-4 px-4 sm:px-6">
                      {/* <label className="toggle-switch toggle-switch-sm">
                        <input
                          type="checkbox"
                          className=""
                        //   checked={sale.publish}
                        />
                        <span className="toggle-switch-label">
                          <span className="toggle-switch-indicator"></span>
                        </span>
                      </label> */}
                      <ToggleButton />
                    </td>
                    <td className="py-2 sm:py-4 px-4 sm:px-6">
                      <div className="flex items-center space-x-4">
                        <Link
                          to={`/${sale.id}`}
                          className="btn btn-primary flex items-center"
                        >
                          <AddIcon/>
                          Add New Product
                        </Link>
                        <Link
                          to={`/${sale.id}`}
                          
                        >
                          <Button variant="outlined" startIcon={<EditIcon/>}>
                        Edit
                        </Button>
                        </Link>
                        <Button variant="outlined" startIcon={<DeleteIcon/>}>
                          Delete
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-gray-600 text-sm">
            Showing 1 to {flashSales.length} of {flashSales.length} entries
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlashsalelistTable;
