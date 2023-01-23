import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
        <div className="flex justify-start items-center gap-5 w-full p-5 border-2 border-solid border-[#dedede] rounded-md">
          <input
            type="checkbox"
            checked={formState.leasedSolar}
            onChange={inputHandler}
            name="leasedSolar"
            id="leased"
            className="accent-darkBrown w-[18px] h-[18px]"
          />
          <label htmlFor="leased" className="font-semibold">
            Leased or financed solar panels
          </label>
        </div>
        <div className="flex justify-start items-center gap-5 w-full p-5 border-2 border-solid border-[#dedede] rounded-md">
          <input
            type="checkbox"
            checked={formState.foundationIssues}
            onChange={inputHandler}
            name="foundationIssues"
            id="issues"
            className="accent-darkBrown w-[18px] h-[18px]"
          />
          <label className="font-semibold" htmlFor="issues">
            Known foundation Issues <br />{" "}
            <span className="font-normal text-sm">
              Excessive cracking, uneven floors
            </span>
          </label>
        </div>
        <div className="flex justify-start items-center gap-5 w-full p-5 border-2 border-solid border-[#dedede] rounded-md">
          <input
            type="checkbox"
            checked={formState.fireDamage}
            onChange={inputHandler}
            name="fireDamage"
            id="fire"
            className="accent-darkBrown w-[18px] h-[18px]"
          />
          <label className="font-semibold" htmlFor="fire">
            Fire damage
          </label>
        </div>
        <div className="flex justify-start items-center gap-5 w-full p-5 border-2 border-solid border-[#dedede] rounded-md">
          <input
            type="checkbox"
            checked={formState.wellWater}
            onChange={inputHandler}
            name="wellWater"
            id="water"
            className="accent-darkBrown w-[18px] h-[18px]"
          />
          <label className="font-semibold" htmlFor="water">
            Well water <br />{" "}
            <span className="font-normal text-sm">
              Your client maintains a well to supply water
            </span>
          </label>
        </div>
        <div className="flex justify-start items-center gap-5 w-full p-5 border-2 border-solid border-[#dedede] rounded-md">
          <input
            type="checkbox"
            checked={formState.septic}
            onChange={inputHandler}
            name="septic"
            id="septic"
            className="accent-darkBrown w-[18px] h-[18px]"
          />
          <label className="font-semibold" htmlFor="septic">
            Septic system <br />{" "}
            <span className="font-normal text-sm">
              Separate from municipal sewage
            </span>
          </label>
        </div>
        <div className="flex justify-start items-center gap-5 w-full p-5 border-2 border-solid border-[#dedede] rounded-md">
          <input
            type="checkbox"
            checked={formState.asbestos}
            onChange={inputHandler}
            name="asbestos"
            id="asbestos"
            className="accent-darkBrown w-[18px] h-[18px]"
          />
          <label className="font-semibold" htmlFor="asbestos">
            Asbestos siding
          </label>
        </div>
        <div className="flex justify-start items-center gap-5 w-full p-5 border-2 border-solid border-[#dedede] rounded-md">
          <input
            type="checkbox"
            checked={formState.horse}
            onChange={inputHandler}
            name="horse"
            id="horse"
            className="accent-darkBrown w-[18px] h-[18px]"
          />
          <label className="font-semibold" htmlFor="horse">
            Horse property <br />{" "}
            <span className="font-normal text-sm">
              Livestock live on property
            </span>
          </label>
        </div>
        <div className="flex justify-start items-center gap-5 w-full p-5 border-2 border-solid border-[#dedede] rounded-md">
          <input
            type="checkbox"
            checked={formState.mobile}
            onChange={inputHandler}
            name="mobile"
            id="mobile"
            className="accent-darkBrown w-[18px] h-[18px]"
          />
          <label className="font-semibold" htmlFor="mobile">
            Mobile or manufactured home
          </label>
        </div>
        <div className="flex justify-start items-center gap-5 w-full p-5 border-2 border-solid border-[#dedede] rounded-md">
          <input
            type="checkbox"
            checked={formState.none}
            onChange={inputHandler}
            name="none"
            id="none"
            className="accent-darkBrown w-[18px] h-[18px]"
          />
          <label className="font-semibold" htmlFor="none">
            None of the above
          </label>
        </div>
      </div>
      <button onClick={() => navigate("/questions/q9")} className="nextBtn">
        Next
      </button>
    </div>
  );
};

export default Q8;
