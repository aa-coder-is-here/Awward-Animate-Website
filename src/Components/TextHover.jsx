import { TextDiv } from "@/Data/Data";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const TextHover = () => {
  const ImgAre = useRef([]);
  const textRefs = useRef([]);

  const checkImg = (index) => {
    switch (index) {
      case 0:
        return "top-[10%] right-[1%]";
      case 1:
        return "-top-[10%] left-[5%]";
      case 2:
        return "-top-[20%] left-[45%]";
      case 3:
        return "top-[50%] right-[1%]";
      case 4:
        return "top-[50%] left-[10%]";
      case 5:
        return "top-[60%] right-[25%]";
      default:
        return "";
    }
  };

  const handleHover = (index, type) => {
    ImgAre.current.forEach((img, i) => {
      gsap.to(img, {
        opacity: i === index && type === "enter" ? 1 : 0,
        scale: i === index && type === "enter" ? 1 : 0.8,
        duration: 0.4,
        ease: "power2.out",
      });
    });
  };

  useEffect(() => {
    ImgAre.current.forEach((img) => {
      gsap.set(img, { opacity: 0, scale: 0.8 });
    });
  }, []);

  return (
    <div className="w-full h-auto bg-[#f1f2f6] overflow-hidden">
      {/* Space Div */}
      <div className="w-full h-[60vh]"></div>

      {/* Text Div */}
      <div className="w-full h-[40vh] md:h-screen flex flex-col items-center relative">
        {/* Images */}
        <div className="absolute w-full h-full pointer-events-none">
          <div className="w-full h-full relative md:flex hidden">
            {
              Array(6).fill("").map((_, index) => (
                <div key={index}>
                  <img
                    ref={(el) => ImgAre.current[index] = el}
                    src={`/images/text${index + 1}.png`}
                    alt=""
                    className={`w-[300px] h-[350px] object-center object-cover absolute z-[2] ${checkImg(index)}`} 
                  />
                </div>
              ))
            }
          </div>
        </div>

        {/* Texts */}
        {
          TextDiv.map((curElem, index) => (
            <span
              key={index}
              className="text-3xl md:text-9xl uppercase font-semibold relative z-[1]"
              onMouseEnter={() => handleHover(index, "enter")}
              onMouseLeave={() => handleHover(index, "leave")}
              ref={(el) => textRefs.current[index] = el}
            >
              {curElem.Text}
            </span>
          ))
        }
      </div>

      {/* Space Div */}
      <div className="w-full h-[60vh] hidden md:flex"></div>
    </div>
  );
};

export default TextHover;
