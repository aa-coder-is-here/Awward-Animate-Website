"use client";
import Navbar from "@/Components/Navbar";

import localFont from 'next/font/local'

const clash = localFont({
  src: './fonts/ClashDisplay-Variable.ttf',
  display: 'swap',
  variable: '--font-clash',
})

const Home = () => {
  return (
    <div className={`${clash.className} w-full h-screen`}>
      <Navbar />
    </div>
  )
}

export default Home;