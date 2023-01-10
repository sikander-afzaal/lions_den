const Services = () => {
  return (
    <div className="wrapper bg-[#F9F2EE] py-[70px] xl:py-[126px] mt-[80px] xl:mt-[140px]">
      <div className="contain flex-col justify-center items-center">
        <h2 className="title">Our Services</h2>
        <p className="sub text-center max-w-[900px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
          consectetur adipiscing elit,{" "}
        </p>
        <div className="flex xl:flex-row flex-col justify-between items-stretch gap-[30px] xl:gap-0 mt-[20px] xl:mt-[80px]">
          <div className="flex justify-start flex-col max-w-[412px] text-center items-center gap-5 py-[45px] px-5">
            <img
              src="/service1.png"
              className="h-[88px] object-contain"
              alt=""
            />
            <h3 className="text-black font-bold text-lg md:text-[22px]">
              Sell your property
            </h3>
            <p className="text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore{" "}
            </p>
          </div>
          <div className="flex  rounded-[10px] justify-start flex-col bg-brownGr border-[7px] border-solid border-[#AF6B3C26] max-w-[412px] text-center items-center gap-5 py-[45px] px-5">
            <img
              src="/service2.png"
              className="h-[88px] object-contain"
              alt=""
            />
            <h3 className="text-[#AF6B3C] font-bold text-lg md:text-[22px]">
              Refinance your property
            </h3>
            <p className="text-[#AF6B3C]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </p>{" "}
            <button className="rounded-full mt-3 w-[217px] h-[40px] sm:h-[50px] bg-[#C58960] text-white border-[1px] border-solid border-[#C58960] hover:bg-transparent cursor-pointer transition-all duration-300 text-lg font-bold h ">
              Get an Offer
            </button>
          </div>{" "}
          <div className="flex justify-start flex-col max-w-[412px] text-center items-center gap-5 py-[45px] px-5">
            <img
              src="/service3.png"
              className="h-[88px] object-contain"
              alt=""
            />
            <h3 className="text-black font-bold text-lg md:text-[22px]">
              Fund a project (Basically a loan)
            </h3>
            <p className="text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
