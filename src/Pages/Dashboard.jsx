import React from "react";
import { MdDashboardCustomize } from "react-icons/md";
import { PiForkKnifeFill } from "react-icons/pi";
import { IoStatsChart } from "react-icons/io5";
import Chart from "../Components/Chart";
import PiChart from "../Components/PiChart";
import { GoDotFill } from "react-icons/go";
import { StoreCard } from "../Components/StoreCard";
import { StoreListItem } from "../Components/StoreListItem";
import { Link } from "react-router-dom";
import TopRatedItems from "../Components/TopRatedItems";
import TopDeliveryman from "../Components/TopDeliveryman";
import withAuth from "../HOC/withAuth";
import Rating from 'react-rating';
import ratingGrey from "../assets/star-grey.png";
import ratingYellow from "../assets/star-yellow.png";
import { IoIosStar } from "react-icons/io";
import { MdOutlineBarChart } from "react-icons/md";


// import { GoDotFill } from "react-icons/go";
const Dashboard = () => {
  const gridItems = [
    {
      href: "",
      imgSrc:
        "https://6ammart-admin.6amtech.com/storage/app/public/product/2022-03-22-6239a7117c441.png",
      alt: "Suruchi Premium Green Chili Pickle image",
      title: "Suruchi Premium Green Chili Pickle",
      sold: 2,
      rating:"4"
    },
    {
      href: "",
      imgSrc:
        "https://6ammart-admin.6amtech.com/storage/app/public/product/2022-03-22-6239a7117c441.png",
      alt: "Suruchi Premium Green Chili Pickle image",
      title: "Suruchi Premium Green Chili Pickle",
      sold: 2,
      rating:"4"
    },
    {
      href: "",
      imgSrc:
        "https://6ammart-admin.6amtech.com/storage/app/public/product/2022-03-22-6239a7117c441.png",
      alt: "Suruchi Premium Green Chili Pickle image",
      title: "Suruchi Premium Green Chili Pickle",
      sold: 2,
      rating:"4"
    },
  ];

  const stores = [
    {
      imageUrl:
        "https://6ammart-admin.6amtech.com/storage/app/public/product/2022-03-22-6239a7117c441.png",
      title: "Green Chilli",
      orderCount: 3,
      storeUrl: "",
    },
    {
      imageUrl:
        "https://6ammart-admin.6amtech.com/storage/app/public/product/2022-03-22-6239a7117c441.png",
      title: "Green Chilli",
      orderCount: 10,
      storeUrl: "",
    },
    // Add more store objects as needed
  ];

  const stores2 = [
    {
      imageUrl:
        "https://6ammart-admin.6amtech.com/storage/app/public/store/2022-03-22-623961d98ca1e.png",
      storeName: "Smart Shopping",
      storeUrl: "",
      rating: 3,
    },
    {
      imageUrl:
        "https://6ammart-admin.6amtech.com/storage/app/public/store/2022-03-22-62395f9a68837.png",
      storeName: "Fresh supermarket",
      storeUrl: "",
      rating: 1,
    },
    // Add more store objects as needed
  ];

  const products = [
    {
      imageUrl:
        "https://6ammart-admin.6amtech.com/storage/app/public/product/2022-03-22-623992773ee73.png",

      alt: "Orange Imported (± 50 gm)",
      title: "Orange Imported (± 50 gm)",
      likes: 0,
    },
    {
      href: "",
      imageUrl:
        "https://6ammart-admin.6amtech.com/storage/app/public/product/2022-03-22-6239941e7f360.png",
      alt: "Cabbage",
      title: "Cabbage",
      likes: 0,
    },
    {
      href: "",
      imageUrl:
        "https://6ammart-admin.6amtech.com/storage/app/public/product/2022-03-22-6239965e312ab.png",
      alt: "Mango (± 50 gm)",
      title: "Mango (± 50 gm)",
      likes: 0,
    },
    // Add more products as needed
  ];

  const cardsData2 = [
    {
      imageUrl:
        "https://6ammart-admin.6amtech.com/storage/app/public/delivery-man/2022-09-29-63351bf73345f.png",
      name: "Jhon",
      phoneNumber: "+8**********",
      orders: 15,
      link: "",
    },
    // Add more card data objects as needed
  ];
  const cardsData3 = [
    {
      imageUrl:
        "https://6ammart-admin.6amtech.com/storage/app/public/delivery-man/2022-09-29-63351bf73345f.png",
      name: "Sandeep",
      phoneNumber: "+8**********",
      orders: 2,
      link: "",
    },
    // Add more card data objects as needed
  ];

  const SVGIcon = (props) =>
    <svg className={props.className} pointerEvents="none">
      <use xlinkHref={props.href} />
    </svg>;

  return (
    <div className="w-auto">
      <div className="flex justify-between items-center ">
        <div className="text-2xl text-gray-800 flex justify-start gap-3 items-center">
          <MdDashboardCustomize />
          <h1 className="font-semibold">Dashboard</h1>
        </div>

        <div className=" text-gray-500 flex justify-end gap-2 items-center">
          <h1 className=" text-sm">Followup</h1>
          <PiForkKnifeFill className="text-3xl" />
        </div>
      </div>

      <div className="p-8 my-6 shadow-lg rounded-lg w-full">
        <div className="flex md:justify-between md:items-center flex-col md:flex-row justify-start gap-y-3 ">
          <div className="text-xl text-gray-800 flex  justify-start gap-1 items-start">
            <IoStatsChart />
            <h1 className="font-semibold text-lg text-gray-700">
              Dashboard order statistics
            </h1>
          </div>

          <select className="select w-full max-w-xs focus:outline-none border-2 border-gray-400">
            <option disabled selected>
              Overall Statistics
            </option>
            <option>Today S Statistics</option>
            <option>This Month s Statistics</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-auto md:p-4 py-4 w-full  ">
          <div className="flex justify-around items-center bg-blue-100 rounded-lg p-6 md:py-12 py-8 m-2 w-full">
            <div>
              <h1 className="font-semibold text-xl text-blue-500">4</h1>
              <p className="font-medium">Confirmed</p>
            </div>
            <img
              src="https://6ammart-admin.6amtech.com/public/assets/admin/img/dashboard/1.png"
              alt=""
              className="text-center"
            />
          </div>

          <div className="flex justify-around items-center bg-[#FFF7E7] rounded-lg p-8  md:py-12 py-8 m-2 w-full">
            <div>
              <h1 className="font-semibold text-xl text-yellow-400">0</h1>
              <p className="font-medium">Cooking</p>
            </div>
            <img
              src="https://6ammart-admin.6amtech.com/public/assets/admin/img/dashboard/2.png"
              alt=""
              className="text-center"
            />
          </div>

          <div className="flex justify-around items-center bg-[#EAFDF6] rounded-lg p-8  md:py-12 py-8 w-full m-2">
            <div>
              <h1 className="font-semibold text-xl text-green-400">1</h1>
              <p className="font-medium">Ready for dellivery</p>
            </div>
            <img
              src="https://6ammart-admin.6amtech.com/public/assets/admin/img/dashboard/3.png"
              alt=""
              className="text-center w-[40px]"
            />
          </div>

          <div className="flex justify-around items-center bg-[#FFF2F2] rounded-lg p-8 md:py-12 py-8 w-full m-2 ">
            <div>
              <h1 className="font-semibold text-xl text-red-400">1</h1>
              <p className="font-medium">Ready for dellivery</p>
            </div>
            <img
              src="https://6ammart-admin.6amtech.com/public/assets/admin/img/dashboard/3.png"
              alt=""
              className="text-center w-[40px]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-auto md:p-4  w-full">
          <div className="flex justify-around items-center bg-[#F8F9FB] rounded-lg   p-3 w-full">
            <div className="flex justify-start gap-2 items-center">
              <img
                src="https://6ammart-admin.6amtech.com/public/assets/admin/img/dashboard/statistics/1.png"
                alt=""
                className="text-center"
              />

              <p className="font-medium">Delivered</p>
            </div>
            <h1 className="font-semibold text-xl text-blue-500">4</h1>
          </div>

          <div className="flex justify-around items-center bg-[#F8F9FB] rounded-lg p-3 ">
            <div className="flex justify-start gap-2 items-center">
              <img
                src="https://6ammart-admin.6amtech.com/public/assets/admin/img/dashboard/statistics/2.png"
                alt=""
                className="text-center"
              />

              <p className="font-medium">Refunded</p>
            </div>
            <h1 className="font-semibold text-xl text-blue-500">0</h1>
          </div>

          <div className="flex justify-around items-center bg-[#F8F9FB] rounded-lg  p-3">
            <div className="flex justify-start gap-2 items-center">
              <img
                src="https://6ammart-admin.6amtech.com/public/assets/admin/img/dashboard/statistics/3.png"
                alt=""
                className="text-center"
              />

              <p className="font-medium">Scheduled</p>
            </div>
            <h1 className="font-semibold text-xl text-blue-500">5</h1>
          </div>

          <div className="flex justify-around items-center bg-[#F8F9FB] rounded-lg p-3 ">
            <div className="flex justify-start gap-2 items-center">
              <img
                src="https://6ammart-admin.6amtech.com/public/assets/admin/img/dashboard/statistics/4.png"
                alt=""
                className="text-center"
              />

              <p className="font-medium">All</p>
            </div>
            <h1 className="font-semibold text-xl text-blue-500">4</h1>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start my-5 gap-x-3 w-full gap-y-5">
          <div className=" w-screen overflow-x-auto p-4 md:w-[70%] shadow-lg rounded-lg">
            <div className="flex justify-around items-center mt-3">
              <div>
                <h1 className="text-gray-700 text-xl ">$ 858.40</h1>
                <p className="text-gray-500 text-xl ">Gross Sale</p>
              </div>

              <h1>
                <GoDotFill className="text-xl w-full text-[#00AA96] inline-block mx-2" />
                Sale (2024)
              </h1>

              <select className="select w-full max-w-[250px] focus:outline-none border border-gray-300">
                <option disabled selected>
                  This Year
                </option>
                <option> This Year</option>
                <option> This Month</option>
                <option> This Week</option>
              </select>
            </div>
            <Chart />
          </div>

          <div className="shadow-lg rounded-lg flex flex-col  justify-center items-start w-full  md:w-1/3">
            <div className="flex justify-between items-center mt-4 px-3 w-full">
              <h1 className="text-gray-600 font-bold">User Statistics</h1>
              <select className="select w-full max-w-[200px] focus:outline-none border border-gray-300">
                <option disabled selected>
                  This Year
                </option>
                <option> This Year</option>
                <option> This Month</option>
                <option> This Week</option>
              </select>
            </div>
            <PiChart />
            <div className="flex justify-evenly items-center mb-5 gap-x-5">
              <h1>
                {" "}
                <GoDotFill className="inline-block text-2xl text-[#005555]" />{" "}
                Customer 24
              </h1>
              <h1>
                {" "}
                <GoDotFill className="inline-block text-2xl text-[#00AA96]" />{" "}
                Store 15
              </h1>
              <h1>
                {" "}
                <GoDotFill className="inline-block text-2xl text-[#B9E0E0]" />{" "}
                Delivery man 6
              </h1>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
          <div className="col-span-1 md:col-span-2 lg:col-span-1 my-4">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-4 py-3">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex justify-start items-center gap-x-3 text-lg  text-gray-700 my-5">
                  <MdOutlineBarChart />
                    <h1>Top Selling Item</h1>
                  </div>
                  <a
                    // href="https://6ammart-admin.6amtech.com/admin/store/list"
                    className="text-blue-600 text-sm font-medium"
                  >
                    View all
                  </a>
                </div>
                <div className="grid grid-cols-2 gap-5 my-3">
                  {stores.map((store, index) => (
                    <StoreCard
                      key={index} // It's important to provide a unique key for each iterated element
                      imageUrl={store.imageUrl}
                      title={store.title}
                      orderCount={store.orderCount}
                      storeUrl={store.storeUrl}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* <div className="col-lg-4 col-md-6">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="px-4 py-3 border-b border-gray-200">
                <h5 className="text-lg font-semibold text-gray-800">
                Top Selling Item
                </h5>
              </div>
              <div className="px-4 py-3">
                <ul className="divide-y divide-gray-200">
                  {stores2.map((store, index) => (
                    <StoreListItem
                      key={index} // It's important to provide a unique key for each iterated element
                      imageUrl={store.imageUrl}
                      storeName={store.storeName}
                      storeUrl={store.storeUrl}
                      rating={store.rating}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div> */}

          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-4 py-3">
                <div className="flex justify-between items-center mb-2">
                <div className="flex justify-start items-center gap-x-2 text-lg  text-gray-700 my-5">
                  <IoIosStar />
                    <h1>Top Rated Item</h1>
                  </div>
                  <a
                    // href="https://6ammart-admin.6amtech.com/admin/store/list"
                    className="text-blue-600 text-sm font-medium"
                  >
                    View all
                  </a>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {gridItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="grid-card flex flex-col justify-between rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition duration-300"
                    >
                      <img
                        src={item.imgSrc}
                        alt={item.alt}
                        className="w-full h-auto"
                      />
                      <div className="p-4">
                        <div className="cont" title={item.title}>
                          <span className="text-base font-medium text-gray-800">
                            {item.title}
                          </span>
                          <Rating
                            placeholderRating={item.rating}
                            initialRating={item.rating}
                            emptySymbol={<img src={ratingGrey} className="icon" />}
                            placeholderSymbol={<img src={ratingGrey} className="icon" />}
                            fullSymbol={<img src={ratingYellow} className="icon" />}
                          />
                        </div>
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-sm text-gray-600">
                            Sold: {item.sold}
                          </span>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
{/* 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
          <div className="col-span-1 md:col-span-2 lg:col-span-1 my-4">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-4 py-3">
                <div className="flex justify-between items-center mb-2">
                  <h5 className="text-lg font-semibold text-gray-800">
                    Top Rated Items
                  </h5>
                  <Link className="text-blue-600 text-sm font-medium">
                    View all
                  </Link>
                </div>

                {products.map((product) => (
                  <TopRatedItems
                    key={product.id}
                    imageUrl={product?.imageUrl}
                    productName={product?.title}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 my-4">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="px-4 py-3 border-b border-gray-200">
                <h5 className="text-lg font-semibold text-gray-800">
                  Top Deliveryman
                </h5>
              </div>
              {cardsData2.map((card, index) => (
                <TopDeliveryman
                  key={index}
                  imageUrl={card.imageUrl}
                  name={card.name}
                  phoneNumber={card.phoneNumber}
                  orders={card.orders}
                  link={card.link}
                />
              ))}
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 lg:col-span-1 my-4">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-4 py-3">
                <div className="flex justify-between items-center mb-2">
                  <h5 className="text-lg font-semibold text-gray-800">
                    Top Customers
                  </h5>
                  <Link to="" className="text-blue-600 text-sm font-medium">
                    View all
                  </Link>
                </div>
                {cardsData3.map((card, index) => (
                  <TopDeliveryman
                    key={index}
                    imageUrl={card.imageUrl}
                    name={card.name}
                    phoneNumber={card.phoneNumber}
                    orders={card.orders}
                    link={card.link}
                  />
                ))}
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default withAuth(Dashboard);
