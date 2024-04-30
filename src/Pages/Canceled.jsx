import SearchIcon from "@mui/icons-material/Search";
import ExportButton from "../Components/ExportButton";
import { IoFilterOutline } from "react-icons/io5";
import { BiColumns } from "react-icons/bi";
import ColumnButton from "../Components/ColumnButton";
import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa6";
import withAuth from "../HOC/withAuth";

const Canceled = () => {
  const tableData = [
    {
      sl: 1,
      orderId: 100089,
      deliveryDate: "09 Mar 2023",
      deliveryTime: "01:21 PM",
      customerInfo: "+8**********",
      branch: "Organic Shop",
      item: 1,
      totalAmount: "299.87₹",
      orderStatus: "Canceled",
    },
    // {
    //     sl: 2,
    //     orderId: 100089,
    //     deliveryDate: "09 Mar 2023",
    //     deliveryTime: "01:21 PM",
    //     customerInfo: "+8**********",
    //     branch: "Branch 2",
    //     item:1,
    //     totalAmount: "299.87$",
    //     orderStatus: "done",
    //     orderType: "Delivery",
    // },
    // {
    //     sl: 3,
    //     orderId: 100089,
    //     deliveryDate: "09 Mar 2023",
    //     deliveryTime: "01:21 PM",
    //     customerInfo: "+8**********",
    //     branch: "Branch 2",
    //     item:1,
    //     totalAmount: "299.87$",
    //     orderStatus: "done",
    //     orderType: "Delivery",
    // },
    // {
    //     sl: 4,
    //     orderId: 100089,
    //     deliveryDate: "09 Mar 2023",
    //     deliveryTime: "01:21 PM",
    //     customerInfo: "+8**********",
    //     branch: "Branch 2",
    //     item:1,
    //     totalAmount: "299.87$",
    //     orderStatus: "done",
    //     orderType: "Delivery",
    // },
    // {
    //     sl: 5,
    //     orderId: 100089,
    //     deliveryDate: "09 Mar 2023",
    //     deliveryTime: "01:21 PM",
    //     customerInfo: "+8**********",
    //     branch: "Branch 2",
    //     item:1,
    //     totalAmount: "299.87$",
    //     orderStatus: "done",
    //     orderType: "Delivery",
    // },
    // {
    //     sl: 6,
    //     orderId: 100089,
    //     deliveryDate: "09 Mar 2023",
    //     deliveryTime: "01:21 PM",
    //     customerInfo: "+8**********",
    //     branch: "Branch 2",
    //     item:1,
    //     totalAmount: "299.87$",
    //     orderStatus: "done",
    //     orderType: "Delivery",
    // },
  ];
  return (
    <div className="overflow-x-auto max-w-[340px]  px-3 mt-4 min-h-[250px]  border-gray-300 md:max-w-full relative">
      <div className="flex items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800 mr-4"></h2>
        {/* <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
            0
        </span> */}
        <form className="ml-auto flex items-center">
          <input
            id="datatableSearch"
            type="search"
            name="search"
            className="form-input border border-gray-300 rounded-l-lg px-4 py-3"
            placeholder="Ex: Search Title ..."
            aria-label="Search here"
          />
          <button
            type="submit"
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold px-4 py-3 rounded-r-lg "
          >
            <SearchIcon />
          </button>
        </form>

        <ExportButton />

        <button className="hover:shadow-md transition duration-300  px-4 flex text-[#8CABB0] items-center gap-1 rounded-lg ml-2 py-2">
          <IoFilterOutline />
          Filter
        </button>

        <button className="hover:shadow-lg transition duration-300 px-4 flex text-[#8CABB0] items-center gap-1 rounded-lg ml-2 py-2">
          <BiColumns />
          <ColumnButton />
        </button>
      </div>
      <table className="table-auto min-w-full border-collapse border border-gray-200">
        <thead className="bg-gray-100 text-[#677788]">
          <tr>
            <th className="px-4 py-2 text-left">SL</th>
            <th className="px-4 py-2 text-left">Order ID</th>
            <th className="px-4 py-2 text-left">Order Date</th>
            <th className="px-4 py-2 text-left">Customer Info</th>
            <th className="px-4 py-2 text-left">Store</th>
            <th className="px-4 py-2 text-left">Item Quality</th>
            <th className="px-4 py-2 text-left">Total Amount</th>
            <th className="px-4 py-2 text-left">Order Status</th>
            <th className="px-4 py-2 flex gap-1 justify-center">
              <span className="">Actions</span>
              <span className="text-[11px] hover:text-green-500">
                <FaCaretUp /> <FaCaretDown />
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, id) => (
            <tr key={id}>
              <td className="px-4 py-2">{data.sl}</td>
              <td className="px-4 py-2">
                <a
                  href="https://efood-admin.6amtech.com/admin/orders/details/100089"
                  className="text-black hover:text-blue-700"
                >
                  {data.orderId}
                </a>
              </td>
              <td className="px-2 py-2">
                <div>{data.deliveryDate}</div>
                <div>{data.deliveryTime}</div>
              </td>
              <td className="px-2 py-2">
                <h6 className="text-capitalize mb-1">
                  <a
                    href="https://efood-admin.6amtech.com/admin/customer/view/191"
                    className="text-black hover:text-blue-700"
                  >
                    Sir Moba
                  </a>
                </h6>
                <a
                  href="tel:+8801112223336"
                  className="text-black hover:text-blue-700"
                >
                  {data.customerInfo}
                </a>
              </td>
              <td className="px-4 py-2">
                <span className="inline-block  px-2 py-1 rounded">
                  {data.branch}
                </span>
              </td>
              <td className="px-9 py-2">
                <span className="inline-block  px-2 py-1 rounded">
                  {data.item}
                </span>
              </td>
              <td className="px-4 py-2">
                <div>{data.totalAmount}</div>
                <span className="text-green-600">Paid</span>
              </td>
              <td className="px-4 py-2 text-capitalize">
                <span className="inline-block bg-red-200 text-red-800 px-2 py-1 rounded">
                  {data?.orderStatus}
                </span>
              </td>

              <td className="px-4 py-2 text-center">
                <div className="flex justify-center items-center gap-2">
                  <a
                    href="https://efood-admin.6amtech.com/admin/orders/details/100089"
                    className="btn btn-sm btn-outline-primary rounded-full p-2 hover:bg-blue-500 hover:text-white transition duration-300"
                  >
                    <i className="fa-solid fa-eye"></i>
                  </a>
                  <a
                    href="https://efood-admin.6amtech.com/admin/orders/generate-invoice/100089"
                    className="btn btn-sm btn-outline-success rounded-full p-2 hover:bg-green-500 hover:text-white transition duration-300"
                    target="_blank"
                  >
                    <i className="fa-solid fa-floppy-disk"></i>
                  </a>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default withAuth(Canceled);
