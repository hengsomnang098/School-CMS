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

  return (
    <div className=" w-[1000px] mx-auto">
      <div className="max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12">
        <div className="bg-white shadow-xl drop-shadow-lg rounded-sm overflow-hidden">
          <img
            className="w-[100%] h-[300px] object-cover"
            src={member.photoUrl}
            alt={member.name}
          />
        </div>
        <div className="lg:w-3/4 mx-auto">
          <h2 className="text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer">
            Name: {member.name}
          </h2>
          <h2 className="text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer">
            Description : {member.description}
          </h2>
          <h2 className="text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer">
            Bio : {member.bio}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SingleMember;
