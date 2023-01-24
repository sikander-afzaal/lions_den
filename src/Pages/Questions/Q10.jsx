import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import QuestionsRadioBtn from "../../Components/QuestionsRadioBtn";

const Q10 = () => {
  const navigate = useNavigate();
  const [selection, setSelection] = useState("");
  const [radioSource, setRadioSource] = useState("");
  const [other, setOther] = useState("");
  useEffect(() => {
    if (selection !== "Other") {
      setOther("");
    }
    if (selection !== "Radio / Audio") {
      setRadioSource("");
    }
  }, [selection]);

  return (
    <div className="flex justify-start items-center gap-5 flex-col w-full">
      <h2 className="title_question">
        How did your client first hear about Opendoor?
      </h2>

      <div className="flex justify-start items-start flex-col w-full gap-5">
        <QuestionsRadioBtn
          selection={selection}
          setSelection={setSelection}
          name="hear"
          label='Opendoor "For Sale" sign'
        />
        <QuestionsRadioBtn
          selection={selection}
          setSelection={setSelection}
          name="hear"
          label="Word of mouth"
        />
        <QuestionsRadioBtn
          selection={selection}
          setSelection={setSelection}
          name="hear"
          label="Word of mouth"
        />
        <div
          className={`flex border-2 border-solid flex-col border-[#dedede] rounded-md justify-start items-start gap-4 w-full cursor-pointer p-5 ${
            selection === "Radio / Audio" ? "h-auto" : "h-[72px]"
          }`}
        >
          <QuestionsRadioBtn
            selection={selection}
            setSelection={setSelection}
            name="hear"
            label="Radio / Audio"
            noBorder
          />

          {selection === "Radio / Audio" && (
            <div className="flex justify-start items-start flex-col gap-3 w-full">
              <p className="font-semibold">Which Radio Source</p>
              <div className="flex w-full flex-col gap-3 items-start justify-start pl-3">
                <QuestionsRadioBtn
                  selection={radioSource}
                  setSelection={setRadioSource}
                  name="source"
                  label="Radio Ad"
                  noBorder
                />
                <QuestionsRadioBtn
                  selection={radioSource}
                  setSelection={setRadioSource}
                  name="source"
                  label="DJ Personality"
                  noBorder
                />
                <QuestionsRadioBtn
                  selection={radioSource}
                  setSelection={setRadioSource}
                  name="source"
                  label="Podcast"
                  noBorder
                />
                <QuestionsRadioBtn
                  selection={radioSource}
                  setSelection={setRadioSource}
                  name="source"
                  label="Spotify"
                  noBorder
                />
                <QuestionsRadioBtn
                  selection={radioSource}
                  setSelection={setRadioSource}
                  name="source"
                  label="Pandora"
                  noBorder
                />
              </div>
            </div>
          )}
        </div>
        <QuestionsRadioBtn
          selection={selection}
          setSelection={setSelection}
          name="hear"
          label="Online ad"
        />
        <QuestionsRadioBtn
          selection={selection}
          setSelection={setSelection}
          name="hear"
          label="TV"
        />
        <QuestionsRadioBtn
          selection={selection}
          setSelection={setSelection}
          name="hear"
          label="Billboard"
        />
        <QuestionsRadioBtn
          selection={selection}
          setSelection={setSelection}
          name="hear"
          label="Internet search"
        />
        <QuestionsRadioBtn
          selection={selection}
          setSelection={setSelection}
          name="hear"
          label="News article"
        />
        <QuestionsRadioBtn
          selection={selection}
          setSelection={setSelection}
          name="hear"
          label="Postcard / mail"
        />
        <QuestionsRadioBtn
          selection={selection}
          setSelection={setSelection}
          name="hear"
          label="Marketing survey"
        />
        <QuestionsRadioBtn
          selection={selection}
          setSelection={setSelection}
          name="hear"
          label="Marketing survey"
        />
        <label
          htmlFor="other"
          className={`flex border-2 border-solid flex-col border-[#dedede] rounded-md justify-start items-start gap-4 w-full cursor-pointer p-5 ${
            selection === "Other" ? "h-auto" : "h-[72px]"
          }`}
        >
          <QuestionsRadioBtn
            selection={selection}
            setSelection={setSelection}
            name="hear"
            label="Other"
            noBorder
          />
          {selection === "Other" && (
            <input
              onChange={(e) => setOther(e.target.value)}
              type="text"
              id="other"
              value={other}
              className="w-full rounded-md border-2 pl-3 border-solid border-[#dedede] outline-none h-[50px]"
            />
          )}
        </label>
      </div>
      <button
        onClick={() => {
          if (selection) {
            navigate("/questions/contact");
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

export default Q10;
