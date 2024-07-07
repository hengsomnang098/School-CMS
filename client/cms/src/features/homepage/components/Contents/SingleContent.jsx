import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../../api/Api";
import Spinner from "../Spinner";

const SingleContent = () => {
  const { id } = useParams();

  const [content, setContent] = useState({});
  const [loading, setLoading] = useState(true); // State to track loading status

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const contentsRes = await fetchData(`contents/${id}`);
        setContent(contentsRes.object);

        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error("Error fetching content:", error);
        setLoading(false); // Set loading to false on error as well
      }
    };

    fetchContent();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center mt-8">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="bg-green-100">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-12">
        <div className="bg-white shadow-xl drop-shadow-lg rounded-sm overflow-hidden"></div>
        <div className="lg:w-3/4 mx-auto font-khmermont">
          <h2 className="text-3xl mt-10 font-bold mb-10 cursor-pointer break-words">
            {content.title}
          </h2>
          <div className="text-xl">
            <p className="ml-10 font-khmermont break-words">
              <span dangerouslySetInnerHTML={{ __html: content.description }} />
            </p>
            <h1 className="text-2xl font-khmermont pt-10">Album</h1>
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
                <p>No photos available</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleContent;
