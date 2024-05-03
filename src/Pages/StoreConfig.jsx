import React, { useState } from 'react'
import storegear from '../assets/StoreConfig/Store_Gear.png'
import { IoStorefrontOutline } from "react-icons/io5";
import { Switch } from '@mui/material';
import { GoGear } from "react-icons/go";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import TimeSchedule from '../Components/TimeSchedule';
import withAuth from '../HOC/withAuth';


const StoreConfig = () => {

    const [selectedImages, setSelectedImages] = useState([])

    const handleFileChange = (event) => {
        const files = event.target.files;
        // Check if any files were selected
        if (files.length === 0) {
            return;
        }
        const imagePreviews = Array.from(files).map((file) =>
            URL.createObjectURL(file)
        );

        setSelectedImages([...selectedImages, imagePreviews]);

        


        
    };

    return (
        <div className='w-[350px] md:w-auto'>
            <div className='flex flex-col gap-3'>
                <div className='flex gap-2 items-center text-[2.8vh] font-semibold'>
                    <img src={storegear} alt="" />
                    <h1>Store Setup</h1>
                </div>
                <div className='flex justify-between items-center w-full py-3 shadow-md rounded-md px-5'>
                    <div className='flex items-center gap-1 font-semibold text-[2.4vh]'>
                        <IoStorefrontOutline />
                        <h1>Store Temporarily Closed Title</h1>
                    </div>
                    <Switch />
                </div>
                <div className='flex flex-col shadow-lg'>
                    <div className='flex items-center px-5 py-5 gap-1 text-[2.2vh] font-semibold'>
                        <GoGear />
                        <h1>Store Settings</h1>
                    </div>
                    <hr />
                    <div className='flex flex-wrap px-5 py-5 text-[1.8vh] justify-around gap-4'>
                        <div className='flex items-center w-full justify-between border-[1px] rounded px-3'>
                            <h1>Scheduled Order</h1>
                            <Switch size='medium' />
                        </div>
                        <div className='flex items-center w-full justify-between border-[1px] rounded px-3'>
                            <h1>Delivery</h1>
                            <Switch size='medium' />
                        </div>
                        <div className='flex items-center w-full justify-between border-[1px] rounded px-3'>
                            <h1>Take Away</h1>
                            <Switch size='medium' />
                        </div>

                    </div>
                </div>
                <div className='flex flex-col shadow-lg'>
                    <div className='flex items-center px-5 py-5 gap-1 text-[2.2vh] font-semibold'>
                        <GoGear />
                        <h1>Basic Settings</h1>
                    </div>
                    <hr />
                    <div className='w-full flex md:flex-row flex-col px-5 py-5'>
                        <div className='flex flex-wrap flex-col  text-[1.8vh] w-full  gap-5'>
                            <div className='flex gap-8 md:flex-row flex-col'>
                                <div className="w-full md:w-1/3">
                                    <label
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        htmlFor="name"
                                    >
                                        Name
                                    </label>
                                    <input
                                        className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="text"
                                        placeholder="Enter your name"
                                        id="name"
                                    ></input>
                                </div>
                                <div className="w-full md:w-1/3">
                                    <label
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        htmlFor="name"
                                    >
                                        Approx Delivery Time
                                    </label>
                                    <div className='flex w-full'>
                                        <input
                                            className="flex h-10 w-full  border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="text"
                                            placeholder='Min: 10'
                                            id="name"
                                        ></input>
                                        <input
                                            className="flex h-10 w-full  border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="text"
                                            placeholder='Max: 20'
                                            id="name"
                                        ></input>
                                        <select className="flex h-10 w-full  border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" name="" id="">
                                            <option value="Minutes">Minutes</option>
                                            <option value="Minutes">Hours</option>
                                            <option value="Minutes">Days</option>
                                        </select>
                                    </div>

                                </div>
                            </div>
                            <div className=''>
                                <div className="w-full md:w-1/3">
                                    <div className='w-full justify-between flex items-center'>
                                        <label
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            htmlFor="name"
                                        >
                                            GST
                                        </label>
                                        <Switch size='medium' />
                                    </div>
                                    <input
                                        className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="text"
                                        id="name"
                                    ></input>
                                </div>
                            </div>
                        </div>
                        <div className='w-fit flex items-end gap-3 text-[2vh]'>
                            <button className='px-8 py-2 rounded-md bg-gray-100'>Reset</button>
                            <button className='px-8 py-2 rounded-md bg-cyan-500 text-white'>Update</button>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col shadow-lg'>
                    <div className='flex items-center px-5 py-5 gap-1 text-[2.2vh] font-semibold'>
                        <IoStorefrontOutline />
                        <h1>Store Meta Data</h1>
                    </div>
                    <hr />
                    <div className='flex md:flex-row flex-col px-5 w-full justify-between gap-5 py-5'>
                        <div className='md:w-1/2 flex flex-col gap-3 py-3 px-5 shadow-md'>
                            <label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                htmlFor="name"
                            >
                                Meta Title
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                type="text"
                                placeholder="Enter your name"
                                id="name"
                            ></input>
                            <label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                htmlFor="name"
                            >
                                Meta Description
                            </label>
                            <textarea
                                className="flex h-24 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                                type="text"

                                id="name"
                            ></textarea>
                        </div>
                        <div className='md:w-1/2 flex flex-col gap-3 py-3 shadow-md px-5'>
                            <div className='flex items-center gap-1 text-[2.2vh] font-semibold'>
                                <BsFillGrid1X2Fill />
                                <h1>Store Meta Data</h1>
                            </div>
                            <hr />
                            <div className="w-full rounded-lg">
                                <h1 className="border-b-2 border-gray-300 p-4">Item Image</h1>
                                <label className="form-control w-full max-w-xl p-3">
                                    <div className="label">
                                        <span className="label-text">Name(EN)</span>
                                    </div>
                                    {selectedImages?.map((image, mapIndex) => (
                                        <div className="flex justify-center items-center">
                                            <img key={mapIndex} src={image} alt={`Selected ${mapIndex}`} className="w-[100px] h-[150px] overflow-hidden object-cover" />
                                        </div>
                                    ))}
                                    <div className="md:w-[10vw] relative  rounded-lg border-dotted border-gray-200 border-2">
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
                                                onChange={handleFileChange}
                                                multiple
                                            />
                                        </div>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='self-end py-3 px-5'>
                    <button className='px-6 py-2 rounded-md bg-cyan-500 text-white text-[2vh]'>Save Changes</button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col shadow-lg'>
                    <div className='flex items-center px-5 py-5 gap-1 text-[2.2vh] font-semibold'>
                        <GoGear />
                        <h1>Daily Time Schedule</h1>
                    </div>
                    <hr />
                    {/* <TimeSchedule /> */}
                    </div>
        </div>
    )
}

export default withAuth(StoreConfig)