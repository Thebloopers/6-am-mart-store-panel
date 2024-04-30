import { Button } from "@mui/material";
import withAuth from "../HOC/withAuth";
const EmployeAddnew = () => {
  return (
    <div>
    <h1 className="page-header-title capitalize m-0 flex text-2xl gap-3 font-extrabold mb-5">
      <span className="page-header-icon">
        <img
          src="https://6ammart-admin.6amtech.com/public/assets/admin/img/order.png"
          className="w-26"
          alt=""
        />
      </span>
      <span>Add New Addon</span>
    </h1>
    <div className=" w-[90vw]  md:max-w-full  mx-auto p-4 bg-white rounded-lg shadow-md">
      <input
        type="hidden"
        name="_token"
        value="RWqTs6Cr6TiVURDMTlSMD5rTaCpqSC3ljKhdkwZH"
        autoComplete="off"
      />

      <div className="md:flex w-full justify-between  gap-4">
        <div className="w-full">
          <label className="form-control w-full max-w-xl ">
            <div className="label ">
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

          <label className="form-control w-full max-w-xl ">
            <div className="label my-2">
              <span className="label-text ">Banner Title</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xl"
            />
          </label>
          <label className="form-control w-full max-w-xl ">
            <div className="label my-2">
              <span className="label-text ">Banner Title</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xl"
            />
          </label>
        </div>
        <div className="w-full md:mt-0 mt-5">
          <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-96 border-2 border-gray-300 border-[1px] shadow-md rounded-lg cursor-pointer">
            <div className="flex flex-col items-center    pb-6">
              <h5 className="-mt-3">Employee Image <span className="text-red-500">Ratio (1:1)</span></h5>
              <img className="h-[20vh] object-cover mt-4" src="https://6ammart-admin.6amtech.com/public/assets/admin/img/160x160/img1.jpg" alt />


              <p className="text-sm mt-7 text-start text-gray-500 dark:text-gray-400">
                Employee Image Size Max 2 MB
              </p>
              <input type="file" name="" className="file:border-none file:text-sm file:bg-transparent py-2 mt-3 border-[1px] border-gray-300 pl-3 w-[36vw]" />
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>

        </div>
      </div>

      <div className="container mx-auto  px-1 py-8">
        <div className="bg-white shadow-md border-[1px] border-gray-200 rounded-lg">
          <div className="px-6 py-4">
            <div className="">

            <h2 className="text-lg font-semibold text-gray-800 mr-4">
              Search Data
            </h2>
            </div>
            <hr />
            
            <div className="md:flex items-center justify-between mb-4">
              <div>



                <div className="relative md:flex items-center justify-between mt-2 md:w-auto">
                  <label className="form-control w-full md:w-[24vw] max-w-xl ">
                    <div className="label ">
                      <span className="label-text ">Email</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Ex.ex@gmail.com"
                      className="input input-bordered  max-w-xl"
                    />
                  </label>

                  <label className="form-control md:ml-4 w-full md:w-[24vw] max-w-xl ">
                    <div className="label ">
                      <span className="label-text ">Password</span>
                    </div>
                    <input
                      type="password"
                      placeholder="8+ charecters required"
                      className="input input-bordered  max-w-xl"
                    />
                  </label>
                  <label className="form-control md:ml-4 w-full md:w-[24vw] max-w-xl ">
                    <div className="label ">
                      <span className="label-text ">Confirm Password</span>
                    </div>
                    <input
                      type="text"
                      placeholder="8+ charecters required "
                      className="input input-bordered  max-w-xl"
                    />
                  </label>

                </div>
              </div>


            </div>

          </div>

        </div>

      </div>
      {/* Form Actions */}
      <div className="flex justify-end gap-5 mt-1">
        <Button variant="contained">Reset</Button>
        <Button variant="contained">Submit</Button>
      </div>
    </div>
  </div>
  );
};
export default withAuth(EmployeAddnew);
