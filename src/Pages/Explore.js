import React from 'react';
import Footer from '../components/Footer';
import ExploreCard from '../components/ExploreCard';
import avt from "../assets/pngfuel.png"
import avt1 from "../assets/pngfuel1.png"
import avt2 from "../assets/pngfuel2.png"
import avt3 from "../assets/pngfuel3.png"
import avt4 from "../assets/pngfuel4.png"
import avt5 from "../assets/pngfuel5.png"
const Explore = () => {
    const active = {
        shop: false,
        explore: true,
        cart: false,
        favorite: false,
        account: false,
      };
    return (
        <div>
        <div className="font-semibold text-[25px] text-center mt-[30px]">
            Explores
        </div>
        <div className='flex flex-wrap justify-around mb-[100px]'>
            <ExploreCard avt={avt1} name={"Frash Fruits & Vegetable"} link={'/'}/>
            <ExploreCard avt={avt4} name={"Cooking Oil & Ghee"} />
            <ExploreCard avt={avt5} name={"Meat & Fish"} />
            <ExploreCard avt={avt2} name={"Bakery & Snacks"} />
            <ExploreCard avt={avt} name={"Dairy & Eggs"} />
            <ExploreCard avt={avt3} name={"Beverages"} link={'/Explore/Beverage'} />
            
        </div>
            <Footer active={active}/>
        </div>
    );
}

export default Explore;
