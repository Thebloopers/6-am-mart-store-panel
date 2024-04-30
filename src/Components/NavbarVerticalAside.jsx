import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const NavbarVerticalAside = ({type}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Define your menu items here
  const menuItems = [
    { href: "", title: "All orders", label: "All", badge: "31" },
    { href: "", title: "Scheduled orders", label: "Scheduled", badge: "0" },
    { href: "", title: "Pending", label: "Pending", badge: "31" },
    { href: "", title: "Accepted orders", label: "Accepted", badge: "0" },
    { href: "", title: "Processing orders", label: "Processing", badge: "31" },
    { href: "", title: "Order On The Way orders", label: "Order On The Way", badge: "0" },
    { href: "", title: "Deliverd orders", label: "Deliverd", badge: "31" },
    { href: "", title: "Canceled orders", label: "Canceled", badge: "0" },
    { href: "", title: "Payment Failed orders", label: "Payment Failed", badge: "31" },
    { href: "", title: "Refunded orders", label: "Refunded", badge: "0" },
    { href: "", title: "Offline Payment orders", label: "Offline Payment", badge: "0" },
    // Add more menu items here
  ];

  return (
    <div className="relative ">
      <Link
        className="flex items-center  px-4 text-gray-700 hover:text-gray-900"
     
        onClick={toggleMenu}
      >
      <FaShoppingCart className='mr-2 text-xl'/>
        <span className="truncate cursor-pointer">{type}</span>
        <span className='ml-auto'>{isMenuOpen? <ExpandLessIcon /> : <ExpandMoreIcon />}</span>

      </Link>
      
      <ul
        className={` top-full left-0 py-2 mt-1 w-[222px] rounded-md transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto h-fit' : 'opacity-0 pointer-events-none h-0'
        }`}
      >
        {menuItems.map((item, index) => (
          <NavItem key={index} {...item} />
        ))}
      </ul>
    </div>
  );
};

const NavItem = ({ href, title, label, badge }) => {
  return (
    <div className='p-1'>
      <Link
        className="flex items-center px-4 text-gray-700 hover:text-gray-900"
        href={href}
        title={title}
      >
        <span className="w-2 h-2 rounded-full bg-gray-300 mr-2"></span>
        <span className="truncate">{label}</span>
        <span className="ml-auto bg-blue-500 text-white rounded-full px-2 py-1 text-xs">
          {badge}
        </span>
      </Link>
    </div>
  );
};

export default NavbarVerticalAside;
