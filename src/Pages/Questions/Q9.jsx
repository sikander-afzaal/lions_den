import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Q9 = () => {
  const navigate = useNavigate();
  const [selection, setSelection] = useState("");
  return (
    <div className="flex justify-start items-center gap-5 flex-col w-full">
      <h2 className="title_question">
        How soon is your client looking to sell?
      </h2>
      <p className="text-base text-center mb-8 text-black">
        Sell in a matter of days or plan months in advance. You control the
        timeline.
      </p>
      <div className="flex justify-start items-start flex-col w-full gap-5">
        <label
          htmlFor="asap"
          className="flex border-2 border-solid border-[#dedede] rounded-md justify-start items-center gap-3 w-full cursor-pointer p-5 h-[72px]"
        >
          <input
            type="radio"
            id="asap"
            checked={selection === "asap"}
            onChange={() => setSelection("asap")}
            className="accent-darkBrown w-[13px] "
            name="soon"
          />
          <p className="text-base text-black font-semibold ">ASAP</p>
        </label>
        <label
          htmlFor="twoToFour"
          className="flex border-2 border-solid border-[#dedede] rounded-md justify-start items-center gap-3 w-full cursor-pointer p-5 h-[72px]"
        >
          <input
            type="radio"
            id="twoToFour"
            checked={selection === "twoToFour"}
            onChange={() => setSelection("twoToFour")}
            className="accent-darkBrown w-[13px] "
            name="soon"
          />
          <p className="text-base text-black font-semibold ">2-4 weeks</p>
        </label>
        <label
          htmlFor="fourTwoSix"
          className="flex border-2 border-solid border-[#dedede] rounded-md justify-start items-center gap-3 w-full cursor-pointer p-5 h-[72px]"
        >
          <input
            type="radio"
            id="fourTwoSix"
            checked={selection === "fourTwoSix"}
            onChange={() => setSelection("fourTwoSix")}
            className="accent-darkBrown w-[13px] "
            name="soon"
          />
          <p className="text-base text-black font-semibold ">4-6 weeks</p>
        </label>
        <label
          htmlFor="sixPlus"
          className="flex border-2 border-solid border-[#dedede] rounded-md justify-start items-center gap-3 w-full cursor-pointer p-5 h-[72px]"
        >
          <input
            type="radio"
            id="sixPlus"
            checked={selection === "sixPlus"}
            onChange={() => setSelection("sixPlus")}
            className="accent-darkBrown w-[13px] "
            name="soon"
          />
          <p className="text-base text-black font-semibold ">6+ weeks</p>
        </label>
        <label
          htmlFor="browsing"
          className="flex border-2 border-solid border-[#dedede] rounded-md justify-start items-center gap-3 w-full cursor-pointer p-5 h-[72px]"
        >
          <input
            type="radio"
            id="browsing"
            checked={selection === "browsing"}
            onChange={() => setSelection("browsing")}
            className="accent-darkBrown w-[13px] "
            name="soon"
          />
          <p className="text-base text-black font-semibold ">Just browsing</p>
        </label>
      </div>
      <button
        onClick={() => {
          if (selection) {
            navigate("/questions/q10");
          } else {
            return;
          }
        }}
        className={`${selection !== "" ? "nextBtn" : "disabledBtn"} `}
      >
        Next
      </button>
    </div>
  );
};

export default Q9;
