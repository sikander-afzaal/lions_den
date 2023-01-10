const Works = () => {
  return (
    <div className="wrapper mt-[100px]">
      <div className="contain xl:flex-row flex-col justify-between items-center gap-10">
        <img
          src="/works.png"
          className="object-contain w-full max-w-[640px]"
          alt=""
        />
        <div className="flex justify-start items-center text-center sm:text-left sm:items-start flex-col">
          <h2 className="title mb-3">How it works</h2>{" "}
          <p className="sub">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore <br /> <br />
            <strong>What you get from us!</strong> <br />{" "}
            <br className="sm:block hidden" />
            <strong> Quick quote</strong> <br />
            <strong>Local service technicians</strong> <br />
            <strong>Residential and commercial projects</strong> <br /> <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore
          </p>{" "}
          <button className="rounded-full mt-10 w-[217px] h-[40px] sm:h-[50px] bg-[#C58960] text-white border-[1px] border-solid border-[#C58960]  hover:bg-transparent hover:text-black cursor-pointer transition-all duration-300 text-lg font-bold h ">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Works;
