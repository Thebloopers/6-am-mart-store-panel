import { React, useState } from "react";

import TabsComponent from "../Components/TabsComponent";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import withAuth from "../HOC/withAuth";
// import { useState } from "react";
const Addons = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Cheese",
      price: 40,

      status: true,
    },
    // {
    //   id: 2,
    //   title: "Offer Banner",
    //   img: "https://6ammart-admin.6amtech.com/storage/app/public/banner/2022-03-23-623ae8cc79804.png",
    //   Featured: false,
    //   status: true,
    // },
    // {
    //   id: 3,
    //   title: "Offer Banner",
    //   img: "https://6ammart-admin.6amtech.com/storage/app/public/banner/2022-03-23-623ae8cc79804.png",
    //   featured: true,
    //   status: false,
    // },
  ]);
  return (
    <div className="w-[360px] md:w-auto ">
      <h1 className="page-header-title capitalize m-0 flex text-2xl gap-3 font-extrabold">
        <span className="page-header-icon">
          <img
            src="https://6ammart-admin.6amtech.com/public/assets/admin/img/order.png"
            className="w-26"
            alt=""
          />
        </span>
        <span>Add New Addon</span>
      </h1>

      <div className="shadow-lg p-8">
        <TabsComponent placeholder={"New coupon"} />

        <label className="form-control w-full px-10">
          <div className="label">
            <span className="label-text">Price</span>
          </div>
          <input
            type="text"
            placeholder="100.00"
            className="input input-bordered w-full "
          />
        </label>

        <div className="flex justify-end my-4 mr-4">
          <button
            type="reset"
            id="reset_btn"
            className="btn bg-gray-300 hover:bg-gray-400 text-gray-800  py-2 px-4 rounded inline-flex items-center"
          >
            Reset
          </button>
          <button
            type="submit"
            className="btn bg-[#24BAC3] hover:bg-[#20A7AF] text-white  py-2 px-4 ml-2 rounded inline-flex items-center"
          >
            Submit
          </button>
        </div>

        <div className="col-span-12 lg:col-span-12 mb-6 lg:mb-4 mt-8 rounded-md shadow-lg">
          <div className="card shadow-lg p-2">
            <div className="card-header py-3 border-b-0 flex flex-col md:flex-row justify-between items-center">
              <h5 className="text-lg font-semibold text-gray-800">
                Banner List
                <span className="badge badge-primary ml-2">{data.length}</span>
              </h5>
              <form className="search-form flex items-center">
                <input
                  id="datatableSearch"
                  type="search"
                  name="search"
                  className="form-control rounded-l-lg py-2 px-4 border"
                  placeholder="Search by title"
                  aria-label="Search here"
                />
                <button type="submit" className="border py-2 rounded-r-lg px-4">
                  <SearchIcon />
                </button>
              </form>
            </div>
            <div className="max-w-[375px] overflow-auto md:max-w-full">
              <table className="table-auto w-full">
                <thead className="bg-gray-200 text-gray-700">
                  <tr>
                    <th className="px-4 py-2 text-left">SL</th>
                    <th className="px-4 py-2 text-left">Name</th>
                    <th className=" py-2 text-left px-16 md:px-4">Price</th>

                    <th className="px-4 py-2 text-center">Action</th>
                  </tr>
                </thead>
                <tbody id="set-rows">
                  {data.map((item, index) => (
                    <tr
                      key={item.id}
                      className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                    >
                      <td className="px-4 py-2">{index + 1}</td>
                      <td className="px-4 py-2">
                        <div className="flex items-center md:mr-2">
                          <span className="text-gray-800">{item.name}</span>
                        </div>
                      </td>
                      <td className="px-16 md:px-4 py-2 mr-5">
                        <span className="text-gray-800">₹{item.price}</span>
                      </td>

                      <td className="px-4 py-2 text-center">
                        <button className="btn btn-outline btn-success px-2">
                          <EditIcon className="hover:text-white" />
                        </button>

                        <button className="btn btn-outline btn-error ml-2 px-2">
                          <DeleteIcon className="hover:text-white" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuth(Addons);
