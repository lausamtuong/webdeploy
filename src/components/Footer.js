import React from "react";
import { useNavigate } from "react-router";
const Footer = (props) => {
  const { active } = props;
  const navigate = useNavigate()
  const handleClick = (name)=>{
        navigate(name)
  }
  return (
    <div className="flex fixed bottom-0 gap-5 w-full py-[20px] bg-white  items-center justify-around px-[10px] border-2 rounded-t-[12px] shadow-2xl">
      <div className=" text-center hover:opacity-80 cursor-pointer "  onClick={()=>handleClick("/Menu")}>
        {active.shop ? (
          <i className=" text-[#53B175] fas fa-store text-[20px] "></i>
        ) : (
          <i className="fas fa-store text-[20px] "></i>
        )}
        <p className="font-semibold">Shop</p>
      </div>
      <div className=" text-center hover:opacity-80 cursor-pointer" onClick={()=>handleClick("/Explore")}>
        {active.explore ? (
          <i className="fas fa-stream text-[#53B175] text-[20px] "></i>
        ) : (
          <i className="fas fa-stream text-[20px] "></i>
        )}
        <p className="font-semibold">Explore</p>
      </div>
      <div className="text-center hover:opacity-80 cursor-pointer" onClick={()=>handleClick("/Cart")}  >
        {active.cart ? (
          <i className="fas fa-cart-arrow-down text-[#53B175] text-[20px] "></i>
        ) : (
          <i className="fas fa-cart-arrow-down text-[20px] "></i>
        )}
        <p className="font-semibold">Cart</p>
      </div>
      <div className=" text-center hover:opacity-80 cursor-pointer" onClick={()=>handleClick("/Favorite")}>
        {active.favorite ? (
          <i className="far fa-heart text-[#53B175] text-[20px] "></i>
        ) : (
          <i className="far fa-heart text-[20px] "></i>
        )}

        <p className="font-semibold">Favorite</p>
      </div>
      <div className=" text-center hover:opacity-80 cursor-pointer" onClick={()=>handleClick("/Account")}>
        {active.account ? (
          <i className="fas fa-user-alt text-[#53B175] text-[20px] "></i>
        ) : (
          <i className="fas fa-user-alt text-[20px] "></i>
        )}

        <p className="font-semibold">Account</p>
      </div>
    </div>
  );
};

export default Footer;
