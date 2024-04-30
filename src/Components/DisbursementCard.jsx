export const DisbursementCard = ({ imgSrc, name, count, subtxt, link }) => {
    return (
      <div className="col-sm-6 lg:col-3 xl:col-3">
        <a href={link} className="order--card h-full flex items-center justify-center bg-white shadow-md rounded-lg p-6 py-8 transition duration-300 hover:shadow-lg">
          <div className="flex flex-col items-center ">
            <img src={imgSrc} alt="dashboard" className=" h-[60px] object-cover mr-3" />
          <div className={`text-3xl mt-5 font-bold ${count === '0' ? 'text-red-500' : 'text-green-500'}`}>₹ {count}</div>
            <div>
              <h6 className="text-base text-center  text-gray-600">{name}</h6>
              <p className="text-sm text-gray-600">{subtxt}</p>
            </div>
          </div>
        </a>
      </div>
    );
  };