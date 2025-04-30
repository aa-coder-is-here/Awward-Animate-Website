import { CardData } from "@/Data/Data";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger"; 

gsap.registerPlugin(ScrollTrigger);

const Cards = () => {
  const CardsAre = useRef([]);

  useEffect(() => {
    CardsAre.current.forEach((card, index) => {
      if (!card) return;

      let moverYDis = 0;
      let moverXDis = 0;

      if (index === 0) {
        moverXDis = 500;
        moverYDis = 500;
      }

      // Scroll based movement
      gsap.to(card, {
        x: moverXDis,
        y: moverYDis,
        ease: "power1.out",
        scrollTrigger: {
          trigger: card,
          start: "top 60%",
          end: "+=200%",
          scrub: true,
          // **On enter and leave disable floating animation**
          onEnter: () => gsap.killTweensOf(card, "y"),
          onLeaveBack: () => gsap.killTweensOf(card, "y"),
        },
      });

      // Floating idle animation
      gsap.to(card, {
        y: "-=30",
        duration: 1.1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    });
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#f1f2f6] h-auto mb-32">
      {/* Heading Section */}
      <div className="w-full h-[50vh] flex flex-col px-24 justify-center">
        {
          CardData.map((curElem, index) => (
            <span key={index} className={`text-9xl text-black uppercase font-semibold ${index === 1 && "self-center"}`}>
              {curElem}
            </span>
          ))
        }
      </div>

      {/* Cards Section */}
      <div className="w-full h-auto px-24 flex gap-8 justify-center relative">
        {
          Array(4).fill("").map((_, index) => (
            <div
              key={index}
              ref={(el) => CardsAre.current[index] = el}
              className="w-84 h-[470px] bg-black rounded-2xl absolute left-[calc(50% - 336px)]"
            >
              
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Cards;
