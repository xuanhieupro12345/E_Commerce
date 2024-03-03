import React from "react";
import BgLogin from "../public/image/BgLogin.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import Support from "./Support";

const ForgotPassword = () => {
  return (
    <div>
      <div className="w-full  h-[800px] flex justify-center bg-red-400 relative  ">
        <img
          src={BgLogin}
          className="w-full absolute place-items-center h-full object-cover  "
        />
        <div className="w-[610px] mt-11 h-[705px] absolute max-sm:w-[410px] max-sm:h-[550px] max-md:h-[650px] max-md:w-[510px] bg-black bg-opacity-50  rounded-lg">
          <form className="px-24 py-40 max-md:px-20 max-sm:px-16 text-white  flex flex-col">
            <h1 className="text-3xl max-md:text-2xl max-sm:text-xl font-bold ">
              FORGOT YOUR PASSWORD?
            </h1>
            <p className="text-3xl max-md:text-2xl max-sm:text-xl">
              Don't worry, were here to help!
            </p>

            <div className="flex  py-2 max-2xl:mt-6 max-sm:mt-2 my-1 font-light max-sm:text-xs">
              <MdOutlineEmail className="text-3xl mr-2 font-light" />
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-black bg-opacity-10 w-full pt-1 text-sm px-4 focus:outline-none"
              ></input>
            </div>
            <hr />

            <div className="flex">
              <button className="w-2/4 max-2xl:mt-12 mr-3 border-2 justify-center items-center border-white max-sm:mt-6 max-md:mt-9 py-1 my-3 flex rounded-full">
                <p className="font-bold">Go back</p>{" "}
              </button>
              <button className="w-full max-2xl:mt-12  max-sm:mt-6 max-md:mt-9 justify-between bg-white text-black py-1 my-3 flex  px-8 items-center rounded-full">
                <p className="font-bold">continue</p>{" "}
                <IoIosArrowRoundForward className="text-4xl " />
              </button>
            </div>
          </form>
        </div>
      </div>
      <Support />
    </div>
  );
};

export default ForgotPassword;
