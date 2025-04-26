"use client";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import BottomSlide from "@/Components/Bottom";
import Consider from "@/Components/Consider";
import Contact from "@/Components/Contact";
import Cursor from "@/Components/Cursor";
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
import { useEffect } from "react";
const clash = localFont({
  src: './fonts/ClashDisplay-Variable.ttf',
  display: 'swap',
  variable: '--font-clash',
})

const Home = () => {
  useEffect(()=>{
    const lenis = new Lenis();
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  },[])
  return (
    <div className={`${clash.className} w-full min-h-screen h-auto relative`}>
      <Cursor />
      <Navbar />
      <ImageMar />
      <NameSec />
      <IntroSection />
      <WorkSec />
      <Consider />
      <TextHover />
      <Growth />
      <GridSec />
      <Contact />
      <BottomSlide />
      <Analytics />
      <SpeedInsights />
    </div>
  )
}

export default Home;