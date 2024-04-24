import styles from "../styles";

const MarketPlace = () => {
  return (
    <section className={`py-20 sm:py-[10rem] ${styles.boxWidth}`}>
      <div>
        <h1
          className={`text-white    sm:text-5xl uppercase text-3xl font-bold`}
        >
          create nfts <br />
          marketplace <br />{" "}
          <span className="font-light">for your community</span>
        </h1>
        <p className="text-white text-opacity-60 mt-[45px]">
          Powered by <span className="font-bold uppercase">starx protocol</span>
              </p>
              <button className="bg-white py-[1rem] px-[1rem] rounded-full capitalize text-black font-semibold mt-[45px]">create marketplace <span></span></button>
      </div>
    </section>
  );
}
export default MarketPlace