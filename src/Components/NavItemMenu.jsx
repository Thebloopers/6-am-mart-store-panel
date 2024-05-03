import React from "react";
import { TbWorld } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { RiMessage2Fill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { MdArrowDropDown } from "react-icons/md";
import { signout } from "../helpers/auth";
import { useCookies } from "react-cookie";

const NavItemMenu = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["store"]);

  const navigate = useNavigate();

  const handleSignOut = () => {
    signout(removeCookie, () => {
      navigate("/login");
      return null;
    });
  };
  return (
    <div className="text-black">
      <div className="flex justify-end items-center gap-2 w-full ml-[460px]">
        <div className="flex justify-start items-center text-[#00868F] ">
          <TbWorld className="text-[#00868F]" />
          <p>En</p>
          <IoIosArrowDown className="text-sm mx-2" />
        </div>
        <Link>
          <RiMessage2Fill className="bg-slate-200 hover:bg-[#00868F] hover:text-white text-[#00868F] text-3xl p-1 rounded-full cursor-pointer" />
        </Link>

        <div className="dropdown dropdown-bottom">
          <div tabIndex={0} className="btn m-1">
            <div className="flex justify-center items-center ">
              <MdArrowDropDown className="text-xl" />
              <div>
                <h1 className="font-bold text-[#00868F] ">
                  {cookies?.storeuser?.store?.firstName}{" "}
                  {cookies?.storeuser?.store?.lastName}
                </h1>
                <h1 className="text-xs">{cookies?.storeuser?.store?.email}</h1>
              </div>
              <img
                src="https://6ammart-admin.6amtech.com/storage/app/public/vendor/2021-08-22-61214e5a0db7d.png"
                alt=""
                className="w-[35px] h-[35px] rounded-full"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li className="border-b border-gray-400">
              <div className="flex justify-center items-center ">
                <img
                  src="https://6ammart-admin.6amtech.com/storage/app/public/vendor/2021-08-22-61214e5a0db7d.png"
                  alt=""
                  className="w-[35px] h-[35px] rounded-full"
                />
                <div>
                  <h1 className="font-bold text-[#00868F] ">
                    {cookies?.storeuser?.store?.firstName}{" "}
                    {cookies?.storeuser?.store?.lastName}
                  </h1>
                  <h1 className="text-xs">
                    {cookies?.storeuser?.store?.email}
                  </h1>
                </div>
              </div>
            </li>
            {/* <li className="border-b border-gray-400">
              <Link>Setting</Link>
            </li> */}
            <li>
              <button type="button" onClick={handleSignOut}>
                Sign Out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavItemMenu;
