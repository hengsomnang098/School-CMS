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
      className={`absolute inset-0 flex items-center justify-center ${
        // Conditionally apply flex-row or flex-col based on screen size
        studentsData.length > 0 ? "flex-col" : "flex-row"
      }`}
      style={{
        backgroundImage: `url(${DataInformationimg})`, // Placeholder or actual image
        backgroundColor: "#f0f0f0", // Fallback background color
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "20px", // Adding padding for better spacing
      }}
    >
      {studentsData.length === 0 ? (
        <p className="text-lg text-white">Loading data...</p>
      ) : (
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col items-center">
          {studentsData.map((student) => (
            <div key={student.id} className="mb-8">
              <div className="flex items-center mb-4">
                <FaUser className="w-10 h-10 mr-2 text-green-500" />
                <span className="text-4xl font-bold text-green-500">
                  {student.name}
                </span>
              </div>
              <p className="text-2xl text-white">{student.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DataInformation;
