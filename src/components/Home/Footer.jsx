import React from "react";
const currentYear = new Date().getFullYear(); // Get current year
const Footer = () => {
  return (
    <>
      {" "}
      <div className="bg-[#23242c] ">
        <p className="text-center text-white py-2 text-[1rem] font-semibold">
          © {currentYear} biddermarjanpigeonsclub. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
