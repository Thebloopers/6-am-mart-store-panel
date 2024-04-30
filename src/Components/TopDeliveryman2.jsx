import { Link } from 'react-router-dom'

const TopDeliveryman2 = ({ imageUrl, name, phoneNumber, orders, link }) => {
  return (
<Link href={link} className="flex bg-[#F8F9FB] rounded-lg shadow-md hover:shadow-lg overflow-hidden p-2">
    <div className="relative overflow-hidden  w-20 h-20">
      <img src={imageUrl} alt={name} className="object-cover w-full h-full onerror-image" />
    </div>
    <div className="p-4 flex justify-between  flex-grow">
      <div>
        <h6 className="text-md font-semibold mb-2">{name}</h6>
        <span className="text-gray-600">{phoneNumber}</span>
      </div>
      <div className="flex  justify-between ">
        {/* <span className="text-[13px] text-[#24BAC3]">03:32pm</span> */}
      </div>
    </div>
  </Link>  )
}

export default TopDeliveryman2