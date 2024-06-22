import Events from "../components/Events/Events";
import News from "../components/News/News";
import ManagementTeams from "../components/ManagementTeams/ManagementTeams";
import { Link } from "react-router-dom";
import OurPartnerImage from "../images/OurPartner.png";
import DataInformation from "../components/DataInformation";
const Home = () => {
  return (
    <div className="bg-green-50">
      <div className="">
        <div className="flex items-center mb-10 pt-10 ">
          <div className="flex-grow  border-t-[6px] ml-8 border-black"></div>
          <h2 className="text-4xl font-bold mx-8">SCHOOL EVENTS</h2>
          <div className="flex-grow border-t-[6px] mr-8 border-black"></div>
        </div>
        <div className="font-khmermont">
          <Events />
        </div>
      </div>

      <div>
        <div className="flex items-center mb-10 pt-10">
          <div className="flex-grow  border-t-[6px] ml-8 border-black"></div>
          <h2 className="text-4xl font-bold mx-8">NEWS</h2>
          <div className="flex-grow border-t-[6px] mr-8 border-black"></div>
        </div>
        <div className="mb-10 font-khmermont">
          <News />
        </div>
      </div>

      <div>
        <div className="flex items-center mb-5">
          <div className="flex-grow  border-t-[6px] ml-8 border-black"></div>
          <h2 className="text-4xl font-bold mx-8">MANAGEMENT TEAMS</h2>
          <div className="flex-grow border-t-[6px] mr-8 border-black"></div>
        </div>
        <div className="mb-10 font-khmermont">
          <ManagementTeams />
          <div className="text-center">
            <Link to="/managementteams">
              <button className="bg-green-400 rounded-lg w-32 h-10 mb-5 relative overflow-hidden group">
                <span className="absolute inset-0 bg-green-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <span className="relative z-10 text-white">Read More</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div
        className="relative w-full h-[700px] bg-cover bg-center  font-khmermont"
        style={{
          backgroundImage: `url(${DataInformation})`,
        }}
      >
        <DataInformation />
      </div>
      <div>
        {/* <div className="flex items-center mb-5">
          <div className="flex-grow  border-t-[6px] ml-8 border-black"></div>
          <h2 className="text-4xl font-bold mx-8">OUR PARTNERS</h2>
          <div className="flex-grow border-t-[6px] mr-8 border-black"></div>
        </div> */}
        <div className="  flex flex-col items-center ">
          {/* <div className=" absolute overflow-hidden ">
            <h2 className=" text-4xl font-bold mx-8 ">OUR PARTNERS</h2>
          </div> */}
          <img
            className="w-[100%] h-[130px] "
            src={OurPartnerImage} // Use the imported image variable here
            alt="Our Partner"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
