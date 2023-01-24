import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { reset } from "../../store/questionsSlice";

const Contact = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { questions, address } = useSelector((state) => state.questionsState);

  const [email, setEmail] = useState("");
  const [loader, setLoader] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const sendingEmail = async () => {
    const message = `
   <h4>Address:</h4>
    ${address ? address : "Did not add"}
      <br />
   <h4>Phone Number:</h4>
    ${phoneNumber}
      <br />

       <h4> ${questions.Q1.heading}</h4>

        ${
          questions.Q1.answer.other
            ? questions.Q1.answer.otherOption
            : questions.Q1.answer
        }
      <br />

      ${
        questions.Q2
          ? ` <h4>2) ${questions.Q2.heading}</h4>
   
       MLS ID: ${questions.Q2.answer.mls} ${
              questions.Q2.answer.brokerageName
                ? ", Brokerage Name: " + questions.Q2.answer.brokerageName
                : ""
            }
    <br />`
          : ""
      }

   <h4> ${questions.Q3.heading}</h4>
 
        ${questions.Q3.answer}
    <br />

       <h4> ${questions.Q4.heading}</h4>
        <ul>
        <li>Beds: ${questions.Q4.answer.beds}</li>
        <li>Full Bathrooms: ${questions.Q4.answer.fullBathrooms}</li>
        <li>Partial Bathrooms: ${questions.Q4.answer.partialBathrooms}</li>
        <li>Square footage (Above ground) Additional: ${
          questions.Q4.answer.sqft
        }</li>
        <li>Floors (Above ground): ${questions.Q4.answer.floors}</li>
        <li>Year Built: ${questions.Q4.answer.yearBuilt}</li>
        <li>Pool: ${questions.Q4.answer.pool}</li>
        <li>Covered Parking: ${questions.Q4.answer.coveredParking}</li>
        </ul>
    <br />

     <h4> ${questions.Q5.heading}</h4>
     ${
       questions.Q5.answer.basement === "No"
         ? "Basement: No"
         : `
         <p>Basement: Yes</p>
         <p>Finished Sqft: ${questions.Q5.answer.finishedSqft}</p>
         <p>Unfinished Sqft: ${questions.Q5.answer.unfinishedSqft}</p>
        
         `
     }
     <br />

     <h4> ${questions.Q6.heading}</h4>
     <p>${questions.Q6.answer}</p>
     <br />

     <h4> ${questions.Q7.heading}</h4>
     <p>HOA: ${questions.Q7.answer.HOA}</p>
     <p>Age Restricted: ${questions.Q7.answer.ageRestricted}</p>
     <p>Gated: ${questions.Q7.answer.gated}</p>
     <p>Guard: ${questions.Q7.answer.guard}</p>
     <br />

     <h4> ${questions.Q8.heading}</h4>
     <p>Leased or financed solar panels: ${questions.Q8.answer.leasedSolar}</p>
     <p>Known foundation Issues: ${questions.Q8.answer.foundationIssues}</p>
     <p>Fire damage: ${questions.Q8.answer.fireDamage}</p>
     <p>Well water: ${questions.Q8.answer.wellWater}</p>
     <p>Septic system: ${questions.Q8.answer.septic}</p>
     <p>Asbestos siding: ${questions.Q8.answer.asbestos}</p>
     <p>Horse property: ${questions.Q8.answer.horse}</p>
     <p>Mobile or manufactured home: ${questions.Q8.answer.mobile}</p>
        <br />

        <h4> ${questions.Q9.heading}</h4>
      <p>${questions.Q9.answer}</p>
        <br />

        <h4> ${questions.Q10.heading}</h4>
      ${
        questions.Q10.answer.selection
          ? `
      <p>${questions.Q10.answer.selection}</p>
      ${
        questions.Q10.answer.radioSource
          ? `<p>${questions.Q10.answer.radioSource}</p>`
          : ""
      }
      `
          : `
      <p>Other</p>
      ${questions.Q10.answer.otherOption}
      `
      }
    
    <br />
    `;
    setLoader(true);
    emailjs
      .send(
        "service_76ncpyo",
        "template_hk3ifee",
        { from_name: email, message },
        "CDPkbNSijuI-GNT_n"
      )
      .then(
        () => {
          toast.success("Submitted");
          dispatch(reset());
          navigate("/");
          setLoader(false);
        },
        () => {
          toast.error("An error occured");
          setLoader(false);
        }
      );
  };
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
      <div className="flex justify-start items-start flex-col gap-2 w-full">
        <label htmlFor="phone" className="text-base text-black font-semibold ">
          Phone Number <span className="text-red-700">*</span>
        </label>
        <input
          onChange={(e) => setPhoneNumber(e.target.value)}
          type="text"
          id="phone"
          placeholder="Phone Number"
          value={phoneNumber}
          className="w-full rounded-md border-2 pl-4 border-solid border-[#dedede] outline-none h-[60px]"
        />
      </div>
      <button
        onClick={() => {
          if (!email) {
            toast.warning("Please enter email");
          } else if (!phoneNumber) {
            toast.warning("Please enter phone number");
          } else if (email && phoneNumber) {
            sendingEmail();
          }
        }}
        className={!email && !phoneNumber ? "disabledBtn" : "nextBtn"}
      >
        {loader ? (
          <img src="/loader.gif" className="w-[60px] object-contain" alt="" />
        ) : (
          "Continue"
        )}
      </button>
    </div>
  );
};

export default Contact;
