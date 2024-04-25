import { useState } from 'react'
import styles from './styles'
import { Navbar, Hero,Feature, MarketPlace,Footer,About, InfiniteScroll } from './component';
Navbar
function App() {
 

  return (
    <>
      {/* <h3 className={`text-5xl uppercase font-bold text-blue-100 `}>nft project</h3> */}
      <section className={` bg-[#0D0D0E] h-[200vh overflow-x-hidden`}>
        <div className={`${styles.marginX} ${styles.boxWidth} bg-[#0D0D0E]`}>
          <Navbar />
          <Hero />
        </div>
        <InfiniteScroll/>
        <div className={`${styles.marginX} ${styles.boxWidth} bg-[#0D0D0E]`} >
          <About />
          <Feature />
        </div>
        <div className={`bg-[#121212] ${styles.marginX} ${styles.boxWidt}`}>
          <MarketPlace />
        </div>
        <div className={`${styles.marginX} ${styles.boxWidth} bg-[#0D0D0E]`}>
          <Footer />
        </div>
      </section>
    </>
  );
}

export default App
