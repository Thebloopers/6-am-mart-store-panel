import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Link } from "react-router-dom";
import ListemployeeTable from "../Components/ListemployeeTable";
import withAuth from "../HOC/withAuth";

const ListEmployee = () => {

    return (
        <div>
            <div className="md:flex justify-between items-center">
                <div className="flex items-center">
                    <img
                        src="https://6ammart-admin.6amtech.com/public/assets/admin/img/role.png"
                        className="w-9 h-9 mr-2"
                        alt=""
                    />
                    <h1 className="text-xl mr-2 font-semibold text-gray-800">
                    Employee List
                    </h1>
                    <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
                    0
                </span>
                </div>
                <Link
                    to="/addnew"
                    className="bg-[#24BAC3] hover:bg-[#449898] text-white mt-5 md:mt-0 px-4 py-2 rounded-lg flex items-center"
                >
                    <AddCircleIcon />
                    Add New employee
                </Link>
            </div>
            <div className=" mt-6 py-1 border-[1px] shadow-md rounded-md border-gray-200">

            <ListemployeeTable/>
            </div>
        </div>
    )
}

export default withAuth(ListEmployee)