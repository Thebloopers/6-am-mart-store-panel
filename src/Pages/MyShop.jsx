import React from 'react'
import { IoStorefrontOutline } from 'react-icons/io5'
import { HiOutlinePencil, HiPencil } from "react-icons/hi2";
import { BsFillGrid1X2Fill } from 'react-icons/bs';
import { Switch } from '@mui/material';
import withAuth from '../HOC/withAuth';


const MyShop = () => {
    return (
        <div className='h-full w-full'>
            <div className='h-full w-full flex  flex-col gap-5'>
                <div className='flex flex-col gap-3  h-fit shadow py-3 px-3 rounded-lg'>
                    <div className='flex gap-2 items-center justify-between font-semibold'>
                        <div className='flex gap-2 items-center text-[2.8vh] font-semibold'>
                            <IoStorefrontOutline />
                            <h1>Store Setup</h1>
                        </div>

                        <button className='px-8 py-2 rounded-md bg-cyan-500 text-white text-[2vh] flex items-center gap-1'><HiPencil /> Edit Store Information</button>
                    </div>
                    <div className='w-full h-fit  rounded-xl relative'>
                        <div className='overflow-hidden h-[45vh] rounded-xl'>
                            <img className='' src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>
                        <div className='bg-white rounded-md  shadow-lg md:flex items-center py-10 px-10 pr-28 absolute top-[50%] -left-[1%] md:left-[3%] text-[2vh] gap-14'>
                            <div className='h-full rounded-full md:overflow-hidden'>
                                <img className='w-[140px] h-[140px]' src="https://images.unsplash.com/photo-1615915468538-0fbd857888ca?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            </div>
                            <div className='flex flex-col gap-2 mt-5 md:mt-0'>
                                <h1>Name: Something</h1>
                                <h1>Phone : +1**********</h1>
                                <h1>Address : House: 00, Road: 00, Test City</h1>
                                <h1>Admin commission : 10%</h1>
                                <h1>Vat/tax : 5%</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col  mt-56 md:mt-10 shadow-md rounded-lg'>
                    <div className='flex justify-between items-center px-5 py-2'>
                        <div className='w-full'>
                            <div className='flex gap-1 items-center'>
                                <BsFillGrid1X2Fill />
                                <h1>Announcement</h1>
                            </div>
                        </div>
                        <div>
                            <Switch />
                        </div>
                    </div>
                    <hr />
                    <div className='flex flex-col justify-between items-center px-5 py-2 mt-5'>
                        <textarea className='bg-white border-[1px] resize-none w-full h-32 rounded p-3 text-[2vh]' placeholder='Ex: ABC Company' name="" id="" cols="30" rows="10"></textarea>
                        <button className='px-8 py-2 rounded-md bg-cyan-500 text-white text-[2vh] mt-5 self-end'>Publish</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default withAuth(MyShop)
