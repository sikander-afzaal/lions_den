import { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuestionsInputBox from "../../Components/QuestionsInputBox";

const Q2 = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    mls: "",
    brokerageName: "",
  });
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
