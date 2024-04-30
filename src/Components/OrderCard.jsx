 export const OrderCard = ({ iconSrc, title, count, link }) => {
    return (
      <div className="w-full sm:w-1/2 lg:w-1/4 p-2">
        <a href={link} className="order--card h-full flex items-center justify-between bg-[#F8F9FB] shadow-md rounded-lg p-4 transition duration-300 hover:shadow-lg">
          <div className="flex items-center">
            <img src={iconSrc} alt="dashboard" className="w-8 h-8 mr-3" />
            <div>
              <h6 className="text-base font-semibold text-gray-800">{title}</h6>
              <p className="text-sm text-gray-600">Subtitle</p>
            </div>
          </div>
          <div className={`text-lg font-bold ${count === '0' ? 'text-red-500' : 'text-green-500'}`}>{count}</div>
        </a>
      </div>
    );
  };