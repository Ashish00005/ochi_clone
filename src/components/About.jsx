import React from 'react'
import {FaArrowUpLong} from 'react-icons/fa6';

const About = () => {
  return (
    <div data-scroll data-scroll-speed='-.3' className='w-full bg-[#CDEB69] rounded-3xl text-black'>
        <div className='pt-11'>
        <h1 className='p-20 font-[Neue Montreal"] text-[3.75vw] leading-[4.5vw] tracking-tight'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
        </div>

        <div className='w-full border-t-[1px]  border-[#a4ac8b]'></div>

        <div className='w-full flex justify-between pb-[12vh] pr-[20vh]'>
                <h1 className='w-1/2 px-20 pt-5 font-[Neue Montreal"]  text-[1vw] tracking-tight'>What you can expect:</h1>
                <div className='w-1/2 flex justify-between'>
                    <h1 className='w-[65%] px-20 pt-5 font-[Neue Montreal"] leading-[1.75vw]  text-[1vw] tracking-tight'>
                        We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it's live or digital, delivered for one or a hundred people   .
                            <br></br><br /> 
                        We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</h1>
                        <h1 className='px-20 pt-[10%] font-[Neue Montreal"] text-[1vw] tracking-tight '>
                            S:<h1 className='pt-10'>Behance</h1>
                            <h1>Instagram</h1>
                            <h1>Twitter</h1>
                            <h1>Facebook</h1> </h1>
                </div>
        </div>

        <div className='w-full border-t-[1px]  border-[#a4ac8b]'></div>

        <div className="nextabout pt-4 pb-[8vh] px-20 flex justify-between"> 
            <h1><h1 className=' font-[Neue Montreal"] text-[3.75vw] leading-[4.5vw] tracking-tight'>Our approach:</h1>
                <button className='flex items-center justify-end rounded-[10vh] text-white uppercase tracking-tighter font-light text-[1.74vw] px-10 py-2 my-10 bg-black'>Read more
                <span >
                <FaArrowUpLong />
                </span>
                </button></h1>

                <div className='w-[100vh] bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg")] h-[75vh] rounded-3xl'></div>
        </div>
    </div>
  )
}

export default About