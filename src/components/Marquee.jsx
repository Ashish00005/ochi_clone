import React from 'react'
import { motion } from "framer-motion"


const Marquee = () => {
  return (

    <div data-scroll data-scroll-section data-scroll-speed='.1' className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#014C43]'>
        <div className="text border-t-2 border-b-2 border-zince-300 flex whitespace-nowrap overflow-hidden pr-20">
            <motion.h1 initial={{x:'0'}} animate={{x:'-100%'}} transition={{repeat :Infinity, ease:"linear" , duration:10}} className='text-[20vw] font-["FoundersGrotest"] font-semibold uppercase m-10 pt-10 leading-none'>We are ochi</motion.h1>
            <motion.h1 initial={{x:'0'}} animate={{x:'-100%'}} transition={{repeat :Infinity, ease:"linear" , duration:10}} className='text-[20vw] font-["FoundersGrotest"] font-semibold uppercase m-10 pt-10 leading-none'>We are ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee