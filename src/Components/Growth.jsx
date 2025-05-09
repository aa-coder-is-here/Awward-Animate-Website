"use client";
import { GrowthDiv, GrowtHeading, GrowtPara } from "@/Data/Data";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Growth = () => {
  const colorDivs = useRef([]);

  useEffect(() => {
    colorDivs.current.forEach((group) => {
      group.forEach((div) => {
        gsap.fromTo(
          div,
          { scaleY: 0, transformOrigin: "top" },
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
    <section
      id="gro"
      className="w-full md:min-h-screen bg-[#f1f2f6] overflow-hidden mt-24 md:mt-0"
    >
      {/* Heading Section */}
      <div className="w-full h-[20vh] md:h-[75vh] flex justify-end md:justify-center items-center flex-col gap-4">
        <span className="text-3xl chota:text-4xl md:text-9xl uppercase font-semibold">
          {GrowtHeading}
        </span>
        <div className="flex flex-col items-center px-6 md:px-0">
          <span className="text-md md:text-xl text-center md:text-left">
            {GrowtPara.line1}
          </span>
          <span className="text-md md:text-xl hidden md:flex">
            {GrowtPara.line2}
          </span>
        </div>
      </div>

      {/* Growth Components */}
      <div className="w-full flex flex-col">
        {GrowthDiv.map((curElem, outerIndex) => {
          colorDivs.current[outerIndex] = [];
          return (
            <div key={outerIndex} className="w-full relative">
              {/* Overlay Div */}
              <div className="w-full absolute flex flex-col">
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
              <div className="w-full h-20 md:h-36 flex justify-between items-center text-2xl md:text-6xl font-semibold px-4 md:px-24 bg-transparent relative">
                <span>{curElem.num}</span>
                <span>{curElem.line}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Growth;
