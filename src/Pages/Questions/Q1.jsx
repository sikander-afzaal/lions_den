import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

const Q1 = () => {
  const [selection, setSelection] = useState("owner");
  const [describe, setDescribe] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (selection !== "other") {
      setDescribe("");
    }
  }, [selection]);

  return (
    <div className="flex justify-center items-center flex-col gap-5">
      <h2 className="title_question">
        What is your relationship to this home?
      </h2>
      <div className="flex justify-center items-center flex-col w-full gap-4 ">
        <label
          htmlFor="owner"
          className="flex border-2 border-solid border-[#dedede] rounded-md justify-start items-center gap-3 w-full cursor-pointer p-5 h-[72px]"
        >
          <input
            onChange={() => setSelection("owner")}
            type="radio"
            id="owner"
            checked={selection === "owner"}
            className="accent-darkBrown w-[13px] "
            name="relationship"
          />
          <p className="text-base text-black font-semibold ">
            I am the owner of this home
          </p>
        </label>
        <label
          htmlFor="agent"
          className="flex border-2 border-solid border-[#dedede] rounded-md justify-start items-center gap-3 w-full cursor-pointer p-5 h-[72px]"
        >
          <input
            type="radio"
            id="agent"
            checked={selection === "agent"}
            onChange={() => setSelection("agent")}
            className="accent-darkBrown w-[13px] "
            name="relationship"
          />
          <p className="text-base text-black font-semibold ">
            I am a realtor or agent
          </p>
        </label>
        <label
          htmlFor="both"
          className="flex border-2 border-solid border-[#dedede] rounded-md justify-start items-center gap-3 w-full cursor-pointer p-5 h-[72px]"
        >
          <input
            type="radio"
            id="both"
            checked={selection === "both"}
            onChange={() => setSelection("both")}
            className="accent-darkBrown w-[13px] "
            name="relationship"
          />
          <p className="text-base text-black font-semibold ">
            I am both the homeowner and an agent
          </p>
        </label>
        <label
          htmlFor="other"
          className={`flex flex-col border-2 border-solid border-[#dedede] rounded-md justify-start items-center gap-8 w-full cursor-pointer p-5 ${
            selection === "other" ? "h-auto" : "h-[72px]"
          }`}
        >
          <div className="flex justify-start gap-3 w-full items-center">
            <input
              type="radio"
              checked={selection === "other"}
              id="other"
              onChange={() => setSelection("other")}
              className="accent-darkBrown w-[13px] "
              name="relationship"
            />
            <p className="text-base text-black font-semibold ">Other</p>
          </div>
          {selection === "other" && (
            <div className="flex justify-start items-start flex-col gap-2 w-full">
              <label
                htmlFor="describe"
                className="text-base text-black font-semibold "
              >
                Describe your relationship
              </label>
              <input
                onChange={(e) => setDescribe(e.target.value)}
                type="text"
                id="describe"
                value={describe}
                className="w-full rounded-md border-2 pl-3 border-solid border-[#dedede] outline-none h-[50px]"
              />
            </div>
          )}
        </label>
      </div>
      <button
        onClick={() => {
          if (selection !== "other" || describe !== "") {
            navigate("/questions/q2");
          } else {
            return;
          }
        }}
        className={`${
          selection !== "other" || describe !== "" ? "nextBtn" : "disabledBtn"
        } `}
      >
        Next
      </button>
    </div>
  );
};

export default Q1;
