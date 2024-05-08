import React from "react";
import { AiFillGift } from "react-icons/ai";
import withAuth from "../HOC/withAuth";

const BulkImport = () => {
  return (
    <div className=" w-full p-2 pl-5 pt-4 px-4 ">
      <div className="flex items-center">
        <div className="p-2 text-xl">
          <AiFillGift />
        </div>
        <div>
          <h1 className="text-xl font-bold">Add New Item</h1>
        </div>
      </div>

      <div className="p-5 rounded border mt-5 py-8 shadow">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center ">
          <div className="bg-gray-100 py-4 text-gray-400">
            <h1 className="text-lg">STEP 1</h1>
            <p className="text-md">Download Excel File</p>
          </div>
          <div className="bg-gray-100 py-4 text-gray-400">
            <h1 className="text-lg">STEP 2</h1>
            <p className="text-md">
              Match Spread sheet data according to instruction
            </p>
          </div>
          <div className="bg-gray-100 py-4 text-gray-400">
            <h1 className="text-lg">STEP 3</h1>
            <p className="text-md">Validate data and complete import</p>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3">
          <h1 className="text-lg font-bold ">Instructions :</h1>
          <p className="text-gray-600 text-md">
            1. Download the format file and fill it with proper data.
          </p>
          <p className="text-gray-600 text-md">
            2. You can download the example file to understand how the data must
            be filled.
          </p>
          <p className="text-gray-600 text-md">
            3. Once you have downloaded and filled the format file upload it in
            the form below and submit.
          </p>
          <p className="text-gray-600 text-md">
            4. You can get store id module id and unit id from their list please
            input the right ids.
          </p>
          <p className="text-gray-600 text-md">
            5. For ecommerce item avaliable time start and end will be 00:00:00
            and 23:59:59
          </p>
          <p className="text-gray-600 text-md">
            6. You can upload your product images in product folder from gallery
            and copy image`s path.
          </p>
        </div>

        <h1 className="text-lg font-bold text-center mt-10">
          Download spreadsheet template
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center w-[70%] m-auto mt-5">
          <div className="bg-blue-950 py-2 text-white rounded hover:bg-[#0d0d36]">
            <h1 className="text-md">Template with existing data</h1>
          </div>
          <div className="bg-blue-950 py-2 text-white rounded hover:bg-[#0d0d36]">
            <h1 className="text-md">Template without data</h1>
          </div>
        </div>
      </div>

      <div className="p-5 rounded border mt-5 py-8 shadow">
        <h1 className="text-lg font-bold ">Import items file</h1>
        <input type="file" className="mt-3 w-full border py-2 px-3" />

        <div className=" gap-4 justify-end grid grid-flow-row md:grid-flow-col grid-cols-2 mt-5 px-4 ">
          <button className="btn font-bold" style={{ padding: "6px 30px" }}>
            Reset
          </button>
          <button
            className="btn font-bold bg-orange-500 text-white "
            style={{ padding: "6px 30px" }}
          >
            Update
          </button>
          <button
            className="btn font-bold bg-cyan-400 text-white "
            style={{ padding: "6px 30px" }}
          >
            Import
          </button>
        </div>
      </div>

      <div className="border rounded py-3 mt-5 shadow">
        <div className="flex items-center py-4 px-4">
          <div>
            <h1 className="text-lg font-semibold">Food Variations Generator</h1>
          </div>
        </div>
        <hr />
        <div className="px-4 mt-3">
          <button className="border-green-500 bg-transparent text-green-500 md:text-xl font-normal border px-7 py-3 rounded my-8">
            Add new variation
          </button>
        </div>
        <div className="mt-3 px-5 flex justify-end">
          <button className="border-cyan-400 bg-cyan-400 text-white md:text-lg font-normal border px-7 py-2 rounded my-8 text-end">
            Generate
          </button>
        </div>
        <div className="px-5">
          <textarea
            name=""
            id=""
            rows="6"
            className="bg-gray-100 w-full"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default withAuth(BulkImport);
