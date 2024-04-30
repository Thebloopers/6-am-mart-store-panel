import { useEffect, useState } from "react";
import { IoFilterSharp } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import withAuth from "../HOC/withAuth";
import { useMutation, useQuery } from "react-query";
import Swal from "sweetalert2";
import { useCookies } from "react-cookie";
import { AllProduct, handleDeleteProductApi, handleVisibilityProductApi } from "../helpers/item";
import { useNavigate } from "react-router-dom";


const List = () => {

  const navigate = useNavigate()
  

  const [cookies, setCookie] = useCookies(["store"]);


  const { isError: isError1, isSuccess: isSuccess1, data: data1, refetch: refetch1 } = useQuery(['product', { cookies }], () => AllProduct(cookies))


  const statusChangeMutation = useMutation(
    handleVisibilityProductApi,
    {
      onSuccess: (data) => {
        if (data.success === true) {
          Swal.fire({
            icon: "success",
            title: data?.message || "product status changed",
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
          refetch1();
        } else {
          return Swal.fire({
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
        }
      },
    }
  );

  const handleVisibility = (item) => {
    statusChangeMutation.mutate({ cookies: cookies, productId: item?._id, });
  };

  const deleteMutation = useMutation(
    handleDeleteProductApi,
    {
      onSuccess: (data) => {
        if (data.success === true) {
          Swal.fire({
            icon: "success",
            title: "product deleted",
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
          refetch1();
        } else {
          return Swal.fire({
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
        }
      },
    }
  );

  const handleDelete = (item) => {
    Swal.fire({
      icon: "warning",
      title: "Are You Sure ?",
      text: "Delete this product",
      confirmButtonText: "Confirm",
      showCancelButton: true,
      confirmButtonColor: "#00B5FF",
      cancelButtonColor: "#EF4C53",
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
      if (result.isConfirmed) {
        deleteMutation.mutate({ cookies: cookies, productId: item?._id, });
      }
    });
  };

  return (
    <div>
      <div className="flex justify-start items-center gap-x-3">
        <IoFilterSharp className="text-2xl text-gray-800 font-bold" />
        <h1 className="text-2xl text-gray-800 font-bold">Item List</h1>
      </div>

      <div className="my-6 p-4 rounded-lg ">
        <h1 className="text-2xl font-bold text-gray-800">Search data</h1>
        <div className="flex justify-between items-center p-4 my-4">
          <select className="select w-full max-w-[350px] border border-gray-200 focus:outline-none ">
            <option disabled selected>
              All Catyegory
            </option>
            <option>Homer</option>
            <option>Marge</option>
            <option>Bart</option>
            <option>Lisa</option>
            <option>Maggie</option>




          </select>

          <select className="select w-full max-w-[350px] focus:outline-none border-gray-200 ">
            <option disabled selected>
              All Sub Catyegory
            </option>
            <option>Homer</option>
            <option>Marge</option>
            <option>Bart</option>
            <option>Lisa</option>
            <option>Maggie</option>
          </select>

          <select className="select w-full max-w-[350px]  border-gray-200 focus:outline-none ">
            <option disabled selected>
              All
            </option>
            <option>Homer</option>
            <option>Marge</option>
            <option>Bart</option>
            <option>Lisa</option>
            <option>Maggie</option>
          </select>
        </div>
      </div>

      <div className="shadow-lg rounded-lg">
        <div className="flex justify-end items-center gap-x-5 my-3 p-3">
          <div className="form-control w-full max-w-[350px]">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <button onClick={() => navigate("/addnew")} className="btn btn-info text-white">Add New Item</button>
        </div>
        <table className="table-auto min-w-full border-collapse border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left mx-2">#</th>
              <th className="px-4 py-2 text-left mx-2">Name</th>
              <th className="px-4 py-2 text-left mx-2">Category</th>
              <th className="px-4 py-2 text-left mx-1">Price </th>
              <th className="px-4 py-2 text-left">Sell Count</th>
              <th className="px-4 py-2 text-left">Status</th>

              <th className="px-4 py-2 flex gap-1 justify-center">
                <span className="">Actions</span>
                <span className="text-[11px] hover:text-green-500">
                  <FaCaretUp /> <FaCaretDown />
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {data1?.data?.map((data, index) => (
              <tr key={index}>
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2 flex justify-start items-center gap-x-2">
                  <img
                    // src={data?.itemImage}
                    src={`${import.meta.env.VITE_IMAGE_URL + '/' + data?.itemThumbnail[0]}`}
                    alt=""
                    className="w-[50px] h-[50px] object-cover rounded-lg"
                  />
                  <p className="text-gray-700 font-semibold">
                    {data?.name}
                  </p>
                </td>
                <td className="px-4 py-2">
                  <div className="text-gray-700">{data?.category?.name}</div>
                </td>


                <td className="px-4 py-2">₹{data?.price}</td>
                <td className="px-4 py-2">


                  <td className="px-4 py-2">{data?.sold}</td>


                </td>

                <td className="px-4 py-2 text-capitalize">
                  <div className="form-control  w-24">
                    <label className="cursor-pointer label">
                      <input
                        type="checkbox"
                        className="toggle toggle-primary"
                        checked={data?.isVisible}
                        onChange={() => handleVisibility(data)}
                      />
                    </label>
                  </div>
                </td>
                <td className="px-4 py-2 flex justify-start items-center gap-x-3">
                  <button
                    className="btn btn-outline btn-info hover:bg-white px-3"
                    onClick={() => navigate('/editproduct', {
                      state: {
                        product: data
                      }
                    })}
                  >
                    <MdEdit className="text-2xl" />
                  </button>
                  <button className="btn btn-outline btn-error hover:bg-white px-3" onClick={() => handleDelete(data)}>
                    <MdDelete className="text-2xl" />

                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default withAuth(List);
