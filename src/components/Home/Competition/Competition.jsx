import React from "react";
import { Link } from "react-router-dom";

const Competition = () => {
  return (
    <>
      <div className="page-width">
        <div className="grid md:grid-cols-3 items-center gap-5 py-16">
          <Link to="/add-new-competition" className="bg-[whitesmoke] p-8 rounded-2xl shadow-lg">
            <div className="flex justify-center">
              <img
                className="w-10"
                src="/svg-spinners--blocks-shuffle-3.svg"
                alt=""
              />
            </div>
            <p className="text-[1.5rem] font-semibold cursor-pointer text-center my-2">
              Add new competition
            </p>
          </Link>
          <Link to="/competition-results" className="bg-[whitesmoke] p-8 rounded-2xl shadow-lg">
            <div className="flex justify-center">
              <img
                className="w-10"
                src="/svg-spinners--bars-scale.svg"
                alt=""
              />
            </div>
            <p className="text-[1.5rem] font-semibold cursor-pointer text-center my-2">
              Add competition results
            </p>
          </Link>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Competition;
