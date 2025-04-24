"use client";
import { GrowthDiv, GrowtHeading, GrowtPara } from "@/Data/Data";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger"; 

gsap.registerPlugin(ScrollTrigger);

const Growth = () => {
  const colorDivs = useRef([]);

  useEffect(() => {
    colorDivs.current.forEach((group, groupIndex) => {
      group.forEach((div, i) => {
        gsap.fromTo(
          div,
          {
            scaleY: 0,
            transformOrigin: "top",
          },
          {
            scaleY: 1,
            scrollTrigger: {
              trigger: div,
              start: "top 90%",
              end: "bottom 50%",
              scrub: true,
            },
          }
        );
      });
    });
  }, []);

  return (
    <div className="w-full min-h-screen h-auto bg-[#f1f2f6] overflow-hidden">
      {/* Heading Section */}
      <div className="w-full h-[70vh] md:h-[75vh] flex md:justify-center justify-end items-center flex-col gap-4 py-20 md:py-0">
        <span className="text-4xl md:text-9xl uppercase font-semibold">{GrowtHeading}</span>
        <div className="flex flex-col items-center px-10 md:px-0">
          <span className="text-md md:text-xl text-center md:text-left">{GrowtPara.line1}</span>
          <span className="text-md md:text-xl hidden md:flex">{GrowtPara.line2}</span>
        </div>
      </div>

      {/* Growth Components */}
      <div className="w-full h-auto flex flex-col">
        {
         GrowthDiv.map((curElem, outerIndex) => {
          colorDivs.current[outerIndex] = [];
          return (
            <div key={outerIndex} className="w-full h-full relative">
              {/* Overlay Div */}
              <div className="w-full h-full absolute flex flex-col">
                {Array(6)
                  .fill("")
                  .map((_, innerIndex) => (
                    <div
                      key={innerIndex}
                      ref={(el) =>
                        (colorDivs.current[outerIndex][innerIndex] = el)
                      }
                      className={`w-full h-[14px] md:h-6 ${curElem.color} scale-y-0`}
                    ></div>
                  ))}
              </div>

              {/* Content */}
              <div className="w-full h-21 md:h-36 flex justify-between items-center md:text-6xl text-2xl font-semibold px-2 md:px-24 relative bg-transparent">
                <span>{curElem.num}</span>
                <span>{curElem.line}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Growth;
