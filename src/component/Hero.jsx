import heroImg from '../assets/heroimg.jpg'
import { FaArrowDown } from "react-icons/fa6";
import artImg1 from '../assets/artImg1.png'
import artImg2 from "../assets/artImg2.jpg";
import art from '../assets/art.svg'
import styles from '../styles';
import { useState } from 'react';

const Hero = () => {
  return (
    <section className={`sm:mt-[80px] mt-[60px] ${styles.marginY}`}>
      <div>
        <div className="text-center ">
          <h2 className="text-[#BABABA]  font-light text-[1.6rem] uppercase  sm:text-[2.5rem]">
            experience the next{" "}
          </h2>
          <h1 className="text-[#BABABA] sm:text-[3rem] uppercase text-[2rem] font-semibold">
            ev
            <span className=" text-[1.2rem]  sm:text-[1.7rem] pr-[2rem] rounded-full border-[.25rem] border-[#BABABA]">
              <span className="text-3xl font-bold">+</span>
            </span>
            lution of collectibles{" "}
          </h1>
          <p className="text-[#BABABA] text-[.9rem] ">
            Digital marketplace for buy and sell NFTS from teh worlds top
            artists.
          </p>
        </div>
        <div className=" mt-[66px] mb-[168px] md:min-h-[530px] sm:bg-[#CCCDCD] h-[100p rounded-xl grid place-items-center ">
          <img
            src={heroImg}
            alt="nft  image"
            className=" w-[760px]  md:h-[530px] rounded-xl"
          />
        </div>
      </div>
      <div className="max-w-[1300px] hidden lg:mt-[-220px] mx-auto h-[100px] bg-black opacity-30 px-[1rem] items-center rounded-full flex ">
        <div className="bg-white opacity-70 inline-block py-[1.7rem]  rounded-full px-[3rem] text-white">
          create
        </div>
      </div>
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
    </section>
  );
}
export default Hero