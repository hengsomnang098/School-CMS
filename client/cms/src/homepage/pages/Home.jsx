import Banner from "../layout/Banner";
import About from "./About";
import OurPrograms from "./OurPrograms";
import Admission from "./Admission";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="bg-gray-100">
      <div></div>
      <div>
        <Admission />
      </div>
      <div>
        <OurPrograms />
      </div>

      <div>
        <About />
      </div>

      <div>
        <Contact />
      </div>
    </div>
  );
};

export default Home;
