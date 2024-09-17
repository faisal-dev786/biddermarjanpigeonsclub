import React, { useState, useEffect } from "react";

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  const formatTime = (time) => {
    return time.toLocaleTimeString(); // Format time
  };

  const formatDate = (date) => {
    return date.toLocaleDateString(); // Format date
  };
  return (
    <>
      {" "}
      <div className="page-width">
        <div className="img-container">
          <div className="imgs">
            <img className="" src="/MalikFaisal.jpg" alt="" />
            <p className="text-center font-medium my-3">Malik Faisal</p>
          </div>
          <div className="imgs">
            <img src="/Malik-Imran.jpg" alt="" />
            <p className="text-center font-medium my-3">Malik Imran</p>
          </div>
          <div className="imgs">
            <img src="/Malik-Qaiser.jpg" alt="" />
            <p className="text-center font-medium my-3">Malik Qaiser</p>
          </div>
          <div className="imgs"></div>
          <div className="imgs">
            <img src="/Malik-sadaqat.jpg" alt="" />
            <p className="text-center font-medium my-3">Malik Sadaqat</p>
          </div>
          <div className="imgs">
            {" "}
            <img src="/Sadaqat-ali.jpg" alt="" />
            <p className="text-center font-medium my-3">Sadaqat Ali</p>
          </div>
        </div>
      </div>
      <marquee behavior="" direction="right">
        وَتُعِزُ مَن تَشَاء وَتُذِلُ مَن تَشَاء
      </marquee>
      <div className="bg-[#33363d] mt-2">
        <p className="text-center text-white py-2 text-[1.2rem] font-medium">
          Malik Tahir Banka [+923005451787] || Atif Munir [+923055090307]
        </p>
      </div>
      <div className="bg-[#23242c] my-3 flex flex-wrap items-center justify-between">
        <p></p>
        <p className=" text-white ml-20 py-4 text-[1.3rem] font-semibold">
          Home
        </p>
        <p className="text-white py-4 text-[1.1rem] font-semibold pr-1">
          {formatDate(currentTime)} <span> {formatTime(currentTime)}</span>
        </p>
      </div>
    </>
  );
};

export default Header;
