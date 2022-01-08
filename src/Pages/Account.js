import React from "react";
import Footer from "../components/Footer";
import avt from "../assets/obstuong.jpg";
const Account = () => {
  const active = {
    shop: false,
    explore: false,
    cart: false,
    favorite: false,
    account: true,
  };
  return (
    <div className="mt-[5%]">
      <div className="flex gap-5 items-center">
        <div className="w-[70px] h-[70px] overflow-hidden rounded-2xl shadow-green-600 animate-pulse ">
          <img alt="" src={avt} className="" />
        </div>
        <div>
          <p className="text-xl font-bold">
            Obs Tuong
            <i className="fas fa-pencil-alt text-[15px] ml-[10px] text-[#53B175]"></i>
          </p>
          <p className="text-gray-500 text-sm">
            tuong.lau0616545998@hcmut.edu.vn
          </p>
        </div>
      </div>
      <div className="flex flex-col mt-[20px] px-[20px] gap-2 sm:flex-row flex-wrap sm:gap-11">
        <div className="flex justify-between items-center pb-[10px] border-b-2 sm:w-[30%] ">
          <div className="flex gap-4 items-center">
            <i className="bx bx-task text-[20px] font-bold"></i>
            <p className="font-bold">Orders</p>
          </div>
          <i className="fas fa-chevron-right font-bold"></i>
        </div>
        <div className="flex justify-between items-center pb-[10px] border-b-2 sm:w-[30%]">
          <div className="flex gap-4 items-center">
            <i className="bx bx-id-card text-[20px] font-bold"></i>
            <p className="font-bold">My Details</p>
          </div>
          <i className="fas fa-chevron-right font-bold"></i>
        </div>
        <div className="flex justify-between items-center pb-[10px] border-b-2 sm:w-[30%]">
          <div className="flex gap-4 items-center">
            <i className="text-[20px] font-bold fas fa-street-view"></i>
            <p className="font-bold">Delivery Address</p>
          </div>
          <i className="fas fa-chevron-right font-bold"></i>
        </div>
        <div className="flex justify-between items-center pb-[10px] border-b-2 sm:w-[30%]">
          <div className="flex gap-4 items-center">
            <i className="bx bxs-credit-card text-[20px] font-bold"></i>
            <p className="font-bold">Payment Method</p>
          </div>
          <i className="fas fa-chevron-right font-bold"></i>
        </div>
        <div className="flex justify-between items-center pb-[10px] border-b-2 sm:w-[30%]">
          <div className="flex gap-4 items-center">
            <i className="bx bx-memory-card text-[20px] font-bold"></i>
            <p className="font-bold">Promo Card</p>
          </div>
          <i className="fas fa-chevron-right font-bold"></i>
        </div>
        <div className="flex justify-between items-center pb-[10px] border-b-2 sm:w-[30%]">
          <div className="flex gap-4 items-center">
            <i className="bx bx-bell text-[20px] font-bold"></i>
            <p className="font-bold">Notification</p>
          </div>
          <i className="fas fa-chevron-right font-bold"></i>
        </div>
        <div className="flex justify-between items-center pb-[10px] border-b-2 sm:w-[30%]">
          <div className="flex gap-4 items-center">
            <i className="bx bx-help-circle text-[20px] font-bold"></i>
            <p className="font-bold">Help</p>
          </div>
          <i className="fas fa-chevron-right font-bold"></i>
        </div>
        <div className="flex justify-between items-center pb-[10px] border-b-2 sm:w-[30%]">
          <div className="flex gap-4 items-center">
            <i class="fas fa-exclamation-circle text-[20px] font-bold"></i>
            <p className="font-bold">About</p>
          </div>
          <i className="fas fa-chevron-right font-bold"></i>
        </div>
      </div>
      <div className="cursor-pointer mt-[23px] py-[10px] text-center w-[80%] sm:w-[40%] bg-slate-200 mx-auto text-[#53B175] rounded-xl text-[18px] font-semibold flex justify-center items-center">
        <i className="bx bx-log-in text-[20px] mr-[10px]"></i>
        Log Out
      </div>
      <Footer active={active} />
    </div>
  );
};

export default Account;
