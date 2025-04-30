import { GridData, MarGridText } from "@/Data/Data";
import EmojiMar from "@/SubComponents/Emoji";
import Marquee from "react-fast-marquee";

const GridSec = () => {

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
