import CanceledTable from "../Components/CanceledTable";
import withAuth from "../HOC/withAuth";
const PaymentFailed = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="https://6ammart-admin.6amtech.com/public/assets/admin/img/order.png"
            className="w-7 h-7 mr-2"
            alt=""
          />
          <h1 className="text-xl mr-2 font-semibold text-gray-800">
            Failed Orders
          </h1>
          <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
            1
          </span>
        </div>
      </div>
      <div className=" mt-6 py-1 border-[1px] shadow-md rounded-md border-gray-200">
        <CanceledTable />
      </div>
    </div>
  );
};
export default withAuth(PaymentFailed);
