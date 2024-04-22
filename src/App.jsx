import React from 'react'
import Navbar from './components/Navbar';
import Landingpage from './components/Landingpage';
import Marquee from './components/Marquee';
import About from './components/About';
import Play from './components/Play';
import Cards from './components/Cards';
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full minh-screen bg-zinc-900 text-white '>
      <Navbar/>
      <Landingpage/>
      <Marquee/>
      <About/>
      <Play/>
      <Cards/>
    </div>
  )
}

export default App