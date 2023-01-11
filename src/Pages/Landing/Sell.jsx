const Sell = () => {
  return (
    <div
      id="sell"
      className="wrapper mt-[50px] md:mt-[100px] py-[50px] md:py-[100px] bg-[#F9F2EE]"
    >
      <div className="contain xl:flex-row flex-col justify-between items-center gap-[30px] xl:gap-[20px]">
        <div className="grid xl:max-w-[800px] grid-cols-1 md:grid-cols-2 grid-rows-2 gap-[30px]">
          <div className="flex justify-start items-start gap-3 bg-brownGr rounded-[10px] border-[5px] border-solid border-[#AF6B3C26] p-5">
            <img
              src="/service2.png"
              className="object-contain h-[30px]"
              alt=""
            />
            <div className="flex justify-start items-start flex-col gap-1">
              <h3 className="text-[22px] font-semibold text-[#af6b3c]">
                Best real-estate solutions
              </h3>
              <p className="text-base text-[#af6b3c]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore{" "}
              </p>
            </div>
          </div>
          <div className="flex justify-start items-start gap-3   p-5">
            <img src="/sell2.png" className="object-contain h-[30px]" alt="" />
            <div className="flex justify-start items-start flex-col gap-1">
              <h3 className="text-[22px] font-semibold text-black">
                Best Homes
              </h3>
              <p className="text-base text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore{" "}
              </p>
            </div>
          </div>
          <div className="flex justify-start items-start gap-3   p-5">
            <img src="/sell3.png" className="object-contain h-[30px]" alt="" />
            <div className="flex justify-start items-start flex-col gap-1">
              <h3 className="text-[22px] font-semibold text-black">
                Best Prices
              </h3>
              <p className="text-base text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore{" "}
              </p>
            </div>
          </div>
          <div className="flex justify-start items-start gap-3   p-5">
            <img src="/sell4.png" className="object-contain h-[30px]" alt="" />
            <div className="flex justify-start items-start flex-col gap-1">
              <h3 className="text-[22px] font-semibold text-black">
                Best Services
              </h3>
              <p className="text-base text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full xl:max-w-[505px] justify-start items-center text-center md:text-left md:items-start flex-col gap-5">
          <h2 className="title">Sell Your Property with us!</h2>
          <p className="sub">
            Lorem ipsum dolor sit amet consectetur. Est dolor ut eu nec gravida
            adipiscing maecenas. Sed nullam sodales nunc posuere amet ut. Eu non
            egestas morbi velit eleifend commodo. Id eu etiam libero habitasse.
          </p>
          <button className="rounded-full  w-[217px] h-[40px] sm:h-[50px] bg-[#C58960] text-white border-[1px] border-solid border-[#C58960]  hover:bg-transparent hover:text-black cursor-pointer transition-all duration-300 text-lg font-bold ">
            Get an Offer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sell;
