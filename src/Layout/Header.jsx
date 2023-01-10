import { useState } from "react";

const Header = () => {
  const [headerToggle, setHeaderToggle] = useState(false);
  return (
    <div className="wrapper fixed top-0 bg-white z-50 left-0 shadow-lg">
      {headerToggle && (
        <div
          onClick={() => setHeaderToggle(false)}
          className="fixed top-0 left-0 z-[98] bg-darkBrown w-full h-full opacity-60"
        ></div>
      )}
      <header className="contain h-[120px] flex justify-between items-center gap-5">
        <img
          src="/logo.png"
          className="w-full object-contain max-w-[114px]"
          alt=""
        />
        <nav
          className={`flex md:overflow-y-visible overflow-y-auto justify-start md:p-0 py-[6rem] px-[3rem] items-center sm:items-start md:flex-row flex-col z-[99] md:items-center gap-[50px] md:gap-5 lg:gap-[50px] md:static fixed top-0 ${
            headerToggle ? "right-0" : "-right-[900px]"
          } transition-all duration-1000 w-full max-w-full sm:max-w-[400px] h-full bg-black md:bg-transparent md:h-auto md:max-w-none md:w-auto`}
        >
          <a
            onClick={() => setHeaderToggle(false)}
            href="#"
            className="text-white md:text-darkBrown text-lg font-medium relative"
          >
            <span className="absolute left-0 top-[130%] bg-darkBrown h-[3px] w-full"></span>
            Home
          </a>
          <a
            onClick={() => setHeaderToggle(false)}
            href="#"
            className="text-white md:text-black text-lg font-medium relative"
          >
            <span className="absolute left-0 top-[130%] bg-transparent h-[3px] w-full"></span>
            Selling
          </a>
          <a
            onClick={() => setHeaderToggle(false)}
            href="#"
            className="text-white md:text-black text-lg font-medium relative"
          >
            <span className="absolute left-0 top-[130%] bg-transparent h-[3px] w-full"></span>
            Refinance
          </a>
          <a
            onClick={() => setHeaderToggle(false)}
            href="#"
            className="text-white md:text-black text-lg font-medium relative"
          >
            <span className="absolute left-0 top-[130%] bg-transparent h-[3px] w-full"></span>
            Loan
          </a>
        </nav>
        <div className="flex justify-start items-center gap-4">
          <button className="rounded-full bg-black text-white border-2 border-solid border-black hover:bg-white hover:text-black transition-all duration-300 cursor-pointer w-[120px] sm:w-[204px] h-[45px] sm:h-[50px] font-bold text-sm sm:text-lg">
            Get an Offer
          </button>
          {headerToggle ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              onClick={() => setHeaderToggle(false)}
              className="w-8 cursor-pointer h-8 relative z-[100] md:hidden block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              onClick={() => setHeaderToggle(true)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="black"
              className="w-8 cursor-pointer h-8 relative z-[100] md:hidden block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
