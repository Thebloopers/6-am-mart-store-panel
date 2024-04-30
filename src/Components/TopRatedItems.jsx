import React from 'react'
import { Link } from 'react-router-dom';

function TopRatedItems({ imageUrl, productName }) {
    console.log(productName,"333")

  return (
    <Link
    to=""
    className="block p-4 bg-[#F8F9FB] shadow-md rounded-lg hover:shadow-lg transition duration-300 mb-4"
  >
    <div className=" flex items-center">
      <img
        src={imageUrl}
        className="w-16 h-16 object-cover rounded-full"
      
      />
      <span className="ml-4 line-clamp-1 flex-grow text-black" 
      >
       {productName}
      </span>
      <div>
        <span className="text-red-600 text-lg font-bold">
          0 <i class="fa-solid fa-heart"></i>

 
        </span>
      </div>
    </div>
  </Link>
  )
}

export default TopRatedItems
