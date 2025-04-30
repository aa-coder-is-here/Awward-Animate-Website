import { CardPortHead, DataPort } from "@/Data/Data";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const PortCard = () => {
  const cards = useRef([]);
  useEffect(() => {
    gsap.to(cards.current, {
      y: -40,
      duration: 1,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
      stagger: {
        each: 0.3,
        repeat: -1,
        yoyo: true
      }
    });
  }, []);  
  return (
    <div className="w-full h-auto flex flex-col gap-12 mt-32">
      <div className="w-full flex flex-col items-center justify-center gap-6 md:gap-2">
        <span className="text-6xl md:text-9xl uppercase font-semibold">
          {CardPortHead.heading}
        </span>
        <span className="w-3/4 md:w-1/2 md:text-xl capitalize font-medium text-center">
          {CardPortHead.para}
        </span>
      </div>

      <div className="w-full h-auto flex justify-center items-center px-4 md:px-24 py-20 gap-12 flex-wrap md:flex-nowrap">
        {
        DataPort.map((curElem,index) => (
          <div ref={(el)=> cards.current[index] = el} key={curElem.id} className="w-[300px] md:w-[500px] aspect-[3/4] flip-card cursor-pointer">
            <div className="flip-inner">
              {/* Front */}
              <div className="flip-front">
                <img
                  src="/images/back.png"
                  className="w-full h-full object-cover object-center"
                  alt="Front"
                />
              </div>

              {/* Back */}
              <div className="flip-back bg-white flex justify-between items-center flex-col md:px-8 px-4 py-2 md:py-6">
                {/* Heading */}
                <div className="w-full h-1/6 flex justify-between items-center text-3xl md:text-5xl uppercase font-semibold">
                  <span>{curElem.heading}</span>
                  <span>{curElem.aphla}</span>
                </div>

                {/* Sub Skills Section */}
                <div className="w-full h-4/6 flex flex-col gap-2">
                {
                  curElem.innerFeature.map((curElem,index)=>{
                    return (
                      <span key={index} className="border-b-[1px] border-black border-dashed md:text-xl py-2 md:py-3">{curElem}</span>
                    )
                  })
                }
                </div>

                {/* Heading Reverse */}
                <div className="w-full h-1/6 flex justify-between items-center text-3xl md:text-5xl uppercase font-semibold flex-row-reverse">
                  <span className="rotate-180">{curElem.heading}</span>
                  <span className="rotate-180">{curElem.aphla}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortCard;
