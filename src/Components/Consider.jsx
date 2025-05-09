"use client";
import { card, ConsiderMeText } from "@/Data/Data";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger"; 

gsap.registerPlugin(ScrollTrigger);

const Consider = () => {
  const card1 = useRef([]);
  const headingIs = useRef(null);
  const container = useRef(null);
  const [ isMob , setMob ] = useState(false);
  useEffect(() => {
    gsap.to(headingIs.current, {
      scrollTrigger: {
        trigger: headingIs.current,
        start: "top 40%",
        endTrigger: container.current,
        end: "bottom+=300 bottom",
        scrub: true,
        pin: true,
      },
    });
    gsap.fromTo(headingIs.current,{
      opacity: 0,
      y: -60,
      scale: 0,
    },{
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: headingIs.current,
        start: "top 90%",
        end: "bottom 90%",
      }
    })
    card1.current.forEach((card)=>{
      gsap.fromTo(
        card,
        {
          y: 0,
        },
        {
          y: -1000,
          ease: "linear",
          scrollTrigger: {
            trigger: card,
            scrub: 1,
            pin: true,
            start: "top 90%",
            end: "bottom top",
          },
        }
      );
      gsap.fromTo(card,{
        opacity: 0,
        rotateY: 180,
      },{
        opacity: 1,
        rotateY: 0,
        scrollTrigger: {
          trigger: card,
          scrub: true,
          start: "top 90%",
          end: "bottom 60%",
        }
      })
    })
    const checkMob = () => {
      window.innerWidth < 768 ? setMob(true) : setMob(false);
    }
    checkMob();

    window.addEventListener("resize" , checkMob);

    return () => window.removeEventListener("resize", checkMob);
  }, []);

  return (
    <section id="con" className="w-full h-auto overflow-hidden bg-[#f1f2f6]" ref={container}>
      <div className="w-full h-[60vh] md:h-screen flex justify-center items-center">
        <span ref={headingIs} className="head-con w-full flex justify-center min-h-[200px] text-3xl chota:text-4xl md:text-9xl font-semibold uppercase">{ConsiderMeText}</span>
      </div>

      <div className="w-full flex flex-col gap-20 md:gap-8 px-24">
     {
      card.map((curElem,index)=>{
        let alignment = "";

        if (index % 3 === 0) alignment = "self-center";
        else if (index % 3 === 1) alignment = "self-start";
        else alignment = "self-end";

        return (
            <Card key={index} refIs = {card1} title = {curElem.title} emoji = {curElem.emoji}  des = {curElem.des} self = {alignment} index = {index} isMob = {isMob} />
          )
        })
      }
        </div>
      </section>
  );
};

export default Consider;

const Card = (props) => {
  const { refIs , title , emoji , des , self , index , isMob } = props
  return (
    <div ref={(el) => refIs.current[index] = el} className={`w-[320px] h-[320px] bg-[#e3e4e8] rounded-[16px] p-6 shadow-[0_6px_24px_rgba(0,0,0,0.08)] flex flex-col justify-center gap-4 ${isMob ? "self-center" : self}`}>
      <h1 className="text-3xl font-semibold">{title}</h1>
      <span className="text-3xl">{emoji}</span>
      <p className="text-[#7b7c7e] text-lg">{des}</p>
    </div>
  )
}