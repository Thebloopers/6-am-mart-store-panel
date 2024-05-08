import React from "react";
import withAuth from "../HOC/withAuth";
import { useCookies } from "react-cookie";
import { useQuery } from "react-query";
import { AllProduct } from "../helpers/item";

const ProductGallery = () => {

  const [cookies, setCookie] = useCookies(["store"]);


  const { isError, isSuccess, data, refetch } = useQuery(['product', { cookies }], () => AllProduct(cookies))
  console.log(data, "data2")

  return (
    <div className="max-[450px]:w-[350px] md:w-auto ">
      <div className="flex justify-normal overflow-hidden items-center gap-x-3 mt-20">
        <img
          src="https://6ammart-admin.6amtech.com/public/assets/admin/img/group.png"
          alt=""
          className="h-11"
        />
        <div>
          <h1 className="text-xl font-bold text-gray-800">Product Gallery</h1>
          <p className="text-gray-500 ">
            Search product and use its info to create own product
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center   w-full my-8 p-4 shadow-lg rounded-lg">
        <input
          type="text"
          placeholder="Ex Search Name "
          className="input input-bordered w-full  focus:outline-none m-3 "
        />
        <button className="btn btn-info md:w-[200px] text-white m-3">
          Search
        </button>
      </div>

      <div className="p-2 ">
        <h1 className="font-semibold text-xl text-gray-700">Product List</h1>
        <p className="text-gray-400">
          Search product and use its info to create own product
        </p>
      </div>
      
      {data && data?.data?.map((data, index) => (

        <div key={index} className="bg-violet-300">

          <div className="shadow-lg flex bg-red-300 rounded-lg my-3 mt-10 border border-gray-300  w-full overflow-x-auto px-5  ">
            <div className="flex bg-blue-300 justify-between items-start w-full md:w-[40vw] ">


              <div className="flex justify-between items-start px-5 w-full">


                <img
                  src={`${import.meta.env.VITE_IMAGE_URL}/${data?.itemThumbnail[0]}`} alt=""
                  className="rounded-lg w-[170px] h-[20vh] my-5"
                />

                <div className="px-4">
                  <h1 className="text-xl text-gray-800 font-semibold my-5">
                    {data?.name}
                  </h1>
                  <h1 className="text-lg text-gray-800 font-semibold my-4">
                    General Information
                  </h1>
                  <div className="my-3">
                    <p className="text-sm text-gray-400 my-2">
                      Category : <span className="text-gray-950 mx-2">{data?.category?.name} </span>
                    </p>
                    <p className="text-sm text-gray-400 mb-2">
                      Sub Category :{" "}
                      <span className="text-gray-950 mx-2"> {data?.subCategory?.name}</span>
                    </p>
                    <p className="text-sm text-gray-400 mb-2">
                      Item type :{" "}
                      <span className="text-gray-950 mx-2"> {data?.tags} </span>
                    </p>
                  </div>
                </div>
              </div>

            </div>  



            <div className="flex bg-green-200 justify-between items-start ">
              <h1 className="text-xl font-bold mt-8">Available Variations</h1>
            </div>

            <div className=" ">
              <button className="btn btn-outline btn-info text-white my-5">
                Use This Product Info
              </button>
              <h1 className="text-center font-medium text-xl">Tags</h1>
            </div>
          </div>

          <div className="  py-5 px-4 mb-3 ">
            <h1 className="text-gray-800 font-semibold">Description:</h1>
            <p className="text-gray-500 text-sm mb-2 border-b border-gray-500 ">
              {data?.shortDescription}
            </p>
          </div>

        </div>
      ))}


    </div>
  );
};

export default withAuth(ProductGallery);
