import React from 'react';
import Footer from '../components/Footer';

const Favorite = () => {
    const active = {
        shop: false,
        explore: false,
        cart: false,
        favorite: true,
        account: false,
      };
    return (
        <div>
            <Footer active={active}/>
        </div>
    );
}

export default Favorite;
