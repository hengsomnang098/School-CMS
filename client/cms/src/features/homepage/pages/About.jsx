import HexagonSection from "../components/About/HexagonSection";
import { useEffect, useState } from "react";
import { fetchData } from "../api/Api";
import Spinner from "../components/Spinner";
import GetContentsByAbout from "../components/About/GetContentsByAbout";

const About = () => {
  const [content, setContent] = useState({});
  const [loading, setLoading] = useState(true); // State to track loading status

  useEffect(() => {
    const fetchContent = async () => {
      try {
        // Assuming your API supports fetching content by title
        const contentsRes = await fetchData(`contents?title=About Us`);
        const aboutUsContent = contentsRes.objects.find(
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
        <div>
          <GetContentsByAbout />
        </div>
        <div>
          <div className="flex items-center mb-5">
            <div className="flex-grow border-t-[6px] ml-8 border-black"></div>
            <h2 className="text-4xl font-bold mx-8">ABOUT US</h2>
            <div className="flex-grow border-t-[6px] mr-8 border-black"></div>
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto">
          <p className="text-gray-700 text-lg text-md mb-6">
            <span dangerouslySetInnerHTML={{ __html: content.description }} />
          </p>
        </div>
      </div>
      <div className="h-auto bg-green-200">
        <HexagonSection />
      </div>
      {Array.isArray(content.albumList) && content.albumList.length > 0 && (
        <div className="bg-green-200">
          <h1 className="text-2xl font-khmermont pt-10">Album</h1>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.albumList.map((media) => (
              <div key={album.id}>
                <div>
                  <img
                    src={album.mediaUrl}
                    alt={`Media for ${content.title}`}
                    className="w-[250px] h-[180px]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
