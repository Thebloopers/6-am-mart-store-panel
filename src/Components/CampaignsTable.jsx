import React from "react";
import { Link } from "react-router-dom";
import ToggleButton from "./ToggleButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function CampaignsTable({ campaigns, price }) {
  return (
    <div >
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-2 px-4 text-start">Title</th>
            <th className="py-2 px-4 text-start">img</th>
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
              <td className="py-3 px-4">
                <img
                  src={campaign.img}
                  alt=""
                  className="w-[200px] overflow-hidden object-cover"
                />
              </td>
              <td className="py-3 px-4">{campaign.dateDuration}</td>
              <td className="py-3 px-4">{campaign.timeDuration}</td>

              <td className="py-3 px-4">
                <label className="switch">
                  {/* <input type="checkbox" checked={campaign.status} readOnly /> */}
                  <ToggleButton />
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
  );
}

export default CampaignsTable;
