import React from "react";
import Logo from "../public/image/Logo.png";
import { MdOutlineShoppingCart, MdSearch } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import Login from "./Login";
import Signup from "./Signup";
import ForgotPassword from "./ForgotPassword";

const Home = () => {
  return (
    <div>
      <div className="h-[70px] w-full bg-white justify-between px-20 max-md:px-10 flex py-2 ">
        <div className="h-[56px] w-[351px] font-medium  flex items-center space-x-4 max-sm:space-x-2">
          <img className="mr-5" src={Logo} />
          <p className="">HOME</p>
          <p>STORE</p>
          <p>BLOG</p>
          <p>CONTRACT</p>
        </div>
        <div className="w-[150px] h-[24px] justify-between items-center flex mt-4">
          <p>
            <MdSearch />
          </p>
          <p>
            <MdOutlineShoppingCart />
          </p>
          <p>
            <FaRegUser />
          </p>
        </div>
      </div>
      <ForgotPassword />
    </div>
  );
};

export default Home;
