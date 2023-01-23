import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Q10 = () => {
  const navigate = useNavigate();
  const [selection, setSelection] = useState("");
  const [radioSource, setRadioSource] = useState("");
  const [other, setOther] = useState("");
  return (
    <div className="flex justify-start items-center gap-5 flex-col w-full">
      <h2 className="title_question">
        How did your client first hear about Opendoor?
      </h2>

      <div className="flex justify-start items-start flex-col w-full gap-5">
        <label
          htmlFor="sale"
          className="flex border-2 border-solid border-[#dedede] rounded-md justify-start items-center gap-3 w-full cursor-pointer p-5 h-[72px]"
        >
          <input
            type="radio"
            id="sale"
            checked={selection === "sale"}
            onChange={() => setSelection("sale")}
            className="accent-darkBrown w-[13px] "
            name="hear"
          />
          <p className="text-base text-black font-semibold ">
            Opendoor "For Sale" sign
          </p>
        </label>
        <label
          htmlFor="mouth"
          className="flex border-2 border-solid border-[#dedede] rounded-md justify-start items-center gap-3 w-full cursor-pointer p-5 h-[72px]"
        >
          <input
            type="radio"
            id="mouth"
            checked={selection === "mouth"}
            onChange={() => setSelection("mouth")}
            className="accent-darkBrown w-[13px] "
            name="hear"
          />
          <p className="text-base text-black font-semibold ">Word of mouth</p>
        </label>
        <label
          htmlFor="radio"
          className={`flex border-2 border-solid flex-col border-[#dedede] rounded-md justify-start items-start gap-4 w-full cursor-pointer p-5 ${
            selection === "radio" ? "h-auto" : "h-[72px]"
          }`}
        >
          <div className="flex justify-start items-center w-full gap-3">
            <input
              type="radio"
              id="radio"
              checked={selection === "radio"}
              onChange={() => setSelection("radio")}
              className="accent-darkBrown w-[13px] "
              name="hear"
            />
            <p className="text-base text-black font-semibold ">Radio / Audio</p>
          </div>
          {selection === "radio" && (
            <div className="flex justify-start items-start flex-col gap-3 w-full">
              <p className="font-semibold">Which Radio Source</p>
              <div className="flex pl-3 justify-start items-center w-full gap-3">
                <input
                  type="radio"
                  id="radioAd"
                  checked={radioSource === "radioAd"}
                  onChange={() => setRadioSource("radioAd")}
                  className="accent-darkBrown w-[13px] "
                  name="source"
                />
                <label
                  htmlFor="radioAd"
                  className="text-base text-black font-semibold "
                >
                  Radio Ad
                </label>
              </div>
              <div className="flex pl-3 justify-start items-center w-full gap-3">
                <input
                  type="radio"
                  id="dj"
                  checked={radioSource === "dj"}
                  onChange={() => setRadioSource("dj")}
                  className="accent-darkBrown w-[13px] "
                  name="source"
                />
                <label
                  htmlFor="dj"
                  className="text-base text-black font-semibold "
                >
                  DJ Personality
                </label>
              </div>
              <div className="flex pl-3 justify-start items-center w-full gap-3">
                <input
                  type="radio"
                  id="podcast"
                  checked={radioSource === "podcast"}
                  onChange={() => setRadioSource("podcast")}
                  className="accent-darkBrown w-[13px] "
                  name="source"
                />
                <label
                  htmlFor="podcast"
                  className="text-base text-black font-semibold "
                >
                  Podcast
                </label>
              </div>
              <div className="flex pl-3 justify-start items-center w-full gap-3">
                <input
                  type="radio"
                  id="spotify"
                  checked={radioSource === "spotify"}
                  onChange={() => setRadioSource("spotify")}
                  className="accent-darkBrown w-[13px] "
                  name="source"
                />
                <label
                  htmlFor="spotify"
                  className="text-base text-black font-semibold "
                >
                  Spotify
                </label>
              </div>
              <div className="flex pl-3 justify-start items-center w-full gap-3">
                <input
                  type="radio"
                  id="pandora"
                  checked={radioSource === "pandora"}
                  onChange={() => setRadioSource("pandora")}
                  className="accent-darkBrown w-[13px] "
                  name="source"
                />
                <label
                  htmlFor="pandora"
                  className="text-base text-black font-semibold "
                >
                  Pandora
                </label>
              </div>
            </div>
          )}
        </label>
        <label
          htmlFor="ad"
          className="flex border-2 border-solid border-[#dedede] rounded-md justify-start items-center gap-3 w-full cursor-pointer p-5 h-[72px]"
        >
          <input
            type="radio"
            id="ad"
            checked={selection === "ad"}
            onChange={() => setSelection("ad")}
            className="accent-darkBrown w-[13px] "
            name="hear"
          />
          <p className="text-base text-black font-semibold ">Online ad</p>
        </label>
        <label
          htmlFor="builder"
          className="flex border-2 border-solid border-[#dedede] rounded-md justify-start items-center gap-3 w-full cursor-pointer p-5 h-[72px]"
        >
          <input
            type="radio"
            id="builder"
            checked={selection === "builder"}
            onChange={() => setSelection("builder")}
            className="accent-darkBrown w-[13px] "
            name="hear"
          />
          <p className="text-base text-black font-semibold ">Homebuilder</p>
        </label>
        <label
          htmlFor="tv"
          className="flex border-2 border-solid border-[#dedede] rounded-md justify-start items-center gap-3 w-full cursor-pointer p-5 h-[72px]"
        >
          <input
            type="radio"
            id="tv"
            checked={selection === "tv"}
            onChange={() => setSelection("tv")}
            className="accent-darkBrown w-[13px] "
            name="hear"
          />
          <p className="text-base text-black font-semibold ">TV</p>
        </label>
        <label
          htmlFor="billboard"
          className="flex border-2 border-solid border-[#dedede] rounded-md justify-start items-center gap-3 w-full cursor-pointer p-5 h-[72px]"
        >
          <input
            type="radio"
            id="billboard"
            checked={selection === "billboard"}
            onChange={() => setSelection("billboard")}
            className="accent-darkBrown w-[13px] "
            name="hear"
          />
          <p className="text-base text-black font-semibold ">Billboard</p>
        </label>
        <label
          htmlFor="internet"
          className="flex border-2 border-solid border-[#dedede] rounded-md justify-start items-center gap-3 w-full cursor-pointer p-5 h-[72px]"
        >
          <input
            type="radio"
            id="internet"
            checked={selection === "internet"}
            onChange={() => setSelection("internet")}
            className="accent-darkBrown w-[13px] "
            name="hear"
          />
          <p className="text-base text-black font-semibold ">Internet search</p>
        </label>
        <label
          htmlFor="news"
          className="flex border-2 border-solid border-[#dedede] rounded-md justify-start items-center gap-3 w-full cursor-pointer p-5 h-[72px]"
        >
          <input
            type="radio"
            id="news"
            checked={selection === "news"}
            onChange={() => setSelection("news")}
            className="accent-darkBrown w-[13px] "
            name="hear"
          />
          <p className="text-base text-black font-semibold ">News article</p>
        </label>
        <label
          htmlFor="postcard"
          className="flex border-2 border-solid border-[#dedede] rounded-md justify-start items-center gap-3 w-full cursor-pointer p-5 h-[72px]"
        >
          <input
            type="radio"
            id="postcard"
            checked={selection === "postcard"}
            onChange={() => setSelection("postcard")}
            className="accent-darkBrown w-[13px] "
            name="hear"
          />
          <p className="text-base text-black font-semibold ">Postcard / mail</p>
        </label>
        <label
          htmlFor="survey"
          className="flex border-2 border-solid border-[#dedede] rounded-md justify-start items-center gap-3 w-full cursor-pointer p-5 h-[72px]"
        >
          <input
            type="radio"
            id="survey"
            checked={selection === "survey"}
            onChange={() => setSelection("survey")}
            className="accent-darkBrown w-[13px] "
            name="hear"
          />
          <p className="text-base text-black font-semibold ">
            Marketing survey
          </p>
        </label>
        <label
          htmlFor="other"
          className={`flex border-2 border-solid flex-col border-[#dedede] rounded-md justify-start items-start gap-4 w-full cursor-pointer p-5 ${
            selection === "other" ? "h-auto" : "h-[72px]"
          }`}
        >
          <div className="flex justify-start items-start gap-3 w-full">
            <input
              type="radio"
              id="other"
              checked={selection === "other"}
              onChange={() => setSelection("other")}
              className="accent-darkBrown w-[13px] "
              name="hear"
            />
            <p className="text-base text-black font-semibold ">Other</p>
          </div>
          {selection === "other" && (
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
