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
    Students: null,
    Class: null,
    Programs: null,
    Teacher: null,
  });

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetchData("students");

        const mappedData = response.object.reduce((acc, student) => {
          switch (student.name) {
            case "Students":
              acc.Students = student;
              break;
            case "Class":
              acc.Class = student;
              break;
            case "Programs":
              acc.Programs = student;
              break;
            case "Teachers":
              acc.Teacher = student;
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
    <div className="mb-2 md:w-1/2 lg:w-1/4 p-2 text-center items-center justify-center flex-col flex">
      <div className="mb-2 flex flex-col md:flex-row   items-center">
        <div className="h-10 flex justify-center  md:mr-4">{icon}</div>
        <span className="font-mono tracking-wider text-center justify-center items-center text-2xl font-bold text-white md:text-2xl lg:text-3xl">
          {name}
        </span>
      </div>
      <div className="text-center justify-center items-center">
        <p className="text-xl font-bold font-mono  text-white sm:text-2xl  md:text-2xl lg:text-3xl">
          {description}
        </p>
      </div>
    </div>
  );

  return (
    <div className="top-0 left-0 w-full bg-green-400 flex flex-col items-center justify-center bg-cover bg-center">
      <img
        className="w-full hidden md:block"
        src={DataInformationimg}
        alt="Datainformation"
      />
      <div className="relative flex flex-col items-center justify-center bg-cover bg-center">
        <div className="flex flex-col md:flex-row flex-wrap max-w-screen-lg mx-auto p-4">
          {data.Students &&
            renderCard(
              <FaUserGraduate className="w-10 h-10 text-white" />,
              data.Students.name,
              data.Students.description
            )}
          {data.Class &&
            renderCard(
              <FaChalkboardTeacher className="w-10 h-10 text-white" />,
              data.Class.name,
              data.Class.description
            )}
          {data.Programs &&
            renderCard(
              <FaBookOpen className="w-10 h-10 text-white" />,
              data.Programs.name,
              data.Programs.description
            )}
          {data.Teacher &&
            renderCard(
              <FaUserTie className="w-10 h-10 text-white" />,
              data.Teacher.name,
              data.Teacher.description
            )}
        </div>
        {!data.Students && !data.Class && !data.Programs && !data.Teacher && (
          <Spinner />
        )}
      </div>
      <img
        className="w-full hidden md:block"
        src={DataInformationimg1}
        alt="Datainformation"
      />
    </div>
  );
};

export default DataInformation;
