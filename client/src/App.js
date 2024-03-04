import logo from "./logo.svg";
import "./App.css";
import Home from "./page/Home";
import Contact from "./page/Contact";
import ForgotPassword from "./page/ForgotPassword";
import Logo from "./public/image/Logo.png";
import { MdOutlineShoppingCart, MdSearch } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

function App() {
  return (
    <div className="">
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

      <Contact />

      {/* button in interface */}
      <div className="max-2xl:h-[262px] max-xl:h-[410px] max-md:h-[540px] w-full bg-white  ">
        <div className="w-full h-full grid-cols-6 grid  max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 justify-between px-24 max-md:px-10 py-10 text-sm ">
          <div className="space-y-3">
            <p className="font-medium cursor-pointer hover:text-slate-400">
              Quick Links
            </p>
            <p className="cursor-pointer hover:text-slate-400">Home</p>
            <p className="cursor-pointer hover:text-slate-400">About Us</p>
            <p className="cursor-pointer hover:text-slate-400">Contract US</p>
            <p className="cursor-pointer hover:text-slate-400">FAQ</p>
          </div>
          <div className="space-y-3">
            <p className="font-medium cursor-pointer hover:text-slate-400">
              Important Policies
            </p>
            <p className="cursor-pointer hover:text-slate-400">
              Privacy Policy
            </p>
            <p className="cursor-pointer hover:text-slate-400">
              Terms Of Service
            </p>
            <p className="cursor-pointer hover:text-slate-400">
              Return & Refunds
            </p>
            <p className="cursor-pointer hover:text-slate-400">
              Shipping Policy
            </p>
          </div>
          <div className="space-y-3">
            <p className="font-medium cursor-pointer hover:text-slate-400">
              Let Us Help You
            </p>
            <p className="cursor-pointer hover:text-slate-400">
              Customer Support
            </p>
            <p className="cursor-pointer hover:text-slate-400">Live Chat</p>
            <p className="cursor-pointer hover:text-slate-400">Help Center</p>
          </div>
          <div className="space-y-3">
            <p className="font-medium cursor-pointer hover:text-slate-400">
              Connect With Us
            </p>
            <p className="cursor-pointer hover:text-slate-400">Facebook </p>
            <p className="cursor-pointer hover:text-slate-400">Twitter</p>
            <p className="cursor-pointer hover:text-slate-400">Instagram</p>
          </div>
          <div className="space-y-3">
            <p className="font-medium cursor-pointer hover:text-slate-400">
              Subscribe For Updates And Exclusive Offers. *{" "}
            </p>
            <p className="ml-6 max-md:ml-0 lg:ml-3 cursor-pointer hover:text-slate-400">
              Enter Your Email{" "}
            </p>
          </div>
          <button className="ml-24 w-32 max-2xl:ml-16 max-lg:ml-6 max-md:ml-0 text-white bg-black px-8 h-[30px] mt-9">
            Subscribe{" "}
          </button>
        </div>
        <div className="w-full h-[58px] max-md:h-[70px] max-sm:h-[90px] bg-black px-28 max-md:px-10 py-4   text-white text-xs">
          <p className="">
            2024 Bytez. All Rights Reserved. Bytez Is Your Premier Online Source
            For The Latest In technology Product, Providing Innovation, Quality
            And Exceptional Customer Experiences Since Our Inception{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
