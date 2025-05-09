"use client";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { Logo, NavbarContent } from "@/Data/Data"
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";

const Navbar = () => {
  const [isOpen , setOpen] = useState(false);
  const wholeDiv = useRef(null);
  const NavBar = useRef(null);
  const cross = useRef(null);
  const Navlinks = useRef(null);
  const logo = useRef(null);
  const menuMob = useRef(null);
  const tlref = useRef(null);

  const handleHover = (e) => {
    gsap.to(e.currentTarget,{
      y: -4,
      scale: 1.2,
      duration: 0.3,
      ease: "power2.out",
    })
  }
  const handleHoverEnd = (e) => {
    gsap.to(e.currentTarget,{
      y: 0,
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    })
  }
  // Whole Navbar
  useEffect(()=>{
    if(window.innerWidth < 600) 
      return
    const tlPc = gsap.timeline();
    const piecesNav = gsap.utils.toArray(".main div");
    tlPc.fromTo(wholeDiv.current,{
      scaleX: 0,
      opacity: 0,      
    },{
      scaleX: 1,
      opacity: 1,
      duration: 0.4
    }).fromTo(piecesNav,{
      y: -20,
      opacity: 0,
    },{
      y: 0,
      opacity: 1,
      stagger: 0.3
    })
  },[])

  // Mobile Menu
  useEffect(()=>{
    if(window.innerWidth > 600)
      return
    const tlMob = gsap.timeline();
    tlMob.fromTo(wholeDiv.current,{
      scaleX: 0,
      opacity: 0,      
    },{
      scaleX: 1,
      opacity: 1,
      duration: 0.9
    }).fromTo(logo.current,{
      y: -20,
      opacity: 0,
    },{
      y: 0,
      opacity: 1,
    }).fromTo(menuMob.current,{
      y: -20,
      opacity: 0,
    },{
      y: 0,
      opacity: 1,
    })
  },[])


  // Moblile Animations
  useEffect(()=>{
    tlref.current = gsap.timeline({paused: true});
    const links = gsap.utils.toArray(".navlinks span")

    tlref.current.fromTo(NavBar.current,{
      scaleX: 0,
    },{
      scaleX: 1,
      duration: 0.5,
    }).fromTo(cross.current,{
      opacity: 0,
      y: -20,
    },{
      opacity: 1,
      y: 0,
    }).fromTo(links,{
      opacity: 0,
      y: -20,
    },{
      y: 0,
      opacity: 1,
      stagger: 0.2,
    })
  },[]);
  useEffect(()=>{
    if(isOpen){
      tlref.current.play();
    }else{
      tlref.current.reverse();
    }
    console.log(`Ah Bruuhhh how's the website yo dev homiee :) \n Let's Connect on LinkedIn https://www.linkedin.com/in/im-ali-arif/`)
  },[isOpen])
  const checkHref = (index) => {
    switch (index) {
      case 0:
        return "#work"
      case 1: 
        return "#con"
      case 2: 
        return "#gro"
      default:
        return ""
    }
  }
  return (
    <>
    <div className="nav w-full h-20 bg-[#f1f2f6] px-4 md:px-10 py-4 md:py-5">
      <div className="main w-full h-full bg-black rounded-full text-white md:px-10 px-5 flex justify-between items-center" ref={wholeDiv} >
         <div className="font-[800] text-3xl tracking-wider cursor-not-allowed"
         onMouseEnter={handleHover}
         onMouseLeave={handleHoverEnd}
         ref={logo}
         >{Logo}</div>

        <div className="hidden md:flex gap-8 text-xl font-[600] tracking-wide">
         {
           NavbarContent.map((curElem,index)=>{
             return (
               <Link href={checkHref(index)} key={index} className="cursor-pointer uppercase" 
               onMouseEnter={handleHover}
               onMouseLeave={handleHoverEnd}
               >
                    {curElem}
                </Link>
              ) 
            })
          }
          </div>

          <div className="flex md:hidden text-white text-3xl cursor-pointer" onClick={()=>{
            setOpen(!isOpen)
          }}
          ref={menuMob}
          >
          <RxHamburgerMenu />
          </div>
      </div>
    </div>

    {/* Mobile Header  */}
    <div className={`w-full h-screen bg-black fixed top-0 left-0 px-12 py-6 origin-right scale-x-0 z-[999]`} ref={NavBar}>
      {/* Icons wala Span */}
      <span ref={cross} className=" text-white text-3xl cursor-pointer flex justify-end origin-center" onClick={()=>{
            setOpen(!isOpen)
          }}>
      <RxCross1 />
      </span>

      <div className="w-full flex flex-col items-center gap-4 mt-10 navlinks" ref={Navlinks}>
        {
          NavbarContent.map((curElem,index)=>{
            return <span key={index} className="text-[#C2C2C2] font-[500] text-3xl uppercase tracking-wide">
              <Link href={checkHref(index)} onClick={()=>setOpen(!isOpen)}>
              {curElem}
              </Link>
            </span>
          })
        }
      </div>
    </div>
   </>
  )
}

export default Navbar