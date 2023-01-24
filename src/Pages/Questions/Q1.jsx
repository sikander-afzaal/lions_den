import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import QuestionsRadioBtn from "../../Components/QuestionsRadioBtn";
import { useDispatch, useSelector } from "react-redux";
import { addQuestion } from "../../store/questionsSlice";

const Q1 = () => {
  const dispatch = useDispatch();
  const {
    questions: { Q1 },
  } = useSelector((state) => state.questionsState);
  const [selection, setSelection] = useState(
    !Q1?.answer.other
      ? Q1?.answer
      : Q1?.answer.other
      ? "Other"
      : "I am the owner of this home"
  );
  const [describe, setDescribe] = useState(
    Q1?.answer.other ? Q1?.answer.otherOption : ""
  );
  const navigate = useNavigate();
  useEffect(() => {
    if (selection !== "Other") {
      setDescribe("");
    }
  }, [selection]);

  return (
    <div className="flex justify-center items-center flex-col gap-5">
      <h2 className="title_question">
        What is your relationship to this home?
      </h2>
      <div className="flex justify-center items-center flex-col w-full gap-4 ">
        <QuestionsRadioBtn
          selection={selection}
          setSelection={setSelection}
          name="relationship"
          label="I am the owner of this home"
        />
        <QuestionsRadioBtn
          selection={selection}
          setSelection={setSelection}
          name="relationship"
          label="I am a realtor or agent"
        />
        <QuestionsRadioBtn
          selection={selection}
          setSelection={setSelection}
          name="relationship"
          label="I am both the homeowner and an agent"
        />
        <label
          htmlFor="other"
          className={`flex flex-col border-2 border-solid border-[#dedede] rounded-md justify-start items-center gap-8 w-full cursor-pointer p-5 ${
            selection === "Other" ? "h-auto" : "h-[72px]"
          }`}
        >
          <div className="flex justify-start gap-3 w-full items-center">
            <input
              type="radio"
              checked={selection === "Other"}
              id="other"
              onChange={() => setSelection("Other")}
              className="accent-darkBrown w-[13px] "
              name="relationship"
            />
            <p className="text-base text-black font-semibold ">Other</p>
          </div>
          {selection === "Other" && (
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
          if (selection !== "Other") {
            dispatch(
              addQuestion({
                qNumber: "Q1",
                qDetails: {
                  heading: "What is your relationship to this home?",
                  answer: selection,
                },
              })
            );
            navigate("/questions/q2");
          } else if (selection === "Other" && describe !== "") {
            dispatch(
              addQuestion({
                qNumber: "Q1",
                qDetails: {
                  heading: "What is your relationship to this home?",
                  answer: { other: true, otherOption: describe },
                },
              })
            );
            navigate("/questions/q2");
          } else return;
        }}
        className={`${
          selection !== "Other" || describe !== "" ? "nextBtn" : "disabledBtn"
        } `}
      >
        Next
      </button>
    </div>
  );
};

export default Q1;
