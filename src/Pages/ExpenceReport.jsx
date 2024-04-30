import { Link } from "react-router-dom";
import SearchExportForm from "../Components/SearchExportForm";
import OrderTable from "../Components/OrderTable";
import withAuth from "../HOC/withAuth";

const ExpenceReport = () => {



    return (
        <div>
            <h1 className="page-header-title capitalize m-0 flex text-2xl gap-3 font-medium">

                <span>
                Expense Report
                    {/* <span className="badge badge-soft-dark ml-2 text-sm">30</span> */}
                </span>
            </h1>
            <p className="text-sm text-gray-400">This report will show all the orders in which the store discount has been used. The store discounts are: <br /> Free delivery Coupon discount & item discounts(partial according to order commission).
            </p>


            <div className="container mx-auto px-1 py-8">
                <div className="bg-white shadow-md border-[1px] border-gray-200 rounded-lg">
                    <div className="px-6 py-4">
                        <div className="flex justify-between items-center">
                           
                        </div>
                        <h2 className="text-lg font-semibold text-gray-800 mr-4">
                        Search Data
                                </h2>
                        <div className="md:flex items-center justify-between mb-4">
                            <div>

                                

                                <div className="relative w-full mt-2 md:w-auto">
                                    <select
                                        name="zone_id"
                                        className="form-select py-3  pl-4 pr-10 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm w-full md:w-[20vw]"
                                    >
                                        <option value="all">All Zones</option>
                                        <option value="1">This Year</option>
                                        <option value="2">Previos Year</option>
                                        <option value="2">This Month</option>
                                        <option value="2">This Weak</option>
                                        <option value="2">Customs</option>


                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">

                                    </div>
                                </div>
                            </div>

                            <Link
                                href="https://6ammart-admin.6amtech.com/admin/campaign/basic/add-new"
                                className="bg-[#005555] hover:bg-blue-600 text-white px-28 py-3 mt-2 md:mt-0 rounded-[5px] flex items-center"
                            >
                                Filter
                            </Link>
                        </div>

                    </div>
                    
                </div>
            </div>



            {/* <SearchExportForm /> */}
            <OrderTable />


        </div>
    )
}

export default withAuth(ExpenceReport)