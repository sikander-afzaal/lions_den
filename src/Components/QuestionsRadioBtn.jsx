const QuestionsRadioBtn = ({
  name,
  selection,
  setSelection,
  label,
  smallText,
  noBorder,
}) => {
  return (
    <label
      htmlFor={label}
      className={`flex ${
        !noBorder
          ? "border-2 border-solid border-[#dedede] rounded-md p-5 h-[72px]"
          : ""
      } justify-start items-center gap-3 w-full cursor-pointer `}
    >
      <input
        type="radio"
        id={label}
        checked={selection === label}
        onChange={() => setSelection(label)}
        className="accent-darkBrown w-[13px] "
        name={name}
      />
      <p className="text-base text-black font-semibold ">
        {label}{" "}
        {smallText && (
          <>
            <br />
            <span className="text-[13px] leading-[1] text-black font-normal ">
              {smallText}
            </span>
          </>
        )}
      </p>
    </label>
  );
};

export default QuestionsRadioBtn;
