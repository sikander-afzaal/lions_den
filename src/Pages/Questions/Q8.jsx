import { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuestionsCheckBox from "../../Components/QuestionsCheckBox";

const Q8 = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    leasedSolar: false,
    foundationIssues: false,
    fireDamage: false,
    wellWater: false,
    septic: false,
    asbestos: false,
    horse: false,
    mobile: false,
    none: false,
  });
  const inputHandler = (e) => {
    const { name, checked } = e.target;
    if (name === "none") {
      setFormState({
        leasedSolar: false,
        foundationIssues: false,
        fireDamage: false,
        wellWater: false,
        septic: false,
        asbestos: false,
        horse: false,
        mobile: false,
        none: true,
      });
    } else {
      setFormState((prev) => {
        return { ...prev, none: false, [name]: checked };
      });
    }
  };
  return (
    <div className="flex justify-center items-center flex-col gap-5">
      <h2 className="title_question">
        Do any of these apply to your client's home?
      </h2>
      <p className="mb-3 text-center">
        This helps us determine whether we can make an offer for your client's
        home. You can choose a few.
      </p>
      <div className="flex gap-4 justify-start items-start flex-col w-full">
        <QuestionsCheckBox
          inputHandler={inputHandler}
          name="leasedSolar"
          label="Leased or financed solar panels"
          checked={formState.leasedSolar}
        />
        <QuestionsCheckBox
          inputHandler={inputHandler}
          name="foundationIssues"
          label="Known foundation Issues"
          checked={formState.foundationIssues}
          smallText="Excessive cracking, uneven floors"
        />
        <QuestionsCheckBox
          inputHandler={inputHandler}
          name="fireDamage"
          label="Fire damage"
          checked={formState.fireDamage}
        />
        <QuestionsCheckBox
          inputHandler={inputHandler}
          name="wellWater"
          label="Well water"
          checked={formState.wellWater}
          smallText="Your client maintains a well to supply water"
        />
        <QuestionsCheckBox
          inputHandler={inputHandler}
          name="septic"
          label="Septic system"
          checked={formState.septic}
          smallText="Separate from municipal sewage"
        />
        <QuestionsCheckBox
          inputHandler={inputHandler}
          name="asbestos"
          label="Asbestos siding"
          checked={formState.asbestos}
        />
        <QuestionsCheckBox
          inputHandler={inputHandler}
          name="horse"
          label="Horse property"
          checked={formState.horse}
          smallText="Livestock live on property"
        />
        <QuestionsCheckBox
          inputHandler={inputHandler}
          name="mobile"
          label="Mobile or manufactured home"
          checked={formState.mobile}
        />
        <QuestionsCheckBox
          inputHandler={inputHandler}
          name="none"
          label="None of the above"
          checked={formState.none}
        />
      </div>
      <button onClick={() => navigate("/questions/q9")} className="nextBtn">
        Next
      </button>
    </div>
  );
};

export default Q8;
