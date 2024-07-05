import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../../api/Api";
import Spinner from "../Spinner";

const SingleMember = () => {
  const { id } = useParams();

  const [member, setMember] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMember = async () => {
      try {
        const memberResponse = await fetchData(`teams/${id}`);
        setMember(memberResponse.object);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching team member:", error);
        setLoading(false);
      }
    };

    fetchMember();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="bg-green-100 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="bg-white shadow-xl rounded-lg overflow-hidden w-full md:w-1/3 transform transition duration-500 hover:scale-105">
            <img
              className="w-full h-auto object-cover"
              src={member.photoUrl}
              alt={member.name}
            />
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-4xl font-bold mt-4 mb-6 text-center md:text-left">
              {member.name}
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              {member.description}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              {member.bio}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMember;
