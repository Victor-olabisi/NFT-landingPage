import {  creators } from "../Data"
import styles from "../styles"

const Footer = () => {
  return (
    <section className={`text-white ${styles.marginY} pb-[5rem]`}>
      <h2 className="text-3xl capitalize font-bold">
        creator <span className="font-light">of the week</span>
      </h2>
      <div className="flex flex-wrap gap-y-8 gap-x-6 mt-[5rem]">
        {creators.map((creator) => {
          const { id, star, name, image } = creator;
          return (
            <div className="bg-[#212122] p-[1rem] pr-[5rem] w-[100%] sm:w-[45%] lg:w-[30%] rounded-full flex gap-x-[1rem]">
              <img src={image} alt="" className="h-[4rem]" />
              <div>
                <h4>{name}</h4>
                <span>{star}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center">
        <div className="text-sm text-[#ADADAD] bg-[#212122] mt-10  p-4 py-3 rounded-full flex justify-center">
          watch video
        </div>
      </div>
    </section>
  );
}
export default Footer