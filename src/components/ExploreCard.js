import React from 'react';
import {useNavigate} from "react-router-dom"
const Explorecard = (props) => {
    const {avt,name,link} = props;
    const navigate = useNavigate()
    const handleClick = () => {
            navigate(link)
    }
    return (
        <div onClick={handleClick} className={`cursor-pointer border-2 border-[#ccc]  mt-4  flex flex-col items-center justify-center odd:bg-[#f5c5c5] even:bg-[#c7f1f5ba]  rounded-lg p-2 md:w-[400px]`}>
            <img src={avt} alt='' className='mb-[20px]'/>
            <p className="text-xl font-bold w-[150px] md:w-[300px] text-center">{name}</p>
        </div>
    );
}

export default Explorecard;
