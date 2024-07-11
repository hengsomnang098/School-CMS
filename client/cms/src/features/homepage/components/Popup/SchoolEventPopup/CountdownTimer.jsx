import React, { useEffect, useState } from "react";

const CountdownTimer = ({ onClose }) => {
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    const autoClose = setTimeout(() => {
      onClose();
    }, 10000);

    return () => {
      clearInterval(countdown);
      clearTimeout(autoClose);
    };
  }, [onClose]);

  return (
    <div>
      <div className="w-full h-[30px] bg-green-500">
        <p className="text-center text-white w-full">
          Automatic Disappear at: {timer}s
        </p>
      </div>
    </div>
  );
};

export default CountdownTimer;
