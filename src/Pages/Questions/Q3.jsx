import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Q3 = () => {
  const navigate = useNavigate();
  const [selection, setSelection] = useState("");
  return (
    <div className="flex justify-start items-center gap-5 flex-col w-full">
      <h2 className="title_question">
        What best describes your client's home?
      </h2>
      <p className="text-base text-center mb-8 text-black">
        This question helps us select comps when preparing your client's offer.
      </p>
      <div className="flex justify-start items-start flex-col w-full gap-5">
        <label
          htmlFor="single"
          className="flex border-2 border-solid border-[#dedede] rounded-md justify-start items-center gap-3 w-full cursor-pointer p-5 h-[72px]"
        >
          <input
            type="radio"
            id="single"
            checked={selection === "single"}
            onChange={() => setSelection("single")}
            className="accent-darkBrown w-[13px] "
            name="type"
          />
          <p className="text-base text-black font-semibold ">
            Single-family home
          </p>
        </label>
        <label
          htmlFor="townHouse"
          className="flex border-2 border-solid border-[#dedede] rounded-md justify-start items-center gap-3 w-full cursor-pointer p-5 h-[72px]"
        >
          <input
            type="radio"
            id="townHouse"
            checked={selection === "townHouse"}
            onChange={() => setSelection("townHouse")}
            className="accent-darkBrown w-[13px] "
            name="type"
          />
          <p className="text-base text-black font-semibold ">
            Townhouse or attached single-family home
          </p>
        </label>
        <label
          htmlFor="appartment"
          className="flex border-2 border-solid border-[#dedede] rounded-md justify-start items-center gap-3 w-full cursor-pointer p-5 h-[72px]"
        >
          <input
            type="radio"
            id="appartment"
            checked={selection === "appartment"}
            onChange={() => setSelection("appartment")}
            className="accent-darkBrown w-[13px] "
            name="type"
          />
          <p className="text-base text-black font-semibold ">
            Apartment or condo
          </p>
        </label>
        <label
          htmlFor="mobile"
          className="flex border-2 border-solid border-[#dedede] rounded-md justify-start items-center gap-3 w-full cursor-pointer p-5 h-[72px]"
        >
          <input
            type="radio"
            id="mobile"
            checked={selection === "mobile"}
            onChange={() => setSelection("mobile")}
            className="accent-darkBrown w-[13px] "
            name="type"
          />
          <p className="text-base text-black font-semibold ">
            Mobile or manufactured home
          </p>
        </label>
      </div>
      <button
        onClick={() => {
          if (selection) {
            navigate("/questions/q4");
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

export default Q3;
