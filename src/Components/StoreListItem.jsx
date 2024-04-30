export const StoreListItem = ({ imageUrl, storeName, storeUrl, rating }) => {
    return (
      <li className="flex items-center justify-between py-3">
        <a href={storeUrl} className="flex items-center space-x-4">
          <img
            className="w-16 h-16 object-cover rounded-lg"
            src={imageUrl}
            alt="Store"
            title={storeName}
          />
          <span className="text-gray-800 font-semibold">{storeName}</span>
        </a>
        <div className="flex items-center space-x-2">
          <span className="text-primary font-semibold">{rating}</span>
          <i className="text-primary tio-star"></i>
        </div>
      </li>
    );
  };