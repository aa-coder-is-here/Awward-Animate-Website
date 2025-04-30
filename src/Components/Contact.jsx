const Contact = () => {
  return (
    <div className="w-full h-[50vh] md:h-[100vh] bg-[#f1f2f6] flex flex-col items-center justify-between px-12 md:px-32 py-12">
      {/* Lets Talk Button */}
      <div className="w-full h-24 md:h-full">
        <button className="w-full h-full border-[4px] border-[rgb(78,75,75)] rounded-2xl md:rounded-[60px] text-3xl md:text-[160px] text- uppercase font-[700] transition-colors transition-border ease-in-out duration-300 hover:bg-black hover:text-white hover:border-none cursor-pointer">Let's Talk</button>
      </div>

      <div className="w-full h-full flex justify-center items-end">
        {/* 3D Model */}
        <span></span>
      </div>
    </div>
  )
}

export default Contact;