import FaqTab from "../../Components/FaqTab";

const Faq = () => {
  const DATA = [
    {
      question: "Lorem ipsum dolor sit amet, consectetur ",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur ",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur ",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur ",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur ",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",
    },
  ];
  return (
    <div className="wrapper my-[100px]">
      <div className="contain flex-col justify-center items-center gap-2">
        <h2 className="title text-center">Frequently Asked Questions</h2>
        <p className="sub text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore{" "}
        </p>
        <div className="flex mt-5 sm:mt-[40px] justify-start items-start flex-col w-full">
          {DATA.map((elem, idx) => {
            return <FaqTab {...elem} key={"faq" + idx} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Faq;
