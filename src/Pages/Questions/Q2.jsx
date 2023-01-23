import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Q2 = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    mls: "",
    brokerageName: "",
  });
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <div className="flex justify-center items-center flex-col gap-8 w-full">
      <h2 className="title_question">Let's verify your agent info</h2>
      <div className="flex justify-start items-start flex-col w-full gap-7">
        <div className="flex justify-start items-start flex-col gap-2 w-full">
          <label htmlFor="mls" className="text-base text-black font-semibold ">
            MLS ID
          </label>
          <input
            onChange={inputHandler}
            type="text"
            name="mls"
            placeholder="Example MLS ID"
            id="mls"
            value={formState.mls}
            className="w-full rounded-md border-2 pl-3 border-solid border-[#dedede] outline-none h-[50px]"
          />
        </div>
        <div className="flex justify-start items-start flex-col gap-2 w-full">
          <label
            htmlFor="brokerageName"
            className="text-base text-black font-semibold "
          >
            Brokerage name (optional)
          </label>
          <input
            onChange={inputHandler}
            type="text"
            id="brokerageName"
            name="brokerageName"
            placeholder="Your brokerage name "
            value={formState.brokerageName}
            className="w-full rounded-md border-2 pl-3 border-solid border-[#dedede] outline-none h-[50px]"
          />
        </div>
      </div>
      <button
        onClick={() => {
          if (formState.mls === "") return;
          navigate("/questions/q3");
        }}
        className={formState.mls !== "" ? "nextBtn" : "disabledBtn"}
      >
        Next
      </button>
    </div>
  );
};

export default Q2;
