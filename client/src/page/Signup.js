import React from "react";
import BgLogin from "../public/image/BgLogin.png";
import { MdOutlineEmail } from "react-icons/md";
import { VscLock } from "react-icons/vsc";
import { IoIosArrowRoundForward } from "react-icons/io";
import { SlUser } from "react-icons/sl";

const Signup = () => {
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
              CREATE AN ACCOUNT
            </h1>
            <p className="text-3xl max-md:text-2xl max-sm:text-xl">
              Welcome To Bytez
            </p>
            <div className="flex  py-2 mt-8 font-light max-sm:text-xs">
              <SlUser className="text-3xl mr-2 font-light" />
              <input
                type="text"
                placeholder="Enter your name"
                className="bg-black bg-opacity-10 w-full py-1 text-sm px-4 focus:outline-none"
              ></input>
            </div>
            <hr />
            <div className="flex  py-2 max-2xl:mt-6 max-sm:mt-2 my-1 font-light max-sm:text-xs">
              <MdOutlineEmail className="text-3xl mr-2 font-light" />
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-black bg-opacity-10 w-full pt-1 text-sm px-4 focus:outline-none"
              ></input>
            </div>
            <hr />
            <div className="flex  py-2 mt-8 font-light max-sm:text-xs">
              <VscLock className="text-3xl mr-2  font-light" />
              <input
                type="email"
                placeholder="Enter your password"
                className="bg-black bg-opacity-10 w-full py-1 text-sm px-4 focus:outline-none"
              ></input>
            </div>
            <hr />
            <div className="flex  py-2 max-2xl:mt-6 max-sm:mt-2 my-1 font-light max-sm:text-xs">
              <VscLock className="text-3xl mr-2  font-light" />
              <input
                type="password"
                placeholder="confirm password"
                className="bg-black bg-opacity-10 w-full pt-1 text-sm px-4 focus:outline-none"
              ></input>
            </div>
            <hr />

            <button className="w-full max-2xl:mt-12  max-sm:mt-6 max-md:mt-9 bg-white text-black py-1 my-3 flex justify-between px-8 items-center rounded-full">
              <p className="font-bold">continue</p>{" "}
              <IoIosArrowRoundForward className="text-4xl " />
            </button>

            <p className="max-sm:text-xs max-xl:text-sm flex">
              Already have an account?{" "}
              <p className="font-bold ml-1"> Login Now</p>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
