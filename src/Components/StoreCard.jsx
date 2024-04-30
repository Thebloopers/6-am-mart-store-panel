export const StoreCard = ({ imageUrl, title, orderCount, storeUrl }) => {
    return (
      <a href={storeUrl} className="block">
        <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
          <img
            className="w-full h-24 object-cover object-center"
            src={imageUrl}
            alt={title}
          />
          <div className="p-2">
            <h6 className="text-md font-semibold text-gray-800 mb-1">{title}</h6>
            <p className="text-sm text-gray-600 mb-1">Orders: {orderCount}</p>
          </div>
        </div>
      </a>
    );
  };