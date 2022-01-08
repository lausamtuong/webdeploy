import React from "react";
import Group from "../assets/Group.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
     setTimeout(() =>{
        navigate("/Page1")
     },5000)
  }, []);
  return (
    <div className="h-screen bg-[#53B175] flex flex-col justify-center">
      <div className="flex items-center justify-center ">
        <div>
          <img src={Group} alt="" />
        </div>
        <div className="text-white ml-4">
          <h1 className="font-medium text-[50px] leading-[3rem]">obsfood</h1>
          <p className="tracking-[0.3em]">online groceriet</p>
        </div>
      </div>
      <div className="flex justify-center gap-8 ml-[10px] mt-[10px]">
        <div className="loading animate-[ping_1s_ease-in-out_infinite] "></div>
        <div className="loading animate-[ping_1.2s_ease-in-out_infinite] "></div>
        <div className="loading animate-[ping_1.4s_ease-in-out_infinite] "></div>
        <div className="loading animate-[ping_1.6s_ease-in-out_infinite] "></div>
        <div className="loading animate-[ping_1.8s_ease-in-out_infinite] "></div>
      </div>
    </div>
  );
};

export default Home;
