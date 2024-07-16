import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../../api/Api";
import Spinner from "../Spinner";
import { ImCross } from "react-icons/im";

const SingleContent = () => {
  const { id } = useParams();

  const [content, setContent] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoadingImage, setIsLoadingImage] = useState(false);

  const fetchContent = useCallback(async () => {
    setLoading(true);
    try {
      const contentsRes = await fetchData(`contents/${id}`);
      setContent(contentsRes.object);
    } catch (error) {
      console.error("Error fetching content:", error);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchContent();
  }, [fetchContent]);

  const handleImageClick = useCallback((image) => {
    setSelectedImage(image);
    setIsLoadingImage(true);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedImage(null);
    setIsLoadingImage(false);
  }, []);

  const handleBackgroundClick = useCallback(
    (e) => {
      if (e.target === e.currentTarget) {
        closeModal();
      }
    },
    [closeModal]
  );

  const handleImageLoad = useCallback(() => {
    setIsLoadingImage(false);
  }, []);

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
        <div className="font-khmermont slice-in-right">
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

                <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
                  {content.albumList.map((album) => (
                    <div
                      key={album.id}
                      className="bg-white  rounded-lg size-84  lg:size-64 overflow-hidden shadow-lg"
                    >
                      <img
                        src={album.url}
                        alt={`Album for ${content.title}`}
                        className="w-full h-full cursor-zoom-in"
                        onClick={() => handleImageClick(album.url)}
                      />
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={handleBackgroundClick}
        >
          <div className="relative">
            {isLoadingImage && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Spinner />
              </div>
            )}
            <img
              src={selectedImage}
              alt="Zoomed"
              className="max-h-[700px] md:max-h-[600px] max-w-full"
              onLoad={handleImageLoad}
              style={{ display: isLoadingImage ? "none" : "block" }}
            />
            {!isLoadingImage && (
              <button
                onClick={closeModal}
                className="absolute top-0 right-0 mt-2 mr-2 text-red-500 font-bold text-2xl"
              >
                <ImCross />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleContent;
