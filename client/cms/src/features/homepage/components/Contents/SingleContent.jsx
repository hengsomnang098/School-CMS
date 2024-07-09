import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../../api/Api";
import Spinner from "../Spinner";

const SingleContent = () => {
  const { id } = useParams();

  const [content, setContent] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        // Simulate delay for 2 seconds
        await new Promise((resolve) => setTimeout(resolve, 2000));

        const contentsRes = await fetchData(`contents/${id}`);
        setContent(contentsRes.object);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching content:", error);
        setLoading(false);
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
      <div className="max-w-[1640px] mx-auto px-6 flex flex-col md:flex-row gap-12">
        <div className="lg:w-9/12 mx-auto font-khmermont">
          <h2 className="text-3xl mt-10 font-bold mb-1 tracking-wider break-words">
            {content.title}
          </h2>
          <div className="text-3xl  font-bold mb-10 tracking-widest break-words">
            <div className="flex-grow border-t-[6px] mr-8 border-black"></div>
          </div>
          <div className="text-xl">
            <p className=" font-khmermont break-words">
              <span dangerouslySetInnerHTML={{ __html: content.description }} />
            </p>
            <h2 className="text-xl mt-10 font-bold mb-10  text-gray-500 break-words">
              Published Date: {content.createdAt}
            </h2>
            <h1 className="text-2xl font-khmermont pt-10">Album</h1>
            <div className="my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Array.isArray(content.albumList) &&
              content.albumList.length > 0 ? (
                content.albumList.map((album) => (
                  <div key={album.id}>
                    <div>
                      <img
                        src={album.mediaUrl}
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
