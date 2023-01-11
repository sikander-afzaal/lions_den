import Contact from "./Contact";
import Faq from "./Faq";
import Hero from "./Hero";
import Refinance from "./Refinance";
import Reviews from "./Reviews";
import Sell from "./Sell";
import Services from "./Services";
import Works from "./Works";

const Landing = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Works />
      <Sell />
      <Refinance />
      <Reviews />
      <Faq />
      <Contact />
    </div>
  );
};

export default Landing;
