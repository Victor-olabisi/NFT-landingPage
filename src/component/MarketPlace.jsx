import { marketPlace } from "../Data";
import styles from "../styles";
import { MdArrowOutward } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y,Autoplay, FreeMode } from "swiper/modules";


import "swiper/css";
// import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const MarketPlace = () => {
  return (
    <section className={`py-20 sm:py-[10rem] ${styles.boxWidth}`}>
      <div className="grid md:grid-cols-2 lg:gap-x-[10rem] gap-y-16 md:gap-y-0 items-center">
        <div className="lg:w-[150rem]">
          <h1
            className={`text-white    sm:text-5xl uppercase text-3xl font-bold leading-[3rem]`}
          >
            create nfts <br />
            marketplace <br />{" "}
            <span className="font-light">for your community</span>
          </h1>
          <p className="text-white text-opacity-60 mt-[45px]">
            Powered by{" "}
            <span className="font-bold uppercase">starx protocol</span>
          </p>
          <button className="bg-white py-[1rem] px-[1rem] rounded-full capitalize text-black flex items-center gap-x-2 font-semibold mt-[45px]">
            create marketplace{" "}
            <span className="font-bold text-xl">
              <MdArrowOutward />
            </span>
          </button>
        </div>
        {/* <div className="grid gap-y-4"> */}
          <Swiper
            spaceBetween={20}
                  slidesPerView={1}
                  autoplay={{
                      delay: 3000,
                      disableOnInteraction:true
                  }}
                  speed={1000}
            // navigation
                  pagination={{ clickable: true }}
                  modules={[FreeMode,Pagination,Autoplay,Navigation]}
            // scrollbar={{ draggable: true }}
                  className="w-[100%] pr-[80px] md:pr-[150px]"
          >
            {/* <SwiperSlide> */}
              {marketPlace.map((item) => {
                const { id, image, text, volume, flow, title } = item;
                  return (
                    <SwiperSlide>
                      <article
                        // key={id}
                        className="bg-[#222323] p-[.7rem] rounded-xl overflow-hidden max-w-[30rem] "
                      >
                        <img
                          src={image}
                          className="h-[13rem] object-cover w-[100%] sm:h-auto"
                          alt=""
                        />
                        <h3 className="text-white capitalize  text-xl sm:text-2xl font-bold mt-4">
                          {title}
                        </h3>
                        <p className="text-[#9E9E9E] mt-2 text-sm sm:text-lg">
                          {text}
                        </p>
                        <div className="flex gap-x-6">
                          <div className="text-white  grid ">
                            <span className="capitalize mt-4 text-[13px] ">
                              volume
                            </span>
                            {volume}
                          </div>
                          <div className="text-white  grid ">
                            <span className="capitalize mt-4 text-[13px] ">
                              flow
                            </span>
                            {flow}
                          </div>
                        </div>
                      </article>
                    </SwiperSlide>
                  );
              })}
            {/* </SwiperSlide> */}
          </Swiper>
        </div>
      {/* </div> */}
    </section>
  );
}
export default MarketPlace