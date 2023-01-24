import { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuestionsRadioBtn from "../../Components/QuestionsRadioBtn";

const Q9 = () => {
  const navigate = useNavigate();
  const [selection, setSelection] = useState("");
  return (
    <div className="flex justify-start items-center gap-5 flex-col w-full">
      <h2 className="title_question">
        How soon is your client looking to sell?
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
