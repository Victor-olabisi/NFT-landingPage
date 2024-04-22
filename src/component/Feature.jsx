import { nftFeatured } from "../Data";
import styles from "../styles"
import featuredIcon from '../assets/featuredIcon.svg'
const featuredBtn = ['artcrytpo', 'abstract','mongkey', 'car', 'art']
 
const Feature = () => {
  return (
      <section className={`${styles.marginY}`}>
          <h1 className='text-white text-3xl capitalize font-bold'><span className="font-light">super</span> hot drop</h1>
          <div className="btn-container mt-8 flex gap-x-[.3rem] flex-wrap gap-y-4 text-white opacity-50 capitalize">
              {featuredBtn.map((btn) => {
                  return <span className="bg-[#272727] px-[1.2rem] py-[.5rem] rounded-full">{ btn}</span>;
            })}
          </div>
          <div className="featured flex flex-wrap gap-y-6 gap-x-6 xl:justify-between mt-8">
              {nftFeatured.map((feature) => {
                  const {id, image,eth}=feature
                  return (
                    <article className="bg-white p-[1rem] rounded-xl">
                      <img
                        src={image}
                        alt=""
                        className="h-[20rem] w-[20rem]  xl:w-[23rem] lg:h-[25rem] rounded-xl"
                      />
                      <h4 className="text-xl font-bold text-[#242323] mt-4">
                        ArtCrypto
                      </h4>
                      <div className="flex justify-between ">
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
                    </article>
                  );
              })}
          </div>
    </section>
  )
}
export default Feature