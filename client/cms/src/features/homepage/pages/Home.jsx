// src/pages/Home.js
import React from "react";
import Events from "../components/Events/Events";
import News from "../components/News/News";
import ManagementTeams from "../components/ManagementTeams/ManagementTeams";
import DataInformation from "../components/DataInformation/DataInformation";
import OurPartner from "./OurPartner";
import Popup from "../components/Popup";

const Home = () => {
  return (
    <div className="bg-green-50">
      <Popup />

      <div className="font-robot">
        <Events />
      </div>

      <div className="mb-10 font-khmermont">
        <News />
      </div>

      <div className="mb-10 font-robot">
        <ManagementTeams />
      </div>

      <div className="w-full h-auto bg-cover bg-center font-khmermont">
        <DataInformation />
      </div>

      <OurPartner />
    </div>
  );
};

export default Home;
