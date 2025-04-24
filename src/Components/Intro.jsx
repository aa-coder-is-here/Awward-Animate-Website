import { MineIntro } from "@/Data/Data";

const IntroSection = () => {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row justify-center items-stretch md:px-24 px-6 md:py-24 py-8 gap-8 bg-[#f1f2f6]">
      
      {/* Picture Section */}
      <div className="w-full md:w-1/3 h-[300px] md:h-full">
        <img
          src="images/ali.jpg"
          className="w-full h-full object-cover object-center rounded-xl"
          alt="Ali Arif"
        />
      </div>

      {/* Text 1 Div */}
      <div className="w-full md:w-1/3 flex justify-center items-center md:px-12 px-4">
        <p className="text-left text-base md:text-lg font-medium leading-relaxed">
          {MineIntro.para1}
        </p>
      </div>

      {/* Text 2 Div */}
      <div className="w-full md:w-1/3 flex justify-center items-end md:px-12 px-4 md:pb-4">
        <p className="text-left text-base md:text-lg font-medium leading-relaxed">
          {MineIntro.para2}
        </p>
      </div>
      
    </div>
  );
};

export default IntroSection;
