import React from "react";
import Banner from "../assets/banner.png";
import { GiFruitBowl } from "react-icons/gi";
import { useState, useContext } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Footer from "../components/Footer";
import pulse from "../assets/pulse.png";
import rice from "../assets/rice.png";
import { ProductContext } from "../components/ProductContext/ProductContext";

const Menu = () => {
  const { itemCart, total } = useContext(ProductContext);

  const active = {
    shop: true,
    explore: false,
    cart: false,
    favorite: false,
    account: false,
  };
  const navigate = useNavigate();
  return (
    <section>
      <div className="flex flex-col items-center mt-[20px]">
        <GiFruitBowl color="#53B175" size={"50px"} />
        <div className="flex gap-3 items-center text-[20px]">
          <HiOutlineLocationMarker />
          <p>VietNamese</p>
        </div>
        <div className="w-[80%] flex mt-[10px] items-center">
          <input
            type="text"
            placeholder="Type here and hit Enter"
            className="w-full p-[10px] bg-[#fafafa] rounded-[8px]"
          />
          <button className="p-[10px] flex-shrink-0 bg-[#53B175] text-white ml-[5px] rounded-xl">
            <i className="fa fa-search"></i>
          </button>
          <div className="relative">
            <i
              className="fas fa-shopping-cart text-[30px] ml-[20px]"
              onClick={() => {
                navigate("/Cart");
              }}
            ></i>
            <div className="absolute rounded-full px-2 py-1 bg-[#53B175] text-[12px] text-white font-semibold top-[-50%]  right-[-20%]">
              {total}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[15px] mx-[5px] flex justify-center ">
        <img src={Banner} className="w-[90%]" alt="" />
      </div>
      <div className="flex justify-between mx-[20px] mt-[10px]">
        <p className="font-semibold text-xl">Exclusive Offer</p>
        <button className="text-[#53B175]">See all</button>
      </div>
      <div className="flex flex-wrap w-full justify-around mb-[20px]">
        {itemCart.map((item, index) => {
          if (index <= 1) return <Card key={index} item={item} />;
        })}
      </div>
      <div className="flex justify-between mx-[20px] mt-[10px]">
        <p className="font-semibold text-xl">Best Selling</p>
        <button className="text-[#53B175]">See all</button>
      </div>
      <div className="flex flex-wrap w-full justify-around mb-[20px]">
        {itemCart.map((item, index) => {
          if (index >= 2 && index <= 3) return <Card key={index} item={item} />;
        })}
      </div>
      <div className="flex justify-between mx-[20px] mt-[10px]">
        <p className="font-semibold text-xl">Groceries</p>
        <button className="text-[#53B175]">See all</button>
      </div>
      <div className="flex gap-3 justify-around mt-[10px]">
        <div className="flex gap-3 md:px-[17%] px-[25px] py-3 bg-[#f5c591] items-center rounded-xl">
          <img src={pulse} alt="" />
          <p className="font-semibold text-xl">Pulses</p>
        </div>
        <div className="flex gap-3 md:px-[17%] px-[25px] py-3 bg-[#a5daf3] items-center rounded-xl">
          <img src={rice} alt="" />
          <p className="font-semibold text-xl">Rice</p>
        </div>
      </div>
      <div className="flex flex-wrap w-full justify-around mb-[80px]">
        {itemCart.map((item, index) => {
          if (index >= 4 && index <= 5) return <Card key={index} item={item} />;
        })}
      </div>
      <Footer active={active} name={"Menu"} />
    </section>
  );
};

export default Menu;
