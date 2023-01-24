import { useNavigate } from "react-router-dom";
import { useState } from "react";
import DropDown from "../../Components/DropDown";
import ToolTip from "../../Components/ToolTip";
import { useDispatch, useSelector } from "react-redux";
import { addQuestion } from "../../store/questionsSlice";

const Q4 = () => {
  const dispatch = useDispatch();
  const {
    questions: { Q4, Q1 },
  } = useSelector((state) => state.questionsState);
  const navigate = useNavigate();
  const [infoSelected, setInfoSelected] = useState(false);
  const [formState, setFormState] = useState(
    Q4?.answer
      ? { ...Q4.answer }
      : {
          beds: 1,
          fullBathrooms: 1,
          partialBathrooms: 1,
          sqFt: "",
          floors: 1,
          yearBuilt: 1,
          pool: "In-ground",
          coveredParking: "None",
        }
  );
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <div className="flex justify-start items-center gap-5 flex-col w-full">
      <h2 className="title_question">
        {Q1.answer.other === true || Q1.answer === "I am the owner of this home"
          ? "Do we have your home details right?"
          : "Do we have your client's home details right?"}
      </h2>
      <div className="flex justify-start items-start flex-col w-full gap-7">
        <DropDown
          infoSelected={infoSelected}
          setInfoSelected={setInfoSelected}
          inputHandler={inputHandler}
          label={"Bedrooms"}
          formState={formState.beds}
          options={[1, 2, 3, 4, 5]}
          name="beds"
          tip="Must have a closet,window, and a door"
        />
        <DropDown
          name="fullBathrooms"
          infoSelected={infoSelected}
          setInfoSelected={setInfoSelected}
          inputHandler={inputHandler}
          label={"Full bathroom"}
          formState={formState.fullBathrooms}
          options={[1, 2, 3, 4, 5]}
          tip="A full bath has a shower or a tub"
        />
        <DropDown
          name="partialBathrooms"
          infoSelected={infoSelected}
          setInfoSelected={setInfoSelected}
          inputHandler={inputHandler}
          label={"Partial bathroom"}
          formState={formState.partialBathrooms}
          options={[1, 2, 3, 4, 5]}
          tip="A full bath does not have a shower or a tub"
        />

        <div className="flex relative justify-start items-start flex-col gap-2 w-full">
          <label
            htmlFor="sqft"
            className="text-sm sm:text-base flex justify-start items-center gap-2 text-black font-semibold "
          >
            Square footage (Above ground) Additional{" "}
            <div className="sm:relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                onClick={() =>
                  setInfoSelected((prev) => {
                    if (prev === "sqFt") return "";
                    return "sqFt";
                  })
                }
                className="w-6 h-6 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                />
              </svg>
              {infoSelected === "sqFt" && (
                <ToolTip
                  tip={
                    "Don’t include basement, yard, garage, screened porch, or any non-heated areas of your client's home."
                  }
                />
              )}
            </div>
          </label>
          <input
            onChange={inputHandler}
            type="text"
            id="sqft"
            placeholder="#,### ft²"
            name="sqFt"
            value={formState.sqFt}
            className="w-full rounded-md border-2 pl-3 border-solid border-[#dedede] outline-none h-[50px]"
          />
        </div>
        <DropDown
          name="floors"
          infoSelected={infoSelected}
          setInfoSelected={setInfoSelected}
          inputHandler={inputHandler}
          label={"Floors (Above ground)"}
          formState={formState.floors}
          options={[1, 2, 3, 4, 5]}
          tip="Dont count the basement as a seperate floor"
        />
        <DropDown
          name="yearBuilt"
          infoSelected={infoSelected}
          setInfoSelected={setInfoSelected}
          inputHandler={inputHandler}
          label={"Year Built"}
          formState={formState.yearBuilt}
          options={[1800, 1801, 1802, 1803, 1804]}
          tip={false}
        />
        <DropDown
          name="pool"
          infoSelected={infoSelected}
          setInfoSelected={setInfoSelected}
          inputHandler={inputHandler}
          label={"Pool"}
          formState={formState.pool}
          options={[
            "Above Ground",
            "Below Ground",
            "Community Pool",
            "No Pool",
          ]}
          tip={false}
        />
        <DropDown
          name="coveredParking"
          infoSelected={infoSelected}
          setInfoSelected={setInfoSelected}
          inputHandler={inputHandler}
          label={"Covered Parking"}
          formState={formState.coveredParking}
          options={["Garage", "Car Port", "Both", "None"]}
          tip={false}
        />
      </div>
      <button
        onClick={() => {
          dispatch(
            addQuestion({
              qNumber: "Q4",
              qDetails: {
                heading:
                  Q1.answer.other === true ||
                  Q1.answer === "I am the owner of this home"
                    ? "Do we have your home details right?"
                    : "Do we have your client's home details right?",
                answer: { ...formState },
              },
            })
          );
          navigate("/questions/q5");
        }}
        className="nextBtn"
      >
        Next
      </button>
    </div>
  );
};

export default Q4;
