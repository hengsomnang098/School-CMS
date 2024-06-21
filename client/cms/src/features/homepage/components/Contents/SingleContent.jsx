import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../../api/Api";

const SingleContent = () => {
  const { id } = useParams();

  const [content, setContent] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const contentsRes = await fetchData(`contents/${id}`);
        setContent(contentsRes.object);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching category and articles:", error);
        setLoading(false);
      }
    };

    fetchTeams();
  }, [id]);

  return (
    <div className="bg-yellow-200">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-12">
        <div className="bg-white shadow-xl drop-shadow-lg rounded-sm overflow-hidden"></div>
        <div className="lg:w-3/4 mx-auto font-khmer">
          <h2 className="text-3xl mt-8 font-bold mb-4 cursor-pointer break-words">
            {content.title}
          </h2>
          <div className="text-xl font-mono, font-khmer ">
            <p className="ml-10  break-words">
              <span dangerouslySetInnerHTML={{ __html: content.description }} />
            </p>
            <h1 className="text-2xl font-mono  pt-10 ">Album</h1>
            <div className="my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Array.isArray(content.mediaList) &&
              content.mediaList.length > 0 ? (
                content.mediaList.map((media) => (
                  <div key={media.id}>
                    <div>
                      <img
                        src={media.mediaUrl}
                        alt={`Media for ${content.title}`}
                        className="w-[250px] h-[180px]"
                      />
                    </div>
                  </div>
                ))
              ) : (
                <p>No have photo</p>
              )}
            </div>
          </div>
          {/* <h2 className="text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer">
         Bio : {content.bio}
       </h2> */}
        </div>
      </div>
    </div>
  );
};

export default SingleContent;
