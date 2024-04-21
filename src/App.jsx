import { useState } from 'react'
import styles from './styles'
import { Navbar, Hero } from './component';
Navbar
function App() {
 

  return (
    <>
      {/* <h3 className={`text-5xl uppercase font-bold text-blue-100 `}>nft project</h3> */}
      <section className={` bg-[#0D0D0E] h-[200vh]`}>
        <div className={`${styles.marginX}  ${styles.boxWidth} bg-[#0D0D0E]`}>
          <Navbar />
          <Hero/>
        </div>
      </section>
    </>
  );
}

export default App
