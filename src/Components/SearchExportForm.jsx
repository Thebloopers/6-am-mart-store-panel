import React from "react";
import { useState } from "react";
import { IoFilterOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { MdOutlineTableChart } from "react-icons/md";

const tableData = [
  {
    sl: 1,
    orderId: 100089,
    deliveryDate: "09 Mar 2023",
    deliveryTime: "01:21 PM",
    customerInfo: "+8**********",
    branch: "Branch 2",
    totalAmount: "299.87$",
    orderStatus: "done",
    orderType: "Delivery",
  },
  {
    sl: 2,
    orderId: 100089,
    deliveryDate: "09 Mar 2023",
    deliveryTime: "01:21 PM",
    customerInfo: "+8**********",
    branch: "Branch 2",
    totalAmount: "299.87$",
    orderStatus: "done",
    orderType: "Delivery",
  },
];

function SearchExportForm() {
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your search logic here
  };

  return (
    <>
      <div className=" border-gray-300   ">
        <div className="md:flex  items-center justify-end md:gap-4 mt-5 border  ">
          <form className="search-form  sm:min-w-0" onSubmit={handleSubmit}>
            <div className="relative md:flex gap-5 justify-end"></div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SearchExportForm;
