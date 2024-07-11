// ErrorComponent.jsx
import React from "react";

const ErrorComponent = ({ error }) => (
  <div className="bg-green-200 shadow-md relative p-6">
    <p className="text-center text-xl text-red-600">Error: {error}</p>
  </div>
);

export default ErrorComponent;
