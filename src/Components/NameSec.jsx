"use client";
import { NameSectionData, scrollDatas, scrollingSectionData } from "@/Data/Data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { IconCloudDemo } from "./IconsCloud";

gsap.registerPlugin(ScrollTrigger);
const NameSec = () => {
  const NameDiv = useRef(null);
  const ParentDiv = useRef(null);
  const shapeIs = useRef(null)
  useEffect(() => {
    gsap.to(NameDiv.current, {
      scrollTrigger: {
        trigger: NameDiv.current,
        start: "top 40%",
        endTrigger: ParentDiv.current,
        end: window.innerWidth > 600 ? "bottom+=260 bottom" : "bottom+=500 bottom",
        scrub: 99,
        pinSpacing: false,
        pinSpacer: false,
        pin: true,
      },
    });
    gsap.to(shapeIs.current,{
      rotateY: 360,
      repeat: -1,
      duration: 2,
      yoyo: true,
      ease: "linear"
    })
  }, []);
  return (
    <div ref={ParentDiv} className="w-full h-[95vh] md:h-[180vh] flex flex-col bg-[#f1f2f6]">
      {/* The Name Section */}
      <div
        ref={NameDiv}
        className="w-full h-36 md:h-52 lg:h-56 flex justify-center items-center mt-0 lg:mt-10 overflow-hidden z-[99]"
      >
        <span className="text-[70px] font-[700] md:text-[130px] md:font-[600] lg:text-[250px] uppercase tracking-wide text-black">
          {NameSectionData}
        </span>
      </div>

      {/* The Block Section */}
      <div className="w-full min-h-3/6 h-auto flex md:justify-between gap-[100px] md:gap-0 px-6 md:px-24 mt-16 flex-col md:flex-row overflow-hidden">
        {/* Text Block */}
        <div className="w-full md:w-1/2 flex flex-col">
          <span>{scrollingSectionData.line1}</span>
          <span>{scrollingSectionData.line2}</span>
        </div>

        {/* The Three Model */}
        <div className="md:w-1/2 w-full flex flex-col items-center gap-1">
        <span className="text-5xl uppercase md:text-8xl font-semibold">{scrollDatas.heading}</span>
        <div>
           <IconCloudDemo />
        </div>
        </div>
      </div>
    </div>
  );
};

export default NameSec;