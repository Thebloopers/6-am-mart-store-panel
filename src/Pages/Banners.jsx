import React, { useState } from "react";
import TabsComponent from "../Components/TabsComponent";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import withAuth from "../HOC/withAuth";
function Banners() {
  const [banners, setBanners] = useState([
    {
      id: 1,
      title: "Offer Banner",
      img: "https://6ammart-admin.6amtech.com/storage/app/public/banner/2022-03-23-623ae8cc79804.png",
      link: "",
      Featured: true,
      status: true,
    },
    {
      id: 2,
      title: "Offer Banner",
      img: "https://6ammart-admin.6amtech.com/storage/app/public/banner/2022-03-23-623ae8cc79804.png",
      Featured: false,
      status: true,
    },
    {
      id: 3,
      title: "Offer Banner",
      img: "https://6ammart-admin.6amtech.com/storage/app/public/banner/2022-03-23-623ae8cc79804.png",
      featured: true,
      status: false,
    },
  ]);
  return (
    <>
      <div className="py-6 px-4 w-[350px] md:w-auto">
        <h1 className="page-header-title flex items-center">
          <span className="page-header-icon mr-2">
            <img
              src="https://6ammart-admin.6amtech.com/public/assets/admin/img/banner.png"
              className="w-26"
              alt=""
            />
          </span>
          <span className="text-lg font-bold">Banner Setup</span>
        </h1>
      </div>

      <div className="max-w-full mx-auto p-6 bg-white rounded-lg shadow-md">
        <input
          type="hidden"
          name="_token"
          value="RWqTs6Cr6TiVURDMTlSMD5rTaCpqSC3ljKhdkwZH"
          autoComplete="off"
        />

        <div className="flex w-full justify-between flex-col md:flex-row  gap-4">
          <div className="w-full">
            <label className="form-control w-full max-w-xl my-2">
              <div className="label my-2">
                <span className="label-text ">Banner Title</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xl"
              />
            </label>

            <label className="form-control w-full ">
              <div className="label my-2">
                <span className="label-text">Redirection URL / Link</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xl"
              />
            </label>
          </div>
          <div className="w-full">
            <label
              for="dropzone-file"
              class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer"
            >
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span class="font-semibold">Click to upload</span> or drag and
                  drop
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400 px-3">
                  Banner Image Ratio 3:1 Image format : jpg, png, jpeg | Maximum
                  Size: 2 MB
                </p>
              </div>
              <input id="dropzone-file" type="file" class="hidden" />
            </label>
          </div>
        </div>

        {/* <TabsComponent /> */}

        {/* <div className="w-full md:w-2/3 lg:w-1/2">
            <div className="rounded-lg">
              <label
                htmlFor="zone"
                className="block text-sm font-medium text-gray-700 mb-4"
              >
                Zone
              </label>
              <div className="relative">
                <select
                  name="zone_id"
                  id="zone"
                  className="form-select mt-1 block w-full rounded-md border-gray-300 py-4 border"
                  data-select2-id="zone"
                >
                  <option disabled selected>
                    ---Select---
                  </option>
                  <option value="1">Main Demo Zone</option>
                  <option value="2">سوبر ماركت</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
              </div>
            </div>
          </div> */}

        {/* Banner Type Selection */}
        {/* <div className="w-full md:w-2/3 lg:w-1/2">
            <div className="rounded-lg ">
              <div className="mb-2">
                <label
                  htmlFor="banner_type"
                  className="block text-sm font-medium text-gray-700"
                >
                  Banner type
                </label>
                <select
                  name="banner_type"
                  id="banner_type"
                  className="form-select mt-1 block w-full py-4 border rounded-md border-gray-300 "
                  data-fdprocessedid="ticlq"
                >
                  <option value="store_wise">Store wise</option>
                  <option value="item_wise">Item wise</option>
                  <option value="default">Default</option>
                </select>
              </div>
            </div>
          </div> */}
        {/* <div className="w-full md:w-2/3 lg:w-1/2">
            <div className="rounded-lg">
              <div className="mb-2">
                <label
                  htmlFor="banner_type"
                  className="block text-sm font-medium text-gray-700"
                >
                  Banner type
                </label>
                <select
                  name="banner_type"
                  id="banner_type"
                  className="form-select mt-1 block w-full py-4 border rounded-md border-gray-300 "
                  data-fdprocessedid="ticlq"
                >
                  <option value="store_wise">Store wise</option>
                  <option value="item_wise">Item wise</option>
                  <option value="default">Default</option>
                </select>
              </div>
            </div>
          </div> */}

        {/* Item Selection */}
        {/* <div className="item-wise hidden">
            <label className="input-label" htmlFor="choice_item">
              Select item
            </label>
            <select name="item_id" id="choice_item" className="form-control">
              <option value="0" disabled selected>
                ---Select---
              </option>
           
            </select>
          </div> */}

        {/* Default Link Input */}
        {/* <div className="default hidden">
            <label className="input-label" htmlFor="default_link">
              Default link(Optional)
            </label>
            <input
              type="text"
              name="default_link"
              className="form-control"
              placeholder="Default link"
            />
          </div> */}

        {/* Banner Image */}

        {/* <div class="flex items-center justify-center w-full">
            <label
              for="dropzone-file"
              class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer"
            >
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span class="font-semibold">Click to upload</span> or drag and
                  drop
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input id="dropzone-file" type="file" class="hidden" />
            </label>
          </div> */}

        {/* Form Actions */}
        <div className="flex justify-end gap-5 mt-5">
          <Button >Reset</Button>
          <Button variant="contained">Submit</Button>
        </div>
      </div>

      <div className="col-span-12 lg:col-span-12 mb-6 lg:mb-4 mt-8 rounded-md shadow-lg">
        <div className="card shadow-lg p-2">
          <div className="card-header py-3 border-b-0 flex justify-between items-center">
            <h5 className="text-lg font-semibold text-gray-800">
              Banner List
              <span className="badge badge-primary ml-2">{banners.length}</span>
            </h5>
            <form className="search-form flex items-center">
              <input
                id="datatableSearch"
                type="search"
                name="search"
                className="form-control rounded-l-lg py-2 px-4 border"
                placeholder="Search by title"
                aria-label="Search here"
              />
              <button type="submit" className="border py-2 rounded-r-lg px-4">
                <SearchIcon />
              </button>
            </form>
          </div>
          <div className="overflow-x-auto max-w-[350px] md:max-w-full">
            <table className="table-auto w-full">
              <thead className="bg-gray-200 text-gray-700">
                <tr>
                  <th className="px-4 py-2 text-left">SL</th>
                  <th className="px-4 py-2 text-left">Title</th>
                  <th className=" py-2 text-left px-16 md:px-4">Type</th>
                  <th className="px-4 py-2 text-center">Redirection Link</th>
                  <th className="px-4 py-2 text-center">Status</th>
                  <th className="px-4 py-2 text-center">Action</th>
                </tr>
              </thead>
              <tbody id="set-rows">
                {banners.map((banner, index) => (
                  <tr
                    key={banner.id}
                    className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                  >
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2">
                      <div className="flex items-center md:mr-2">
                        <span className="text-gray-800">{banner.title}</span>
                      </div>
                    </td>
                    <td className="px-16 md:px-4 py-2 mr-5">
                      <img src={banner.img} alt="" className="w-[200px]" />
                    </td>

                    <td className="px-4 py-2 text-center">
                      <input
                        type="checkbox"
                        // checked={banner.featured}
                        className="form-checkbox h-6 w-6 text-primary"
                      />
                    </td>
                    <td className="px-4 py-2 text-center">
                      <input
                        type="radio"
                        name="radio-4"
                        className="radio radio-accent mx-3"
                        checked
                      />
                      <input
                        type="radio"
                        name="radio-4"
                        className="radio radio-accent"
                        checked
                      />
                    </td>
                    <td className="px-4 py-2 text-center">
                      <button className="btn btn-outline btn-success px-2">
                        <EditIcon className="hover:text-white" />
                      </button>

                      <button className="btn btn-outline btn-error ml-2 px-2">
                        <DeleteIcon className="hover:text-white" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default withAuth(Banners);
