import { Button, Card, } from '@mui/material';
import React, { useState } from 'react';
import ToggleButton from '../Components/ToggleButton'
import CouponListTable from '../Components/CouponListTable';
import PushNotificationTable from '../Components/PushNotificationTable';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from "@mui/icons-material/Search";
import withAuth from '../HOC/withAuth';

const notifications = [
  {
    id: 1,
    title: 'Hello customer',
    description: 'We just spotted your favorite festive products at a great deal.',
    image: null,
    zone: 'All',
    target: 'Customer',
    status:true,
  },
  // Add more notification objects here
];

function PushNotification() {
  const [notificationTitle, setNotificationTitle] = useState('');
  const [zone, setZone] = useState('all');
  const [tergat, setTergat] = useState('customer');
  const [description, setDescription] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'notification_title') setNotificationTitle(value);
    else if (name === 'zone') setZone(value);
    else if (name === 'tergat') setTergat(value);
    else if (name === 'description') setDescription(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted!');
  };

  return (
    <>
     <div className="page-header bg-white rounded-lg p-6 mb-6">
      <h1 className="page-header-title flex items-center">
        <span className="page-header-icon mr-3">
          <img src="https://6ammart-admin.6amtech.com/public/assets/admin/img/notification.png" className="w-26" alt="" />
        </span>
        <span className="text-xl font-bold">Notification</span>
      </h1>
    </div>
  



    <Card className="bg-white rounded-lg p-6">
    <form action="https://6ammart-admin.6amtech.com/admin/notification/store" method="post" encType="multipart/form-data" id="notification">
      <input type="hidden" name="_token" value="F2RW86XrrL4o4tubR354dofyJRPGNfmdzOj9fgGX" autoComplete="off" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
           <div>
                <label className="input-label">Title</label>
                <input
                  type="text"
                  name="notification_title"
                  value={notificationTitle}
                  onChange={handleInputChange}
                  className="form-input w-full rounded-lg border-gray-300 focus:border-blue-500 py-2 border px-2"
                  placeholder="Enter notification title"
                  maxLength="191"
                  required
                />
              </div>
              <div>
                <label className="input-label">Zone</label>
                <select
                  name="zone"
                  value={zone}
                  onChange={handleInputChange}
                  className="form-select w-full rounded-lg border-gray-300 focus:border-blue-500 py-2 border px-2"
                >
                  <option value="all">All</option>
                  <option value="1">Main Demo Zone</option>
                  <option value="2">سوبر ماركت</option>
                </select>
              </div>
              <div>
                <label className="input-label">Send to</label>
                <select
                  name="tergat"
                  value={tergat}
                  onChange={handleInputChange}
                  className="form-select w-full rounded-lg border-gray-300 focus:border-blue-500 py-2 border px-2"
                  required
                >
                  <option value="customer">Customer</option>
                  <option value="deliveryman">Deliveryman</option>
                  <option value="store">Store</option>
                </select>
              </div>
              <div>
                <label className="input-label">Description</label>
                <textarea
                  name="description"
                  value={description}
                  onChange={handleInputChange}
                  className="form-textarea w-full rounded-lg border-gray-300 focus:border-blue-500 py-2 border px-2"
                  maxLength="1000"
                  required
                  rows="4"
                  placeholder="Enter notification description"
                ></textarea>
              </div>
        </div>
        <div className="flex flex-col justify-between">
        <div className="mt-4">
              <label className="block text-center mb-2">
                Image
                <small className="text-red-500 ml-1">*</small>
                <small className="text-sm text-gray-600"> ( Ratio 900x300 )</small>
              </label>
              <div className="flex justify-center">
                <img
                  className="h-52 w-auto object-cover rounded-lg border border-gray-300"
                  id="viewer"
                  src="https://6ammart-admin.6amtech.com/public/assets/admin/img/900x400/img1.jpg"
                  alt="image"
                />
              </div>
              <div className="mt-5">
                <input
                  type="file"
                  name="image"
                  id="customFileEg1"
                  className="form-input w-full  border-gray-300  border cursor-pointer bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md transition duration-300"
                  accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*"
                />
              </div>
            </div>
          <div className="flex justify-end mt-5">
            <button type="reset" id="reset_btn" className="btn btn--reset bg-gray-200 text-gray-700 hover:bg-gray-300 px-4 py-2 rounded-md mr-2">Reset</button>
            <button type="submit" id="submit" className="bg-[#24BAC3] text-white px-4 py-2 rounded-md">Send notification</button>
          </div>
        </div>
      </div>
    </form>
  </Card>

  <div className="col-span-12 mt-8">
      <div className="overflow-hidden shadow-md rounded-lg">
        <div className="overflow-x-auto">
          {/* <table className="table-auto w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 border-b border-gray-200 font-medium">SL</th>
                <th className="py-2 px-4 border-b border-gray-200 font-medium">Title</th>
                <th className="py-2 px-4 border-b border-gray-200 font-medium">Description</th>
                <th className="py-2 px-4 border-b border-gray-200 font-medium">Image</th>
                <th className="py-2 px-4 border-b border-gray-200 font-medium">Zone</th>
                <th className="py-2 px-4 border-b border-gray-200 font-medium">Target</th>
                <th className="py-2 px-4 border-b border-gray-200 font-medium text-center">Status</th>
                <th className="py-2 px-4 border-b border-gray-200 font-medium text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {notifications.map(notification => (
                <tr key={notification.id} className="bg-white">
                  <td className="px-6 py-4 whitespace-nowrap">{notification.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span title={notification.title} className="block text-sm font-medium text-gray-900">
                      {notification.title}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap" title={notification.description}>
                    {notification.description}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {notification.image ? (
                      <img src={notification.image} alt="Notification" className="w-10 h-10 rounded-full" />
                    ) : (
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-200 text-yellow-800">
                        No Image
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{notification.zone}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{notification.target}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <input type="checkbox" checked={notification.status} className="form-checkbox h-5 w-5 text-primary cursor-pointer mx-auto" readOnly />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <Link href={`https://6ammart-admin.6amtech.com/admin/notification/edit/${notification.id}`} className="text-indigo-600 hover:text-indigo-900 mr-2" title="Edit notification">
                     <EditIcon/>
                    </Link>
                    <Link href="javascript:;" className="text-red-600 hover:text-red-900" data-id={`notification-${notification.id}`} data-message="Want to delete this notification ?" title="Delete notification">
                    <DeleteIcon/>
                    </Link>
                    <form action={`https://6ammart-admin.6amtech.com/admin/notification/delete/${notification.id}`} method="post" className="hidden" id={`notification-${notification.id}`}>
                      <input type="hidden" name="_token" value="F2RW86XrrL4o4tubR354dofyJRPGNfmdzOj9fgGX" autoComplete="off" />
                      <input type="hidden" name="_method" value="delete" />
                    </form>
                  </td>
                </tr>
              ))}
            </tbody>
          </table> */}
          <div>
          <div className="p-2">
        <div className="flex items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800 mr-4">
            Notification List
          </h2>
          <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
            2
          </span>
          <form className="ml-auto flex items-center">
            <input
              id="datatableSearch"
              type="search"
              name="search"
              className="form-input border border-gray-300 rounded-l-lg px-4 py-2"
              placeholder="Search Notification"
              aria-label="Search here"
            />
            <button
              type="submit"
              className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold px-4 py-2 rounded-r-lg "
            >
              <SearchIcon />
            </button>
          </form>
        </div>
      </div>
     <PushNotificationTable/>
          </div>
        </div>
        {/* <div className="bg-gray-100 py-3 px-6 border-t border-gray-200">
          <div className="text-gray-600" id="columnSearchDatatable_info" role="status" aria-live="polite">Showing 1 to {notifications.length} of {notifications.length} entries</div>
        </div> */}
      </div>
    </div>
  </>
  );
}

export default withAuth(PushNotification);
