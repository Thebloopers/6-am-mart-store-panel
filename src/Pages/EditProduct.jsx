import React from 'react'
import withAuth from '../HOC/withAuth'
import { useState } from "react";
import { CiDollar } from "react-icons/ci";
import CustomDropdown from "../Components/CustomDropdown";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
// import { authenticate } from "../helpers/auth";
import { FaTag } from "react-icons/fa";
import { getAllCategories, getAllSubCategories } from "../helpers/categories";
import { useMutation, useQuery } from "react-query";
import { getAttributes, getUnits, handleEditProductApi } from "../helpers/item";
import { useCookies } from "react-cookie";




const EditProduct = () => {

  const navigate = useNavigate();

  const location = useLocation();

  const { product } = location.state;


  const [cookies, setCookie] = useCookies(["store"]);

  const [isLoading, setIsLoading] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedThumbnail, setSelectedThumbnail] = useState([]);


  const [selectedAttribute, setSelectedAttribute] = useState(product?.attribute || null);
  const [selectedUnit, setSelectedUnit] = useState(product?.unit || null);
  const [selectDiscountType, setSelectDiscountType] = useState(product?.discounttype || null);


  const [mainCategory, setMainCategory] = useState(product?.category || null);

  const [subCategory, setSubCategory] = useState(product?.subCategory || null);

  const { isError: isError1, isSuccess: isSuccess1, data: data1, refetch: refetch1 } = useQuery(['categories', { cookies }], () => getAllCategories(cookies))

  const { isError: isError2, isSuccess: isSuccess2, data: data2, refetch: refetch2 } = useQuery(['subCategories', { mainCategory, cookies }], () => getAllSubCategories(mainCategory, cookies), {
    enabled: !!mainCategory, // Only run the query when mainCategory is truthy
  });



  const { isError: isError3, isSuccess: isSuccess3, data: data3, refetch: refetch3 } = useQuery(['unit', { cookies }], () => getUnits(cookies))
  const { isError: isError4, isSuccess: isSuccess4, data: data4, refetch: refetch4 } = useQuery(['attribute', { cookies }], () => getAttributes(cookies))

  //   console.log(data3)




  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const categories = formData.getAll('category');
    const lastCategory = categories[categories.length - 1]; // Get the last category value

    // Create a new FormData object and copy all previous data
    const newFormData = new FormData();

    // Copy all fields from the original formData to the newFormData
    for (let [key, value] of formData.entries()) {
      newFormData.append(key, value);
    }

    // Append the last category value to the newFormData
    newFormData.set('category', lastCategory); // Replace 'category' with the last value

    editMutation.mutate({ formData: newFormData, productId: product?._id, cookies: cookies });

    console.log(newFormData);
    console.log(lastCategory);
  };



  const editMutation = useMutation(
    handleEditProductApi,
    {
      onSuccess: (data) => {
        console.log(data, "datar")
        setIsLoading(false);


        if (data.success === true) {
          Swal.fire({
            icon: "success",
            title: "Product updated",
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
          navigate("/list")
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
      onError: () => {
        setIsLoading(false); // Set isLoading to false on error
      },
      onMutate: () => {
        setIsLoading(true); // Set isLoading to true when mutation starts
      },


    }
  );

  //   const handleEdit = (item) => {
  //     Swal.fire({
  //       icon: "warning",
  //       title: "Are You Sure ?",
  //       text: "Delete this product",
  //       confirmButtonText: "Confirm",
  //       showCancelButton:true,
  //       confirmButtonColor: "#00B5FF",
  //       cancelButtonColor: "#EF4C53",
  //       showClass: {
  //         popup: "swal2-show",
  //         backdrop: "swal2-backdrop-show",
  //         icon: "swal2-icon-show",
  //       },
  //       hideClass: {
  //         popup: "swal2-hide",
  //         backdrop: "swal2-backdrop-hide",
  //         icon: "swal2-icon-hide",
  //       },
  //     }).then((result) => {
  //       if(result.isConfirmed){
  //         editMutation.mutate({ cookies: cookies, productId: item?._id, });
  //       }
  //     });
  //   };







  // State to hold pic selected images


  const handleFileChange = (event) => {
    const files = event.target.files;
    // Check if any files were selected
    if (files.length === 0) {
      return;
    }
    const imagePreviews = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );

    setSelectedImages(imagePreviews);

  };

  const handleFileChangeThumbnail = (event) => {
    const files = event.target.files;

    console.log(files)
    // Check if any files were selected
    if (files.length === 0) {
      return;
    }
    const imagePreviews = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );


    setSelectedThumbnail([imagePreviews]);


  };

  const onSelectMainCategory = (selected) => {
    setMainCategory(selected);
    setSubCategory(null);
  }



  const onSelectSubCategory = (selected) => {
    setSubCategory(selected);
  }
  const onSelectAttribute = (selected) => {
    setSelectedAttribute(selected);
  }
  const onSelectUnit = (selected) => {
    setSelectedUnit(selected);
  }
  const SelectDiscount = (selected) => {
    setSelectDiscountType(selected);
  }



  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    animation: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });



  return (


    <div className='relative'>


      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[#d0e7f2] bg-opacity-50 z-50">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      )}

      <h1 className="page-header-title capitalize m-0 flex text-2xl gap-3 font-extrabold mb-5">
        <span className="page-header-icon">
          <img
            src="https://6ammart-admin.6amtech.com/public/assets/admin/img/order.png"
            className="w-26"
            alt=""
          />
        </span>
        <span>Edit Item</span>
      </h1>


      <form onSubmit={handleSubmit}>
        <div className="flex justify-between items-start gap-4">

          <div className="w-full shadow-lg border border-gray-100 rounded-lg">
            <h1 className="border-b-2 border-gray-300 p-4">Item Info</h1>
            <label className="form-control w-full p-6">
              <div className="label">
                <span className="label-text">Name(EN)</span>
              </div>
              <input
                type="text"
                placeholder="New item"
                className="input input-bordered w-full  outline-none"
                name="name"
                defaultValue={product?.name}

              />
            </label>

            <label className="form-control w-full p-6 mb-4">
              <div className="label">
                <span className="label-text">Name(EN)</span>
              </div>
              <textarea
                cols={4}
                rows={5}
                className="border border-gray-300"
                name="shortDescription"
                defaultValue={product?.shortDescription}


              ></textarea>
            </label>
          </div>

          <div className="w-full rounded-lg shadow-lg">
            <h1 className="border-b-2 border-gray-300 p-4">Item Image</h1>


            <div className="flex">
              <label className="form-control w-full max-w-xl p-3">
                <div className="label">
                  <span className="label-text">Image</span>
                </div>
                {selectedImages.length > 0 ? selectedImages?.map((image, mapIndex) => (
                  <div className="flex justify-center items-center" key={mapIndex}>
                    <img src={image} alt={`Selected ${mapIndex}`} className="w-[100px] h-[150px] -ml-[8vw] overflow-hidden object-cover" />
                  </div>
                )) : product?.itemImage?.map((image, mapIndex) => (
                  <div className="flex justify-center items-center" key={mapIndex}>
                    <img src={`${import.meta.env.VITE_IMAGE_URL}/${image || ''}`} alt={`Selected ${mapIndex}`} className="w-[100px] h-[150px] -ml-[8vw] overflow-hidden object-cover" />
                  </div>
                ))}


                <div className="w-[10vw] relative mt-7  rounded-lg border-dotted border-gray-200 border-2">
                  <img
                    className="size-fit"
                    src="https://6ammart-admin.6amtech.com/public/assets/admin/img/upload.png"
                    alt=""
                    // defaultValue={`${import.meta.env.VITE_IMAGE_URL + product?.itemImage}`}
                    defaultValue={`${import.meta.env.VITE_IMAGE_URL}${product?.itemImage || ''}`}


                  />
                  <div className="absolute w-[50px] h-[100px]">
                    <input
                      type="file"
                      placeholder="New item"
                      className="input input-bordered w-full max-w-xl outline-none hidden "
                      multiple
                      onChange={handleFileChange}
                      name="itemImage"
                    />
                  </div>

                </div>
              </label>
              <label className="form-control w-full max-w-xl p-3">
                <div className="label">
                  <span className="label-text">Thumbnail</span>
                </div>
                {selectedThumbnail.length > 0 ? selectedThumbnail?.map((image, mapIndex) => (
                  <div className="flex justify-center items-center" key={mapIndex}>
                    <img src={image} alt={`Selected ${mapIndex}`} className="w-[100px] h-[150px] -ml-[8vw] overflow-hidden object-cover"
                    />
                  </div>
                )) : <div className="flex justify-center items-center">
                  <img src={`${import.meta.env.VITE_IMAGE_URL}/${product?.itemThumbnail[0] || ''}`} alt={`thumbnail`} className="w-[100px] h-[150px] -ml-[8vw] overflow-hidden object-cover"
                  />
                </div>}


                <div className="w-[10vw] relative mt-7  rounded-lg border-dotted border-gray-200 border-2">
                  <img
                    className="size-fit"
                    src="https://6ammart-admin.6amtech.com/public/assets/admin/img/upload.png"
                    alt=""
                  />
                  <div className="absolute w-[50px] h-[100px]">
                    <input
                      type="file"
                      placeholder="New item"
                      className="input input-bordered w-full max-w-xl outline-none hidden "
                      onChange={handleFileChangeThumbnail}
                      name="itemThumbnail"


                    />
                  </div>

                </div>

              </label>
            </div>
          </div>
        </div>

        <div className="mt-10 shadow-lg rounded-lg ">
          <h1 className="font-bold text-gray-700 border-b p-3"><CiDollar className="inline-block text-xl text-gray-700 " />Item Details</h1>


          <div className="flex justify-start gap-x-2 items-center flex-wrap mt-4 px-2 py-5">
            <label className="form-control w-full max-w-[300px]">
              <div className="label">
                <span className="label-text my-2">Category*</span>
              </div>
              <CustomDropdown
                options={data1?.category?.map((item) => { return item })}
                onSelect={onSelectMainCategory}
                dropdown={"category"}
                category={mainCategory}
              />
            </label>



            <label className="form-control w-full max-w-[300px]">
              <div className="label">
                <span className="label-text my-2">Sub category</span>
              </div>
              <CustomDropdown
                options={data2 ? data2?.category?.map((item) => { return item }) : []}
                onSelect={onSelectSubCategory}
                dropdown={"subCategory"}
                category={subCategory}
              />
            </label>





            <label className="form-control w-full max-w-[300px]">
              <div className="label">
                <span className="label-text my-2">Unit</span>
              </div>
              <CustomDropdown
                options={data3 ? data3?.data?.map((item) => { return item }) : []}
                onSelect={onSelectUnit}
                category={selectedUnit}
                dropdown={"unit"}

              />
              {/* <input className="p-3 border border-gray-300 outline-none rounded-lg " type="number" defaultValue={0} placeholder="Ex : 100" /> */}
            </label>






            <label className="form-control w-full max-w-[300px]">
              <div className="label">
                <span className="label-text my-2">Maximum Purchase Quantity Limit</span>
              </div>
              {/* <CustomDropdown options={['Percent','Amount',]} onSelect={}/> */}
              <input className="p-3 border border-gray-300 outline-none rounded-lg " type="number"
                placeholder="Ex : 100"
                name="maximumPurchaseQuantityLimit"
                defaultValue={product?.maximumPurchaseQuantityLimit}
              />
            </label>



          </div>
        </div>

        <div className="mt-10 shadow-lg rounded-lg ">
          <h1 className="font-bold text-gray-700 border-b p-3"><CiDollar className="inline-block text-xl text-gray-700 " />Price Information

          </h1>


          <div className="flex justify-start gap-x-2 items-center flex-wrap mt-4 px-2 py-5">
            <label className="form-control w-full max-w-[300px]">
              <div className="label">
                <span className="label-text my-2">Price*</span>
              </div>
              <input className="p-3 border border-gray-300 outline-none rounded-lg " placeholder="Ex.100" type="number"
                name="price"
                defaultValue={product?.price}

              />

            </label>



            <label className="form-control w-full max-w-[300px]">
              <div className="label">
                <span className="label-text my-2">Total stock</span>
              </div>
              <input className="p-3 border border-gray-300 outline-none rounded-lg " type="number" name="totalUnit"
                defaultValue={product?.totalUnit} placeholder="Ex : 100" />

            </label>





            <label className="form-control w-full max-w-[300px]">
              <div className="label">
                <span className="label-text my-2">Discount type *</span>
              </div>
              <CustomDropdown options={[{ name: 'Percent' }, { name: 'Amount' }]}
                onSelect={SelectDiscount}
                category={selectDiscountType}
                dropdown={"discounttype"}
              />

            </label>


            <label className="form-control w-full max-w-[300px]">
              <div className="label">
                <span className="label-text my-2">Discount (%)*</span>
              </div>
              {/* <CustomDropdown options={['burger','Pizza','Samosa','Kachori']} onSelect={onSelect}/> */}
              <input className="p-3 border border-gray-300 outline-none rounded-lg " type="number"
                defaultValue={product?.discount} name="discount" placeholder="Ex : 100" />
            </label>






          </div>
        </div>
        <div className="mt-10 shadow-lg rounded-lg ">
          <h1 className="font-bold text-gray-700 border-b p-3"><CiDollar className="inline-block text-xl text-gray-700 " />Attribute

          </h1>


          <div className="flex justify-start gap-x-2 items-center flex-wrap mt-4 px-2 py-5">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text my-2">Attribute</span>
              </div>
              <CustomDropdown
                options={data4 ? data4?.data?.map((item) => { return item }) : []}
                onSelect={onSelectAttribute}
                category={selectedAttribute}
                dropdown={"attribute"}


              />
            </label>



          </div>
        </div>


        <div className="my-10 shadow-lg p-5">


          <div className='border py-3 mt-5 shadow-lg rounded-lg'>
            <div className='flex items-center py-4 px-4'>
              <div className='p-2 text-lg'><FaTag /></div>
              <div><h1 className='text-lg font-semibold'>Tags</h1></div>
            </div>
            <hr />
            <div className='px-3 w-full mt-4'>

              <input type="text" placeholder='Search tags' name="tags" defaultValue={product?.tags} className='p-3 border mt-3 w-full focus:outline-sky-200' />
            </div>
          </div>



          <div className='flex gap-4 justify-end mt-5 px-4 '>
            <button className="btn font-bold" style={{ padding: "6px 30px" }}>Reset</button>
            <button type="submit" className="btn font-bold bg-sky-600 text-white" style={{ padding: "6px 30px" }}>Submit</button>
          </div>
        </div>
      </form>
    </div >

  )
}

export default withAuth(EditProduct)