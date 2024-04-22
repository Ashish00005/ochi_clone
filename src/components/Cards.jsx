import { motion,useAnimation } from 'framer-motion';
import React from 'react'
import {FaArrowUpLong} from 'react-icons/fa6';

const Cards = () => {
    const cards =[useAnimation(), useAnimation()]
    const handleHover=(index)=>{
        cards[index].start({y:'0'})
    }
  return (
    
    <div className='bg-black'>
        <div className='px-20 pt-[15vh] pb-12 text-[7vh]'>
        Featured projects
        </div>
        <div className='w-full border-t-[1px]  border-[#65685d]'></div>
        <div className='w-full p-20 flex gap-7 relative'>
            <div className='textbtw absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[15vh] text-zinc-600'>
                    {"FYDE".split('').map((item,index)=>
                        
                            <motion.span  initial={{y:'100%'}} animate={cards[0]} key={index}>
                                {item}
                            </motion.span>
                        
                    )}
            </div>
            <div className='textbtw absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[15vh] text-zinc-600'>
                    {"VISE".split('').map((item,index)=>
                        
                        <span key={index}>
                            {item}
                        </span>
                    
                )}
            </div>
            <motion.div onHoverStart={()=>handleHover(0)} className='w-1/2 '>
                    <ul className='text-[2vh] font-medium pb-5'>FYDE</ul>
                    <div className='w-full h-[80vh] bg-[url("https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png")] bg-cover bg-center rounded-2xl'></div>
                    <div className='w-full h-5 flex'>
                        {['Audit','copywriting','sales deck','Sales design'].map((item,index)=>{
                            return(
                                <div key={index}>
                                    <button className='uppercase text-zinc-500 border-[0.3vh] mt-5 mr-3 px-4 py-1 rounded-3xl font-medium text-[2vh] leading-[1.5vw]'>{item}</button>
                                </div>
                            )
                        })}
                        {/* <button className='uppercase text-zinc-500 border-[0.3vh] mt-5 mr-3 px-4 py-1 rounded-3xl font-medium text-[2vh] leading-[1.5vw]'>Audit</button>
                        <button className='uppercase text-zinc-500 border-[0.3vh] mt-5 mr-3 px-4 py-1 rounded-3xl font-medium text-[2vh] leading-[1.5vw]'>copywriting</button>
                        <button className='uppercase text-zinc-500 border-[0.3vh] mt-5 mr-3 px-4 py-1 rounded-3xl font-medium text-[2vh] leading-[1.5vw]'>sales deck</button>
                        <button className='uppercase text-zinc-500 border-[0.3vh] mt-5 mr-3 px-4 py-1 rounded-3xl font-medium text-[2vh] leading-[1.5vw]'>Sales design</button> */}
                    </div>
            </motion.div>
            <div className='w-1/2 '>
                    <ul className='text-[2vh] font-medium pb-5'>VISE</ul>
                    <div className='w-full h-[80vh] bg-[url("https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg")] bg-cover bg-center rounded-2xl'></div>
                    <div className='w-full h-5'>
                        <button className='uppercase text-zinc-500 border-[0.3vh] mt-5 mr-3 px-4 py-1 rounded-3xl font-medium text-[2vh] leading-[1.5vw]'>Agency</button>
                        <button className='uppercase text-zinc-500 border-[0.3vh] mt-5 mr-3 px-4 py-1 rounded-3xl font-medium text-[2vh] leading-[1.5vw]'>Comapny presentation</button>
                    </div>
            </div>
        </div>
        <div className='w-full p-20 flex gap-7 relative'>
            <div className='textbtw absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[15vh] text-zinc-600'>
                    {"TRAWA".split('').map((item,index)=>
                        
                        <span key={index}>
                            {item}
                        </span>
                    
                )}
            </div>
            <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[12vh] text-zinc-600'>
                    {"PREMIUM BLEND".split('').map((item,index)=>
                        
                        <span key={index}>
                            {item}
                        </span>
                    
                )}
            </div>
            <div className='w-1/2 '>
                    <ul className='text-[2vh] font-medium pb-5'>TRAWA</ul>
                    <div className='w-full h-[80vh] bg-[url("https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg")] bg-cover bg-center rounded-2xl'></div>
                    <div className='w-full h-5 flex'>
                        {['Brand identity','design research','Investor deck'].map((item,index)=>{
                            return(
                                <div key={index} >
                                    <button className='uppercase text-zinc-500 border-[0.3vh] mt-5 mr-3 px-4 py-1 rounded-3xl font-medium text-[2vh] leading-[1.5vw]'>{item}</button>
                                </div>
                            )
                        })}
                        {/* <button className='uppercase text-zinc-500 border-[0.3vh] mt-5 mr-3 px-4 py-1 rounded-3xl font-medium text-[2vh] leading-[1.5vw]'>Brand identity</button>
                        <button className='uppercase text-zinc-500 border-[0.3vh] mt-5 mr-3 px-4 py-1 rounded-3xl font-medium text-[2vh] leading-[1.5vw]'>design research</button>
                        <button className='uppercase text-zinc-500 border-[0.3vh] mt-5 mr-3 px-4 py-1 rounded-3xl font-medium text-[2vh] leading-[1.5vw]'>Investor deck</button> */}
                    </div>
            </div>
            <div className='w-1/2 '>
                    <ul className='text-[2vh] font-medium pb-5'>PREMIUM BLEND</ul>
                    <div className='w-full h-[80vh] bg-[url("https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-1326x1101.png")] bg-cover bg-center rounded-2xl'></div>
                    <div className='w-full h-5'>
                        <button className='uppercase text-zinc-500 border-[0.3vh] mt-5 mr-3 px-4 py-1 rounded-3xl font-medium text-[2vh] leading-[1.5vw]'>Brand template</button>
                    </div>
            </div>
        </div>

        <div>

        </div>
    </div>
  )
}

export default Cards