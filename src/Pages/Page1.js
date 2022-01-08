import React from "react";
import background from "../assets/8140 1.png";
import Group from "../assets/Group.png"
import { useNavigate } from "react-router-dom";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
const Page1 = () => {
  const navigate= useNavigate()
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
    setTimeout(()=>{navigate("/Menu")},2000)
  };
   
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="">
        <img src={background} alt="" className="  object-cover sm:w-full" />
       
      </div>
      <div className="absolute text-white z-10 bottom-[5%] text-center w-full">
            <img src={Group} alt='' className='text-base mx-auto w-[40px]'/>
            <p className="w-[200px] mx-auto text-[30px] font-semibold">Welcome <h3>to our store</h3></p>
            <p className="text-[#ccc]">
                Get our groceriets in as fast as one hour
            </p>
          
      <Button onClick={handleToggle} style={{
        width:"230px",
        background:"#53B175",
        padding:"10px 0px",
        borderRadius:"12px",
        marginTop:"20px",
        color:"white"
      }}>Get Started</Button>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      </div>
    </div>
  );
};

export default Page1;
