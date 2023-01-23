import { useState } from "react";
import { useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

const Questions = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [progress, setprogress] = useState(1);
  useEffect(() => {
    window.scrollTo(0, 0);
    const pathEnd = pathname.split("/questions")[1];
    switch (pathEnd) {
      case "":
        setprogress(((1 / 11) * 100).toFixed(2));
        break;
      case "/q2":
        setprogress(((2 / 11) * 100).toFixed(2));
        break;
      case "/q3":
        setprogress(((3 / 11) * 100).toFixed(2));
        break;
      case "/q4":
        setprogress(((4 / 11) * 100).toFixed(2));
        break;
      case "/q5":
        setprogress(((5 / 11) * 100).toFixed(2));
        break;
      case "/q6":
        setprogress(((6 / 11) * 100).toFixed(2));
        break;
      case "/q7":
        setprogress(((7 / 11) * 100).toFixed(2));
        break;
      case "/q8":
        setprogress(((8 / 11) * 100).toFixed(2));
        break;
      case "/q9":
        setprogress(((9 / 11) * 100).toFixed(2));
        break;
      case "/q10":
        setprogress(((10 / 11) * 100).toFixed(2));
        break;
      case "/contact":
        setprogress(((11 / 11) * 100).toFixed(2));
        break;
      default:
        break;
    }
  }, [pathname]);

  return (
    <div className="wrapper pt-[170px] md:pt-0 md:mt-[170px]">
      <div
        style={{ width: `${progress}%` }}
        className={`fixed top-[120px] left-0  bg-darkBrown z-10 h-[4px] transition-all duration-300`}
      ></div>
      <div className="contain  relative flex-col gap-5 justify-center items-center">
        <div
          onClick={() => {
            navigate(-1);
          }}
          className="absolute cursor-pointer z-10 font-bold -top-[30px] left-[0px] flex justify-start items-center gap-1 text-darkBrown"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
          Back
        </div>
        <div className="flex justify-center items-center w-full max-w-[580px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Questions;
