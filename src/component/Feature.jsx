import { nftFeatured } from "../Data";
import styles from "../styles"
import featuredIcon from '../assets/featuredIcon.svg'
import { useState } from "react";
const featuredBtn = ['artcrytpo', 'abstract','mongkey', 'car', 'art']
 
const Feature = () => {
  const [active, setActive] = useState(0);

  return (
      <section className={`${styles.marginY}`}>
          <h1 className='text-white text-3xl capitalize font-bold'><span className="font-light">super</span> hot drop</h1>
          <div className="btn-container mt-8 flex gap-x-[.3rem] flex-wrap gap-y-4 text-white text-opacity-50 capitalize">
              {featuredBtn.map((btn,index) => {
                  return (
                    <span
                      onClick={() => setActive(index)}
                      className={`cursor-pointer  px-[1.2rem] py-[.5rem] rounded-full ${
                        active === index ? "bg-[#fff] bg-opacity-100 text-black" : "bg-[#272727]"
                      }`}
                    >
                      {btn}
                    </span>
                  );
            })}
          </div>
          <div className="featured flex flex-wrap gap-y-6 gap-x-6 xl:justify-between mt-8">
              {nftFeatured.map((feature) => {
                  const {id, image,eth}=feature
                  return (
                    <article className="bg-white p-[1rem] pb-[.5rem] rounded-xl w-[100%] sm:w-[auto]">
                      <img
                        src={image}
                        alt=""
                        className="h-[15rem] w-[100%] xsm:h-[20rem] object-cover object-top  xl:w-[23rem] lg:h-[25rem] rounded-xl"
                      />
                      <h4 className="text-xl font-bold text-[#242323] mt-4">
                        ArtCrypto
                      </h4>
                      <div className="flex justify-between border-b-">
                        <h6 className="flex mt-4">
                          <img
                            src={featuredIcon}
                            className="translate-x-[-20%]"
                            alt=""
                          />
                          <span className="translate-x-[-50%] mt-[.4rem] text-[#62606A]">
                            {eth}ETH
                          </span>
                        </h6>
                        <p className="mt-5 text-[.8rem] text-[#989898]">
                          1 of 32
                        </p>
                      </div>
                      <div className="h-[.1rem] bg-[#EDECEC] translate-y-[-1500%]"></div>
                      <div className="flex justify-between items-center translate-y-[-30%]">
                        <p className="text-[#545454] text-sm">3h25m3s</p>
                        <button className="bg-black text-white px-[1.3rem] py-[.7rem] rounded-full text-sm">
                          place a bid
                        </button>
                      </div>
                    </article>
                  );
              })}
          </div>
    </section>
  )
}
export default Feature