import { BottomText } from "@/Data/Data";
import Shape from "@/SubComponents/Shape";
import Marquee from "react-fast-marquee";

const BottomSlide = () => {
  return (
    <div className="w-full h-10 fixed z-[99] bottom-0 left-0 flex justify-center items-center bg-white">
      <Marquee autoFill speed={80}>
        {
          Array(1).fill("").map((_,index)=>{
            return <div key={index} className="flex justify-center items-center mx-2 gap-1 capitalize font-[400]">
               <span className="text-xl">{BottomText}</span>
               <Shape w = "20" h = "20" />
            </div>
          })
        }  
      </Marquee>       
    </div>
  )
}

export default BottomSlide;