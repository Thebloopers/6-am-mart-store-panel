import React from "react";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SearchIcon from "@mui/icons-material/Search";
import CampaignsTable from "../Components/CampaignsTable";

// import ToggleButton from "./ToggleButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import withAuth from "../HOC/withAuth";

function ItemBasicCampaigns({ price }) {
  const campaigns = [
    {
      id: 1,
      title: "Get Your Grocery Items",
      dateDuration: "30 Dec 2023-30 Dec 2023",
      timeDuration: "07:40:am-10:41:pm",

      status: true,
      price: 1022,
    },
  ];
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-md rounded-lg">
        <div className="px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img
                src="https://6ammart-admin.6amtech.com/public/assets/admin/img/campaign.png"
                className="w-10 h-10 mr-2"
                alt=""
              />
              <h1 className="text-lg font-semibold text-gray-800">Campaign</h1>
            </div>
            <Link
              href="https://6ammart-admin.6amtech.com/admin/campaign/basic/add-new"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center"
            >
              <AddCircleIcon />
              Add new campaign
            </Link>
          </div>
          <hr className="my-4" />
          <div className="flex items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800 mr-4">
              Campaign list
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
                placeholder="Ex: Search Title ..."
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
          <div className="overflow-x-auto max-w-[400px] md:max-w-full">
            {/* <CampaignsTable price={"price"} campaigns={campaigns}/> */}

            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-2 px-4 text-start">Title</th>

                  <th className="py-2 px-4 text-start">Date duration</th>
                  <th className="py-2 px-4 text-start">Time duration</th>
                  <th className="py-2 px-4 text-start">Status</th>
                  {price ? (
                    <th className="py-2 px-4 text-start">{price}</th>
                  ) : (
                    <th></th>
                  )}
                  <th className="py-2 px-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {campaigns.map((campaign) => (
                  <tr
                    key={campaign.id}
                    className="border-b border-gray-200 hover:bg-gray-100"
                  >
                    <td className="py-3 px-4">
                      <Link
                        to={`{campaign.id}`}
                        className="text-blue-500 hover:underline"
                      >
                        {campaign.title}
                      </Link>
                    </td>

                    <td className="py-3 px-4">{campaign.dateDuration}</td>
                    <td className="py-3 px-4">{campaign.timeDuration}</td>

                    <td className="py-3 px-4">
                      <label className="switch">
                        {/* <input type="checkbox" checked={campaign.status} readOnly /> */}
                        {/* <ToggleButton /> */}
                      </label>
                    </td>
                    <td className="py-3 px-4">{campaign.price}</td>
                    <td className="py-3 px-4 text-center">
                      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-2">
                        <EditIcon />
                      </button>
                      <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
                        <DeleteIcon />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="px-6 py-4">
          <div className="text-right">
            <Link to="#" className="text-blue-500 hover:underline">
              View All
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withAuth(ItemBasicCampaigns);
