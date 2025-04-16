"use client";
import BottomSlide from "@/Components/Bottom";
import Navbar from "@/Components/Navbar";

import localFont from 'next/font/local'

const clash = localFont({
  src: './fonts/ClashDisplay-Variable.ttf',
  display: 'swap',
  variable: '--font-clash',
})

const Home = () => {
  return (
    <div className={`${clash.className} w-full h-screen relative`}>
      <Navbar />
      <BottomSlide />
    </div>
  )
}

export default Home;

