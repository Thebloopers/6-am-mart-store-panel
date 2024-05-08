import React, { useState } from "react";
import { IoFilterSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa6";
import withAuth from "../HOC/withAuth";

const PendingItemList = () => {
  const [tableData, setTableData] = useState([
    {
      id: 1,
      Name: {
        image:
          "https://6ammart-admin.6amtech.com/storage/app/public/product/2021-08-21-6120e7a4b7b2a.png",
        foodname: "Medu Vada",
      },
      Category: "Medu Vada",
      Price: "299.87$",

      Status: "Pending",
      Action: {
        delete: <MdDelete className="hover:text-white text-xl  " />,
      },
    },

    {
      id: 2,
      Name: {
        image:
          "https://6ammart-admin.6amtech.com/storage/app/public/product/2021-08-21-6120eb4af0745.png",
        foodname: "cheez pizza",
      },
      Category: "Pizza",
      Price: "299.87$",

      Status: "Pending",
      Action: {
        delete: <MdDelete className="hover:text-white text-xl  " />,
      },
    },
    {
      id: 3,
      Name: {
        image:
          "https://6ammart-admin.6amtech.com/storage/app/public/product/2021-08-21-6120e3a81ad40.png",
        foodname: "Idli ",
      },
      Category: "Idli",
      Price: "30.87$",

      Status: "Pending",
      Action: {
        delete: <MdDelete className="hover:text-white text-xl  " />,
      },
    },
    {
      id: 4,
      Name: {
        image:
          "https://6ammart-admin.6amtech.com/storage/app/public/product/2021-08-21-6120e4dcd5194.png",
        foodname: "FRIDE Rice",
      },
      Category: "Idli",
      Price: "50.87$",

      Status: "Pending",
      Action: {
        delete: <MdDelete className="hover:text-white text-xl  " />,
      },
    },
  ]);
  return (
    <div className="w-[350px] md:w-auto">
      <div className="flex justify-start items-center gap-x-3">
        <IoFilterSharp className="text-2xl text-gray-800 font-bold" />
        <h1 className="text-2xl text-gray-800 font-bold">Item List</h1>
      </div>
      <div className="rounded-lg shadow-lg py-5 px-4 my-6">
        <div className="flex md:flex-row flex-col justify-between items-center gap-3 md:gap-0 my-4 p-3">
          <h1 className="font-bold text-gray-800 text-2xl">Item List</h1>
          <div className="form-control w-full max-w-[350px]">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-full md:w-auto"
            />
          </div>
        </div>
        <div className="overflow-x-auto max-w-[350px] md:max-w-full">

        <table className="table-auto min-w-full border-collapse border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left mx-2">#</th>
              <th className="px-4 py-2 text-left mx-2">Name</th>
              <th className="px-4 py-2 text-left mx-2">Category</th>
              <th className="px-4 py-2 text-left mx-1">Price </th>

              <th className="px-4 py-2 text-left">Status</th>

              <th className="px-4 py-2 flex gap-1 justify-center">
                <span className="">Actions</span>
                <span className="text-[11px] hover:text-green-500">
                  <FaCaretUp /> <FaCaretDown />
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr key={index}>
                <td className="px-4 py-2">{data.id}</td>
                <td className="px-4 py-2 flex justify-start items-center gap-x-2">
                  <img
                    src={data.Name.image}
                    alt=""
                    className="w-[50px] rounded-lg"
                  />
                  <p className="text-gray-700 font-semibold">
                    {data.Name.foodname}
                  </p>
                </td>
                <td className="px-2 py-2">
                  <div className="text-gray-700">{data.Category}</div>
                </td>
                <td className="px-2 py-2">${data.Price}</td>

                <td className="px-4 py-2 text-capitalize">
                  <div className="text-blue-400 bg-blue-100 border text-center w-3/4 rounded-lg border-blue-400 font-bold">
                    {data.Status}
                  </div>
                </td>
                <td className="px-4 py-2 flex justify-center items-center gap-x-3 hover:text-white ">
                  <button className="btn btn-outline btn-error hover:text-white px-2">
                    {data.Action.delete}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
};

export default withAuth(PendingItemList);
