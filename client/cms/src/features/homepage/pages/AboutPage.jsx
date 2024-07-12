import React, { useEffect, useState } from "react";
import { fetchData } from "../api/Api";
import Spinner from "../components/Spinner";
import HexagonSection from "../components/About/HexagonSection";
import GetContentsByAbout from "../components/About/GetContentsByAbout";
import AboutTitle from "../components/About/AboutTitle";
import AlbumSection from "../components/About/AlbumSection";

const AboutPage = () => {
  const [content, setContent] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetchData(`contents?title=About Us`);

        if (!response || !Array.isArray(response.object)) {
          console.error("Invalid API response:", response);
          setLoading(false);
          return;
        }

        const aboutUsContent = response.object.find(
          (obj) => obj.title === "About Us"
        );

        if (aboutUsContent) {
          setContent(aboutUsContent);
        } else {
          console.error("Content with title 'About Us' not found");
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching content:", error);
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-8">
        <Spinner />
      </div>
    );
  }

  return (
    <div>
      <div className="bg-green-200 p-8">
        <AboutTitle />
        <div className="max-w-[1200px] mx-auto">
          <GetContentsByAbout />
          {/* <AboutDescription description={content.description} /> */}
        </div>
      </div>
      <div className="h-auto bg-green-200">
        <HexagonSection />
      </div>
      {Array.isArray(content.albumList) && content.albumList.length > 0 && (
        <AlbumSection albumList={content.albumList} title={content.title} />
      )}
    </div>
  );
};

export default AboutPage;
