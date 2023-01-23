const ToolTip = ({ tip }) => {
  return (
    <div className="absolute bottom-full sm:bottom-[150%] left-1/2 -translate-x-1/2 w-full lg:w-max flex justify-center  lg:max-w-[540px]  text-center items-center pointer-events-none select-none bg-[#222] text-white text-xs lg:text-sm px-3 py-3 rounded-lg">
      {tip}
      <div className="w-0 h-0 border-l-[10px] border-l-transparent border-t-[10px] border-t-[#222] border-r-[10px] border-r-transparent top-full left-1/2  -translate-x-1/2 absolute"></div>
    </div>
  );
};

export default ToolTip;
