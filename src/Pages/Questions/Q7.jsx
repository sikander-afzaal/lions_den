import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Q7 = () => {
  const [selection, setSelection] = useState("No");
  const [formState, setFormState] = useState({
    ageRestricted: false,
    gated: false,
    guard: false,
    none: false,
  });
  const navigate = useNavigate();
  useEffect(() => {
    if (selection !== "yes") {
      setFormState({
        ageRestricted: false,
        gated: false,
        guard: false,
        none: false,
      });
    }
  }, [selection]);

  return (
    <div className="flex justify-center items-center flex-col gap-5">
      <h2 className="title_question">
        Is your client's home part of a homeowner’s association (HOA)?
      </h2>
      <div className="flex justify-center items-center flex-col w-full gap-4 ">
        <label
          htmlFor="yes"
          className={`flex flex-col border-2 border-solid border-[#dedede] rounded-md justify-start items-center gap-8 w-full cursor-pointer p-5 ${
            selection === "yes" ? "h-auto" : "h-[72px]"
          }`}
        >
          <div className="flex justify-start gap-3 w-full items-center">
            <input
              type="radio"
              checked={selection === "yes"}
              id="yes"
              onChange={() => setSelection("yes")}
              className="accent-darkBrown w-[13px] "
              name="basement"
            />
            <p className="text-base text-black font-semibold ">Yes</p>
          </div>
          {selection === "yes" && (
            <>
              <div className="flex justify-start items-start flex-col gap-2">
                <p className="text-black text-base font-semibold">
                  Does your client's home belong to any of these types of
                  communities?
                </p>
                <div className="flex justify-start items-center gap-2">
                  <input
                    type="checkbox"
                    className="accent-darkBrown w-[18px] h-[18px]"
                    checked={formState.ageRestricted}
                    onChange={() =>
                      setFormState((prev) => {
                        return {
                          ...formState,
                          ageRestricted: !prev.ageRestricted,
                          none: false,
                        };
                      })
                    }
                    id="age"
                  />
                  <label className="font-semibold" htmlFor="age">
                    Age Restricted Community
                  </label>
                </div>
                <div className="flex flex-col justify-start items-start gap-3">
                  <div className="flex justify-start items-center gap-2">
                    <input
                      type="checkbox"
                      className="accent-darkBrown w-[18px] h-[18px]"
                      checked={formState.gated}
                      onChange={() =>
                        setFormState((prev) => {
                          return {
                            ...formState,
                            gated: !prev.gated,
                            none: false,
                          };
                        })
                      }
                      id="gated"
                    />
                    <label className="font-semibold" htmlFor="gated">
                      Gated Community
                    </label>
                  </div>
                  {formState.gated && (
                    <div className="flex w-full justify-start items-start flex-col pl-4 gap-3">
                      <p className="font-semibold">
                        Is there a guard at the entrance
                      </p>
                      <label
                        htmlFor="guard_yes"
                        className="flex justify-start gap-3 w-full items-center"
                      >
                        <input
                          type="radio"
                          checked={formState.guard === true}
                          id="guard_yes"
                          onChange={() =>
                            setFormState((prev) => {
                              return { ...prev, guard: true };
                            })
                          }
                          className="accent-darkBrown w-[13px] "
                          name="guard"
                        />
                        <p className="text-base text-black font-semibold ">
                          Yes
                        </p>
                      </label>
                      <label
                        htmlFor="guard_no"
                        className="flex justify-start gap-3 w-full items-center"
                      >
                        <input
                          type="radio"
                          checked={formState.guard === false}
                          id="guard_no"
                          onChange={() =>
                            setFormState((prev) => {
                              return { ...prev, guard: false };
                            })
                          }
                          className="accent-darkBrown w-[13px] "
                          name="guard"
                        />
                        <p className="text-base text-black font-semibold ">
                          No
                        </p>
                      </label>
                    </div>
                  )}
                </div>
                <div className="flex justify-start items-center gap-2">
                  <input
                    type="checkbox"
                    className="accent-darkBrown w-[18px] h-[18px]"
                    checked={formState.none}
                    onChange={() =>
                      setFormState((prev) => {
                        return {
                          guard: false,
                          ageRestricted: false,
                          gated: false,
                          none: true,
                        };
                      })
                    }
                    id="none"
                  />
                  <label className="font-semibold" htmlFor="none">
                    None of the above
                  </label>
                </div>
              </div>
            </>
          )}
        </label>
        <label
          htmlFor="no"
          className="flex border-2 border-solid border-[#dedede] rounded-md justify-start items-center gap-3 w-full cursor-pointer p-5 h-[72px]"
        >
          <input
            onChange={() => setSelection("no")}
            type="radio"
            id="no"
            checked={selection === "no"}
            className="accent-darkBrown w-[13px] "
            name="basement"
          />
          <p className="text-base text-black font-semibold ">No</p>
        </label>
      </div>
      <button
        onClick={() => {
          navigate("/questions/q8");
        }}
        className="nextBtn"
      >
        Next
      </button>
    </div>
  );
};

export default Q7;
