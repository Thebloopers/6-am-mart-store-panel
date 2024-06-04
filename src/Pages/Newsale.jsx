import React, { useState, useEffect, useRef } from "react";
import withAuth from "../HOC/withAuth";
import CustomDropdown from "../Components/CustomDropdown";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useMutation, useQuery } from "react-query";
import { getAllCategories, getAllSubCategories } from "../helpers/categories";
import { getAllProductsOfStore } from "../helpers/products";
import { addCustomer, getAllCustomer } from "../helpers/Customer";
import { FaShoppingCart } from "react-icons/fa";
import Swal from "sweetalert2";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomDropdown1 from "../Components/CustomDropdown1";
import { createPosOrder } from "../helpers/Order";
import { FaPen } from "react-icons/fa";
import { APIProvider } from "@vis.gl/react-google-maps";
import GoogleMap from "../Map/googlemap";
import { TbBuildingStore } from "react-icons/tb";
import OrderInvoiceGenrate from "../Components/OrderInvoiceGenrate";
const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

function Newsale() {
  const [counter, setCounter] = useState(1);

  const [isLoading, setIsLoading] = useState(false); // Step 1: Add isLoading state

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    if (counter !== 1) {
      setCounter(counter - 1);
    }
  };

  // const foodItems = [
  //   { name: "Food 1", qty: 2, unitPrice: 10 },
  //   { name: "Food 2", qty: 1, unitPrice: 15 },
  //   { name: "Food 3", qty: 3, unitPrice: 8 },
  // ];

  const [cart, setCart] = useState([]);

  const [customerId, setCustomerId] = useState(null); //customerId state
  const [paymentMethod, setPaymentMethod] = useState("Offline"); //customerId state

  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["store"]);

  const [categoryId, setCategoryId] = useState(null);

  const [points, setPoints] = useState(null); //For maps state

  const [address, setAddress] = useState({
    name: "",
    contactNumber: "",
    pinCode: "",
    house: "",
    floor: "",
    road: "",
    completeAddress: "",
    latitude: points && points[0],
    longitude: points && points[1],
  }); //For store the address

  const {
    isError: isError1,
    isSuccess: isSuccess1,
    data: data1,
    refetch: refetch1,
  } = useQuery(["categories", { cookies }], () => getAllCategories(cookies));

  const {
    isLoading: isLoading2,
    isError: isError2,
    isSuccess: isSuccess2,
    data: data2,
    refetch: refetch2,
  } = useQuery(["products", { cookies }], () =>
    getAllProductsOfStore(cookies, categoryId)
  );

  // useEffect hook to refetch data when categoryId changes
  useEffect(() => {
    refetch2();
  }, [categoryId]); // rerun effect when categoryId changes

  // billing section API

  const [storeId, setStoreId] = useState(null);

  const {
    isLoading: isLoading3,
    isError: isError3,
    isSuccess: isSuccess3,
    data: data3,
    refetch: refetch3,
  } = useQuery(["customers", { cookies }], () => getAllCustomer(cookies));

  const foods = [
    {
      name: "Medu Vada",
      price: 95.0,
      image:
        "https://6ammart-admin.6amtech.com/storage/app/public/product/2021-08-21-6120e7a4b7b2a.png",
    },
    {
      name: "Grilled lemo",
      price: 75.0,
      image:
        "https://6ammart-admin.6amtech.com/storage/app/public/product/2021-08-21-6120e72547646.png",
    },
    {
      name: "Meet Pizza",
      price: 335.0,
      image:
        "https://6ammart-admin.6amtech.com/storage/app/public/product/2021-08-21-6120e6dadf410.png",
    },
    {
      name: "Chicken Shaw",
      price: 155.0,
      image:
        "https://6ammart-admin.6amtech.com/storage/app/public/product/2021-08-21-6120e5955e1d1.png",
    },
    {
      name: "Cheese Pizza",
      price: 100.0,
      image:
        "https://6ammart-admin.6amtech.com/storage/app/public/product/2021-08-21-6120e61452e2b.png",
    },
    {
      name: "Steak Kebabs",
      price: 50.0,
      image:
        "https://6ammart-admin.6amtech.com/storage/app/public/product/2021-08-21-6120e44ea58c5.png",
    },
    {
      name: "Fride Rice",
      price: 80.0,
      image:
        "https://6ammart-admin.6amtech.com/storage/app/public/product/2021-08-21-6120e4dcd5194.png",
    },
    {
      name: "Idli",
      price: 80.0,
      image:
        "https://6ammart-admin.6amtech.com/storage/app/public/product/2021-08-21-6120e3a81ad40.png",
    },
    {
      name: "Masaala Puri",
      price: 80.0,
      image:
        "https://6ammart-admin.6amtech.com/storage/app/public/product/2021-08-21-6120cbd7cd675.png",
    },
  ];
  const [modal, setModal] = useState(false);

  function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.showModal();
  }

  function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.close();
  }

  const dialogRef = useRef(null);

  useEffect(() => {
    // Accessing the dialog element by its ID and setting it to the ref
    dialogRef.current = document.getElementById("add_customer_modal");
  }, []);

  const closeDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  const customerMutation = useMutation(addCustomer, {
    onSuccess: (data) => {
      setIsLoading(false);
      if (data.success === true) {
        Swal.fire({
          icon: "success",
          title: data?.message || "User created",
          timer: "2000",
          confirmButtonText: "Ok",
          confirmButtonColor: "#33996a",
          showClass: {
            popup: "swal2-show",
            backdrop: "swal2-backdrop-show",
            icon: "swal2-icon-show",
          },
          hideClass: {
            popup: "swal2-hide",
            backdrop: "swal2-backdrop-hide",
            icon: "swal2-icon-hide",
          },
        });
        refetch3();

        return closeDialog();
      } else {
        Swal.fire({
          icon: "error",
          title: data?.error || data?.errors || "something went wrong",
          timer: "2000",
          confirmButtonText: "Ok",
          confirmButtonColor: "#33996a",
          showClass: {
            popup: "swal2-show",
            backdrop: "swal2-backdrop-show",
            icon: "swal2-icon-show",
          },
          hideClass: {
            popup: "swal2-hide",
            backdrop: "swal2-backdrop-hide",
            icon: "swal2-icon-hide",
          },
        });
        return closeDialog();
      }
    },
    onError: () => {
      setIsLoading(false); // Set isLoading to false on error
    },
    onMutate: () => {
      setIsLoading(true); // Set isLoading to true when mutation starts
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true); // Step 2: Set isLoading to true before mutation

    const formData = new FormData(event.target);

    customerMutation.mutate({ formData, cookies: cookies });
  };

  const printDiv = (divName) => {
    const printContents = document.getElementById(divName).innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  };

  //place order mutation
  const placeOrderMutation = useMutation(createPosOrder, {
    onSuccess: (data) => {
      setIsLoading(false);
      console.log(data, 'data')
      if (data.success === true) {
        Swal.fire({
          icon: "success",
          title: data?.message || "order created",
          timer: "3000",
          confirmButtonText: "Ok",
          confirmButtonColor: "#33996a",
          showClass: {
            popup: "swal2-show",
            backdrop: "swal2-backdrop-show",
            icon: "swal2-icon-show",
          },
          hideClass: {
            popup: "swal2-hide",
            backdrop: "swal2-backdrop-hide",
            icon: "swal2-icon-hide",
          },
        }).then((result) => {
          if (result.isConfirmed || Swal.DismissReason.timer) {
            // <OrderInvoiceGenrate />
            <>
              <dialog id="my_modal_5" className="modal">
                <div className="modal-box">
                  <h1 className="font-bold text-start">Print invoice</h1>
                  <div className="flex justify-center items-center gap-x-4 mt-7">
                    <button className="p-3 bg-blue-400 text-white rounded-lg">
                      Proceed, if thermal printer is ready
                    </button>
                    <button className="p-3 bg-red-500 text-white rounded-lg">
                      Back
                    </button>
                  </div>
                  <div className="border border-gray-300 mt-3"></div>
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                  </form>
                  <div className="text-5xl flex justify-center items-center">
                    <TbBuildingStore />
                  </div>

                  <div className="content container mx-auto py-8 font-bold">
                    <div className="flex justify-center items-center mb-6">
                      <div className="space-x-2">
                        <button
                          className="btn bg-[#006161] text-white hover:bg-[#007981]"
                          onClick={() => printDiv("printableArea")}
                        >
                          Print Invoice
                        </button>
                        <button className=" btn  btn-error text-white ">
                          Back
                        </button>
                      </div>
                    </div>
                    <div id="printableArea">
                      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-md px-8 py-6">
                        <h1 className="text-xl font-bold">Order Invoice</h1>

                        <hr className="my-4 non-printable" />
                        <div className="flex flex-col justify-center items-center mb-6">
                          <div className=" flex flex-col items-center text-center ">
                            <img
                              className="w-[20px]"
                              src="https://6ammart-admin.6amtech.com/public/assets/admin/img/invoice-logo.png"
                              alt="Company Logo"
                            />
                            <div className="text-sm mt-2">
                              <h2 className="font-semibold">Online Market</h2>
                              <p>House: 00, Road: 00, City-000, Country</p>
                              <p>Phone: 0**********</p>
                            </div>
                          </div>
                          <div className="text-center">
                            <img
                              className="h-2 md:w-[75%] object-cover m-auto"
                              src="https://6ammart-admin.6amtech.com/public/assets/admin/img/invoice-star.png"
                              alt="Star"
                            />
                            <h2 className="text-lg font-semibold">
                              Cash Receipt
                            </h2>
                            <img
                              className=" h-2 md:w-[75%] object-cover m-auto"
                              src="https://6ammart-admin.6amtech.com/public/assets/admin/img/invoice-star.png"
                              alt="Star"
                            />
                          </div>
                          <div>
                            <p className="text-sm">Order id: 100099</p>
                            <p className="text-sm">02/Jan/2024 04:54:pm</p>
                          </div>
                        </div>
                        <div className="mb-6 text-center text-sm">
                          <h3 className="text-lg font-semibold mb-2">
                            Customer Details
                          </h3>
                          <p>Contact Name: Marjahan Sultana</p>
                          <p>Phone: +8*********000</p>
                          <p>Address: Unknown Location Found</p>
                        </div>
                        <table className=" sm:w-[50%] m-auto mb-6 text-sm">
                          <thead>
                            <tr className="">
                              <th className="text-left ">Description</th>
                              <th className="text-center ">Quantity</th>
                              <th className="text-right">Price</th>
                            </tr>
                          </thead>
                          <tbody className="text-sm">
                            <tr>
                              <td className="text-left ">
                                Suruchi Premium Green Chili Pickle <br />
                                <div className="price">$ 90.00</div>
                              </td>
                              <td className="text-center ">3</td>
                              <td className="text-right ">$ 270.00</td>
                            </tr>
                          </tbody>
                        </table>
                        {/* <div className="mb-6  p-2 w-[50%] m-auto">
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-start">
            <div className=''>
              <dt className=''>
             <p>Subtotal (TAX Included):</p> 
              <span>$ 270.00</span>
              <span className='text-right'>$ 270.00</span>
              </dt>
              <div className=''>Discount:
              <span>- $ 21.60</span>
              </div>
              <dt>Coupon Discount:
              <span>- $ 0.00</span>
              </dt>
            <div className=''>
              <div>
              <span className='text-right'>+ $ 0.00</span>
              </div>
              <div className='flex'>Delivery Charge:
              <p>$ 600.00</p>
              </div>

              </div>
              <div className='flex justify-between'>
              <div>Additional Charge:</div>
              <div>+ $ 10.00</div>
              </div>
              
              <div className='flex justify-between'>

              <div  className="font-semibold">Total:</div>
              <div className="font-semibold">$ 858.40</div>
              </div>
              </div>
            </div>
            
         
          <div className="flex justify-between mt-4 border-t w-full">
            <div className='flex gap-8'>
              <p>Paid by: Wallet</p>
              <p>Amount: 858.4</p>
              <p>Change: 0</p>
            </div>
          </div>
        </div> */}
                        <div className="sm:w-[50%] m-auto text-sm">
                          <dl className="text-right">
                            <div className="col-span-1 md:col-span-2 flex justify-between my-2">
                              <dt className="col-6 ">
                                Subtotal (TAX Included):
                              </dt>
                              <dd className="col-6 ">$ 270.00</dd>
                            </div>
                            <div className="col-span-1 md:col-span-2 flex justify-between mb-2">
                              <dt className="col-6">Discount:</dt>
                              <dd className="col-6">- $ 21.60</dd>
                            </div>
                            <div className="col-span-1 md:col-span-2 flex justify-between mb-2">
                              <dt className="col-6">Coupon discount:</dt>
                              <dd className="col-6">- $ 0.00</dd>
                            </div>
                            <div className="col-span-1 md:col-span-2 flex justify-between mb-2">
                              <dt className="col-6">Delivery man tips:</dt>
                              <dd className="col-6">+ $ 0.00</dd>
                            </div>
                            <div className="col-span-1 md:col-span-2 flex justify-between mb-2">
                              <dt className="col-6">Delivery charge:</dt>
                              <dd className="col-6">$ 600.00</dd>
                            </div>
                            <div className="col-span-1 md:col-span-2 flex justify-between mb-2">
                              <dt className="col-6">Additional Charge:</dt>
                              <dd className="col-6">+ $ 10.00</dd>
                            </div>
                            <div className="col-span-1 md:col-span-2 total flex justify-between">
                              <dt>Total:</dt>
                              <dd>$ 858.40</dd>
                            </div>
                          </dl>
                          <div className="flex flex-row justify-between border-t border-gray-300 pt-4">
                            <span className="flex">
                              <span>Paid by:</span>
                              <span className="ml-1">Wallet</span>
                            </span>
                            <span>
                              <span>Amount:</span>
                              <span className="ml-1">858.4</span>
                            </span>
                            <span>
                              <span>Change:</span>
                              <span className="ml-1">0</span>
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-col items-center justify-center">
                          <img
                            className="h-2 md:w-[53%] object-cover m-auto"
                            src="https://6ammart-admin.6amtech.com/public/assets/admin/img/invoice-star.png"
                            alt="Star"
                          />
                          <h2 className="text-lg font-semibold">THANK YOU</h2>
                          <img
                            className="h-2  md:w-[53%] object-cover m-auto"
                            src="https://6ammart-admin.6amtech.com/public/assets/admin/img/invoice-star.png"
                            alt="Star"
                          />
                          <div className="text-sm mt-2 text-center">
                            © Bootsup Digital .
                            <span className="block">
                              2021-2023 BoostUp Digital.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="py-4">
                    Press ESC key or click on ✕ button to close
                  </p>
                </div>
              </dialog>
            </>;
          }
        });
        // return navigate("/allorder");
      } else {
        Swal.fire({
          icon: "error",
          title: data?.error || data?.errors || "something went wrong",
          timer: "2000",
          confirmButtonText: "Ok",
          confirmButtonColor: "#33996a",
          showClass: {
            popup: "swal2-show",
            backdrop: "swal2-backdrop-show",
            icon: "swal2-icon-show",
          },
          hideClass: {
            popup: "swal2-hide",
            backdrop: "swal2-backdrop-hide",
            icon: "swal2-icon-hide",
          },
        });
        return;
      }
    },
    onError: () => {
      setIsLoading(false); // Set isLoading to false on error
    },
    onMutate: () => {
      setIsLoading(true); // Set isLoading to true when mutation starts
    },
  });

  const handleOrderSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true); // Step 2: Set isLoading to true before mutation

    Swal.fire({
      icon: "question",
      title: "Are You Sure ?",
      text:"You Want to Place this Order",
      
      confirmButtonText: "Ok",
      confirmButtonColor: "#33996a",
      showClass: {
        popup: "swal2-show",
        backdrop: "swal2-backdrop-show",
        icon: "swal2-icon-show",
      },
      hideClass: {
        popup: "swal2-hide",
        backdrop: "swal2-backdrop-hide",
        icon: "swal2-icon-hide",
      },
    }).then({});

    placeOrderMutation.mutate({ cart, customerId, paymentMethod, address, cookies });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
      {/* add new customer modal  */}

      <dialog
        id="add_customer_modal"
        className="modal modal-top w-[95%] md:w-1/2 m-auto "
      >
        <div className="modal-box">
          <form onSubmit={handleSubmit}>
            <h3 className="font-bold text-lg ">Add new customer</h3>
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>

            <div className="modal-action"></div>
            <div className="flex justify-around items-center gap-x-5 md:gap-x-0">
              <label className="form-control w-full max-w-xs focus:outline-none ">
                <div className="label">
                  <span className="label-text">First Name</span>
                </div>
                <input
                  type="text"
                  placeholder="First name"
                  className="input input-bordered w-full max-w-xs "
                  name="firstName"
                />
              </label>

              <label className="form-control w-full max-w-xs focus:outline-none">
                <div className="label">
                  <span className="label-text">Last Name</span>
                </div>
                <input
                  type="text"
                  placeholder="Last name"
                  className="input input-bordered w-full max-w-xs focus:outline-blue-200"
                  name="lastName"
                />
              </label>
            </div>
            <div className="flex justify-around items-center mt-3 gap-x-5 md:gap-x-0">
              <label className="form-control w-full max-w-xs focus:outline-none">
                <div className="label">
                  <span className="label-text">Email*</span>
                </div>
                <input
                  type="email"
                  placeholder="Ex: Ex@gmail.com here"
                  className="input input-bordered w-full max-w-xs "
                  name="email"
                />
              </label>

              <label className="form-control w-full md:max-w-xs focus:outline-none">
                <div className="label w-full">
                  <span className="label-text w-full">
                    Phone( country code)*
                  </span>
                </div>
                <input
                  type="tel"
                  placeholder="Phone"
                  className="input input-bordered w-full max-w-xs focus:outline-blue-200"
                  maxLength={10}
                  name="phone"
                />
              </label>
            </div>

            <div className="modal-action flex justify-end items-center gap-x-4">
              <button className="btn" type="button">
                Reset
              </button>
              <button
                className="btn btn-info text-white"
                type="submit"
                disabled={isLoading ? true : false}
              >
                {isLoading ? (
                  <span className="loading loading-spinner loading-md"></span>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </form>
        </div>
      </dialog>

      <div className="order--pos-left bg-white rounded-lg shadow-lg p-6 ">
        <h2 className="text-xl font-semibold mb-4">Product Selection</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="col-span-full sm:col-span-1">
            <label className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
          <div className="col-span-full sm:col-span-1">
            <select
              className="select w-full max-w-xs border-gray-300"
              onChange={(event) => {
                return setCategoryId(event.target.value);
              }}
            >
              {data1?.category?.map((item) => (
                <option value={item._id}>{item?.name}</option>
              ))}
            </select>
          </div>
          <div className="col-span-full">
            <form id="search-form" className="search-form">
              <div className="relative">
                <input
                  id="datatableSearch"
                  type="search"
                  value=""
                  name="search"
                  className="form-input h-12 w-full rounded-lg pl-10 pr-4 focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Search by product name"
                  disabled
                />
                <div className="grid grid-cols-2 md:grid-cols-3 justify-between md:justify-center flex-wrap items-start  mt-4 cursor-pointer h-full ">
                  {isLoading2 ? (
                    <span className="loading loading-spinner loading-lg text-center text-5xl text-gray-400 ml-[50%] mt-[40%]"></span>
                  ) : data2?.data?.length === 0 ? (
                    <div className="flex flex-col justify-center items-center h-full w-full mt-[30%]">
                      <img
                        className=""
                        src="https://6ammart-admin.6amtech.com/public/assets/admin/img/search-icon.png"
                      />
                      <h1 className="text-gray-400">
                        No Products Found Under This Category
                      </h1>
                    </div>
                  ) : (
                    data2?.data?.map((item, index) => {
                      const modalId = `my_modal_${index}`; // Unique modal id for each item
                      return (
                        <div className="text-center m-2" key={index}>
                          <button
                            type="button"
                            onClick={() => openModal(modalId)}
                            className="flex flex-col justify-start items-center w-[150px] "
                          >
                            <img
                              src={`${import.meta.env.VITE_IMAGE_URL}/${
                                item.itemThumbnail[0]
                              }`}
                              alt=""
                              className="rounded-t-lg w-full md:w-[150px] h-[130px]"
                            />
                            <h1 className=" text-gray-700 md:text-lg mt-2 md:font-semibold  text-center w-[150px]">
                              {item.name}
                            </h1>
                            <h1 className="text-orange-500 md:text-xl">
                              ₹ {item.price}.00
                            </h1>
                          </button>

                          <dialog id={modalId} className="modal">
                            <div className="modal-box">
                              <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button
                                  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                                  onClick={() => closeModal(modalId)}
                                  type="button"
                                >
                                  ✕
                                </button>
                              </form>
                              <div className="font-bold text-lg flex justify-start items-center gap-x-8">
                                <img
                                  src={`${import.meta.env.VITE_IMAGE_URL}/${
                                    item.itemThumbnail[0]
                                  }`}
                                  alt=""
                                  className="w-[150px] border border-gray-300 rounded-lg  object-cover"
                                />
                                <div>
                                  <h1 className="md:text-xl font-semibold text-start ">
                                    {item.name}
                                  </h1>
                                  <div className="flex justify-start items-center gap-3 ">
                                    <p className="md:text-lg  text-gray-500 text font-light">
                                      Price:
                                    </p>
                                    <div className="md:text-xl font-normal my-2 float-end">
                                      {" "}
                                      {item?.discounttype == "Amount"
                                        ? (
                                            item?.price - item?.discount
                                          ).toFixed(2)
                                        : (
                                            item?.price -
                                            (item?.discount / 100) * item?.price
                                          ).toFixed(2)}{" "}
                                      <del className="text-sm text-gray-500 font-light mx-2">
                                        ₹{item?.price}
                                      </del>
                                    </div>
                                  </div>
                                  <div className="flex justify-start items-center gap-3">
                                    <p className="text-lg text-gray-500 text font-light">
                                      Discount :
                                    </p>
                                    <p className="text-xl font-normal">
                                      ₹
                                      {item?.discounttype == "Amount"
                                        ? item?.discount
                                        : (item?.discount / 100) * item?.price}
                                    </p>
                                  </div>
                                </div>
                              </div>

                              <div className="py-4 text-start">
                                <h1 className="text-xl  text-gray-700">
                                  Description
                                </h1>
                                <p className="text-gray-400 font-thin text-sm">
                                  {/* {item.shortDescription} */} A paragraph is
                                  defined as “a group of sentences or a single
                                  sentence that forms a unit” (Lunsford and
                                  Connors 116). Length and appearance do not
                                  determine whether a section in a paper is a
                                  paragraph. For instance, in some styles of
                                  writing, particularly journalistic styles, a
                                  paragraph can be just one sentence long.
                                </p>
                              </div>

                              <div className="flex justify-between items-center">
                                <h1 className="text-lg  text-gray-700">
                                  Quantity
                                </h1>
                                <div className="flex justify-end items-center gap-3">
                                  <span
                                    className="text-gray-500 text-5xl"
                                    onClick={decrementCounter}
                                  >
                                    -
                                  </span>
                                  <div className="border border-gray-400 h-[40px] w-[70px] rounded-lg">
                                    <h1
                                      className="text-center mt-2"
                                      defaultValue={1}
                                    >
                                      {counter}
                                    </h1>
                                  </div>
                                  <span
                                    className="text-gray-500 text-3xl"
                                    onClick={incrementCounter}
                                  >
                                    +
                                  </span>
                                </div>
                              </div>

                              <div className="flex justify-start items-center gap-x-3">
                                <p className="text-gray-400 font-normal">
                                  Total Price :{" "}
                                </p>
                                <h1 className="font-semibold">
                                  ₹{" "}
                                  {item?.discounttype == "Amount"
                                    ? (item?.price - item?.discount).toFixed(2)
                                    : (
                                        item?.price -
                                        (item?.discount / 100) * item?.price
                                      ).toFixed(2)}
                                </h1>
                              </div>

                              <button
                                type="button"
                                className=" btn btn-info text-white font-bold my-5"
                                onClick={() => {
                                  // Check if the item is already in the cart
                                  const itemIndex = cart.findIndex(
                                    (cartItem) => cartItem.item._id === item._id
                                  );

                                  // If the item is not already in the cart, add it
                                  if (itemIndex === -1) {
                                    setCart([
                                      ...cart,
                                      { item: item, qty: counter },
                                    ]);
                                  } else {
                                    // If the item is already in the cart, update its quantity
                                    const updatedCart = [...cart];
                                    updatedCart[itemIndex].qty += counter;
                                    setCart(updatedCart);
                                  }
                                  closeModal(modalId);
                                }}
                              >
                                <FaShoppingCart />
                                Add to Cart
                              </button>
                            </div>
                          </dialog>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="order--pos-right bg-white rounded-lg shadow-lg md:p-6 ">
        <h2 className="text-xl font-semibold md:mb md:py-0 md:px-0 px-3 py-4">
          Billing Section
        </h2>
        <form>
          <div className="flex flex-col  md:flex-row items-center justify-between  p-3 rounded-lg">
            <div className="relative flex-1 w-full md:mx-2 mb-2 md:mb-0">
              {/* <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span> */}

              <label className="form-control w-full md:max-w-[300px] border border-gray-300 rounded-lg">
                {/* <CustomDropdown1
                options={data2 ? data2?.category?.map((item) => { return item }) : []}
                onSelect={onCustomerSelect}
                dropdown={"customer"}
                category={customer}
                /> */}

                <select
                  className="select w-full md:max-w-xs uppercase"
                  onChange={(event) => setCustomerId(event.target.value)}
                >
                  <option disabled selected className="uppercase">
                    Walk in Customer
                  </option>
                  {data3?.storeuser?.map((item, op) => (
                    // <option>Homer</option>,
                    <option
                      key={op}
                      className=" text-sm m-2 uppercase"
                      value={item._id}
                    >
                      {item?.firstName + " " + item?.lastName} - {item?.phone}
                    </option>
                    // <option className="p-2 text-sm m-2" value={item._id}>{item?.firstName + " " + item?.lastName}{item?.phone} </option>
                  ))}
                </select>

                {/* <select
              className="select w-full max-w-xs border-gray-300"
              onChange={(event) => {
                return setCategoryId(event.target.value);
              }}
            >
              {data3?.category?.map((item) => (
                <option value={item._id}>{item?.name}</option>
              ))}
            </select> */}
              </label>
            </div>

            <button
              className="bg-[#20A7AF]  md:max-w-[200px] rounded font-regular py-3 px-6 text-white w-full my-4 md:my-0"
              id="add_new_customer"
              type="button"
              // onClick={() => setModal(!modal)}
              onClick={() =>
                document.getElementById("add_customer_modal").showModal()
              }
            >
              Add new customer
            </button>
          </div>

          <dialog
            id="my_modal_3"
            className="modal modal-top w-[50%] h-[100vh] m-auto"
          >
            <div className="modal-box">
              <h1 className="text-center font-semibold mb-4">
                Delivery Address
              </h1>
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>

              <div className="flex justify-between items-center">
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Contact person name*</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="input input-bordered w-full max-w-xs"
                    value={address?.name}
                    onChange={(e) =>
                      setAddress({ ...address, name: e.target.value })
                    }
                  />
                </label>

                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Contact Number*</span>
                  </div>
                  <input
                    type="tel"
                    placeholder="Enter Your number"
                    defaultValue={+91}
                    maxLength={10}
                    className="input input-bordered w-full max-w-xs"
                    value={address?.contactNumber}
                    onChange={(e) =>
                      setAddress({ ...address, contactNumber: e.target.value })
                    }
                  />
                </label>
              </div>

              <div className="flex justify-between items-center mt-5">
                <div className="flex justify-between items-center gap-x-4">
                  <label className="form-control w-full max-w-[150px]">
                    <div className="label">
                      <span className="label-text">Road</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Ex: 4th"
                      className="input input-bordered w-full max-w-xs"
                      value={address?.road}
                      onChange={(e) =>
                        setAddress({ ...address, road: e.target.value })
                      }
                    />
                  </label>
                  <label className="form-control w-full max-w-[150px]">
                    <div className="label">
                      <span className="label-text">House</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Ex: 45/c"
                      className="input input-bordered w-full max-w-xs"
                      value={address?.house}
                      onChange={(e) =>
                        setAddress({ ...address, house: e.target.value })
                      }
                    />
                  </label>
                </div>

                <div className="flex justify-between items-center gap-x-4">
                  <label className="form-control w-full max-w-[150px] ">
                    <div className="label">
                      <span className="label-text">Floor</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Ex: 1A"
                      className="input input-bordered w-full max-w-xs "
                      value={address?.floor}
                      onChange={(e) =>
                        setAddress({ ...address, floor: e.target.value })
                      }
                    />
                  </label>
                  <label className="form-control w-full max-w-[150px]">
                    <div className="label">
                      <span className="label-text">PinCode</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full max-w-xs"
                      value={address?.pinCode}
                      onChange={(e) =>
                        setAddress({ ...address, pinCode: e.target.value })
                      }
                    />
                  </label>
                </div>
              </div>

              <div className="border border-green-400 px-5 py-3 my-3 rounded-lg">
                <div className="flex justify-between items-center gap-x-4">
                  <label className="form-control w-full max-w-[300px] ">
                    <div className="label">
                      <span className="label-text">Longitude*</span>
                    </div>
                    <input
                      type="text"
                      disabled
                      className="input input-bordered w-full max-w-xs "
                    />
                  </label>
                  <label className="form-control w-full max-w-[300px]">
                    <div className="label">
                      <span className="label-text">Latitude*</span>
                    </div>
                    <input
                      type="text"
                      disabled
                      className="input input-bordered w-full max-w-xs"
                    />
                  </label>
                </div>

                <label className="form-control w-full max-w-full mt-4">
                  <div className="label">
                    <span className="label-text">Complete Address</span>
                  </div>
                  <textarea
                    className="textarea textarea-bordered h-24"
                    placeholder="Address"
                    value={address?.completeAddress}
                    onChange={(e) =>
                      setAddress({
                        ...address,
                        completeAddress: e.target.value,
                      })
                    }
                  ></textarea>
                </label>

                <div className="flex justify-between items-center  my-5">
                  <h1>
                    * pin the address in the map to calculate delivery fee
                  </h1>
                  <button
                    type="button"
                    className="rounded-lg text-white bg-blue-400 p-3"
                  >
                    Delivery Fee: 0 ₹
                  </button>
                </div>

                <APIProvider apiKey={API_KEY} libraries={["places"]}>
                  <div style={{ height: "50vh", marginBottom: "69px" }}>
                    <GoogleMap
                      polygon={false}
                      marker={true}
                      setPoints={setPoints}
                    />
                  </div>
                </APIProvider>
              </div>
            </div>
          </dialog>

          <div className="pos-delivery-option rounded-lg md:p-2  w-full flex justify-between items-center">
            <h5 className="text-xl p-3">Delivery Information</h5>
            <div
              className="text-xl p-3 text-gray-700 cursor-pointer"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              {" "}
              <FaPen />
            </div>
          </div>

          <div className="flex justify-between items-start w-full gap-x-5 pl-5 mb-3">
            <div className="flex flex-col">
              {address?.name && <h1>Customer : {address?.name}</h1>}
              {address?.contactNumber && (
                <h1>phone : {address?.contactNumber}</h1>
              )}
            </div>
            <p className="text-gray-500">
              {address?.completeAddress && (
                <h1>Customer : {address?.completeAddress}</h1>
              )}
            </p>
          </div>
        </form>

        <div id="cart" className="w-full">
          <div className="flex flex-row overflow-x-auto md:px-2 cart-table-scroll">
            <div
              className="flex flex-row overflow-x-auto px-2 cart-table-scroll"
              style={{ maxHeight: "300px" }}
            >
              <div className="w-full overflow-x-auto">
                <table className="w-full min-w-[400px] bg-gray-100 table-fixed relative">
                  <thead className="bg-gray-200 text-gray-700 sticky top-0">
                    <tr className="text-center">
                      <th className="md:py-3 md:px-4 border-b-2 border-gray-300">
                        Item
                      </th>
                      <th className="py-3 px-4 border-b-2 border-gray-300">
                        Qty
                      </th>
                      <th className="py-3 px-4 border-b-2 border-gray-300">
                        Unit Price
                      </th>
                      <th className="py-3 px-4 border-b-2 border-gray-300">
                        Delete
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white text-center w-full">
                    {cart.length > 0 &&
                      cart.map((item, index) => (
                        <tr
                          key={index}
                          className="border-b border-gray-200 hover:bg-gray-50 w-full"
                        >
                          <td className="py-2 px-4 flex flex-col justify-center items-center gap-y-3 w-full">
                            <img
                              src={`${import.meta.env.VITE_IMAGE_URL}/${
                                item?.item?.itemThumbnail[0]
                              }`}
                              className="w-16 rounded-lg h-12"
                            />
                            <h1 className="w-full text-sm">
                              {item?.item?.name}
                            </h1>
                          </td>

                          <td className="py-2 px-4">
                            {/* {item?.qty} */}
                            <div className="">
                              <div className="flex justify-end items-center gap-3">
                                <span
                                  className="text-gray-500 text-5xl cursor-pointer"
                                  onClick={() => {
                                    // Check if the item is already in the cart
                                    const itemIndex = cart.findIndex(
                                      (cartItem) =>
                                        cartItem.item._id === item?.item?._id
                                    );

                                    console.log(item);

                                    // If the item is not already in the cart, add it
                                    if (itemIndex !== -1) {
                                      // If the item is already in the cart, update its quantity
                                      const updatedCart = [...cart];
                                      if (updatedCart[itemIndex].qty > 1) {
                                        updatedCart[itemIndex].qty -= 1;
                                        setCart(updatedCart);
                                      }
                                    }
                                  }}
                                >
                                  -
                                </span>
                                <div className="border border-gray-400 h-[40px] w-[40px] rounded-lg">
                                  <h1
                                    className="text-center mt-2 cursor-default"
                                    defaultValue={1}
                                  >
                                    {item?.qty}
                                  </h1>
                                </div>
                                <span
                                  className="text-gray-500 text-2xl cursor-pointer"
                                  onClick={() => {
                                    // Check if the item is already in the cart
                                    const itemIndex = cart.findIndex(
                                      (cartItem) =>
                                        cartItem.item._id === item?.item?._id
                                    );

                                    console.log(item);
                                    // If the item is not already in the cart, add it
                                    if (itemIndex !== -1) {
                                      // If the item is already in the cart, update its quantity
                                      const updatedCart = [...cart];

                                      updatedCart[itemIndex].qty += 1;
                                      setCart(updatedCart);
                                    }
                                  }}
                                >
                                  +
                                </span>
                              </div>
                            </div>
                          </td>

                          <td className="py-2 px-4">
                            ₹
                            {item?.item?.discounttype == "Amount"
                              ? (
                                  item?.item?.price - item?.item?.discount
                                ).toFixed(2)
                              : (
                                  item?.item?.price -
                                  (item?.item?.discount / 100) *
                                    item?.item?.price
                                ).toFixed(2)}
                          </td>
                          <td className="py-2 px-4">
                            <button
                              className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
                              type="button"
                              onClick={() =>
                                setCart(
                                  cart.filter(
                                    (doc) => doc?.item?._id !== item?.item?._id
                                  )
                                )
                              }
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <form onSubmit={handleOrderSubmit}>
            <div className="box p-3">
              <div className="grid grid-cols-1 md:grid-cols-2 text-dark my-5">
                {console.log(cart)}

                <div className="col-span-1 md:col-span-2 flex flex-col">
                  <div className="text-sm border-b pb-2 flex justify-between p-2">
                    <span>Subtotal (TAX Included):</span>
                    <span className="text-right">
                      ₹{" "}
                      {cart.reduce(
                        (total, item) => total + item?.item?.price * item?.qty,
                        0
                      )}
                    </span>
                  </div>
                  <div className="text-sm border-b pb-2 flex justify-between p-2">
                    <span>Discount :</span>
                    <span className="text-right">
                      {" "}
                      ₹{" "}
                      {cart.reduce(
                        (total, item) =>
                          total + item?.item?.discount * item?.qty,
                        0
                      )}
                    </span>
                  </div>
                  <div className="text-sm border-b pb-2 flex justify-between p-2">
                    <span>Delivery fee :</span>
                    <span className="text-right" id="delivery_price">
                      ₹ {0.0}
                    </span>
                  </div>
                  <div className="text-sm border-b pb-2 flex justify-between p-2">
                    <span>Total :</span>
                    <span className="text-right" id="delivery_price">
                      ₹{" "}
                      {cart.reduce(
                        (total, item) =>
                          total +
                          (item?.item?.price - item?.item?.discount) *
                            item?.qty,
                        0
                      )}
                    </span>
                  </div>
                </div>

                <div className="col-span-1 md:col-span-1"></div>
              </div>

              <input
                type="hidden"
                name="_token"
                value="y2k5WiczC4Mhpwi1onz7teiD7bToNJXnrdS6H4re"
                autoComplete="off"
              />
              <input type="hidden" name="user_id" id="customer_id" />
              <div className=" mt-3 mb-3">
                <p className="mb-3">Paid By</p>

                <div className="flex justify-start items-center gap-x-4">
                  <div className="form-control">
                    <label className="label cursor-pointer flex justify-start items-center gap-x-2">
                      <input
                        type="radio"
                        name="radio-4"
                        className="radio radio-accent text-sm"
                        checked
                        onClick={(event) =>
                          setPaymentMethod(
                            event.currentTarget.nextSibling.textContent
                          )
                        }
                      />
                      <span className="label-text">Cash On Delivery</span>
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer flex justify-start items-center gap-x-2">
                      <input
                        type="radio"
                        name="radio-4"
                        className="radio radio-accent text-sm"
                        checked
                        onClick={(event) =>
                          setPaymentMethod(
                            event.currentTarget.nextSibling.textContent
                          )
                        }
                      />
                      <span className="label-text">Online</span>
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer flex justify-start items-center gap-x-2">
                      <input
                        type="radio"
                        name="radio-4"
                        className="radio radio-accent text-sm"
                        checked
                        onClick={(event) =>
                          setPaymentMethod(
                            event.currentTarget.nextSibling.textContent
                          )
                        }
                      />
                      <span className="label-text">Offline</span>
                    </label>
                  </div>
                </div>

                {/* <div className="flex justify-between items-center">
                <button type="button"> <input type="radio" name="radio-4" className="radio radio-accent text-sm" checked />Cash on Delivery</button>
                <button>Online</button>
                <button>Offline</button>
               </div> */}
              </div>

              <div className="flex justify-center md:justify-start items-center  gap-x-6 w-full md:mt-12 my-12">
                <button
                  type="button"
                  className="h-12 hover:bg-red-400 border hover:text-white md:px-12 px-5 rounded-md flex justify-center items-center sm:flex sm:justify-start"
                >
                  Clear Cart
                </button>

                {/* You can open the modal using document.getElementById('ID').showModal() method */}

                <button
                  type="submit"
                  className="h-12 border text-white px-5 md:px-12 rounded-md bg-[#24BAC3] flex justify-center items-center sm:flex sm:justify-end"
                  onClick={() =>
                    document.getElementById("my_modal_5").showModal()
                  }
                >
                  Place Order
                </button>
              </div>

              {/* <div className="grid md:grid-cols-1 sm:grid-cols-1 gap-4 bg-white mt-8">
                <div className="col-span-full md:col-span-1">
                  <button
                    type="button"
                    className="h-12 hover:bg-red-400 border hover:text-white px-12 rounded-md flex justify-center items-center sm:flex sm:justify-start"
                  >
                    Clear Cart
                  </button>
                </div>
                <div className="col-span-full md:col-span-1">
                  <button
                    type="submit"
                    className="h-12 border text-white px-12 rounded-md bg-[#24BAC3] flex justify-center items-center sm:flex sm:justify-end"
                  >
                    Place Order
                  </button>
                </div>
              </div> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default withAuth(Newsale);
