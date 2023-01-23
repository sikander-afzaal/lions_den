import { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="flex justify-start items-center gap-5 flex-col w-full">
      <h2 className="title_question">
        Where can we contact you with your client's selling options?
      </h2>
      <p className="text-base text-center  text-black">
        Sign in or enter your email address.
      </p>
      <button className="w-full flex justify-center items-center h-[50px] border-2 border-solid border-[#222222] gap-3 rounded-md font-bold text-base bg-transparent cursor-pointer">
        <img src="/google.png" className="w-[20px] object-contain " alt="" />
        Continue with Google
      </button>
      <button className="w-full flex justify-center items-center h-[50px] border-2 border-solid border-[#222222] gap-3 rounded-md font-bold text-base bg-transparent cursor-pointer">
        <img src="/color-fb.png" className="w-[20px] object-contain " alt="" />
        Continue with Facebook
      </button>
      <p className="self-center text-xl">Or</p>
      <div className="flex justify-start items-start flex-col gap-2 w-full">
        <label htmlFor="email" className="text-base text-black font-semibold ">
          Email <span className="text-red-700">*</span>
        </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          id="email"
          placeholder="you@example.com"
          value={email}
          className="w-full rounded-md border-2 pl-4 border-solid border-[#dedede] outline-none h-[60px]"
        />
      </div>
      <button className={email === "" ? "disabledBtn" : "nextBtn"}>
        Continue
      </button>
    </div>
  );
};

export default Contact;
