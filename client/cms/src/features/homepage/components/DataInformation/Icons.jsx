import React from "react";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBookOpen,
  FaUserTie,
} from "react-icons/fa";

export const icons = {
  Students: <FaUserGraduate className="w-10 h-10 text-white" />,
  Class: <FaChalkboardTeacher className="w-10 h-10 text-white" />,
  Programs: <FaBookOpen className="w-10 h-10 text-white" />,
  Teachers: <FaUserTie className="w-10 h-10 text-white" />,
};

export const allDataKeys = ["Students", "Class", "Programs", "Teachers"];
