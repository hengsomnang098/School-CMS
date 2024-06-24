import React, { useState, useEffect } from "react";
import { fetchData } from "../api/Api";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBookOpen,
  FaUserTie,
} from "react-icons/fa";
import DataInformationimg from "../images/DataInformation.png";

const DataInformation = () => {
  const [data, setData] = useState({
    totalStudents: null,
    totalClass: null,
    totalPrograms: null,
    totalTeacher: null,
  });

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetchData("students");

        const mappedData = response.object.reduce((acc, student) => {
          switch (student.name) {
            case "Total Students":
              acc.totalStudents = student;
              break;
            case "Total Class":
              acc.totalClass = student;
              break;
            case "Total Programs":
              acc.totalPrograms = student;
              break;
            case "Total Teachers":
              acc.totalTeacher = student;
              break;
            default:
              break;
          }
          return acc;
        }, {});

        setData(mappedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchStudents();
  }, []);

  const renderCard = (icon, name, description) => (
    <div className="mb-8 md:w-1/2 lg:w-1/4 p-4 text-center items-center justify-center flex-col flex">
      <div className="mb-4 flex justify-center">{icon}</div>
      <div className="mb-4">
        <span className="font-mono tracking-wider text-4xl font-bold text-green-500">
          {name}
        </span>
      </div>
      <div className="mb-4">
        <p className="text-5xl font-bold font-mono mt-5 text-gray-200">
          {description}
        </p>
      </div>
    </div>
  );

  return (
    <div
      className="absolute inset-0 flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${DataInformationimg})`,
        backgroundColor: "#f0f0f0",
      }}
    >
      {!data.totalStudents &&
      !data.totalClass &&
      !data.totalPrograms &&
      !data.totalTeacher ? (
        <p className="text-lg text-white">Loading</p>
      ) : (
        <div className="flex flex-col md:flex-row flex-wrap max-w-screen-lg mt-72 mx-auto p-4">
          {data.totalStudents &&
            renderCard(
              <FaUserGraduate className="w-10 h-10 text-green-500" />,
              data.totalStudents.name,
              data.totalStudents.description
            )}
          {data.totalClass &&
            renderCard(
              <FaChalkboardTeacher className="w-10 h-10 text-green-500" />,
              data.totalClass.name,
              data.totalClass.description
            )}
          {data.totalPrograms &&
            renderCard(
              <FaBookOpen className="w-10 h-10 text-green-500" />,
              data.totalPrograms.name,
              data.totalPrograms.description
            )}
          {data.totalTeacher &&
            renderCard(
              <FaUserTie className="w-10 h-10 text-green-500" />,
              data.totalTeacher.name,
              data.totalTeacher.description
            )}
        </div>
      )}
    </div>
  );
};

export default DataInformation;
