const Navbar = () => {
  return (
    <navbar className="grid grid-cols-[auto,1fr,auto] items-center">
      <div className="h-[3rem] w-[3rem] rounded-full bg-white  grid place-items-center">
        <span className="translate-y-[-10%] font-bold text-4xl">+</span>
      </div>
      <div className="h-[80px] text-[0.7rem] bg-[#1E1E1E] rounded-full text-[#BABABA] grid place-items-center">
        NFTs.STARX For Everyone
      </div>
      <div className="h-[3rem] w-[3rem] rounded-full bg-[#1E1E1E]  grid place-items-center">
        <span className="translate-y-[-10%] font-bold text-4xl">+</span>
      </div>
    </navbar>
  );
}
export default Navbar