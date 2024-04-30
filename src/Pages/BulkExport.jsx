import React from "react";
import { BsGrid1X2 } from "react-icons/bs";
import withAuth from "../HOC/withAuth";

const BulkExport = () => {
  return (
    <div className=" w-full p-2 pl-5 pt-4 px-4 ">
      <div className="flex items-center">
        <div className="p-2 text-xl">
          <BsGrid1X2 />
        </div>
        <div>
          <h1 className="text-xl font-bold">Export Items</h1>
        </div>
      </div>

      <div className="p-5 rounded border mt-5 py-8 shadow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center md:w-[70%] m-auto">
          <div className="bg-gray-100 py-4 text-gray-400">
            <h1 className="text-lg">STEP 1</h1>
            <p className="text-md">Select Data Type</p>
          </div>
          <div className="bg-gray-100 py-4 text-gray-400">
            <h1 className="text-lg">STEP 2</h1>
            <p className="text-md">Select Data Range and Export</p>
          </div>
        </div>

        <div className="mt-8">
          <p>Type</p>
          <br />
          <select className="select w-full max-w-xs border border-gray-400 focus:outline-sky-100 focus:border-none">
            <option>All data</option>
            <option>Date wise</option>
            <option>Id wise</option>
          </select>
        </div>

        <div className="flex gap-4 justify-end flex-wrap md:flex-nowrap mt-8 px-4 ">
          <button className="font-semibold rounded border py-2 px-6 bg-gray-200">
            Reset
          </button>
          <button className="font-semibold bg-cyan-400 text-white border rounded py-2 px-6">
            Export
          </button>
        </div>
      </div>
    </div>
  );
};

export default withAuth(BulkExport);
