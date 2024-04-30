import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";

const CustomDropdown = ({ options, onSelect, dropdown, category }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOption, setSelectedOption] = useState(typeof category === 'string' ? category : category?.name || null);
  const [selectedId, setSelectedId] = useState(category?._id || null);
  const dropdownRef = useRef(null);

  const filteredOptions = options?.filter((option) =>
    option?.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );


  const handleOptionClick = (option) => {
    setSelectedOption(option?.name);
    onSelect(option);
    setIsOpen(false);

    switch (dropdown) {
      case "unit":
      case "attribute":
      case "category":
      case "subCategory":
        setSelectedId(option?._id);
        break;
      case "discounttype":
        setSelectedId(option?.name);
        break;
      default:
        break;
    }
  };

  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // console.log(options)
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div
      className="relative inline-block text-left w-full min-w-[250px] px-5 py-2 border-2 rounded-md h-12 "
      ref={dropdownRef}
    >
      <div>
        <div
          className="rounded-md shadow-sm w-full flex justify-between items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOption ? (category ? selectedOption : "Select") : "Select"}
          <span>
            <IoIosArrowDown />
          </span>
        </div>
      </div>
      {isOpen && (
        <div className="absolute mt-1 w-full -left-0 z-50 top-[100%] rounded-md bg-white shadow-lg">
          <input
            type="text"
            value={searchTerm}
            
            onChange={(e) => setSearchTerm(e.target.value)}
            className="py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 pr-10 sm:text-sm"
            placeholder="Search..."
          />
          <ul
            tabIndex="-1"
            role="listbox"
            aria-labelledby="listbox-label"
            aria-activedescendant="listbox-item-3"
            className="py-1 overflow-auto focus:outline-none max-h-56 rounded-md"
          >
            {filteredOptions?.map((option, index) => (
              <li
                key={index}
                className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9"
                onClick={() => handleOptionClick(option)}
              >
                <span className="font-normal block truncate">{option?.name}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      {selectedOption && (
        <p className="mt-2 hidden">Selected: {options && selectedOption}</p>
      )}
      {
        selectedId && (
          <input
            type="text"
            hidden
            value={selectedId}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search..."
            name={dropdown}
          />
        )
      }

    </div>
  );
};

export default CustomDropdown;
