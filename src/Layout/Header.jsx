import { useEffect } from "react";
import { useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link } from "react-scroll";

const Header = () => {
  const [headerToggle, setHeaderToggle] = useState(false);
  const [showMiddleNav, setShowMiddleNav] = useState(true);
  const [activeLink, setActiveLink] = useState("home");
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname.includes("questions")) {
      setShowMiddleNav(false);
    } else {
      setShowMiddleNav(true);
    }
  }, [pathname]);

  return (
    <div className="wrapper fixed top-0 bg-white z-50 left-0 shadow-lg">
      {headerToggle && (
        <div
          onClick={() => setHeaderToggle(false)}
          className="fixed top-0 left-0 z-[98] bg-darkBrown w-full h-full opacity-60"
        ></div>
      )}
      <header className="contain h-[120px] flex justify-between items-center gap-5">
        <RouterLink to={"/"}>
          <img
            src="/logo.png"
            className="w-full object-contain max-w-[114px]"
            alt=""
          />
        </RouterLink>
        {showMiddleNav && (
          <nav
            className={`flex nav md:overflow-y-visible overflow-y-auto justify-start md:p-0 py-[6rem] px-[3rem] items-center sm:items-start md:flex-row flex-col z-[99] md:items-center gap-[50px] md:gap-5 lg:gap-[50px] md:static fixed top-0 ${
              headerToggle ? "right-0" : "-right-[900px]"
            } transition-all duration-1000 w-full max-w-full sm:max-w-[400px] h-full bg-black md:bg-transparent md:h-auto md:max-w-none md:w-auto`}
          >
            <Link
              activeClass="activeLink"
              to="home"
              spy={true}
              offset={-200}
              smooth={true}
              duration={500}
              onSetInactive={() => setActiveLink("")}
              onSetActive={() => setActiveLink("home")}
              onClick={() => setHeaderToggle(false)}
            >
              {activeLink === "home" && (
                <span className="absolute left-0 top-[130%] bg-darkBrown h-[3px] w-full"></span>
              )}
              Home
            </Link>
            <Link
              activeClass="activeLink"
              to="sell"
              spy={true}
              offset={-200}
              smooth={true}
              duration={500}
              onSetInactive={() => setActiveLink("")}
              onSetActive={() => setActiveLink("sell")}
              onClick={() => setHeaderToggle(false)}
            >
              {activeLink === "sell" && (
                <span className="absolute left-0 top-[130%] bg-darkBrown h-[3px] w-full"></span>
              )}
              Selling
            </Link>
            <Link
              activeClass="activeLink"
              to="refinance"
              spy={true}
              offset={-200}
              smooth={true}
              onSetInactive={() => setActiveLink("")}
              duration={500}
              onSetActive={() => setActiveLink("refinance")}
              onClick={() => setHeaderToggle(false)}
            >
              {activeLink === "refinance" && (
                <span className="absolute left-0 top-[130%] bg-darkBrown h-[3px] w-full"></span>
              )}
              Refinance
            </Link>
            <Link
              activeClass="activeLink"
              to="loan"
              spy={true}
              offset={-200}
              onSetInactive={() => setActiveLink("")}
              smooth={true}
              duration={500}
              onSetActive={() => setActiveLink("loan")}
              onClick={() => setHeaderToggle(false)}
            >
              {activeLink === "loan" && (
                <span className="absolute left-0 top-[130%] bg-darkBrown h-[3px] w-full"></span>
              )}
              Loan
            </Link>
          </nav>
        )}
        <div className="flex justify-start items-center gap-4">
          <RouterLink
            to={"/questions"}
            className="rounded-full flex justify-center items-center bg-black text-white border-2 border-solid border-black hover:bg-white hover:text-black transition-all duration-300 cursor-pointer w-[120px] sm:w-[204px] h-[45px] sm:h-[50px] font-bold text-sm sm:text-lg"
          >
            Get an Offer
          </RouterLink>
          {showMiddleNav ? (
            headerToggle ? (
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
            )
          ) : (
            ""
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
