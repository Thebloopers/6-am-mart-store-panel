import React from 'react'
import { FaWallet } from 'react-icons/fa'
import storemoney from '../assets/StoreWallet/image_total89.png'
import storebal from '../assets/StoreWallet/image_w_balance.png'
import OrderTable from '../Components/OrderTable'
import withAuth from '../HOC/withAuth'

const MyWallet = () => {
    return (
        <div className='h-full w-auto'>
            <div className='flex flex-col gap-3'>
                <div className='flex flex-col gap-5'>
                    <div className='flex gap-3 items-center'>
                        <FaWallet />
                        <h1>Store Wallet</h1>
                    </div>
                    <div className='flex md:flex-row flex-col items-center md:items-start gap-5'>
                        <div className='flex gap-5 shadow-lg px-5 py-7 md:w-[19vw] w-full justify-between'>
                            <div className='flex flex-col'>
                                <h1 className='font-bold text-[3vh]'>&#8377; 50,000</h1>
                                <h1 className='text-[2vh] font-semibold'>Cash in hand</h1>
                            </div>
                            <div className=''>
                                <img src={storemoney} alt="" />
                            </div>
                        </div>
                        <div className='flex gap-5 shadow-lg px-5 py-7 md:w-[19vw] w-full justify-between'>
                            <div className='flex flex-col'>
                                <h1 className='font-bold text-[3vh]'>&#8377; 50,000</h1>
                                <h1 className='text-[2vh] font-semibold'>Withdraw able balance</h1>
                            </div>
                            <div className=''>
                                <img src={storebal} alt="" />
                            </div>
                        </div>
                        <div className='flex gap-5 shadow-lg md:flex-row flex-col px-6 py-7 md:w-[38vw] w-full justify-between'>
                            <div className='flex flex-col'>
                                <h1 className='font-bold text-[3vh]'>&#8377; 50,000</h1>
                                <h1 className='text-[2vh] font-semibold'>Balance</h1>
                            </div>
                            <div className='gap-3 flex md:flex-row flex-col pr-6 font-semibold'>
                                <button className='px-4 py-2 rounded-md bg-cyan-500 text-white md:text-[2vh] mt-5 md:self-end'>Adjust With Wallet</button>
                                <button className='px-4 py-2 rounded-md bg-cyan-500 text-white md:text-[2vh] mt-5 md:self-end'>Pay Now</button>
                            </div>
                        </div>
                    </div>
                    <div className='flex md:flex-row flex-col items-center gap-5'>
                        <div className='flex gap-5 px-5 py-7 w-full justify-between rounded-lg bg-red-100'>
                            <div className='flex flex-col'>
                                <h1 className='font-bold text-[3vh]'>&#8377; 0</h1>
                                <h1 className='text-[2vh] font-semibold'>Pending withdraw</h1>
                            </div>
                            <div className=''>
                                <img src={storemoney} alt="" />
                            </div>
                        </div>
                        <div className='flex gap-5 px-5 py-7 w-full justify-between rounded-lg bg-green-100'>
                            <div className='flex flex-col'>
                                <h1 className='font-bold text-[3vh]'>&#8377; 0</h1>
                                <h1 className='text-[2vh] font-semibold'>Total withdraw</h1>
                            </div>
                            <div className=''>
                                <img src={storemoney} alt="" />
                            </div>
                        </div>
                        <div className='flex gap-5 px-5 py-7 w-full justify-between rounded-lg bg-sky-100'>
                            <div className='flex flex-col'>
                                <h1 className='font-bold text-[3vh]'>&#8377; 20,000</h1>
                                <h1 className='text-[2vh] font-semibold'>Total earning</h1>
                            </div>
                            <div className=''>
                                <img src={storemoney} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <OrderTable />
            </div>
        </div>
    )
}

export default withAuth(MyWallet)