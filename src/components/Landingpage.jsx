import { motion } from 'framer-motion';
import React from 'react';
import {FaArrowUpLong} from 'react-icons/fa6';

const Landingpage = () => {
  
  return (
    <div data-scroll data-scroll-speed='-.3' className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-[15vh] px-20">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker" key={index}>
              <div className='w-fit flex items-end '>
                {index === 1 && (
                  <motion.div initial={{width:0}} animate={{width:"8vw"}} transition={{ease:[0.76,0,0.24,1], duration :1}} className='mr-[1vw] w-[8vw] rounded-md h-[5.1vw] relative top-[.81vw]  bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg")]'></motion.div>
                )}
                <h1 className="pt-[2.4vw] -mb-[1vw] uppercase text-[6vw] leading-[.9] font-['FoundersGrotest']">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

        <div className='w-full border-t-[1px] border-gray-500 h-0 mt-[160px] '></div>
        
        <div className='flex justify-between  px-20 m-[20px] mt-8 items-center'>
          {["For public and private companies","From the first pitch to IPO"].map((item,index)=>{
            return(
              <div key={index}>
                <p  key={index} className='text-2xl font-["FoundersGrotest"] tracking-[.1px] leading-none'>
                {item}
                </p>
              </div>
            );
          })}
          <div className="start flex items-center gap-2 ">
            <div className='px-5 py-2 border-[2px] text-2xl font-["FoundersGrotest"]  rounded-full uppercase'>
              Start the project
            </div>
            <div className='ml-2 w-12 h-12 border-[2px] rounded-full flex items-center justify-center'>
                <span className='rotate-[45deg]'>
                <FaArrowUpLong/>
                </span>
              </div>
          </div>
        </div>

    </div>
  );
};

export default Landingpage;
