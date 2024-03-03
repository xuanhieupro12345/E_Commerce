import React from "react";
import BgLogin from "../public/image/BgLogin.png";
import { MdOutlineEmail } from "react-icons/md";
import { VscLock } from "react-icons/vsc";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa6";

const Login = () => {
  return (
    <div>
      <div className="w-full h-full max-2xl:h-[844px] flex justify-center bg-red-400 relative  max-md:h-[740px] max-sm:h-[640px]">
        <img
          src={BgLogin}
          className="w-full absolute place-items-center h-full object-cover  "
        />
        <div className="w-[610px] mt-11 h-[705px] absolute max-sm:w-[410px] max-sm:h-[500px] max-md:h-[600px] max-md:w-[510px] bg-black bg-opacity-50  rounded-lg">
          <form className="px-24 py-20 max-md:px-20 max-sm:px-16 text-white  flex flex-col">
            <h1 className="text-3xl max-md:text-2xl max-sm:text-xl font-bold ">
              EXISTING MEMBER
            </h1>
            <p className="text-3xl max-md:text-2xl max-sm:text-xl">
              Welcome Back!
            </p>
            <div className="flex  py-2 mt-8 font-light max-sm:text-xs">
              <MdOutlineEmail className="text-3xl mr-2 font-light" />
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-black bg-opacity-10 w-full py-1 text-sm px-4 focus:outline-none"
              ></input>
            </div>
            <hr />
            <div className="flex  py-2 max-2xl:mt-6 max-sm:mt-2 my-1 font-light max-sm:text-xs">
              <VscLock className="text-3xl mr-2  font-light" />
              <input
                type="password"
                placeholder="Enter your password"
                className="bg-black bg-opacity-10 w-full pt-1 text-sm px-4 focus:outline-none"
              ></input>
            </div>
            <hr />
            <p className="mb-1 max-sm:text-xs"> forgot your password ?</p>

            <button className="w-full bg-white text-black py-1 my-3 flex justify-between px-8 items-center rounded-full">
              <p className="font-bold">continue</p>{" "}
              <IoIosArrowRoundForward className="text-4xl " />
            </button>

            <div className="flex justify-center max-sm:text-xs">
              <p className="">OR</p>
            </div>

            <div className="flex text-5xl justify-center items-center max-sm:my-3 max-md:my-5 max-2xl:my-6">
              <FaGoogle className="border-2 py-2 rounded-full border-white " />
              <FaFacebook className="border-2 py-2 rounded-full border-white mx-3" />
              <FaApple className="border-2 py-2 rounded-full border-white" />
            </div>

            <p className="max-sm:text-xs max-xl:text-sm">
              Dont have account? register now
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
