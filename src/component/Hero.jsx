import heroImg from '../assets/heroimg.jpg'

import art from '../assets/art.svg'
import styles from '../styles';
import { useState } from 'react';
import InfiniteScroll from './InfiniteScroll';

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
      
    </section>
  );
}
export default Hero