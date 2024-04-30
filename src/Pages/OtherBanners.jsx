import React from "react";
import withAuth from "../HOC/withAuth";

function OtherBanners() {
  return (
    <>
      <div className=" py-10">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center">
              <img
                src="https://6ammart-admin.6amtech.com/public/assets/admin/img/3rd-party.png"
                className="mx-auto w-15 mb-4"
                alt="Third Party"
              />
              <h1 className="text-2xl font-bold mb-4">
                Other Promotional Content Setup
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Bottom Section Banner */}
              <div>
                <div className="bg-white rounded-lg shadow p-6">
                  <h2 className="font-semibold mb-4">
                    <span className="flex items-center space-x-1">
                      <img
                        src="https://6ammart-admin.6amtech.com/public/assets/admin/img/other-banner.png"
                        className="h-85"
                        alt=""
                      />
                      <h3 className="form-label block mb-2 my-2">
                        Bottom Section Banner
                      </h3>
                      
                    </span>
          
                  </h2>
                  <h2 className="mb-4">Upload Banner</h2>

                  <div class="flex items-center justify-center w-full">
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
                          <span class="font-semibold">Click to upload</span> or
                          drag and drop
                        </p>
                        <p class="text-xs text-gray-500 dark:text-gray-400">
                          SVG, PNG, JPG or GIF (MAX. 800x400px)
                        </p>
                      </div>
                      <input id="dropzone-file" type="file" class="hidden" />
                    </label>
                  </div>

                  <div className="text-center mb-6">
                    <p className="text-gray-600">Banner Image Ratio 4:1</p>
                    <p className="text-sm text-gray-500">
                      Image format: JPG, PNG, JPEG | Maximum Size: 2 MB
                    </p>
                  </div>

                  <div className="text-center">
                    <button
                      type="button"
                      className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>

              {/* Best Reviewed Section Banner */}
              <div>
                <div className="bg-white rounded-lg shadow p-6">
                  <h2 className="font-semibold mb-4">
                  <span className="flex items-center space-x-1">
                      <img
                        src="https://6ammart-admin.6amtech.com/public/assets/admin/img/other-banner.png"
                        className="h-85"
                        alt=""
                      />
                      <h3 className="form-label block mb-2 my-2">
                      Best Reviewed Section Banner
                      </h3>
                      <div></div>
                    </span>
                  </h2>
                  <h2 className="mb-4">Upload Banner</h2>

                  <div class="flex items-center justify-center w-full">
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
                          <span class="font-semibold">Click to upload</span> or
                          drag and drop
                        </p>
                        <p class="text-xs text-gray-500 dark:text-gray-400">
                          SVG, PNG, JPG or GIF (MAX. 800x400px)
                        </p>
                      </div>
                      <input id="dropzone-file" type="file" class="hidden" />
                    </label>
                  </div>

                  <div className="text-center mb-6">
                    <p className="text-gray-600">
                      Min Size for Better Resolution 235 x 375 px
                    </p>
                    <p className="text-sm text-gray-500">
                      Image format: JPG, PNG, JPEG | Maximum Size: 2 MB
                    </p>
                  </div>

                  <div className="text-center">
                    <button
                      type="button"
                      className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withAuth(OtherBanners);
