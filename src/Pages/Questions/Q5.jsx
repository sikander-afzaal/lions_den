import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Q5 = () => {
  const [selection, setSelection] = useState("No");
  const [formState, setFormState] = useState({
    finished: "",
    unfinished: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    if (selection !== "yes") {
      setFormState({
        finished: "",
        unfinished: "",
      });
    }
  }, [selection]);

  return (
    <div className="flex justify-center items-center flex-col gap-5">
      <h2 className="title_question">
        What is your relationship to this home?
      </h2>
      <div className="flex justify-center items-center flex-col w-full gap-4 ">
        <label
          htmlFor="yes"
          className={`flex flex-col border-2 border-solid border-[#dedede] rounded-md justify-start items-center gap-8 w-full cursor-pointer p-5 ${
            selection === "yes" ? "h-auto" : "h-[72px]"
          }`}
        >
          <div className="flex justify-start gap-3 w-full items-center">
            <input
              type="radio"
              checked={selection === "yes"}
              id="yes"
              onChange={() => setSelection("yes")}
              className="accent-darkBrown w-[13px] "
              name="basement"
            />
            <p className="text-base text-black font-semibold ">Yes</p>
          </div>
          {selection === "yes" && (
            <>
              <div className="flex justify-start items-start flex-col gap-2 w-full">
                <label
                  htmlFor="finished"
                  className="text-base text-black font-semibold "
                >
                  Finished sq.ft
                </label>
                <input
                  onChange={(e) =>
                    setFormState((prev) => {
                      return { ...prev, finished: e.target.value };
                    })
                  }
                  type="text"
                  id="finished"
                  placeholder="#,### ft²"
                  value={formState.finished}
                  className="w-full rounded-md border-2 pl-3 border-solid border-[#dedede] outline-none h-[50px]"
                />
              </div>
              <div className="flex justify-start items-start flex-col gap-2 w-full">
                <label
                  htmlFor="unfinished"
                  className="text-base text-black font-semibold "
                >
                  Unfinished sq.ft
                </label>
                <input
                  onChange={(e) =>
                    setFormState((prev) => {
                      return { ...prev, unfinished: e.target.value };
                    })
                  }
                  type="text"
                  id="unfinished"
                  placeholder="#,### ft²"
                  value={formState.unfinished}
                  className="w-full rounded-md border-2 pl-3 border-solid border-[#dedede] outline-none h-[50px]"
                />
              </div>
            </>
          )}
        </label>
        <label
          htmlFor="no"
          className="flex border-2 border-solid border-[#dedede] rounded-md justify-start items-center gap-3 w-full cursor-pointer p-5 h-[72px]"
        >
          <input
            onChange={() => setSelection("no")}
            type="radio"
            id="no"
            checked={selection === "no"}
            className="accent-darkBrown w-[13px] "
            name="basement"
          />
          <p className="text-base text-black font-semibold ">No</p>
        </label>
      </div>
      <button
        onClick={() => {
          navigate("/questions/q6");
        }}
        className="nextBtn"
      >
        Next
      </button>
    </div>
  );
};

export default Q5;
