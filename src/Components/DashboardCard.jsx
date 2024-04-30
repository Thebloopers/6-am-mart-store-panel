 export const DashboardCard = ({ imgSrc, name, count, subtxt, link }) => {
    return (
      <div className="col-sm-6 lg:col-4 xl:col-3">
        <a href={link} className="order--card h-full flex items-center justify-between bg-white shadow-md rounded-lg p-4 transition duration-300 hover:shadow-lg">
          <div className="flex items-center">
            <img src={imgSrc} alt="dashboard" className="w-8 h-[150px] mr-3" />
            <div>
              <h6 className="text-base font-semibold text-gray-800">{name}</h6>
              <p className="text-sm text-gray-600">{subtxt}</p>
            </div>
          </div>
          <div className={`text-lg font-bold ${count === '0' ? 'text-red-500' : 'text-green-500'}`}>{count}</div>
        </a>
      </div>
    );
  };