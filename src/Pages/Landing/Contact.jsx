const Contact = () => {
  return (
    <div className="wrapper my-[70px] sm:my-[100px] xl:my-[150px]">
      <div className="contain  justify-center xl:justify-between items-center gap-5">
        <img
          src="/contact.png"
          className="w-[506px] xl:block hidden object-contain"
          alt=""
        />
        <form className="flex xl:w-auto w-full p-5 sm:p-10 justify-start rounded-[10px] bg-white items-center flex-col gap-5 shadow-2xl">
          <h2 className="text-[30px] sm:text-[35px] md:text-[52px] text-center font-bold text-black">
            Send us a message
          </h2>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full mt-5 rounded-[10px] border-solid border-[1px] border-[rgba(0,0,0,0.7)] h-[60px] bg-transparent pl-3 text-base font-normal text-[rgba(0,0,0,0.7)]"
          />
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full rounded-[10px] border-solid border-[1px] border-[rgba(0,0,0,0.7)] h-[60px] bg-transparent pl-3 text-base font-normal text-[rgba(0,0,0,0.7)]"
          />
          <textarea
            placeholder="Write your message"
            className="w-full rounded-[10px] resize-none border-solid border-[1px] border-[rgba(0,0,0,0.7)] h-[130px] bg-transparent pt-3 pl-3 text-base font-normal text-[rgba(0,0,0,0.7)]"
          />
          <button className="rounded-full mt-2  w-full h-[60px] sm:h-[50px] bg-[#C58960] text-white border-[1px] border-solid border-[#C58960]  hover:bg-transparent hover:text-black cursor-pointer transition-all duration-300 text-lg font-bold  ">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
