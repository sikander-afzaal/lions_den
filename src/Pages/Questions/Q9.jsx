import { useState } from "react";
import QuestionsRadioBtn from "../../Components/QuestionsRadioBtn";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addQuestion } from "../../store/questionsSlice";

const Q9 = () => {
  const dispatch = useDispatch();
  const {
    questions: { Q9, Q1 },
  } = useSelector((state) => state.questionsState);
  const navigate = useNavigate();
  const [selection, setSelection] = useState(Q9?.answer ? Q9.answer : "");
  return (
    <div className="flex justify-start items-center gap-5 flex-col w-full">
      <h2 className="title_question">
        {Q1.answer.other === true || Q1.answer === "I am the owner of this home"
          ? "How soon are you looking to sell?"
          : "How soon is your client looking to sell?"}
      </h2>
      <p className="text-base text-center mb-8 text-black">
        Sell in a matter of days or plan months in advance. You control the
        timeline.
      </p>
      <div className="flex justify-start items-start flex-col w-full gap-5">
        <QuestionsRadioBtn
          selection={selection}
          setSelection={setSelection}
          name="soon"
          label="ASAP"
        />
        <QuestionsRadioBtn
          selection={selection}
          setSelection={setSelection}
          name="soon"
          label="2-4 weeks"
        />
        <QuestionsRadioBtn
          selection={selection}
          setSelection={setSelection}
          name="soon"
          label="4-6 weeks"
        />
        <QuestionsRadioBtn
          selection={selection}
          setSelection={setSelection}
          name="soon"
          label="6+ weeks"
        />
        <QuestionsRadioBtn
          selection={selection}
          setSelection={setSelection}
          name="soon"
          label="Just browsing"
        />
      </div>
      <button
        onClick={() => {
          if (selection) {
            dispatch(
              addQuestion({
                qNumber: "Q9",
                qDetails: {
                  heading: "How soon is your client looking to sell?",
                  answer: selection,
                },
              })
            );
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
