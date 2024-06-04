import React from "react";

const OrderInvoiceGenrate = () => {
  const printDiv = (divName) => {
    const printContents = document.getElementById(divName).innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  };
  return (
    <div className="content container mx-auto py-8 font-bold">
      <div className="flex justify-center items-center mb-6">
        <div className="space-x-2">
          <button
            className="btn bg-[#006161] text-white hover:bg-[#007981]"
            onClick={() => printDiv("printableArea")}
          >
            Print Invoice
          </button>
          <button className=" btn  btn-error text-white ">Back</button>
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
              <h2 className="text-lg font-semibold">Cash Receipt</h2>
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
            <h3 className="text-lg font-semibold mb-2">Customer Details</h3>
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
                <dt className="col-6 ">Subtotal (TAX Included):</dt>
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
              <span className="block">2021-2023 BoostUp Digital.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderInvoiceGenrate;
