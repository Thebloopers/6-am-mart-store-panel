import star from "../assets/star.png"
// import SelectDateRange from '../Components/Sandeep/SelectDateRange'
import SearchExportForm from "../Components/SearchExportForm";
import OrderTable from "../Components/OrderTable";
// import Pagination from '../Components/Sandeep/Pagination'
import { useState } from "react";
import { IoFilterOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import withAuth from "../HOC/withAuth";
const Review = () => {

  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your search logic here
  };
  return (
    <div>
      <h1 className="page-header-title capitalize m-0 flex text-2xl gap-3 font-extrabold ">
        <span className="page-header-icon">
          <img
            src={star}
            className="w-26"
            alt=""
          />
        </span>
        <span>
          Customers Reviews
          {/* <span className="badge badge-soft-dark ml-2 text-sm">30</span> */}
        </span>
      </h1>
      <SearchExportForm />


      <OrderTable />

      {/* <Pagination/> */}
    </div>
    
  
  )
}

export default withAuth(Review)