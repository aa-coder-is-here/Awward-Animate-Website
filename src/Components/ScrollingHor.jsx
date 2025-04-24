"use client";

import { scrollingSectionData } from "@/Data/Data";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollingHorizon = () => {
  const wrapperRef = useRef(null);
  const innerRef = useRef(null); // for translating

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(innerRef.current, {
        xPercent: -300, // 400vw - 100vw = 300vw to scroll
        ease: "none",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: () => "+=" + wrapperRef.current.offsetWidth,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          markers: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="main-Div w-full h-[100vh] relative overflow-hidden" ref={wrapperRef}>
      {/* Horizontally Scrolling Content */}
      <div ref={innerRef} className="flex w-[400vw] h-screen">
        <div className="w-screen flex items-center justify-center bg-[#f3f3f3]">
          <h1 className="text-[48vw] font-bold">Page Not Found</h1>
        </div>

        {Array(4).fill("").map((_, index) => (
          <div key={index} className="w-screen h-screen flex items-center justify-center relative">
            <div className="w-[300px] h-[300px] rounded-2xl overflow-hidden relative">
              <img
                src={`/images/lund${index + 1}.png`}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Outro section */}
      <div className="absolute top-[110vh] w-full h-[100vh] flex justify-center items-center">
        <span className="text-[40px] font-[400] text-center">
          {scrollingSectionData.line1}
          <br />
          {scrollingSectionData.line2}
        </span>
      </div>
    </div>
  );
};

export default ScrollingHorizon;
