import React from 'react'
import gear from '../assets/StoreConfig/Store_Gear.png'
import { IoMdSearch } from 'react-icons/io'
import OrderTable from '../Components/OrderTable'
import withAuth from '../HOC/withAuth'


const Disbursement = () => {
    return (
        <div className='h-full w-full'>
            <div className='flex flex-col gap-3'>
                <div className='flex flex-col gap-5'>
                    <div className='flex gap-3 items-center'>
                        <img src={gear} alt="" />
                        <h1>Disbursement Method Setup</h1>
                    </div>
                </div >
                <div className='flex flex-col shadow-lg'>
                    <div className='flex items-center md:flex-row flex-col justify-between px-5 py-5 gap-5 text-[2.2vh] font-semibold'>
                        <div>
                        <h1>Disbursement Methods</h1>
                        </div>
                        <div className='flex md:flex-row flex-col gap-5'>
                            <div className='flex items-center'>
                            <input placeholder='Ex: Search by name' className='bg-white border-[1px] h-8 font-normal p-3' type="text" />
                            <button className='p-2 h-8 bg-gray-400'><IoMdSearch fill='white' /></button>
                            </div>
                            <button className='px-6 py-1 rounded text-[2vh] text-cyan-500 border-cyan-500 border-[1px] transition-all duration-300 ease-in-out hover:bg-cyan-500 hover:text-white'>Add New Method</button>
                        </div>
                    </div>
                    <hr />
                    <OrderTable />
                </div >
            </div >
        </div>
    )
}

export default withAuth(Disbursement)