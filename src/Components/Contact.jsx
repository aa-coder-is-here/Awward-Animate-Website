import gsap from "gsap";
import Link from "next/link";
import { useEffect, useRef } from "react";

const Contact = () => {
  const eyes = useRef([]);
  useEffect(() => {
    const moveEyes = (e) => {
      const { clientX, clientY } = e;
  
      eyes.current.forEach((eye) => {
        const blackCircle = eye.parentElement.getBoundingClientRect();
        const pupil = eye.getBoundingClientRect();
  
        const eyeCenterX = blackCircle.left + blackCircle.width / 2;
        const eyeCenterY = blackCircle.top + blackCircle.height / 2;
  
        const dx = clientX - eyeCenterX;
        const dy = clientY - eyeCenterY;
        const angle = Math.atan2(dy, dx);
  
        // Calculate max distance (inside black circle bounds)
        const maxX = (blackCircle.width - pupil.width) / 2;
        const maxY = (blackCircle.height - pupil.height) / 2;
        const distance = Math.min(Math.hypot(dx, dy), Math.min(maxX, maxY));
  
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
  
        gsap.to(eye, { x, y, duration: 0.2 });
      });
    };
  
    document.addEventListener("mousemove", moveEyes);
    return () => document.removeEventListener("mousemove", moveEyes);
  }, []);
  
  
  return (
    <div className="w-full h-[50vh] md:h-[100vh] bg-[#f1f2f6] flex flex-col items-center justify-between md:py-12 pt-6 relative">
      {/* Lets Talk Button */}
      <div className="w-full h-24 md:h-full px-12 md:px-32">
        <button className="w-full h-full border-[4px] border-[rgb(78,75,75)] rounded-2xl md:rounded-[60px] text-3xl md:text-[160px] text- uppercase font-[700] transition-colors transition-border ease-in-out duration-300 hover:bg-black hover:text-white hover:border-none cursor-pointer">
          <Link href="http://linkedin.com/in/im-ali-arif">Let's Talk</Link>
        </button>
      </div>

      <div className="w-full h-full flex justify-center items-end relative overflow-hidden">
        {/* SVG is here */}
        <div className="absolute bg-green-600 w-[36rem] md:w-[76rem] md:h-[76rem] h-[34rem] rounded-full md:top-4 top-5 flex justify-center gap-5">
          {/* Eyes */}
          {
            Array(2).fill("").map((_,index)=>{
              return (
                <div className="relative w-32 h-32 md:w-48 md:h-48 bg-white rounded-full flex justify-center items-center translate-y-2/4 md:translate-y-3/4" key={index}>
                    <div className="w-3/4 h-3/4 rounded-full bg-black flex justify-center items-center relative">
                      <div ref={(el)=> eyes.current[index] = el} className="w-6 h-6 bg-white rounded-full realtive"></div>
                    </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Contact;