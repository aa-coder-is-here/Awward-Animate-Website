import gsap from "gsap";
import { useEffect, useRef } from "react"

const Cursor = () => {
  const cursor = useRef(null);
  useEffect(()=>{
    const onMouseMove = (dets) => {
      const {clientX , clientY } = dets;
      gsap.to(cursor.current,{
        x: clientX,
        y: clientY
      })
    }

    document.addEventListener("mousemove",onMouseMove)
},[])
  return <div className="cursor w-6 h-6 bg-black hidden fixed top-0 left-0 z-[999] rounded-full pointer-events-none mix-blend-difference p-3 md:flex justify-center items-center" ref={cursor}>
      <span className="text-xs font-900 tracking-wide hidden">View</span>
  </div>
}

export default Cursor