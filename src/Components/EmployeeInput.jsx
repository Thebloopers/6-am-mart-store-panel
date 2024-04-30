import TabsComponent from "./TabsComponent";
import { IoDocumentTextOutline } from "react-icons/io5";

import { Card } from "@mui/material";



const EmployeeInput = () => {



    return (
        <div className="container mx-auto py-8">
            <Card className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h1 className="page-header-title flex items-center">
                    <span className="page-header-icon mr-2">
                        <IoDocumentTextOutline className="text-xl" />

                    </span>
                    <span className="text-lg font-normal">Role Form</span>
                </h1>

                {/* Form */}
                <form className="space-y-4">
                    <TabsComponent placeholder={"New coupon"} />
                    {/* Coupon Type */}
                    <div className=" grid md:grid-cols-6  -mx-4">
                        <div className="w-full flex md:w-1/4 lg:w-[43%] px-4 my-3">
                            <input
                                type="checkbox"
                                // checked={banner.featured}
                                className="form-checkbox h-6 w-6 text-primary"
                            />
                            <label
                                className="block text-gray-700 text-sm ml-2 mt-1  mb-3"
                                htmlFor="coupon_type"
                            >
                                Item
                            </label>

                        </div>

                        <div className="w-full flex   md:w-1/4 lg:w-[50%] px-4 my-3">
                            <input
                                type="checkbox"
                                // checked={banner.featured}
                                className="form-checkbox h-6 w-6 text-primary"
                            />
                            <label
                                className="block text-gray-700  text-sm ml-2 mt-1  mb-3"
                                htmlFor="coupon_type"
                            >
                                Orders
                            </label>

                        </div>
                        <div className="w-full flex   md:w-1/4 lg:w-[46%] px-4 my-3">
                            <input
                                type="checkbox"
                                // checked={banner.featured}
                                className="form-checkbox h-6 w-6 text-primary"
                            />
                            <label
                                className="block text-gray-700  text-sm ml-2 mt-1  mb-3"
                                htmlFor="coupon_type"
                            >
                                Store
                            </label>

                        </div>
                        <div className="w-full flex   md:w-1/4 lg:w-[53%] px-4 my-3">
                            <input
                                type="checkbox"
                                // checked={banner.featured}
                                className="form-checkbox h-6 w-6 text-primary"
                            />
                            <label
                                className="block text-gray-700 text-sm ml-2 mt-1  mb-3"
                                htmlFor="coupon_type"
                            >
                                Addons
                            </label>

                        </div>
                        <div className="w-full flex   md:w-1/4 lg:w-[49%] px-4 my-3">
                            <input
                                type="checkbox"
                                // checked={banner.featured}
                                className="form-checkbox h-6 w-6 text-primary"
                            />
                            <label
                                className="block text-gray-700 text-sm ml-2 mt-1  mb-3"
                                htmlFor="coupon_type"
                            >
                                Wallet
                            </label>

                        </div>
                        <div className="w-full flex   md:w-1/4 lg:w-[50%] px-4 my-3">
                            <input
                                type="checkbox"
                                // checked={banner.featured}
                                className="form-checkbox h-6 w-6 text-primary"
                            />
                            <label
                                className="block text-gray-700 text-sm ml-2 mt-1  mb-3"
                                htmlFor="coupon_type"
                            >
                                Profile
                            </label>

                        </div>
                        <div className="w-full flex   md:w-1/4 lg:w-[63%] px-4 my-3">
                            <input
                                type="checkbox"
                                // checked={banner.featured}
                                className="form-checkbox h-6 w-6 text-primary"
                            />
                            <label
                                className="block text-gray-700 text-sm ml-2 mt-1  mb-3"
                                htmlFor="coupon_type"
                            >
                                Employees
                            </label>

                        </div>
                        <div className="w-full flex   md:w-1/4 lg:w-[45%] px-4 my-3">
                            <input
                                type="checkbox"
                                // checked={banner.featured}
                                className="form-checkbox h-6 w-6 text-primary"
                            />
                            <label
                                className="block text-gray-700 text-sm ml-2 mt-1  mb-3"
                                htmlFor="coupon_type"
                            >
                                shop
                            </label>

                        </div>

                        <div className="w-full flex   md:w-1/4 lg:w-[65%] px-4 my-3">
                            <input
                                type="checkbox"
                                // checked={banner.featured}
                                className="form-checkbox h-6 w-6 text-primary"
                            />
                            <label
                                className="block text-gray-700 text-sm ml-2 mt-1  mb-3"
                                htmlFor="coupon_type"
                            >
                                Campaigns
                            </label>

                        </div>
                        <div className="w-full flex   md:w-1/4 lg:w-[55%] px-4 my-3">
                            <input
                                type="checkbox"
                                // checked={banner.featured}
                                className="form-checkbox h-6 w-6 text-primary"
                            />
                            <label
                                className="block text-gray-700 text-sm ml-2 mt-1  mb-3"
                                htmlFor="coupon_type"
                            >
                                Reviews
                            </label>

                        </div>

                        <div className="w-full flex   md:w-1/4 lg:w-[43%] px-4 my-3">
                            <input
                                type="checkbox"
                                // checked={banner.featured}
                                className="form-checkbox h-6 w-6 text-primary"
                            />
                            <label
                                className="block text-gray-700 text-sm ml-2 mt-1  mb-3"
                                htmlFor="coupon_type"
                            >
                                POS
                            </label>

                        </div>

                        <div className="w-full flex   md:w-1/4 lg:w-[43%] px-4 my-3">
                            <input
                                type="checkbox"
                                // checked={banner.featured}
                                className="form-checkbox h-6 w-6 text-primary"
                            />
                            <label
                                className="block text-gray-700 text-sm ml-2 mt-1  mb-3"
                                htmlFor="coupon_type"
                            >
                                Chat
                            </label>

                        </div>


                    </div>

                    <div className="flex justify-end">
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
                </form>
            </Card>
        </div>)
}

export default EmployeeInput