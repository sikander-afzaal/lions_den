import ToolTip from "./ToolTip";

const DropDown = ({
  label,
  tip,
  name,
  options,
  inputHandler,
  setInfoSelected,
  formState,
  infoSelected,
}) => {
  return (
    <div className="flex justify-start relative items-start flex-col gap-2 w-full">
      <label
        htmlFor={label}
        className="text-sm sm:text-base  flex justify-start items-center gap-2 text-black font-semibold "
      >
        {label}
        {tip !== false && (
          <div className="lg:relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              onClick={() =>
                setInfoSelected((prev) => {
                  if (prev === label) return "";
                  return label;
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
            {infoSelected === label && <ToolTip tip={tip} />}
          </div>
        )}
      </label>
      <select
        onChange={inputHandler}
        name={name}
        id={label}
        value={formState}
        className="w-full rounded-md border-2 pl-3 border-solid border-[#dedede] outline-none h-[50px]"
      >
        {options.map((elem) => {
          return (
            <option key={elem} value={elem}>
              {elem}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default DropDown;
