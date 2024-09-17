import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
const CompResults = () => {
  const tableData = [
    {
      img: "",
      name: "Adam John",
      pigeons: "4",
      date: "27-Jul-23",
      startTime: "12:10pm",
      EndTime: "5:00pm",
    },
    {
        img: "",
        name: "Adam John",
        pigeons: "4",
        date: "27-Jul-23",
        startTime: "12:10pm",
        EndTime: "5:00pm",
    },
  ];
  return (
    <>
      <div className="page-width">
        <form className="my-12" action="">
          <div className="w-6/6 md:w-2/3 mx-auto py-8 rounded-lg border shadow-lg p-5">
            <h1 className="text-center text-[1.3rem] md:text-[3rem] font-semibold">
               Competition results
            </h1>
            <p className=" pt-5 pb-4 font-semibold">
              Competition name
            </p>
            <input
              className="p-[15px] w-full bg-[#f8f8f8] border rounded-lg outline-none"
              placeholder="Type here...."
              type="text"
              
            />
            <p className=" pt-5 pb-4 font-semibold">Name</p>
            <input
              className="p-[15px] w-full bg-[#f8f8f8] border rounded-lg outline-none"
              placeholder="Type here...."
              type="text"
              
            />
            <p className=" pt-5 pb-4 font-semibold">Pigeons</p>
            <input
              className="p-[15px] w-full bg-[#f8f8f8] border rounded-lg outline-none"
              placeholder="Type here...."
              type="number"
              
            />
            <p className=" pt-5 pb-4 font-semibold">Date</p>
            <input
              className="p-[15px] w-full bg-[#f8f8f8] border rounded-lg outline-none"
              placeholder="Type here...."
              type="date"
              
            />
            <p className=" pt-5 pb-4 font-semibold">Start time</p>
            <input
              className="p-[15px] w-full bg-[#f8f8f8] border rounded-lg outline-none"
              placeholder="Type here...."
              type="time"
              
            />
            <p className=" pt-5 pb-4 font-semibold">End time</p>
            <input
              className="p-[15px] w-full bg-[#f8f8f8] border rounded-lg outline-none"
              placeholder="Type here...."
              type="time"
              
            />
            <p className=" pt-5 pb-4 font-semibold">Upload picture</p>
            <input
              className="p-[15px] w-full bg-[#f8f8f8] border rounded-lg outline-none"
              placeholder="Type here...."
              type="file"
              
            />
            <div className="flex justify-center gap-1 mt-10">
              <button className="px-8 pt-3 pb-2 text-white rounded-md bg-[#67696b]  hover:bg-[#6e6f7179] focus:outline-none">
                Submit
              </button>
            </div>
          </div>
        </form>

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
                      {tableData?.map((item, index) => {
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
                                  src="/Malik-Imran.jpg"
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
                                <p className="tertiary-para">{item?.pigeons}</p>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                              <div className="flex items-center">
                                <p className="tertiary-para">{item?.date}</p>
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
                                <p className="tertiary-para">{item?.EndTime}</p>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                              <p className="tertiary-para">total</p>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                              <div className="flex items-center gap-3">
                              
                              <span className="text-[#7777cb] text-[1.2rem] cursor-pointer"><FaRegEdit /></span>
                              <span className="text-red-500 text-[1.3rem] cursor-pointer"><MdOutlineDelete /></span>
                              
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

export default CompResults;
