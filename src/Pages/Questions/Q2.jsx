import { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuestionsInputBox from "../../Components/QuestionsInputBox";
import { useDispatch, useSelector } from "react-redux";
import { addQuestion } from "../../store/questionsSlice";

const Q2 = () => {
  const dispatch = useDispatch();
  const {
    questions: { Q2 },
  } = useSelector((state) => state.questionsState);
  const navigate = useNavigate();
  const [formState, setFormState] = useState(
    Q2?.answer
      ? { ...Q2.answer }
      : {
          mls: "",
          brokerageName: "",
        }
  );
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
        <QuestionsInputBox
          inputHandler={inputHandler}
          placeholder="Example MLS ID"
          name="mls"
          label="MLS ID"
          value={formState.mls}
        />
        <QuestionsInputBox
          inputHandler={inputHandler}
          placeholder="Your brokerage name"
          name="brokerageName"
          label="Brokerage name (optional)"
          value={formState.brokerageName}
        />
      </div>
      <button
        onClick={() => {
          if (formState.mls === "") return;
          dispatch(
            addQuestion({
              qNumber: "Q2",
              qDetails: {
                heading: "Let's verify your agent info",
                answer: { ...formState },
              },
            })
          );
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
