import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import QuestionsInputBox from "../../Components/QuestionsInputBox";
import QuestionsRadioBtn from "../../Components/QuestionsRadioBtn";

const Q5 = () => {
  const [selection, setSelection] = useState("No");
  const [formState, setFormState] = useState({
    finishedSqft: "",
    unfinishedSqft: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    if (selection !== "yes") {
      setFormState({
        finishedSqft: "",
        unfinishedSqft: "",
      });
    }
  }, [selection]);
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <div className="flex justify-center items-center flex-col gap-5">
      <h2 className="title_question">
        What is your relationship to this home?
      </h2>
      <div className="flex justify-center items-center flex-col w-full gap-4 ">
        <label
          htmlFor="yes"
          className={`flex flex-col border-2 border-solid border-[#dedede] rounded-md justify-start items-center gap-8 w-full cursor-pointer p-5 ${
            selection === "Yes" ? "h-auto" : "h-[72px]"
          }`}
        >
          <div className="flex justify-start gap-3 w-full items-center">
            <input
              type="radio"
              checked={selection === "Yes"}
              id="yes"
              onChange={() => setSelection("Yes")}
              className="accent-darkBrown w-[13px] "
              name="basement"
            />
            <p className="text-base text-black font-semibold ">Yes</p>
          </div>
          {selection === "Yes" && (
            <>
              <QuestionsInputBox
                label="Finished sq.ft"
                name="finishedSqft"
                placeholder="#,### ft²"
                inputHandler={inputHandler}
                value={formState.finishedSqft}
              />
              <QuestionsInputBox
                label="Unfinished sq.ft"
                name="unfinishedSqft"
                placeholder="#,### ft²"
                inputHandler={inputHandler}
                value={formState.unfinishedSqft}
              />
            </>
          )}
        </label>
        <QuestionsRadioBtn
          selection={selection}
          setSelection={setSelection}
          label="No"
          name="basement"
        />
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
