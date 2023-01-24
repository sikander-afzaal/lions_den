import { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuestionsRadioBtn from "../../Components/QuestionsRadioBtn";

const Q3 = () => {
  const navigate = useNavigate();
  const [selection, setSelection] = useState("");
  return (
    <div className="flex justify-start items-center gap-5 flex-col w-full">
      <h2 className="title_question">
        What best describes your client's home?
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
