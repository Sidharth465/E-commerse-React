import React from "react";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#services",
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "/#",
  },
  {
    id: 3,
    name: "Mens Wear",
    link: "/#",
  },
  {
    id: 3,
    name: "Electronics",
    link: "/#",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];

const Navbar = ({ handleOrdeerPopup }) => {
  return (
    <div className="shadow-md bg-white dark:text-white dark:bg-gray-900 duration-200 relative z-40">
      {/* upper navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center ">
          <div>
            <a className="font-bold text-2xl sm:text-3xl flex gap-2" href="#">
              <img
                className="w-10 hover:scale-110 transition-all"
                src={Logo}
                alt="Logo"
              />
             StyleNest
            </a>
          </div>

          {/* search bar */}
          <div className="flex  justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                className="w-[200px] sm:w-[200px] group-hover:w-[250px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"
                type="text"
                placeholder="search"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
          </div>

          {/* order button */}
          <button
            onClick={() => handleOrdeerPopup()}
            className="group flex items-center gap-3 bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full"
          >
            <span className="group-hover:block hidden transition-all duration-200">
              Order
            </span>
            <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
          </button>
          {/* dark mode switch */}
          <div>
            <DarkMode />
          </div>
        </div>
      </div>

      {/* lower navbar */}
      <div data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu?.map((data) => (
            <li key={data?.id}>
              <a
                href={data?.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data?.name}
              </a>
            </li>
          ))}
          {/* simple dropdown and links */}
          <li className="group relative cursor-pointer ">
            <a className="flex items-center gap-[2px] py-2 pr-1" href="#">
              Trending Products
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md " >
              <ul>
                {DropdownLinks?.map((data)=>(
                  <li key={data?.id}>
                    <a className="inline-block w-full rounded-md p-2 hover:bg-primary/40" href="#">{data?.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
