import heroImg from '../assets/heroimg.jpg'

import art from '../assets/art.svg'
import styles from '../styles';
import { useState } from 'react';
import InfiniteScroll from './InfiniteScroll';
const categories = ['Create', 'Explore', 'Sell', 'Drops', 'Try StarX NFT']


const Hero = () => {
  const [active, setActive] = useState(0)
  return (
    <section className={`sm:mt-[80px] mt-[60px] ${styles.margin}`}>
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
            className=" w-[760px]  md:h-[530px] rounded-xl z-index-10 "
          />
        </div>
      </div>
      <div className='flex items-start '>
        <div className="  lg:mt-[-210px] mx-auto p-[.5rem] bg-[#26282A] relative z-index-2 opacity-3  items-center rounded-full  gap-x-2 justify-center z-index-100 hidden lg:flex ">
          {categories.map((category,index) => {
            return (
              <div
                key={category}
                onClick={() => setActive(index)}
                className={`  inline-block py-[1.4rem] cursor-pointer  rounded-full px-[3rem] text- ${
                  active == index ? "bg-white text-black" : "bg-[#454648] text-white"
                }`}
              >
                {category}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default Hero