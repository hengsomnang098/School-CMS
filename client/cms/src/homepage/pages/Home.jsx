import Banner from "../layout/Banner";
import About from "./About";
import OurPrograms from "./OurPrograms";
import Admission from "./Admission";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="bg-gray-100">
      <div>
        <Banner />
      </div>

      <div>
        <About />
      </div>

      <div>
        <OurPrograms />
      </div>

      {/* Admissions section */}
      <div>
        <Admission />
      </div>

      <div>
        <Contact />
      </div>
    </div>
  );
};

export default Home;
