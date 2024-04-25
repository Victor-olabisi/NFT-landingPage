import { FaArrowDown } from "react-icons/fa6";
import artImg1 from "../assets/artImg1.png";
import artImg2 from "../assets/artImg2.jpg";

const About = () => {
  return (
    <div className="flex flex-col gap-y-[2rem] lg:flex-row justify-between">
      <div className="grid gap-y-16">
        <span className="h-[5rem] w-[5rem]  border-2 rounded-full  border-[#A2A2A2] opacity-50 text-white text-4xl grid place-items-center">
          <FaArrowDown />
        </span>
        <div className="text-white opacity-50 max-w-[25rem]">
          <p className="mb-4 ">
            are you ready to explore the limitless possibilities of artificial
            intelligence? look no further! STARX is your one stop destination
            for all things AI{" "}
          </p>
          <p>
            Whether you are a seasoned AI professional, a curious Enthusiasts,
            or a business looking to leverage AI technologies{" "}
          </p>
        </div>
      </div>
      <div className="grid gap-y-8">
        <div className="uppercase text-4xl sm:text-5xl text-white mb-8  lg:text-right ">
          <h3 className="font-bold mb-2">collect super</h3>
          <h3 className="font-light ">rare digital art</h3>
        </div>
        <div className="flex translate-x-[-10%] sm:translate-x-0 ">
          <div className="relative art-container ">
            <div className="art-1 z-10 ">
              <img
                src={artImg1}
                alt=""
                className="h-[13rem]  art-img sm:h-[17rem] md:h-[500px] lg:h-aut translate-x-[17%] lg:translate-x-[17%]"
              />
            </div>
          </div>

          <img
            src={artImg2}
            className=" h-[10rem] sm:h-[14rem] md:h-[397px]  rounded-xl"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default About;
