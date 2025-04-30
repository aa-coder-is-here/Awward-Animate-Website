import { GridData, MarGridText } from "@/Data/Data";
import EmojiMar from "@/SubComponents/Emoji";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Marquee from "react-fast-marquee";

gsap.registerPlugin(ScrollTrigger);

const GridSec = () => {
  const gridDivs = useRef([]);
  useEffect(()=>{
    const tl = gsap.timeline();
    tl.fromTo(gridDivs.current,
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        stagger: 0.4,
        duration: 0.2,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: gridDivs.current[0],
          start: "top 90%",
          end: "bottom 90%",
          scrub: 1,
        }
      }
    );
    
  })
  return (
    <div className="w-full h-auto bg-[#f1f2f6]">
      {/* Marquee */}
      <div className="w-full h-[20vh] flex justify-center items-end">
        <div className="w-full h-32 bg-[#ffe6ec] text-[#123c10] flex items-center text-7xl font-[500] overflow-hidden">
          <Marquee autoFill speed={120} className="overflow-hidden">
            <span className="mx-4">{MarGridText}</span>
            <EmojiMar width={80} height={80} />
          </Marquee>
        </div>
      </div>

      {/* Gird is here */}
      <div className="w-full md:h-[90vh] bg-[#f1f2f6] grid md:grid-cols-3 md:grid-rows-2 grid-cols-1 gap-1">
        {GridData.map((curElem, index) => {
          return (
            <div
              key={index}
              ref={(el) => gridDivs.current[index] = el}
              className={`w-full md:h-full ${
                index === 0 ? "bg-white text-black" : "bg-black text-white"
              } flex flex-col justify-center px-12 gap-4 md:gap-6 py-20`}
            >
              <span
                className={`${
                  index === 0
                    ? "text-5xl md:text-7xl text-center"
                    : "text-3xl md:text-5xl"
                } font-semibold`}
              >
                {curElem.heading}
              </span>
              <span className="text-md md:text-xl">{curElem.des}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GridSec;
