import { workHeading, WorkSection } from "@/Data/Data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);
const WorkSec = () => {
  const workImg = useRef([]);
  const workDiv = useRef([]);
  useEffect(()=>{
    workImg.current.forEach((img,index)=>{
      const div = workDiv.current[index];
      if (!img || !div) return;
      gsap.fromTo(img,{
        // opacity: 0,
        scale: 0,
      },{
        scale: 1,
        // opacity: 1,
        duration: 1.6,
        ease: "linear",
        scrollTrigger: {
          trigger: div,
          // markers: true,
          start: "top 90%",
          end: "90% 90%",
          scrub: 1,
        }
      })
    })
  },[])
  return (
    <div className="w-full h-auto bg-[#f1f2f6]">
      {/* Heading Section is here */}
      <div className="w-full flex justify-center items-center">
          <span className="text-[22px] font-[700] md:text-[80px] md:font-[600] lg:text-[100px] uppercase md:tracking-wide">
            {workHeading}
          </span>
        </div>
      {
        WorkSection.map((curElem,index)=>{
          return <div key={index} className={`w-full md:h-[90vh] h-auto flex flex-col md:flex-row justify-center items-center px-4 md:px-24 border-b border-black ${index === 0 && "mt-10"}`}>

          {/* Text Section */}
          <div className="flex flex-col justify-between h-full w-full md:w-1/3 ps-2 py-2">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <span className="text-sm md:text-xl">{curElem.titleNum}</span>
                <span className="text-2xl md:text-4xl font-[500]">{curElem.title}</span>
              </div>
              <div className="flex items-center justify-center gap-2 md:w-42 md:h-16 h-12 w-12 rounded-full bg-white border border-black text-lg transition-all hover:bg-black duration-[0.3s] hover:-translate-y-[8px] hover:scale-[1.1] hover:text-white hover:shadow-2xl shadow-black cursor-pointer">
                <span className="hidden md:flex">{curElem.btn}</span>
                <span>
                  <FaArrowRightLong />
                </span>
              </div>
            </div>
        
            {/* Year mobile */}
            <div className="flex flex-col md:hidden mt-2">
              <span>[ Year ]</span>
              <span>{curElem.year}</span>
            </div>
          </div>
        
          {/* Image Section */}
          <div ref={(el) => (workDiv.current[index] = el)} className="w-full md:w-1/3 h-[300px] md:h-full mt-4 md:mt-0">
            <img
              ref={(el) => (workImg.current[index] = el)}
              src={curElem.img}
              className="w-full h-full object-cover object-center origin-center"
              alt=""
            />
          </div>
        
          {/* Year desktop */}
          <div className="hidden md:flex flex-col items-center w-1/3 h-full gap-2">
            <span>[ Year ]</span>
            <span>{curElem.year}</span>
          </div>
        </div>        
        })
      }
    </div>
  );
};

export default WorkSec;
