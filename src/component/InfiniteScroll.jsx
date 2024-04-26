import styles from "../styles";
import star from '../assets/Star 2.svg'

const InfiniteScroll = () => {
    return (
      <div className={`w-[100%] bg-[#2F3032] !max-w-auto mb-[5rem] `}>
        {/* <div className={`text-white`}> */}
        <div className="relative flex overflow-x-hidden text-white ">
          <div className="py-4 animate-marque whitespace-nowrap text-5xl">
            <span className=" uppercase ">live </span>
            <span className=" uppercase "> aucition </span>
            <span>
              <img src={star} className="inline-block h-[3rem]" alt="" />
            </span>
            <span className=" uppercase font-light"> live </span>
            <span className=" uppercase font-light">
              aucition &nbsp; &nbsp; &nbsp;
            </span>
          </div>
          <div className="absolute top-0 py-4 animate-marque2 whitespace-nowrap text-5xl ">
            <span>
              <img src={star} className="inline-block h-[3rem]" alt="" />
            </span>
            <span className=" uppercase "> live </span>
            <span className=" uppercase "> aucition </span>
            <span>
              <img src={star} className="inline-block h-[3rem]" alt="" />
            </span>
            <span className=" uppercase font-light"> live </span>
            <span className=" uppercase font-light">aucition</span>
          </div>
        </div>
        {/* </div> */}
      </div>
    );
}
export default InfiniteScroll 