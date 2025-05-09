"use client";
import { NameSectionData, scrollDatas, scrollingSectionData } from "@/Data/Data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Card from "./Earth";

gsap.registerPlugin(ScrollTrigger);

const NameSec = () => {
  const NameDiv = useRef(null);
  const ParentDiv = useRef(null);
  const shapeIs = useRef(null);

  useEffect(() => {
    if (!NameDiv.current || !ParentDiv.current) return;

    // Scroll pinning animation without hardcoded bottom values
    gsap.to(NameDiv.current, {
      scrollTrigger: {
        trigger: NameDiv.current,
        start: "top 40%",
        end: () =>
          `+=${ParentDiv.current.offsetHeight - NameDiv.current.offsetHeight}`,
        scrub: 1,
        pin: true,
        pinSpacing: false,
      },
    });

    // Shape animation
    gsap.to(shapeIs.current, {
      rotateY: 360,
      repeat: -1,
      duration: 2,
      yoyo: true,
      ease: "linear",
    });
  }, []);

  return (
    <div
      ref={ParentDiv}
      className="w-full min-h-[150vh] md:min-h-[160vh] flex flex-col bg-[#f1f2f6]"
    >
      {/* Name Section */}
      <div
        ref={NameDiv}
        className="w-full h-36 md:h-52 lg:h-56 flex justify-center items-center mt-0 lg:mt-10 overflow-hidden z-[99]"
      >
        <span className="text-[65px] font-[700] md:text-[130px] md:font-[600] lg:text-[180px] 2xl:text-[250px] uppercase tracking-wide text-black">
          {NameSectionData}
        </span>
      </div>

      {/* Content Section */}
      <div className="w-full min-h-[60vh] h-auto flex md:justify-between gap-[100px] md:gap-0 px-6 md:px-24 mt-16 flex-col md:flex-row overflow-hidden">
        {/* Text Block */}
        <div className="w-full md:w-1/2 flex flex-col">
          <span className="font-medium md:text-xl">
            {scrollingSectionData.line1}
          </span>
          <span className="font-medium md:text-xl">
            {scrollingSectionData.line2}
          </span>

          <div>
            <a
              href="https://cdn.shopify.com/s/files/1/0921/2248/0960/files/Ali_Arif_-_Resume_-_Professional_Web_Devolper_1.pdf?v=1746696385"
              download={true}
              className="flex items-center justify-center gap-2 w-48 h-14 rounded-full bg-white border border-black text-lg transition-all hover:bg-black duration-[0.3s] hover:-translate-y-[8px] hover:scale-[1.1] hover:text-white hover:shadow-2xl shadow-black cursor-pointer mt-8"
            >
              {scrollingSectionData.btnText}
            </a>
          </div>
        </div>

        {/* Model or Globe */}
        <div className="md:w-1/2 w-full flex flex-col items-center gap-1">
          <span className="text-2xl uppercase md:text-5xl text-center font-semibold">
            {scrollDatas.heading}
          </span>
          <div className="relative w-full h-auto md:h-full flex justify-center mt-12">
              <Card />           
          </div>
        </div>
      </div>
    </div>
  );
};

export default NameSec;
