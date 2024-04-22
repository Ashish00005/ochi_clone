import React, { useEffect, useRef,useState } from 'react'

const Play = () => {
    const [rotate, setRotate] = useState(0)

   useEffect(()=>{
       window.addEventListener("mousemove",(e)=>{
           let mouseX = e.clientX
           let mouseY = e.clientY
           let deltaX = mouseX - window.innerWidth/2;
           let deltaY = mouseY - window.innerHeight/2;

           var angle = Math.atan2(deltaY,deltaX) * (180/Math.PI)
            setRotate(angle-180);
            
       })
   })

  return (
    <div className='w-full h-screen overflow-hidden'>
       <div data-scroll data-scroll-speed='-.7' className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
            <div className='absolute flex gap-10 w-1/4 h-1/4 bg-transparent top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] '>
                <div className=' flex items-center justify-center w-1/2 h-full rounded-full bg-zinc-100'>
                    <div className='w-2/3 h-2/3 bg-zinc-900 rounded-full relative '>
                        <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-semibold tracking-[0.5vh] text-zinc-300'>PLAY</div>
                        <div style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)`}} className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full '>
                            <div className='w-[4.25vh] h-[4.25vh] rounded-full bg-zinc-100'></div>
                        </div>
                    </div>
                </div>
                <div className='relative flex items-center justify-center w-1/2 h-full rounded-full bg-zinc-100'>
                    <div className='w-2/3 h-2/3 bg-zinc-900 rounded-full absolute '>
                    <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-semibold tracking-[0.5vh] text-zinc-300'>PLAY</div>
                        <div style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)`}} className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full '>
                            <div className='w-[4.25vh] h-[4.25vh] rounded-full bg-zinc-100'></div>
                        </div>
                    </div>
                </div>
            </div>

       </div>
    </div>
  )
}

export default Play