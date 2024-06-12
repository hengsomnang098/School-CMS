import Banner from "../layout/Banner";
import About from "./About";
import OurPrograms from "./OurPrograms";
import Admission from "./Admission";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="bg-gray-100">
      <div className="">
        <div class="flex items-center mb-5">
          <div class="flex-grow  border-t-[6px] ml-8 border-black"></div>
          <h2 class="text-4xl font-bold mx-8">OUR PROGRAMS</h2>
          <div class="flex-grow border-t-[6px] mr-8 border-black"></div>
        </div>
        <div class="mb-10">
          <OurPrograms />
        </div>
      </div>

      <div>
        <div class="flex items-center mb-5">
          <div class="flex-grow  border-t-[6px] ml-8 border-black"></div>
          <h2 class="text-4xl font-bold mx-8">NEWS & EVENT</h2>
          <div class="flex-grow border-t-[6px] mr-8 border-black"></div>
        </div>
        <div class="mb-10">
          <Admission />
        </div>
      </div>

      <div>
        <div class="flex items-center mb-5">
          <div class="flex-grow  border-t-[6px] ml-8 border-black"></div>
          <h2 class="text-4xl font-bold mx-8">MANAGEMENT TEAMS</h2>
          <div class="flex-grow border-t-[6px] mr-8 border-black"></div>
        </div>
        <div class="mb-10">
          <About />
        </div>
      </div>

      <div>
        <div class="flex items-center mb-5">
          <div class="flex-grow  border-t-[6px] ml-8 border-black"></div>
          <h2 class="text-4xl font-bold mx-8">OUR PARTNERS</h2>
          <div class="flex-grow border-t-[6px] mr-8 border-black"></div>
        </div>
        <div class="mb-10">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Home;
