import FlashsalelistTable from "../Components/FlashsalelistTable";
import TabsComponent from "../Components/TabsComponent";
import withAuth from "../HOC/withAuth";

function FlashSale() {
  return (
    <>
      <div class="">
        <div class="max-w-4xl">
          <h1 class="text-2xl font-bold flex items-center">
            <span class="mr-3">
              <img
                src="https://6ammart-admin.6amtech.com/public/assets/admin/img/condition.png"
                class="w-8 h-8"
                alt=""
              />
            </span>
            <span>Flash sale setup</span>
          </h1>
        </div>
      </div>

      <div className="p-2 mt-8 shadow-md rounded-md">
        <TabsComponent />

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="w-full">
              <div className="rounded-lg bg-[#F8F9FC] p-6">
                <h2 className="text-xl font-bold mb-4">Discount Bearer</h2>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="adminDiscount"
                  >
                    Admin (%)
                  </label>
                  <input
                    type="number"
                    min=".01"
                    step="0.001"
                    max="100"
                    name="admin_discount_percentage"
                    className="form-input border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="adminDiscount"
                    placeholder="Ex: 50"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="storeDiscount"
                  >
                    Store owner (%)
                  </label>
                  <input
                    type="number"
                    min=".01"
                    step="0.001"
                    max="100"
                    name="vendor_discount_percentage"
                    className="form-input border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="storeDiscount"
                    placeholder="Ex: 50"
                  />
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="bg-[#F8F9FC] rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4">Validity</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="from"
                    >
                      Start date
                    </label>
                    <input
                      type="datetime-local"
                      id="from"
                      className="form-input border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      required=""
                      name="start_date"
                      min="2024-03-28"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="to"
                    >
                      End date
                    </label>
                    <input
                      type="datetime-local"
                      id="to"
                      className="form-input border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      required=""
                      name="end_date"
                      min="2024-03-28"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-5 space-x-4">
          <button
            type="reset"
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Reset
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </div>

      {/* <div className="container mx-auto px-2 sm:px-4 py-8">
            <div className="bg-white shadow-md rounded-lg">
                <div className="p-4 sm:p-6 border-b">
                    <h2 className="text-lg sm:text-2xl font-semibold text-gray-800 flex items-center justify-between">
                        Flash Sale List
                        <span className="bg-gray-200 text-gray-700 px-3 py-1 text-xs font-semibold rounded-full mt-2 sm:mt-0 ml-2">1</span>
                    </h2>
                </div>
                <div className="p-4 sm:p-6">
                    <form className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between mb-4">
                        <input id="datatableSearch_" value="" type="search" name="search" className="form-input w-full sm:w-2/3 mb-2 sm:mb-0 mr-0 sm:mr-2 py-2 px-3 border border-gray-400 rounded-md" placeholder="Ex : flash sale title" aria-label="Search" />
                        <button type="submit" className="btn btn-secondary flex-shrink-0 h-full py-2 px-4">
                            <i className="tio-search"></i>
                        </button>
                    </form>
                    <div className="overflow-x-auto">
                        <table className="w-full whitespace-no-wrap">
                            <thead>
                                <tr className="text-left font-semibold text-gray-700">
                                    <th className="py-2 sm:py-4 px-4 sm:px-6">Sl</th>
                                    <th className="py-2 sm:py-4 px-4 sm:px-6">Title</th>
                                    <th className="py-2 sm:py-4 px-4 sm:px-6">Duration</th>
                                    <th className="py-2 sm:py-4 px-4 sm:px-6">Active Products</th>
                                    <th className="py-2 sm:py-4 px-4 sm:px-6">Publish</th>
                                    <th className="py-2 sm:py-4 px-4 sm:px-6">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-gray-200">
                                    <td className="py-2 sm:py-4 px-4 sm:px-6">1</td>
                                    <td className="py-2 sm:py-4 px-4 sm:px-6">😊"Grocery Galore Flash Sale: Unbeatable Deals Await!"</td>
                                    <td className="py-2 sm:py-4 px-4 sm:px-6 bg-gradient-to-r from-blue-200 to-blue-100">19/Oct/2023 - 31/Dec/2023</td>
                                    <td className="py-2 sm:py-4 px-4 sm:px-6">10</td>
                                    <td className="py-2 sm:py-4 px-4 sm:px-6">
                                        <label className="toggle-switch toggle-switch-sm">
                                            <input type="checkbox" className="toggle-switch-input dynamic-checkbox" checked="" />
                                            <span className="toggle-switch-label">
                                                <span className="toggle-switch-indicator"></span>
                                            </span>
                                        </label>
                                    </td>
                                    <td className="py-2 sm:py-4 px-4 sm:px-6">
                                        <div className="flex items-center space-x-4">
                                            <a href="https://6ammart-admin.6amtech.com/admin/flash-sale/add-product/1" className="btn btn-primary flex items-center">
                                                <i className="tio-add mr-2"></i>
                                                Add New Product
                                            </a>
                                            <a href="https://6ammart-admin.6amtech.com/admin/flash-sale/edit/1" className="btn btn-primary flex items-center">
                                                <i className="tio-edit mr-2"></i>
                                                Edit
                                            </a>
                                            <button className="btn btn-danger flex items-center">
                                                <i className="tio-delete-outlined mr-2"></i>
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-4 text-gray-600 text-sm">Showing 1 to 1 of 1 entries</div>
                </div>
            </div>
        </div> */}
        <FlashsalelistTable/>
    </>
  );
}

export default withAuth(FlashSale);
