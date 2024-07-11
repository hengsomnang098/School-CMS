import React, { useState, useEffect } from "react";
import { fetchData } from "../../api/Api";
import DataCard from "./DataCard";
import { icons, allDataKeys } from "./Icons";
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
          acc[student.name] = student;
          return acc;
        }, {});
        setData(mappedData);
      } catch (error) {
        console.error("Bad Request Data", error);
      }
    };
    fetchStudents();
  }, []);

  return (
    <div className="top-0 left-0 w-full bg-green-400 flex flex-col items-center justify-center bg-cover bg-center">
      <img
        className="w-full hidden md:block"
        src={DataInformationimg}
        alt="Datainformation"
      />
      <div className="relative flex flex-col items-center justify-center bg-cover bg-center">
        <div className="flex flex-col md:flex-row flex-wrap max-w-screen-lg mx-auto p-4">
          {allDataKeys.map(
            (key) =>
              data[key] && (
                <DataCard
                  key={key}
                  icon={icons[key]}
                  name={data[key].name}
                  description={data[key].description}
                />
              )
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
