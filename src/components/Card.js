import React,{useContext} from 'react';
import { ProductContext } from '../components/ProductContext/ProductContext';
const Card = ({item}) => {
    const {itemCart,setItemCart,setTotal,setValue} = useContext(ProductContext)
    const handleClick=()=>{
        let temp_state = [...itemCart];
        let temp_element = { ...itemCart[item.id] };
        temp_element.value = temp_element.value+1;
        temp_state[item.id] = temp_element;
        setItemCart( temp_state );
        setTotal(prev=>prev+1)
        setValue(prev=>(prev+Number(item.price.slice(0,-1))))
      
    }                                       
    return (
        <>
            <div className='px-[10px] py-[20px]  border-2  border-solid my-[20px] border-[#ccc] rounded-xl w-[42%] mx-[10px]'>
                <img src ={item.avt} alt='' className="mx-auto mb-[5px] h-[80px]"/>
                <div className='font-bold text-center'>{item.name}</div>
                <div className='text-[grey]'>{item.quan}</div>
                <div className='flex justify-between items-center'>
                    <div className='font-bold text-red-600' >{item.price}</div>
                    <button onClick={()=>handleClick()} className='px-[20px] py-[5px] bg-[#53B175] rounded-3xl text-white font-semibold outline-none active:bg-[#064a0f]'>+</button>
                </div>
            </div>
        </>
    );
}

export default Card;
