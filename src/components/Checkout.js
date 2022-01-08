import React, { useContext } from "react";
import {useNavigate} from "react-router-dom"
import { ProductContext } from "../components/ProductContext/ProductContext";
const Checkout = ({ setCheckout }) => {
  const { value } = useContext(ProductContext);
  const navigate= useNavigate()
  const handleClick =() =>{
    navigate('/Cart/Success');
  }
  return (
    <div className="z-100 absolute bg-black/40 h-full w-full">
      <div className="w-full h-[70%] bg-white rounded-t-[12px] absolute bottom-0 p-[20px] flex flex-col md:h-[80%]">
        <div className="flex  items-center justify-between pb-[15px] border-b-2">
          <h2 className="font-bold text-2xl">Checkout</h2>
          <i
            className="fas fa-times text-[30px] cursor-pointer"
            onClick={() => {
              setCheckout(false);
            }}
          ></i>
        </div>
        <div className="flex justify-between mt-[10px] pb-[15px] border-b-2">
          <p className="text-gray-500 font-medium">Delivery</p>
          <p className="font-semibold">
            Select Method
            <i className="ml-[10px] fas fa-chevron-right"></i>
          </p>
        </div>
        <div className="flex justify-between mt-[10px] pb-[15px] border-b-2">
          <p className="text-gray-500 font-medium"> Payment</p>
          <div className="font-semibold flex items-center">
            <div className="w-[40px]">
              <img src="https://img.icons8.com/color/100/000000/paypal.png" />
            </div>
            <i className="ml-[10px] fas fa-chevron-right"></i>
          </div>
        </div>
        <div className="flex justify-between mt-[10px] pb-[15px] border-b-2">
          <p className="text-gray-500 font-medium">Promo Code</p>
          <p className="font-semibold">
            Pick discount
            <i className="ml-[10px] fas fa-chevron-right"></i>
          </p>
        </div>
        <div className="flex justify-between mt-[10px] pb-[15px] border-b-2">
          <p className="text-gray-500 font-medium">Total Cost</p>
          <p className="font-semibold">
            {value.toFixed(2)}$
            <i className="ml-[10px] fas fa-chevron-right"></i>
          </p>
        </div>
        <div className="mb-[30px]">
          <p className="text-gray-500">By placing on order you agree to our</p>
          <p>
            <span className="font-bold">Term</span> And{" "}
            <span className="font-bold">Conditions</span>
          </p>
        </div>
        <div className="cursor-pointer py-[15px] text-center w-[80%] bg-[#53B175] mx-auto text-white rounded-xl text-[20px] font-semibold" onClick={handleClick}>
            Place order
        </div>
      </div>
    </div>
  );
};

export default Checkout;
