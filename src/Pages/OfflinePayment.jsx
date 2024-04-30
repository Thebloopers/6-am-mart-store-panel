import { useState } from "react";
import Alloffline from "../OfflineComponents/Alloffline";
import Deniedoffline from "../OfflineComponents/Deniedoffline";
import Pendingoffline from "../OfflineComponents/Pendingoffline";
import Verifiedoffline from "../OfflineComponents/Verifiedoffline";
import { motion } from "framer-motion";
import withAuth from "../HOC/withAuth";

const OfflinePayment = () => {
  const Pages1 = () => {
    return <Alloffline />;
  };
  const Pages2 = () => {
    return <Deniedoffline />;
  };
  const Pages3 = () => {
    return <Pendingoffline />;
  };
  const Pages4 = () => {
    return <Verifiedoffline />;
  };
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="https://6ammart-admin.6amtech.com/public/assets/admin/img/fi_273177.svg"
            className="w-7 h-7 mr-2"
            alt=""
          />
          <h1 className="text-xl mr-2 font-semibold text-gray-800">
            Verify Offline Payments
          </h1>
          <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
            0
          </span>
        </div>
      </div>

      <div className="w-[100%] m-auto   whitespace-nowrap ">
        <div
          className="w-full
                                        md:flex lg:flex xl:flex flex-wrap  mt-8 ml-1 flex
                                        bg-white items-center gap-4 md:gap-8  mb-4"
        >
          <p
            onClick={() => handlePageChange(1)}
            className={`cursor-pointer ${
              currentPage === 1
                ? " px-5 sm:px-4 font-semibold text-[#4EBEC5]  border-b-2 border-[#4EBEC5]   sm:py-2 py-2 sm:text-[17px] text-[14px]   "
                : " text-black sm:px-9 px-5 sm:py-3 py-2   sm:text-[17px] text-[14px] font-semibold  "
            }`}
          >
            Online Orders
          </p>
          <p
            onClick={() => handlePageChange(2)}
            className={`cursor-pointer ${
              currentPage === 2
                ? " px-5 sm:px-4 font-semibold text-[#4EBEC5]  border-b-2 border-[#4EBEC5]  sm:py-2 py-2 sm:text-[17px] text-[14px]   "
                : " text-black sm:px-9 px-5 sm:py-3 py-2   sm:text-[17px] text-[14px] font-semibold  "
            }`}
          >
            QR Orders
          </p>
          <p
            onClick={() => handlePageChange(3)}
            className={`cursor-pointer ${
              currentPage === 3
                ? " px-5 sm:px-4 font-semibold text-[#4EBEC5]  border-b-2 border-[#4EBEC5]  sm:py-2 py-2 sm:text-[17px] text-[14px]   "
                : " text-black sm:px-9 px-5 sm:py-3 py-2   sm:text-[17px] text-[14px] font-semibold  "
            }`}
          >
            Dine in Orders
          </p>
          <p
            onClick={() => handlePageChange(4)}
            className={`cursor-pointer ${
              currentPage === 4
                ? " px-5 sm:px-4 font-semibold text-[#4EBEC5]   border-b-2 border-[#4EBEC5] sm:py-2 py-2 sm:text-[17px] text-[14px]   "
                : " text-black sm:px-9 px-5 sm:py-3 py-2   sm:text-[17px] text-[14px] font-semibold  "
            }`}
          >
            Counter Orders
          </p>
        </div>

        <div className="content mb-8">
          {currentPage === 1 ? (
            <motion.div
              initial="hidden"
              animate={currentPage === 1 ? "visible" : "hidden"}
              variants={variants}
              transition={{ duration: 0.5 }}
            >
              {" "}
              <Pages1 />
            </motion.div>
          ) : null}
          {currentPage === 2 ? (
            <motion.div
              initial="hidden"
              animate={currentPage === 2 ? "visible" : "hidden"}
              variants={variants}
              transition={{ duration: 0.5 }}
            >
              {" "}
              <Pages2 />
            </motion.div>
          ) : null}
          {currentPage === 3 ? (
            <motion.div
              initial="hidden"
              animate={currentPage === 3 ? "visible" : "hidden"}
              variants={variants}
              transition={{ duration: 0.5 }}
            >
              {" "}
              <Pages3 />
            </motion.div>
          ) : null}
          {currentPage === 4 ? (
            <motion.div
              initial="hidden"
              animate={currentPage === 4 ? "visible" : "hidden"}
              variants={variants}
              transition={{ duration: 0.5 }}
            >
              {" "}
              <Pages4 />
            </motion.div>
          ) : null}
        </div>
      </div>
      <div className=" mt-6 py-1 border-[1px]  shadow-md rounded-md border-gray-200">
        {/* <ListemployeeTable/> */}
      </div>
    </div>
  );
};

export default withAuth(OfflinePayment);
