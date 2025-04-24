"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import Marquee from "react-fast-marquee";

const ImageMar = () => {
  const imgSlide = useRef(null);
  useEffect(()=>{
    gsap.fromTo(imgSlide.current,{
      opacity: 0,
    },{
      opacity: 1,
      duration: 0.6,
      delay: 0.9,
    })
  },[])
  return (
    <div ref={imgSlide} className="w-full h-60 bg-black relative z-[-1]">
      <Marquee pauseOnHover speed={90} className="w-full h-full flex">
      {
        Array(9).fill("").map((_ , index)=>{
          return <div key={index}>
             <img src={`/images/lund${index+1}.png`} className="w-full h-full object-cover object-center" alt="Images" />  
          </div> 
        })
      }
      </Marquee>
    </div>
  )
}

export default ImageMar;