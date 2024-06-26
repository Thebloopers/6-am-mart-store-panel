import React, { useState } from "react";
import { MdCategory } from "react-icons/md";
import { useQuery } from "react-query";
import { getAllCategories } from "../helpers/categories";
import withAuth from "../HOC/withAuth";
import { useCookies } from "react-cookie";

const Category = () => {


  const [cookies, setCookie] = useCookies(["store"]);

  const { isError, isSuccess, data, refetch } = useQuery(['categories', { cookies }], () => getAllCategories(cookies))

  
  // const CategoryData = [





  //   {
  //     sl: 1,
  //     categoryId: 85,
  //     companyName: "Varieties",
  //   },
  //   {
  //     sl: 2,
  //     categoryId: 84,
  //     companyName: "Thai",
  //   },
  //   {
  //     sl: 3,
  //     categoryId: 83,
  //     companyName: "Snacks",
  //   },
  //   {
  //     sl: 4,
  //     categoryId: 82,
  //     companyName: "Pizza",
  //   },
  //   {
  //     sl: 5,
  //     categoryId: 81,
  //     companyName: "Pasta",
  //   },
  //   {
  //     sl: 6,
  //     categoryId: 80,
  //     companyName: "Mexican Food",
  //   },
  //   {
  //     sl: 7,
  //     categoryId: 79,
  //     companyName: "Noodles",
  //   },
  //   {
  //     sl: 8,
  //     categoryId: 78,
  //     companyName: "Indian",
  //   },
  //   {
  //     sl: 9,
  //     categoryId: 77,
  //     companyName: "Kabab & More",
  //   },
  //   {
  //     sl: 10,
  //     categoryId: 76,
  //     companyName: "Fast Food",
  //   },
  //   {
  //     sl: 11,
  //     categoryId: 75,
  //     companyName: "Chinese",
  //   },
  //   {
  //     sl: 12,
  //     categoryId: 74,
  //     companyName: "Coffee & Drinks",
  //   },
  //   {
  //     sl: 13,
  //     categoryId: 76,
  //     companyName: "Cake",
  //   },
  //   {
  //     sl: 14,
  //     categoryId: 72,
  //     companyName: "Asian",
  //   },
  // ];



  const [filteredData, setFilteredData] = useState([]);
  // console.log(data)

  const [csvData, setCsvData] = useState('');

  const exportToCsv = () => {
    let csvContent = 'data:text/csv;charset=utf-8,';

    // Header row
    csvContent += 'Index, Category Id, Category Name\n';

    // Add filteredData or data rows
    const dataArray = filteredData && filteredData.length > 0 ? filteredData : data;

    dataArray.forEach((item, index) => {
      csvContent += `${index + 1}, ${item.id}, ${item.name}\n`;
    });

    setCsvData(csvContent);
    handleDownload();
  };
  // {data?.mainCategory?.name}
  // {data?.name}

  // {data?.id}


  const handleDownload = () => {
    const encodedUri = encodeURI(csvData);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'table_data.csv');
    document.body.appendChild(link);
    link.click();
  };




  return (
    <div className="w-auto p-2 pt-4 md:pl-5 md:px-4 ">
      <div className="flex items-center">
        <div className="p-2 text-xl">
          <MdCategory />
        </div>
        <div>
          <h1 className="text-xl font-bold">Category List</h1>
        </div>
        <p className="ml-3 py-1 px-2 rounded bg-gray-200 text-sm">{data?.category?.length}</p>
      </div>
      <div className="p-1 md:p-5 rounded border mt-5 py-5 shadow">
        <div className="category flex gap-4 justify-end flex-wrap md:flex-nowrap px-4 ">
          <label className="input border border-gray-200 flex items-center gap-2 focus:outline-none ">
            <input
              type="text"
              className="grow"
              placeholder="Search Categories"
              onChange={(e) => setFilteredData(data1?.category?.filter(doc => doc.name.includes(e.target.value)))}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
          <select onChange={() => exportToCsv()} className="select w-f max-w-xs border border-sky-400 text-sky-400 focus:outline-sky-100 focus:border-none">
            <option >Export</option>
            <option>Excel</option>
            <option>.CSV</option>
          </select>
        </div>
        <div className="mt-8 overflow-x-auto max-w-[350px] md:max-w-full">
          <table className="w-full min-w-[500px] text-center">
            <tr className="bg-gray-100">
              <th className="w-1/3 py-3 font-semibold">#</th>
              <th className="w-1/3 py-3 font-semibold">Category Id</th>
              <th className="w-1/3 py-3 font-semibold">Category Name</th>
            </tr>
            {filteredData && filteredData.length > 0 ? (
              filteredData.map((data, index) => (
                <tr key={index}>
                  <td className="w-1/3 py-3 text-gray-600">{index + 1}</td>
                  <td className="w-1/3 py-3 text-gray-600">{data.id}</td>
                  <td className="w-1/3 py-3 text-gray-600">{data.name}</td>
                </tr>
              ))
            ) : data && data.category?.length > 0 ? (
              data?.category?.map((item, index) => (
                <tr key={index}>
                  <td className="w-1/3 py-3 text-gray-600">{index + 1}</td>
                  <td className="w-1/3 py-3 text-gray-600">{item?.id}</td>
                  <td className="w-1/3 py-3 text-gray-600">{item?.name}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="py-3 text-gray-600">
                  No Filtered Data found
                </td>
              </tr>
            )}


          </table>
        </div>
      </div>
    </div>
  );
};
export default withAuth(Category);
