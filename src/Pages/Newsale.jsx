import React, { useState } from "react";
import withAuth from "../HOC/withAuth";
import CustomDropdown from "../Components/CustomDropdown";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useQuery } from "react-query";
import { getAllCategories, getAllSubCategories } from "../helpers/categories";

function Newsale() {
  const foodItems = [
    { name: "Food 1", qty: 2, unitPrice: 10 },
    { name: "Food 2", qty: 1, unitPrice: 15 },
    { name: "Food 3", qty: 3, unitPrice: 8 },
  ];



  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["store"]);

  const {
    isError: isError1,
    isSuccess: isSuccess1,
    data: data1,
    refetch: refetch1,
  } = useQuery(["categories", { cookies }], () => getAllCategories(cookies));



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

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <dialog id="my_modal_1" className="modal modal-top w-1/2 m-auto">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add new customer</h3>

          <div className="flex justify-around items-center ">
            <label className="form-control w-full max-w-xs focus:outline-none">
              <div className="label">
                <span className="label-text">First Name</span>
              </div>
              <input
                type="text"
                placeholder="First name"
                className="input input-bordered w-full max-w-xs "
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
              />
            </label>
          </div>
          <div className="flex justify-around items-center mt-3">
            <label className="form-control w-full max-w-xs focus:outline-none">
              <div className="label">
                <span className="label-text">Email*</span>
              </div>
              <input
                type="text"
                placeholder="Ex: Ex@gmail.com here"
                className="input input-bordered w-full max-w-xs "
              />
            </label>

            <label className="form-control w-full max-w-xs focus:outline-none">
              <div className="label">
                <span className="label-text">Phone (With country code)*</span>
              </div>
              <input
                type="text"
                placeholder="Phone"
                className="input input-bordered w-full max-w-xs focus:outline-blue-200"
              />
            </label>
          </div>

          <div className="modal-action">
            <form
              method="dialog"
              className="flex justify-end items-center gap-x-4"
            >
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
              <button className="btn">Reset</button>
              <button className="btn btn-info text-white">Submit</button>
            </form>
          </div>
        </div>
      </dialog>

      <div className="order--pos-left bg-white rounded-lg shadow-lg p-6">
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
          <select className="select w-full max-w-xs border-gray-300" >
              {data1?.category?.map((item) => (
                <option>{item?.name}</option>
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

                <dialog id="my_modal_3" className="modal">
                  <div className="modal-box">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <div className="font-bold text-lg flex justify-start items-center gap-x-3">
                      <img
                        src="https://6ammart-admin.6amtech.com/storage/app/public/product/2021-08-21-6120e7a4b7b2a.png"
                        alt=""
                        className="w-[150px]"
                      />
                      <div>
                        <h1 className="text-xl font-bold">Medu Vada</h1>
                        <p className="text-xl"> ₹95</p>
                      </div>
                    </div>
                    <div className="py-4">
                      <h1 className="text-2xl font-bold text-gray-700">
                        Description
                      </h1>
                      <p className="text-gray-400">
                        Menu Vada is crispy, fluffy, soft, and delicious lentil
                        fritters from South Indian cuisine.
                      </p>
                    </div>
                  </div>
                </dialog>
                <div
                  className="flex justify-start flex-wrap items-center  gap-x-6 mt-4 cursor-pointer"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  {foods.map((item) => {
                    return (
                      <div className="text-center m-2">
                        <img
                          src={item.image}
                          alt=""
                          className="rounded-t-lg w-[150px] h-[130px]"
                        />
                        <h1 className="font-medium text-gray-800 text-xl">
                          {item.name}
                        </h1>
                        <h1 className="text-orange-500 text-xl">
                          ₹ {item.price}.00
                        </h1>
                      </div>
                    );
                  })}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="order--pos-right bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Billing Section</h2>
        <form>
          <div className="flex flex-col md:flex-row items-center justify-between p-3 rounded-lg">
            <div className="relative flex-1 w-full md:mx-2 mb-2 md:mb-0">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                
              </span>
              

              <label className="form-control w-full max-w-[300px]">
                
                <CustomDropdown
                  
                />
              </label>


            </div>

            <button
              className="bg-[#20A7AF] rounded font-regular py-3 px-6 text-white"
              id="add_new_customer"
              type="button"
              // onClick={() => setModal(!modal)}
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              Add new customer
            </button>
          </div>
          <div className="pos-delivery-option rounded-lg p-4">
            <div className="flex justify-between items-center mb-4">
              <h5 className="text-xl flex items-center gap-2">
                <span className="card-title-icon">
                  <i className="tio-user"></i>
                </span>
                <span>
                  Delivery Information <small>(Home Delivery)</small>
                </span>
              </h5>
              <span
                className="delivery-edit-icon text-primary cursor-pointer"
                id="delivery_address"
                data-toggle="modal"
                data-target="#deliveryAddrModal"
              >
                <i className="tio-edit"></i>
              </span>
            </div>
            <div
              className="pos-delivery-options-info flex flex-wrap"
              id="del-add"
            ></div>
          </div>
        </form>
        <div id="cart-items" className="mt-6"></div>
        <div id="cart" className="w-full">
          <div className="flex flex-row overflow-x-auto px-2 cart-table-scroll">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[400px] bg-gray-100 table-fixed">
                <thead className="bg-gray-200 text-gray-700">
                  <tr className="text-center">
                    <th className="py-3 px-4 border-b-2 border-gray-300">
                      Food
                    </th>
                    <th className="py-3 px-4 border-b-2 border-gray-300">
                      QTY
                    </th>
                    <th className="py-3 px-4 border-b-2 border-gray-300">
                      Unit Price
                    </th>
                    <th className="py-3 px-4 border-b-2 border-gray-300">
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white text-center">
                  {foodItems.map((item, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-200 hover:bg-gray-50"
                    >
                      <td className="py-2 px-4">{item.name}</td>
                      <td className="py-2 px-4">{item.qty}</td>
                      <td className="py-2 px-4">
                        ${item.unitPrice.toFixed(2)}
                      </td>
                      <td className="py-2 px-4">
                        <button className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="box p-3">
            <div className="grid grid-cols-1 md:grid-cols-2 text-dark">
              <div className="col-span-1 md:col-span-2">
                <div className="text-sm border-b pb-2">
                  Subtotal (TAX Included):
                  <div className="text-sm text-right">$ 0.00</div>
                </div>
                <div className="text-sm border-b pb-2">
                  Discount :<div className="text-sm text-right">- $ 0.00</div>
                </div>
                <div className="text-sm border-b pb-2">
                  Delivery fee :
                  <div className="text-sm text-right" id="delivery_price">
                    $ 0.00
                  </div>
                </div>
                <div className="text-sm border-b pb-2">
                  Total :
                  <div className="text-sm text-right" id="delivery_price">
                    $ 0.00
                  </div>
                </div>
              </div>
              <div className="col-span-1 md:col-span-1"></div>
            </div>
            <form>
              <input
                type="hidden"
                name="_token"
                value="y2k5WiczC4Mhpwi1onz7teiD7bToNJXnrdS6H4re"
                autoComplete="off"
              />
              <input type="hidden" name="user_id" id="customer_id" />
              <div className=" mt-3 mb-3">
                <p className="mb-3">Paid By</p>
                <ul className="flex flex-col sm:flex-row gap-2">
                  <li>
                    <label className="block">
                      <input
                        type="radio"
                        name="type"
                        value="cash"
                        hidden
                        checked
                      />
                      <span className="text-sm border py-2 px-4 sm:px-12 block text-center sm:inline-block bg-[#334257] text-white">
                        Cash On Delivery
                      </span>
                    </label>
                  </li>
                  <li>
                    <label className="block">
                      <input type="radio" name="type" value="wallet" hidden />
                      <span className="text-sm border py-2 px-4 sm:px-12 block text-center sm:inline-block text-[#334257]">
                        Wallet
                      </span>
                    </label>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white mt-8">
                <div className="col-span-full md:col-span-1">
                  <button
                    type="button"
                    className=" h-12 hover:bg-red-400 border hover:text-white px-12 rounded-md "
                  >
                    Clear Cart
                  </button>
                </div>
                <div className="col-span-full md:col-span-1">
                  <button
                    type="submit"
                    className=" h-12 border text-white px-12 rounded-md bg-[#24BAC3]"
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withAuth(Newsale);
