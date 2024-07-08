import React, { useState, useEffect } from "react";
import { fetchData } from "../../api/Api";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBookOpen,
  FaUserTie,
} from "react-icons/fa";
import DataInformationimg from "../../images/DataInformation.png";
import DataInformationimg1 from "../../images/DataInformation2.png";
import Spinner from "../Spinner";

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
        console.error("Bad Request Data", error);
      }
    };

    fetchStudents();
  }, []);

  const renderCard = (icon, name, description) => (
    <div className="mb-2 md:w-1/2 lg:w-1/4 p-4 text-center items-center justify-center flex-col flex">
      <div className="mb-4 flex justify-center">{icon}</div>
      <div className="mb-4">
        <span className="font-mono tracking-wider text-xl font-bold text-green-500 sm:text-4xl">
          {name}
        </span>
      </div>
      <div className="mb-4">
        <p className="text-xl font-bold font-mono text-gray-700 sm:text-4xl">
          {description}
        </p>
      </div>
    </div>
  );

  return (
    <div className="top-0 left-0 w-full bg-yellow-400 flex flex-col items-center justify-center bg-cover bg-center">
      <img className="w-full" src={DataInformationimg} alt="Datainformation" />
      <div className="relative flex flex-col  items-center justify-center bg-cover bg-center">
        <div className="flex flex-col md:flex-row flex-wrap max-w-screen-lg mx-auto p-4">
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
        {!data.totalStudents &&
          !data.totalClass &&
          !data.totalPrograms &&
          !data.totalTeacher && <Spinner />}
      </div>
      <img className="w-full" src={DataInformationimg1} alt="Datainformation" />
    </div>
  );
};

export default DataInformation;
