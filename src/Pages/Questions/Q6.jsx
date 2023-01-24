import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import QuestionsRadioBtn from "../../Components/QuestionsRadioBtn";
import { addQuestion } from "../../store/questionsSlice";

const Q6 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    questions: { Q6 },
  } = useSelector((state) => state.questionsState);
  const [selection, setSelection] = useState(Q6?.answer ? Q6.answer : "");
  return (
    <div className="flex justify-start items-center gap-5 flex-col w-full">
      <h2 className="title_question">
        What kind of countertops does your client's kitchen have?
      </h2>
      <div className="flex justify-start items-start flex-col w-full gap-5">
        <QuestionsRadioBtn
          selection={selection}
          setSelection={setSelection}
          label="Laminate/Formica"
          name="countertops"
        />
        <QuestionsRadioBtn
          selection={selection}
          setSelection={setSelection}
          label="Corian"
          name="countertops"
        />
        <QuestionsRadioBtn
          selection={selection}
          setSelection={setSelection}
          label="Solid stone slab"
          name="countertops"
          smallText="Granite, Quartz, Marble"
        />
        <QuestionsRadioBtn
          selection={selection}
          setSelection={setSelection}
          label="Granite Tile"
          name="countertops"
        />
        <QuestionsRadioBtn
          selection={selection}
          setSelection={setSelection}
          label="Other Tile"
          name="countertops"
        />
      </div>
      <button
        onClick={() => {
          if (selection) {
            dispatch(
              addQuestion({
                qNumber: "Q6",
                qDetails: {
                  heading:
                    "What kind of countertops does your client's kitchen have?",
                  answer: selection,
                },
              })
            );
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
