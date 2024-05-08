import React, { useState } from "react";
import { CiDollar } from "react-icons/ci";
import CustomDropdown from "../Components/CustomDropdown";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { authenticate } from "../helpers/auth";

import { FaTag } from "react-icons/fa";
import { getAllCategories, getAllSubCategories } from "../helpers/categories";
import { useMutation, useQuery } from "react-query";
import { addNewItem, getAttributes, getUnits } from "../helpers/item";
import withAuth from "../HOC/withAuth";
import { useCookies } from "react-cookie";
import { MdOutlineCancel } from "react-icons/md";
import { Autocomplete, Chip, FormControl, Input, TextField } from "@mui/material";


const Addnew = () => {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["store"]);

  const [isLoading, setIsLoading] = useState(false); // Step 1: Add isLoading state

  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedThumbnail, setSelectedThumbnail] = useState([]);

  const [images, setImages] = useState([]);
  const [thumbnail, setThumbnail] = useState([]);


  const [selectedAttribute, setSelectedAttribute] = useState(null);
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [selectDiscountType, setSelectDiscountType] = useState(null);


  const [mainCategory, setMainCategory] = useState(null);

  const [subCategory, setSubCategory] = useState(null);

  const [attributeArray, setattributeArray] = useState([])
  const [values, setValues] = useState([]);
  const [currValue, setCurrValue] = useState("");

  const { isError: isError1, isSuccess: isSuccess1, data: data1, refetch: refetch1 } = useQuery(['categories', { cookies }], () => getAllCategories(cookies))

  const { isError: isError2, isSuccess: isSuccess2, data: data2, refetch: refetch2 } = useQuery(['subCategories', { mainCategory, cookies }], () => getAllSubCategories(mainCategory, cookies), {
    enabled: !!mainCategory, // Only run the query when mainCategory is truthy
  });



  const { isError: isError3, isSuccess: isSuccess3, data: data3, refetch: refetch3 } = useQuery(['unit', { cookies }], () => getUnits(cookies))
  const { isError: isError4, isSuccess: isSuccess4, data: data4, refetch: refetch4 } = useQuery(['attribute', { cookies }], () => getAttributes(cookies))

  // Use the useMutation hook
  // const productMutation = useMutation(
  //   addNewItem,
  //   {
  //     onSuccess: (data) => {
  //       console.log(data);
  //       if (data.success === true) {
  //         return authenticate(data, () => {
  //           <span className="loading loading-spinner text-accent"></span>

  //           navigate("/list");
  //         });
  //       }
  //       if (data.success === false) {
  //         return Swal.fire({
  //           icon: "error",
  //           title: data?.error || data?.errors || "something went wrong",
  //           timer: "2000",
  //           confirmButtonText: "Ok",
  //           confirmButtonColor: "#33996a",

  //           showClass: {
  //             popup: "swal2-show",
  //             backdrop: "swal2-backdrop-show",
  //             icon: "swal2-icon-show",
  //           },
  //           hideClass: {
  //             popup: "swal2-hide",
  //             backdrop: "swal2-backdrop-hide",
  //             icon: "swal2-icon-hide",
  //           },
  //         });
  //       } else {
  //         return Swal.fire({
  //           icon: "error",
  //           title: "something went wrong",
  //           timer: "2000",
  //           confirmButtonText: "Ok",
  //           confirmButtonColor: "#33996a",

  //           showClass: {
  //             popup: "swal2-show",
  //             backdrop: "swal2-backdrop-show",
  //             icon: "swal2-icon-show",
  //           },
  //           hideClass: {
  //             popup: "swal2-hide",
  //             backdrop: "swal2-backdrop-hide",
  //             icon: "swal2-icon-hide",
  //           },
  //         });
  //       }

  //     },
  //   }
  // );


  const productMutation = useMutation(
    addNewItem,
    {
      onSuccess: (data) => {
        console.log(data);
        setIsLoading(false);
        if (data.success === true) {
          Swal.fire({
            icon: "success",
            title: "Data submitted successfully",
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
          navigate("/list");
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




  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true); // Step 2: Set isLoading to true before mutation

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

    productMutation.mutate({ formData: newFormData, cookies: cookies });




    console.log(newFormData);
    console.log(lastCategory);
  };





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

  const handleImageChange = (event) => {
    const files = event.target.files;
    const maxFiles = 5;

    if (files.length + images.length > maxFiles) {
      alert(`You can upload maximum ${maxFiles} images.`);
      return;
    }

    const selectedImages = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );
    setImages([...images, ...selectedImages]);
  };

  const handleThumbnailChange = (event) => {
    const files = event.target.files;

    const selectedThumbnail = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );
    console.log(selectedThumbnail[0]);
    setThumbnail([...selectedThumbnail]);
  };

  const handleRemoveImage = (indexToRemove) => {
    setImages(images.filter((_, index) => index !== indexToRemove));
  };
  
  const [autoComplete, setAutoComplete] = useState({
    store: "",
    category: "",
    subCategory: "",
    unit: "",
    variants: [],
    discounttype: "",
  });


  const handleAutocompleteChange = (name) => (event, newValue) => {
    // Using name attribute to identify the field
    event.preventDefault();

    if (name === "discounttype") {
      return setAutoComplete({
        ...autoComplete,
        [name]: newValue?.label,
      });
    }
    if (name === "variants") {
      return setAutoComplete({
        ...autoComplete,
        [name]: newValue,
      });
    }
    return setAutoComplete({
      ...autoComplete,
      [name]: newValue?._id,
    });
  };

  const handleKeyUp = (e) => {
    e.preventDefault();
    console.log(e.keyCode);


    if (e.target.value.length <= 0) {
      return;
    }
    else {
      setValues((oldState) => [...oldState, e.target.value]);
      setCurrValue("");
    }

  };

  // useEffect(() => {
  //   console.log(values);
  // }, [values]);

  const handleChange = (e) => {
    setCurrValue(e.target.value);
  };

  const handleDelete = (item, index) => {
    let arr = [...values]
    arr.splice(index, 1)
    console.log(item)
    setValues(arr)
  }


  return (
    <div className="relative">

      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-300 bg-opacity-50 z-50">
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
        <span>Add New Item</span>
      </h1>


      <form onSubmit={handleSubmit}>
        <div className="flex justify-between items-start gap-4">

          <div className="w-full shadow-lg border border-gray-100 rounded-lg">
            <h1 className="border-b-2 border-gray-300 p-4">Item Info</h1>
            <div className="py-8">

            
            <label className="form-control w-full p-6">
              <div className="label">
                <span className="label-text">Name(EN)</span>
              </div>
              <input
                type="text"
                placeholder="New item"
                className="input input-bordered w-full  outline-none"
                name="name"


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

              ></textarea>
            </label>
            </div>
          </div>

          <div className="w-full rounded-lg shadow-lg">
            <h1 className="border-b-2 border-gray-300 p-4">Item Image</h1>


            <div className="flex flex-col">
              <div className="form-control w-full max-w-xl p-3">
                <div className="flex flex-col md:flex-row justify-center items-center gap-2 ">
                <div
                  className={`w-44 h-44 relative rounded-md overflow-hidden bg-gray-200  ${images.length >= 5 ? "hidden" : "block"
                    }`}
                >
                  <img
                    className="object-cover w-full h-full"
                    src="https://6ammart-admin.6amtech.com/public/assets/admin/img/upload-img.png"
                    alt="Thumbnail"
                  />
                  <label
                    htmlFor="uploadInput"
                    className="absolute inset-0 flex justify-center items-center cursor-pointer bg-black bg-opacity-50 text-white text-sm font-semibold rounded-md opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                  >
                    <input
                      id="uploadInput"
                      type="file"
                      name="itemImage"
                      className="hidden"
                      accept="image/*"
                      multiple
                      onChange={handleImageChange}
                      required
                    />
                    <i className="fas fa-upload mr-2"></i>Upload Image
                  </label>
                </div>

                  {images.length > 0 &&
                    images.map((image, index) => (
                      <div className="w-44 h-44 flex items-center justify-center p-1 border-dashed border-2 border-gray-400 rounded relative">
                        <button
                          className="absolute top-2 right-2 text-white bg-red-500 rounded-full w-8 h-8 flex justify-center items-center"
                          onClick={() => handleRemoveImage(index)}
                        >
                          <MdOutlineCancel size="24px" />
                        </button>
                        <img
                          key={index}
                          className="rounded object-cover w-full h-full mx-auto my-auto"
                          src={image}
                          alt={`Uploaded Image ${index + 1}`}
                        />
                      </div>
                    ))}
                </div>



                
              </div>
              <div className="w-full flex justify-center items-center max-w-xl p-3">
                <div className="flex flex-col items-center">

                <span className="label-text">Thumbnail</span>
                <div className="w-44 h-44 relative rounded-md overflow-hidden bg-gray-200">
                  <img
                    className="object-cover w-full h-full"
                    src="https://6ammart-admin.6amtech.com/public/assets/admin/img/upload-img.png"
                    alt="Thumbnail"
                  />
                  <img
                    className="absolute top-0 rounded object-cover w-full h-full "
                    src={thumbnail[0]}
                  />
                  <label className="absolute inset-0 flex justify-center items-center cursor-pointer bg-black bg-opacity-50 text-white text-sm font-semibold rounded-md opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
                    <input
                      id="uploadInput"
                      type="file"
                      name="itemImage"
                      className="hidden"
                      accept="image/*"
                      multiple
                      onChange={handleThumbnailChange}
                      required
                    />
                    <i className="fas fa-upload mr-2"></i>Upload Image
                  </label>
                </div>
                </div>

              </div>
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
                category={"unit"}
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
              />

            </label>



            <label className="form-control w-full max-w-[300px]">
              <div className="label">
                <span className="label-text my-2">Total stock</span>
              </div>
              <input className="p-3 border border-gray-300 outline-none rounded-lg " type="number" name="totalUnit" placeholder="Ex : 100" />

            </label>





            <label className="form-control w-full max-w-[300px]">
              <div className="label">
                <span className="label-text my-2">Discount type *</span>
              </div>
              <CustomDropdown options={[{ name: 'Percent' }, { name: 'Amount' }]}
                onSelect={SelectDiscount}
                category={"discounttype"}
                dropdown={"discounttype"}
              />

            </label>


            <label className="form-control w-full max-w-[300px]">
              <div className="label">
                <span className="label-text my-2">Discount (%)*</span>
              </div>
              {/* <CustomDropdown options={['burger','Pizza','Samosa','Kachori']} onSelect={onSelect}/> */}
              <input className="p-3 border border-gray-300 outline-none rounded-lg " type="number" name="discount" placeholder="Ex : 100" />
            </label>






          </div>
        </div>
        <div className='border py-3 mt-5 shadow-lg rounded-lg'>
                <div className="px-6 py-4 border-b">
                  <h5 className="text-lg font-semibold text-gray-800">
                    <span className="mr-2">
                      <i className="tio-label-outlined"></i>
                    </span>
                    Attribute
                  </h5>
                </div>
                <div className="p-4">
                  <div className="gap-4">
                    <div className="col-span-1 w-full">
                      <div className="mb-4">
                        <Autocomplete
                          multiple
                          disablePortal
                          id="combo-box-demo"
                          name="attribute"
                          sx={{ minWidth: { xs: 10, md: 990 } }}
                          options={
                            data4?.data?.length > 0 &&
                            data4?.data?.map((doc) => ({
                              label: doc.name,
                              _id: doc._id,
                            }))
                          }
                          onChange={handleAutocompleteChange("variants")}
                          y
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              // sx={{ minWidth:  {xs: 10, md: 1200} }}
                              className="w-full"
                              label="Attribute"
                            />
                          )}
                          required
                        />
                      </div>

                      {autoComplete.variants.length > 0 ? (


                        <div className="flex flex-col gap-2 p-2 w-full">
                          <div className="flex justify-between items-center">



                              {autoComplete.variants.map((item, index) => (
                            <form  >
                                <div key={index}>

                                
                              <h1>{item.label}</h1>
                              {/* <input onBlur={(e) => attributeTable(e)} className="border rounded p-1" type="text" placeholder="Enter choices value" /> */}
                              <FormControl >
                              
                                <div className={"container"}>
                                  {values.map((item, index) => (
                                    <Chip size="small" onDelete={() => handleDelete(item, index)} label={item} />
                                    
                                  ))}
                                </div>
                                <Input
                                  value={currValue}
                                  onChange={handleChange}
                                  onBlur={handleKeyUp}
                                  onSubmit={handleKeyUp}
                                  className="w-60"
                                />
                              </FormControl>
                            </div>
                            </form>
                              ))}
                          </div>
                          {
                            values.length >= 0 ? (
                              <div className="w-full py-2 px-2 h-fit">
                                <table className="w-full">
                                  <thead className="w-full bg-teal-100 h-11 text-[1.8vh]">
                                    <tr>
                                      <th className="text-center">
                                        <span>Variant</span>
                                      </th>
                                      <th className="text-center">
                                        <span>Variant Price</span>
                                      </th>
                                      <th className="text-center">
                                        <span>Stock</span>
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody className="">
                                    {values.map((item, index) => (
                                      <tr key={index} className="">
                                        <td className="w-20 text-center py-5">
                                          <label htmlFor="">{item}</label>
                                        </td>
                                        <td className="w-56 px-3">
                                          <input className="w-full border h-11 rounded px-3" type="text" />
                                        </td>
                                        <td className="w-56 px-3">
                                          <input className="w-full border h-11 rounded px-3" type="text" />
                                        </td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            ) : (<h1>value is greater than 1</h1>)
                          }
                        </div>


                        //  <div className="flex flex-col gap-2 p-2">
                        //   <h1>{autoComplete.variants[0].label}</h1>
                        //   <input className="border rounded p-1" type="text" placeholder="Enter choices value" />
                        // </div>
                      ) : (
                        <h1>Insert a attribute</h1>
                      )}



                      {/* Maximum Purchase Quantity */}
                    </div>
                  </div>
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

              <input type="text" placeholder='Search tags' name="tags" className='p-3 border mt-3 w-full focus:outline-sky-200' />
            </div>
          </div>



          <div className='flex gap-4 justify-end mt-5 px-4 '>
            <button className="btn font-bold" style={{ padding: "6px 30px" }}>Reset</button>
            <button type="submit" className="btn font-bold bg-sky-600 text-white" style={{ padding: "6px 30px" }}>Submit</button>
          </div>
        </div>
      </form>
    </div >

  );
};

export default withAuth(Addnew);
