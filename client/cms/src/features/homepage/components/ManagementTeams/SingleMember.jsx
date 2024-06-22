import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../../api/Api";

const SingleMember = () => {
  const { id } = useParams();

  const [member, setMember] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const teamsResponse = await fetchData(`teams/${id}`);
        setMember(teamsResponse.object);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching category and articles:", error);
        setLoading(false);
      }
    };

    fetchTeams();
  }, [id]);

  if (loading) {
    return <p className="text-center text-gray-600">Loading ...</p>;
  }

  return (
    <div className="bg-green-100 py-5">
      <div className="w-[1000px]  rounded-md mx-auto">
        <div className="max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12">
          <div className="bg-white shadow-2xl drop-shadow-2xl rounded-md transform transition duration-500 hover:scale-110 overflow-hidden">
            <img
              className="w-[350px] h-[350px] rounded-md object-cover "
              src={member.photoUrl}
              alt={member.name}
            />
          </div>
          <div className="lg:w-3/4 mx-auto h-[350px]">
            <h2 className="text-5xl mt-4 font-khmermont mb-2 text-center">
              {member.description}
            </h2>
            <div>
              <h2 className="h-[256px] text-xl ml-5 mt-4 font-khmermont mb-4 text-gray-600 break-words">
                {member.bio}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMember;
