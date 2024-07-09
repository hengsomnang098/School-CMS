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
      <div className="max-w-full mx-auto px-6 flex flex-col gap-6 md:max-w-[1200px]">
        <div className="font-khmermont">
          <h2 className="text-2xl mt-6 font-bold mb-2 tracking-wider break-words">
            {content.title}
          </h2>
          <div className="text-2xl font-bold mb-6 tracking-widest break-words">
            <div className="flex-grow border-t-[4px] mr-4 border-black"></div>
          </div>
          <div className="text-lg">
            <p className="font-khmermont break-words">
              <span dangerouslySetInnerHTML={{ __html: content.description }} />
            </p>
            <h2 className="text-lg mt-6 font-bold mb-6 text-gray-500 break-words">
              Published Date: {content.createdAt}
            </h2>
            {content.albumList && content.albumList.length > 0 && (
              <>
                <h1 className="text-xl font-khmermont pb-6">Album</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {content.albumList.map((album) => (
                    <div
                      key={album.id}
                      className="bg-white rounded-lg overflow-hidden shadow-lg"
                    >
                      <img
                        src={album.mediaUrl}
                        alt={`Media for ${content.title}`}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleContent;
