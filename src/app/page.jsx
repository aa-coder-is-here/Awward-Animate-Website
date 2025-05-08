"use client";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import BottomSlide from "@/Components/Bottom";
import Consider from "@/Components/Consider";
import Contact from "@/Components/Contact";
import GridSec from "@/Components/GridSec";
import Growth from "@/Components/Growth";
import ImageMar from "@/Components/ImageMar";
import IntroSection from "@/Components/Intro";
import NameSec from "@/Components/NameSec";
import Navbar from "@/Components/Navbar";
import TextHover from "@/Components/TextHover";
import WorkSec from "@/Components/WorkSec";
import Lenis from "lenis";
import localFont from 'next/font/local'
import { useEffect, useState } from "react";
import PortCard from "@/Components/PortCards";
import Loader from "@/Components/Loader";
// import Loader from "@/Components/Loader";
const clash = localFont({
  src: './fonts/ClashDisplay-Variable.ttf',
  display: 'swap',
  variable: '--font-clash',
})

const Home = () => {
  const [ loading , setLoading ] = useState(true);
  useEffect(()=>{
    const lenis = new Lenis();
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const handleLoad = () => setLoading(false);

    if(document.readyState === "complete")
       setLoading(false);
    else
      window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  },[])

  if (loading) {
    return (
      <div className="transition-all duration-75 flex items-center justify-center h-screen bg-black text-white text-2xl">
        <Loader />
      </div>
    );
  }
  

  return (
    <div className={`${clash.className} w-full min-h-screen h-auto relative`}>
      <Navbar />
      <ImageMar />
      <NameSec />
      <IntroSection />
      <WorkSec />
      <Consider />
      <TextHover />
      <Growth />
      <PortCard />
      <GridSec />
      <Contact />
      <BottomSlide />
      <Analytics />
      <SpeedInsights />
    </div>
  )
}

export default Home;