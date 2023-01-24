const QuestionsCheckBox = ({
  label,
  name,
  checked,
  inputHandler,
  smallText,
}) => {
  return (
    <label
      htmlFor={label}
      className="flex cursor-pointer justify-start items-center gap-5 w-full p-5 border-2 border-solid border-[#dedede] rounded-md"
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={inputHandler}
        name={name}
        id={label}
        className="accent-darkBrown w-[18px] h-[18px]"
      />
      <p className="font-semibold">
        {label}{" "}
        {smallText && (
          <>
            <br /> <span className="font-normal text-sm">{smallText}</span>
          </>
        )}
      </p>
    </label>
  );
};

export default QuestionsCheckBox;
