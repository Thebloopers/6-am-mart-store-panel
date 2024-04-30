import { DisbursementCard } from "../Components/DisbursementCard";
import { Link } from "react-router-dom";
import DisbursementTable from "../Components/DisbursementTable";
import withAuth from "../HOC/withAuth";

const DisbursementReport = () => {

    const cardsData = [
        {
            imgSrc:
                "https://6ammart-admin.6amtech.com/public/assets/admin/img/report/new/trx1.png",
            name: "Pending",
            count: "0.00",
            subtxt: "Disbursements",
            link: "",
        },
        {
            imgSrc:
                "https://6ammart-admin.6amtech.com/public/assets/admin/img/report/new/trx5.png",
            name: "Orders",
            count: "30",
            subtxt: "0 Newly added",
            link: "",
        },
        {
            imgSrc:
                "https://6ammart-admin.6amtech.com/public/assets/admin/img/report/new/trx3.png",
            name: "Grocery Stores",
            count: "15",
            subtxt: "0 Newly added",
            link: "",
        },

    ];
    return (
        <div>
            <h1 className="page-header-title capitalize m-0 flex text-2xl gap-3 font-medium ">
                <span className="page-header-icon">
                    <img
                        src="https://6ammart-admin.6amtech.com/public/assets/admin/img/report/new/disburstment.png"
                        className="w-26"
                        alt=""
                    />
                </span>
                <span>
                    Disbursement Report
                    {/* <span className="badge badge-soft-dark ml-2 text-sm">30</span> */}
                </span>
            </h1>
            <div className="container mx-auto my-8   p-5 rounded-md shadow-lg ">
                <div className="card mb-3">
                    <div className="card-body pt-0">

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-4">
                            {cardsData.map((card, index) => (
                                <DisbursementCard
                                    key={index} // Ensure each child component has a unique key
                                    imgSrc={card.imgSrc}
                                    name={card.name}
                                    count={card.count}
                                    subtxt={card.subtxt}
                                    link={card.link}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                {/* Dashboard card end */}

                {/* order card */}
                <div className="container mx-auto  px-1 py-8">
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
                                            className="form-select py-3 mt-3 md:mt-0  pl-4 pr-10
                                         bg-white border border-gray-300
                                          rounded-md shadow-sm focus:outline-none
                                           focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm w-full md:w-[18vw]"
                                        >
                                            <option value="all">All Payment</option>
                                            <option value="1">Card</option>
                                            <option value="2">Cash</option>


                                        </select>

                                        <select
                                            name="zone_id"
                                            className="form-select py-3 mt-3 md:mt-0 md:ml-3  pl-4 pr-10 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm w-full md:w-[18vw]"
                                        >
                                            <option value="all">All Status</option>
                                            <option value="1">Pending</option>
                                            <option value="2">Completed</option>
                                            <option value="2">Canceled</option>


                                        </select>
                                        <select
                                            name="zone_id"
                                            className="form-select py-3 mt-3 md:mt-0 md:ml-3  pl-4 pr-10 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm w-full md:w-[18vw]"
                                        >
                                            <option value="all">All Time</option>
                                            <option value="1">This Year</option>
                                            <option value="2">Previos Year</option>
                                            <option value="2">This Month</option>
                                            <option value="2">This Weak</option>
                                            <option value="2">Customs</option>


                                        </select>

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

                    <DisbursementTable />
                </div>
                {/* order card end */}
            </div>
        </div>
    )
}

export default withAuth(DisbursementReport)