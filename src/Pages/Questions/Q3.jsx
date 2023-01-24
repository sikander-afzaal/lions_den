import { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuestionsRadioBtn from "../../Components/QuestionsRadioBtn";
import { useDispatch, useSelector } from "react-redux";
import { addQuestion } from "../../store/questionsSlice";

const Q3 = () => {
  const dispatch = useDispatch();
  const {
    questions: { Q3, Q1 },
  } = useSelector((state) => state.questionsState);
  const navigate = useNavigate();
  const [selection, setSelection] = useState(Q3?.answer ? Q3.answer : "");
  return (
    <div className="flex justify-start items-center gap-5 flex-col w-full">
      <h2 className="title_question">
        {Q1.answer.other === true || Q1.answer === "I am the owner of this home"
          ? "What best describes your home?"
          : "What best describes your client's home?"}
      </h2>
      <p className="text-base text-center mb-8 text-black">
        This question helps us select comps when preparing your client's offer.
      </p>
      <div className="flex justify-start items-start flex-col w-full gap-5">
        <QuestionsRadioBtn
          selection={selection}
          setSelection={setSelection}
          name="type"
          label="Single-family home"
        />
        <QuestionsRadioBtn
          selection={selection}
          setSelection={setSelection}
          name="type"
          label="Townhouse or attached single-family home"
        />
        <QuestionsRadioBtn
          selection={selection}
          setSelection={setSelection}
          name="type"
          label="Apartment or condo"
        />
        <QuestionsRadioBtn
          selection={selection}
          setSelection={setSelection}
          name="type"
          label="Mobile or manufactured home"
        />
      </div>
      <button
        onClick={() => {
          if (selection) {
            dispatch(
              addQuestion({
                qNumber: "Q3",
                qDetails: {
                  heading:
                    Q1.answer.other === true ||
                    Q1.answer === "I am the owner of this home"
                      ? "What best describes your home?"
                      : "What best describes your client's home?",
                  answer: selection,
                },
              })
            );
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
