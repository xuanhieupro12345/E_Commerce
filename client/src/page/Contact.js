import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="flex px-20 bg-slate-200 h-[600px]  items-center">
      <div className="w-[340px] h-[457px] bg-white shadow-md mr-10 px-8 py-10">
        <div className="space-y-3">
          <div className="flex space-x-3 items-center">
            <IoCallOutline className="text-4xl px-2 rounded-full py-2 font-bold bg-black text-white" />

            <p className="text-lg font-medium">Call To Us</p>
          </div>
          <p>we are available 14/7,7 day a week</p>
          <p>phone: +880161112222</p>
        </div>
        <hr className="border-t-2 border-black my-9" />
        <div className="space-y-3">
          <div className="flex space-x-3 items-center">
            <MdOutlineEmail className="text-4xl px-2 rounded-full py-2 font-bold bg-black text-white" />
            <p className="text-lg font-medium">Write To Us</p>
          </div>
          <p>Fill uot our form and we will contact you within 24 hours</p>
          <p>Emails: customer@exclusive.com</p>
          <p>Emails: support@exclusive.com</p>
        </div>
      </div>
      <div className="h-[457px] w-[800px] bg-white shadow-md ">
        <div className="space-y-6 py-8 px-6 ">
          <div className="flex justify-between py-2 space-x-3">
            <input
              type="text"
              className="bg-stone-100 py-2 w-full px-2 "
              placeholder="Your Name*"
            />
            <input
              type="email"
              className="bg-stone-100 py-2 w-full px-2"
              placeholder="Your Email*"
            />
            <input
              type="number"
              className="bg-stone-100 py-2 w-full px-2"
              placeholder="Your Phone*"
            />
          </div>

          <textarea
            className="bg-stone-100 w-full py-2 px-2"
            rows="8"
            cols="100"
            placeholder="Your message"
          ></textarea>
          <div className="w-full flex justify-end  ">
            <button className="w-[220px] h-[56px] bg-black text-white font-medium rounded-md">
              {" "}
              Send Massage
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
