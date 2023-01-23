import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import Landing from "./Pages/Landing/Landing";
import { Routes, Route } from "react-router-dom";
import Questions from "./Pages/Questions/Questions";
import Q1 from "./Pages/Questions/Q1";
import Q2 from "./Pages/Questions/Q2";
import Q3 from "./Pages/Questions/Q3";
import Q4 from "./Pages/Questions/Q4";
import Q5 from "./Pages/Questions/Q5";
import Q6 from "./Pages/Questions/Q6";
import Q7 from "./Pages/Questions/Q7";
import Q8 from "./Pages/Questions/Q8";
import Q9 from "./Pages/Questions/Q9";
import Q10 from "./Pages/Questions/Q10";
import Contact from "./Pages/Questions/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route element={<Landing />} path="/" />
        <Route element={<Questions />} path="/questions">
          <Route path="" index element={<Q1 />} />
          <Route path="q2" element={<Q2 />} />
          <Route path="q3" element={<Q3 />} />
          <Route path="q4" element={<Q4 />} />
          <Route path="q5" element={<Q5 />} />
          <Route path="q6" element={<Q6 />} />
          <Route path="q7" element={<Q7 />} />
          <Route path="q8" element={<Q8 />} />
          <Route path="q9" element={<Q9 />} />
          <Route path="q10" element={<Q10 />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
