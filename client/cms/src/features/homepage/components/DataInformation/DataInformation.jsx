import React, { useState, useEffect } from "react";
import { fetchData } from "../../api/Api";
import DataCard from "./DataCard";
import { icons, allDataKeys } from "./Icons";
import DataInformationimg from "../../images/DataInformation.png";
import DataInformationimg1 from "../../images/DataInformation2.png";
import Spinner from "../Spinner";
import { useInView } from "react-intersection-observer";

const DataInformation = () => {
  const [data, setData] = useState({
    Students: null,
    Class: null,
    Programs: null,
    Teacher: null,
  });

  const { ref: imgRef1, inView: imgInView1 } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: imgRef2, inView: imgInView2 } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: cardsRef, inView: cardsInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
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
        ref={imgRef1}
        className={`w-full hidden md:block transition-transform duration-700 ${
          imgInView1 ? "slice-in-left-img" : "opacity-0"
        }`}
        src={DataInformationimg}
        alt="Datainformation"
      />
      <div
        ref={cardsRef}
        className={`relative flex flex-col items-center justify-center bg-cover bg-center transition-transform duration-700 ${
          cardsInView ? "slice-in-up" : "opacity-0"
        }`}
      >
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
        ref={imgRef2}
        className={`w-full hidden md:block transition-transform duration-700 ${
          imgInView2 ? "slice-in-right-img" : "opacity-0"
        }`}
        src={DataInformationimg1}
        alt="Datainformation"
      />
    </div>
  );
};

export default DataInformation;
