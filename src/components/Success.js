import React from "react";
import { useNavigate } from "react-router-dom";
import img from "../assets/Success.png";
const Success = () => {
    const navigate= useNavigate()
  return (
    <div className="flex flex-col items-center justify-center mt-[20px]">
      <img alt="" src={img} />
      <p className="mt-[20px] font-semibold text-3xl text-center">
        Your Order has been accepted
      </p>
      <p className="text-gray-500 text-center mt-[20px] w-[80%] mb-[80px]">
        Your items has been placcd and is on it’s way to being processed
      </p>
      <div
        className="cursor-pointer py-[15px] text-center w-[80%] bg-[#53B175] mx-auto text-white rounded-xl text-[20px] font-semibold"
      >
       Track Order
      </div>
      <div className="mt-[20px] " onClick={()=>{
          navigate("/Menu")
      }}>
          <p className="font-bold text-xl text-center cursor-pointer">
              Back to home
          </p>
      </div>
    </div>
  );
};

export default Success;
