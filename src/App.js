import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  useNavigate,
} from "react-router-dom";

import { useState, useEffect } from "react";
import Home from "./Pages/Home";
import Page1 from "./Pages/Page1";
import Menu from "./Pages/Menu";
import Explore from "./Pages/Explore";
import Cart from "./Pages/Cart";
import Favorite from "./Pages/Favorite";
import Account from "./Pages/Account";
import Beverage from "./Explore/Beverage";
import { ProductContext } from "./components/ProductContext/ProductContext";
import avt from "./assets/bananas.png";
import avt1 from "./assets/menu1.png";
import avt2 from "./assets/menu2.png";
import avt3 from "./assets/menu3.png";
import avt4 from "./assets/menu4.png";
import avt5 from "./assets/menu5.png";
import Success from "./components/Success";
export default function App() {
  const [itemCart, setItemCart] = useState([
    {
      id: 0,
      name: "Organic Bananas",
      avt: avt,
      quan: "7pcs, Priceg",
      value: 0,
      price: "4.99$",
    },
    {
      id: 1,
      name: "Red Apple",
      avt: avt2,
      quan: "1kg, Priceg",
      value: 0,
      price: "7.99$",
    },
    {
      id: 2,
      name: "Bell Pepper Red",
      avt: avt5,
      quan: "1kg, Priceg",
      value: 0,
      price: "2.99$",
    },
    {
      id: 3,
      name: "Ginger",
      avt: avt3,
      quan: "250gm, Priceg",
      value: 0,
      price: "4.50$",
    },
    {
      id: 4,
      name: "Beef Bone",
      avt: avt4,
      quan: "1kg, Priceg",
      value: 0,
      price: "11.99$",
    },
    {
      id: 5,
      name: "Chickens",
      avt: avt1,
      quan: "1kg, Priceg",
      value: 0,
      price: "8.99$",
    },
  ]);
  const [total, setTotal] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <ProductContext.Provider value={{ itemCart, setItemCart,total,setTotal,value,setValue}}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Page1" element={<Page1 />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Explore" element={<Explore />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Favorite" element={<Favorite />} />
          <Route path="/Account" element={<Account />} />
          <Route path="/Cart/Success" element={<Success />} />
          <Route path="/Explore/Beverage" element={<Beverage />} />
        </Routes>
      </Router>
    </ProductContext.Provider>
  );
}
