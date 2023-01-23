import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Q6 = () => {
  const navigate = useNavigate();
  const [selection, setSelection] = useState("");
  return (
    <div className="flex justify-start items-center gap-5 flex-col w-full">
      <h2 className="title_question">
        What kind of countertops does your client's kitchen have?
      </h2>
      <div className="flex justify-start items-start flex-col w-full gap-5">
        <label
          htmlFor="laminate"
          className="flex border-2 border-solid border-[#dedede] rounded-md justify-start items-center gap-3 w-full cursor-pointer p-5 h-[72px]"
        >
          <input
            type="radio"
            id="laminate"
            checked={selection === "laminate"}
            onChange={() => setSelection("laminate")}
            className="accent-darkBrown w-[13px] "
            name="type"
          />
          <p className="text-base text-black font-semibold ">
            Laminate/Formica
          </p>
        </label>
        <label
          htmlFor="corian"
          className="flex border-2 border-solid border-[#dedede] rounded-md justify-start items-center gap-3 w-full cursor-pointer p-5 h-[72px]"
        >
          <input
            type="radio"
            id="corian"
            checked={selection === "corian"}
            onChange={() => setSelection("corian")}
            className="accent-darkBrown w-[13px] "
            name="type"
          />
          <p className="text-base text-black font-semibold ">Corian</p>
        </label>
        <label
          htmlFor="slab"
          className="flex border-2 border-solid border-[#dedede] rounded-md justify-start items-center gap-3 w-full cursor-pointer p-5 h-[72px]"
        >
          <input
            type="radio"
            id="slab"
            checked={selection === "slab"}
            onChange={() => setSelection("slab")}
            className="accent-darkBrown w-[13px] "
            name="type"
          />
          <p className="text-base text-black font-semibold ">
            Solid stone slab <br />{" "}
            <span className="text-[13px] leading-[1] text-black font-normal ">
              Granite, Quartz, Marble
            </span>
          </p>
        </label>
        <label
          htmlFor="granite"
          className="flex border-2 border-solid border-[#dedede] rounded-md justify-start items-center gap-3 w-full cursor-pointer p-5 h-[72px]"
        >
          <input
            type="radio"
            id="granite"
            checked={selection === "granite"}
            onChange={() => setSelection("granite")}
            className="accent-darkBrown w-[13px] "
            name="type"
          />
          <p className="text-base text-black font-semibold ">Granite Tile</p>
        </label>
        <label
          htmlFor="other"
          className="flex border-2 border-solid border-[#dedede] rounded-md justify-start items-center gap-3 w-full cursor-pointer p-5 h-[72px]"
        >
          <input
            type="radio"
            id="other"
            checked={selection === "other"}
            onChange={() => setSelection("other")}
            className="accent-darkBrown w-[13px] "
            name="type"
          />
          <p className="text-base text-black font-semibold ">Other Tile</p>
        </label>
      </div>
      <button
        onClick={() => {
          if (selection) {
            navigate("/questions/q7");
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

export default Q6;
