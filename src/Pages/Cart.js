import React, { useContext, useState } from "react";
import Checkout from "../components/Checkout";
import Footer from "../components/Footer";
import { ProductContext } from "../components/ProductContext/ProductContext";

const Cart = () => {
  const [isCheckout, setCheckout] = useState(false);

  const { itemCart, setItemCart, setTotal, setValue, value } = useContext(
    ProductContext
  );
  const active = {
    shop: false,
    explore: false,
    cart: true,
    favorite: false,
    account: false,
  };
  const handleClickPlus = (item) => {
    let temp_state = [...itemCart];
    let temp_element = { ...itemCart[item.id] };
    temp_element.value = temp_element.value + 1;
    temp_state[item.id] = temp_element;
    setItemCart(temp_state);
    setTotal((prev) => prev + 1);
    setValue((prev) => prev + Number(item.price.slice(0, -1)));
  };
  const handleClose = (item) => {
    let temp_state = [...itemCart];
    let temp_element = { ...itemCart[item.id] };
    temp_element.value = 0;
    temp_state[item.id] = temp_element;
    setItemCart(temp_state);
    setTotal((prev) => prev - item.value);
    setValue((prev) => prev - item.value * Number(item.price.slice(0, -1)));
  };
  const handleClickNeg = (item) => {
    let temp_state = [...itemCart];
    let temp_element = { ...itemCart[item.id] };
    if (temp_element.value > 1) {
      temp_element.value = temp_element.value - 1;
      setValue((prev) => prev - Number(item.price.slice(0, -1)));
    }
    temp_state[item.id] = temp_element;
    setItemCart(temp_state);
    setTotal((prev) => (item.value > 1 ? prev - 1 : prev));
  };
  return (
    <div className="flex flex-col last:mb-[150px]">
      <div className="text-center text-2xl font-semibold mt-2"> My Cart</div>
      {value <1  ? (
        <div className="w-[100%]">
          <img
            className=" w-[70%] mx-auto sm:w-[20%]"
            src="https://i.dlpng.com/static/png/109093_preview.png"
          />
          <p className="text-gray-500 text-[30px] text-center font-semibold">
            Empty
          </p>
        </div>
      ) : (
        itemCart.map((item, index) => {
          if (item.value > 0) {
            console.log(item.value);
            return (
              <div
                className=" m-5 py-2 px-3 flex items-center gap-3 relative"
                key={index}
              >
                <div className="w-[80px]">
                  <img alt="" src={item.avt} className="" />
                </div>
                <div className="flex flex-col gap-5 ">
                  <div className="flex justify-between ">
                    <div>
                      <p className="text-[17px] font-semibold ">{item.name}</p>
                      <p className="text-gray-500">{item.quan}</p>
                    </div>
                    <i
                      className="fas fa-times absolute top-[7%] right-0 text-[30px] text-gray-500 cursor-pointer"
                      onClick={() => {
                        handleClose(item);
                      }}
                    ></i>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex justify-between items-center gap-2">
                      <button
                        onClick={() => {
                          handleClickNeg(item);
                        }}
                        className="pb-[2px] px-3 border-2 rounded-2xl text-[40px] font-semibold leading-none"
                      >
                        -
                      </button>
                      <p className="font-bold text-xl">{item.value}</p>
                      <button
                        onClick={() => {
                          handleClickPlus(item);
                        }}
                        className="pb-[7px] pt-[5px] px-3 border-2 rounded-2xl text-[30px] text-[#53B175] font-bold leading-none"
                      >
                        +
                      </button>
                    </div>
                    <p className="font-bold text-xl ml-[20px]">{item.price}</p>
                  </div>
                </div>
              </div>
            );
          }
        })
      )}
      {value > 1 && (
        <div
          onClick={() => {
            setCheckout(true);
          }}
          className="cursor-pointer flex justify-center w-[80%] fixed bottom-[100px] py-[15px] text-center bg-[#53B175] text-white mx-[10%] rounded-3xl shadow-2xl"
        >
          <div className="flex items-center">
            <p className="font-bold text-[20px]">Go To Checkout</p>
            <span className="ml-[30px] text-[15px] bg-[#489E67] px-[5px]">
              {value.toFixed(2)}$
            </span>
          </div>
        </div>
      )}
      <Footer active={active} />
      {isCheckout && (
        <div className="z-100 absolute bg-black/40 h-full w-full">
          <Checkout setCheckout={setCheckout} />
        </div>
      )}
    </div>
  );
};

export default Cart;
