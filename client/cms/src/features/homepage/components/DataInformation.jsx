import React, { useState, useEffect } from "react";
import { fetchData } from "../api/Api";
import { FaUser } from "react-icons/fa";
import DataInformationimg from "../images/DataInformation.png";

const DataInformation = () => {
  const [studentsData, setStudentsData] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetchData("students");
        setStudentsData(response.object); // Assuming response.data.object is the array of student objects
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div
      className="absolute inset-0 flex items-center justify-center"
      style={{
        backgroundImage: `url(${DataInformationimg})`, // Placeholder or actual image
        backgroundColor: "#f0f0f0", // Fallback background color
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      {studentsData.length === 0 ? (
        <p className="text-lg text-white">Loading data...</p>
      ) : (
        <React.Fragment>
          <div className="flex">
            {studentsData.map((student) => (
              <div key={student.id} className=" ">
                <div className="flex items-center mx-12 mb-4">
                  <FaUser className="w-10 h-10 mr-2 text-green-500" />
                  <span className="text-4xl font-bold text-green-500">
                    {student.name}
                  </span>
                </div>
                <span className="text-3xl font-bold text-white">
                  {student.description}
                </span>
              </div>
            ))}
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default DataInformation;
