const QuestionsInputBox = ({
  label,
  placeholder,
  name,
  value,
  inputHandler,
}) => {
  return (
    <div className="flex justify-start items-start flex-col gap-2 w-full">
      <label htmlFor={label} className="text-base text-black font-semibold ">
        {label}
      </label>
      <input
        onChange={inputHandler}
        type="text"
        id={label}
        name={name}
        placeholder={placeholder}
        value={value}
        className="w-full rounded-md border-2 pl-3 border-solid border-[#dedede] outline-none h-[50px]"
      />
    </div>
  );
};

export default QuestionsInputBox;
