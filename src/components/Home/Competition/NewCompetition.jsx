import React, { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { getAllCompetitions, postCompitionInfo } from "../../../Services/api";
import moment from "moment";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const NewCompetition = () => {
  // image url
  const imageUrl = import.meta.env.VITE_REACT_APP_IMAGE_URL;
  const [getComp, setGetComp] = useState();
  const [competitionName, setCompetitionName] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [pictures, setPictures] = useState(null);
  const [pegions, setPegions] = useState("");
  const formData = new FormData();
  // get compition data
  const getCompData = async () => {
    try {
      const response = await getAllCompetitions();
      console.log("getCompData", response?.data?.data);
      setGetComp(response?.data?.data?.Pigeon);
    } catch (error) {
      console.log(error);
    }
  };
  const handleFileChange = (e) => {
    if (e.target.files) {
      setPictures(e.target.files[0]);
    }
  };
  // Append form data fields
  formData.append("competitionName", competitionName);
  formData.append("name", name);
  formData.append("date", date);
  formData.append("startTime", startTime);
  formData.append("endTime", endTime);
  formData.append("pegions", pegions);

  // If you have images, append the file
  if (pictures) {
    formData.append("pictures", pictures);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await postCompitionInfo(formData);
      console.log("postCompitionInfo", response?.data?.data);

      if (response.data.status == "Success") {
        toast.success("New user added successfully");
        getCompData();
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };
  useEffect(() => {
    getCompData();
  }, []);
  return (
    <>
      <div className="page-width">
        <form onSubmit={handleSubmit} className="my-12" action="">
          <div className="w-6/6 md:w-2/3 mx-auto py-8 rounded-lg border shadow-lg p-5">
            <h1 className="text-center text-[1.3rem] md:text-[3rem] font-semibold">
              Add new competition
            </h1>
            <p className=" pt-5 pb-4 font-semibold">Competition name</p>
            <input
              className="p-[15px] w-full bg-[#f8f8f8] border rounded-lg outline-none"
              placeholder="Type here...."
              type="text"
              onChange={(e) => setCompetitionName(e.target.value)}
            />
            <p className=" pt-5 pb-4 font-semibold">Name</p>
            <input
              className="p-[15px] w-full bg-[#f8f8f8] border rounded-lg outline-none"
              placeholder="Type here...."
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
            <p className=" pt-5 pb-4 font-semibold">Pigeons</p>
            <input
              className="p-[15px] w-full bg-[#f8f8f8] border rounded-lg outline-none"
              placeholder="Type here...."
              type="text"
              onChange={(e) => setPegions(e.target.value)}
            />
            <p className=" pt-5 pb-4 font-semibold">Date</p>
            <input
              className="p-[15px] w-full bg-[#f8f8f8] border rounded-lg outline-none"
              placeholder="Type here...."
              type="date"
              onChange={(e) => setDate(e.target.value)}
            />
            <p className=" pt-5 pb-4 font-semibold">Start time</p>
            <input
              className="p-[15px] w-full bg-[#f8f8f8] border rounded-lg outline-none"
              placeholder="Type here...."
              type="time"
              onChange={(e) => setStartTime(e.target.value)}
            />
            <p className=" pt-5 pb-4 font-semibold">End time</p>
            <input
              className="p-[15px] w-full bg-[#f8f8f8] border rounded-lg outline-none"
              placeholder="Type here...."
              type="time"
              onChange={(e) => setEndTime(e.target.value)}
            />
            <p className=" pt-5 pb-4 font-semibold">Upload picture</p>
            <input
              className="p-[15px] w-full bg-[#f8f8f8] border rounded-lg outline-none"
              placeholder="Type here...."
              type="file"
              onChange={handleFileChange}
            />
            <div className="flex justify-center gap-1 mt-10">
              <button className="px-8 pt-3 pb-2 text-white rounded-md bg-[#67696b]  hover:bg-[#6e6f7179] focus:outline-none">
                Submit
              </button>
            </div>
          </div>
        </form>
        <ToastContainer />

        {/* table data */}

        {/* table */}
        <div className="w-full h-screen mt-12">
          <div className="">
            <div className="flex flex-col">
              <div className="-my-2 py-2">
                <div className="align-middle inline-block w-full overflow-x-auto sm:rounded-md border-b border-gray-200">
                  <table className="min-w-full">
                    {/* HEAD start */}
                    <thead>
                      <tr className="bg-[#F1F4F9] border-b border-gray-200 text-xs leading-4 text-gray-500  tracking-wider">
                        <th className="px-6 py-3 text-left font-medium">
                          Sr. No.
                        </th>
                        <th className="px-6 mt-1 md:mt-0 py-3 text-left font-medium ">
                          <span>
                            <p>Picture</p>
                          </span>
                        </th>
                        <th className="px-6 mt-1 md:mt-0 py-3 text-left font-medium ">
                          <span>
                            <p>Name</p>
                          </span>
                        </th>

                        <th>
                          <div className="px-6 py-3 text-left font-medium ">
                            <span>
                              <p>Pigeons</p>
                            </span>
                          </div>
                        </th>
                        <th className="">
                          <div className="px-6 py-3 text-left font-medium ">
                            <span>
                              <p>Date</p>
                            </span>
                          </div>{" "}
                        </th>
                        <th className="">
                          <div className="px-6 py-3 text-left font-medium ">
                            <span>
                              <p>Start time</p>
                            </span>
                          </div>{" "}
                        </th>
                        <th className="">
                          <div className="px-6 py-3 text-left font-medium ">
                            <span>
                              <p>End time</p>
                            </span>
                          </div>{" "}
                        </th>
                        <th className="">
                          <div className="px-6 py-3 text-left font-medium ">
                            <span>
                              <p>Total</p>
                            </span>
                          </div>{" "}
                        </th>
                        <th className="">
                          <div className="px-6 py-3 text-left font-medium ">
                            <span>
                              <p>Actions</p>
                            </span>
                          </div>{" "}
                        </th>
                      </tr>
                    </thead>
                    {/* HEAD end */}
                    {/* BODY start */}
                    <tbody className="bg-white">
                      {getComp?.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                              <div className="flex items-center">
                                <p className="tertiary-para">{index + 1}</p>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                              <div className="flex items-center">
                                <img
                                  className="max-w-[50px] rounded-xl"
                                  src={
                                    item?.pictures
                                      ? item?.pictures
                                      : "/avatar.png"
                                  }
                                  alt=""
                                />
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                              <div className="flex items-center">
                                <p className="tertiary-para">{item?.name}</p>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                              <div className="flex items-center">
                                <p className="tertiary-para">
                                  {item?.pegions.length}
                                </p>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                              <div className="flex items-center">
                                <p className="tertiary-para"> {item?.date}</p>
                              </div>
                            </td>

                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                              <div className="flex items-center">
                                <p className="tertiary-para">
                                  {item?.startTime}
                                </p>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                              <div className="flex items-center">
                                <p className="tertiary-para">{item?.endTime}</p>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                              <p className="tertiary-para">total</p>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                              <div className="flex items-center gap-3">
                                <span className="text-[#7777cb] text-[1.2rem] cursor-pointer">
                                  <FaRegEdit />
                                </span>
                                <span className="text-red-500 text-[1.3rem] cursor-pointer">
                                  <MdOutlineDelete />
                                </span>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                    {/* BODY end */}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewCompetition;
