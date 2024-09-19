import React, { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import {
  getAllResults,
  postResultInfo,
  editResult,
  deleteResult,
} from "../../../Services/api";
import moment from "moment";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CompResults = () => {
  const [getComp, setGetComp] = useState([]);
  const [competitionName, setCompetitionName] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [pictures, setPictures] = useState(null);
  const [pegions, setPegions] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);

  // Fetch competition data
  const getResultData = async () => {
    try {
      const response = await getAllResults();
      setGetComp(response?.data?.data?.Results);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files) {
      setPictures(e.target.files[0]);
    }
  };

  // Submit or Edit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("competitionName", competitionName);
    formData.append("name", name);
    formData.append("date", date);
    formData.append("startTime", startTime);
    formData.append("endTime", endTime);
    formData.append("pegions", pegions);
    if (pictures) {
      formData.append("pictures", pictures);
    }

    try {
      if (isEdit && editId) {
        formData.append("ResultsId", editId);
        const response = await editResult(formData);
        if (response.data.message === "Results status updated successfully") {
          toast.success("Competition updated successfully");
        } else {
          toast.error("Error updating competition");
        }
      } else {
        const response = await postResultInfo(formData);
        if (response.data.status === "Success") {
          toast.success("New competition added successfully");
        } else {
          toast.error("Error adding competition");
        }
      }
      setIsEdit(false);
      setEditId(null);
      resetForm();
      getResultData();
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };

  // Handle Edit click
  const handleEdit = (item) => {
    setIsEdit(true);
    setEditId(item._id);
    setCompetitionName(item.competitionName);
    setName(item.name);
    setDate(item.date);
    setStartTime(item.startTime);
    setEndTime(item.endTime);
    setPegions(item.pegions);
    setPictures(null); // Pictures won't be edited unless the user uploads a new one
  };

  // Handle Delete
  const handleDelete = async (id) => {
    try {
      const response = await deleteResult(id);
      if (response.data.status === "Success") {
        toast.success("Competition deleted successfully");
        getResultData();
      } else {
        toast.error("Error deleting competition");
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };

  // Reset the form after submission or when switching to add new
  const resetForm = () => {
    setCompetitionName("");
    setName("");
    setDate("");
    setStartTime("");
    setEndTime("");
    setPegions("");
    setPictures(null);
  };

  useEffect(() => {
    getResultData();
  }, []);

  return (
    <>
      <div className="page-width">
        <form onSubmit={handleSubmit} className="my-12" action="">
          <div className="w-6/6 md:w-2/3 mx-auto py-8 rounded-lg border shadow-lg p-5">
            <h1 className="text-center text-[1.3rem] md:text-[3rem] font-semibold">
              {isEdit ? "Edit competition results" : "Add competition results"}
            </h1>

            {/* Input fields */}
            <InputField
              label="Competition name"
              value={competitionName}
              onChange={(e) => setCompetitionName(e.target.value)}
            />
            <InputField
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <InputField
              label="Pigeons"
              value={pegions}
              onChange={(e) => setPegions(e.target.value)}
            />
            <InputField
              label="Date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <InputField
              label="Start time"
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
            />
            <InputField
              label="End time"
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
            />
            <FileInput label="Upload picture" onChange={handleFileChange} />

            {/* Submit Button */}
            <div className="flex justify-center gap-1 mt-10">
              <button className="px-8 pt-3 pb-2 text-white rounded-md bg-[#67696b] hover:bg-[#6e6f7179] focus:outline-none">
                {isEdit ? "Update" : "Submit"}
              </button>
            </div>
          </div>
        </form>
        <ToastContainer />

        {/* Competition list */}
        <CompetitionTable
          competitions={getComp}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
    </>
  );
};

// Reusable Input Field Component
const InputField = ({ label, type = "text", value, onChange }) => (
  <>
    <p className="pt-5 pb-4 font-semibold">{label}</p>
    <input
      className="p-[15px] w-full bg-[#f8f8f8] border rounded-lg outline-none"
      placeholder={`Enter ${label.toLowerCase()}...`}
      type={type}
      value={value}
      onChange={onChange}
    />
  </>
);

// File Input Component
const FileInput = ({ label, onChange }) => (
  <>
    <p className="pt-5 pb-4 font-semibold">{label}</p>
    <input
      className="p-[15px] w-full bg-[#f8f8f8] border rounded-lg outline-none"
      placeholder={`Upload ${label.toLowerCase()}...`}
      type="file"
      onChange={onChange}
    />
  </>
);

// Competition Table Component
const CompetitionTable = ({ competitions, handleEdit, handleDelete }) => (
  <div className="w-full h-screen mt-12">
    <div className="flex flex-col">
      <div className="-my-2 py-2">
        <div className="align-middle inline-block w-full overflow-x-auto sm:rounded-md border-b border-gray-200">
          <table className="min-w-full">
            <thead>
              <tr className="bg-[#F1F4F9] border-b border-gray-200 text-xs leading-4 text-gray-500 tracking-wider">
                <TableHeader label="Sr. No." />
                <TableHeader label="Picture" />
                <TableHeader label="Name" />
                <TableHeader label="Pigeons" />
                <TableHeader label="Date" />
                <TableHeader label="Start time" />
                <TableHeader label="End time" />
                <TableHeader label="Total" />
                <TableHeader label="Actions" />
              </tr>
            </thead>
            <tbody className="bg-white">
              {competitions?.map((item, index) => {
                // Parse the start and end times using moment
                const start = moment(item?.startTime, "HH:mm"); // Assuming startTime is in "HH:mm" format
                const end = moment(item?.endTime, "HH:mm");

                // Calculate the total duration in minutes
                const duration = moment.duration(end.diff(start));
                const hours = Math.floor(duration.asHours());
                const minutes = duration.minutes();

                return (
                  <tr key={index}>
                    <TableData>{index + 1}</TableData>
                    <TableData>
                      <img
                        className="max-w-[50px] rounded-xl"
                        src={item?.pictures ? item.pictures : "/avatar.png"}
                        alt="competition"
                      />
                    </TableData>
                    <TableData>{item?.name}</TableData>
                    <TableData>{item?.pegions?.length}</TableData>
                    <TableData>{item?.date}</TableData>
                    <TableData>{item?.startTime}</TableData>
                    <TableData>{item?.endTime}</TableData>
                    <TableData>
                      {hours} hrs {minutes} mins
                    </TableData>
                    <TableData>
                      <div className="flex">
                        <FaRegEdit
                          onClick={() => handleEdit(item)}
                          className="text-[1.2rem] text-blue-500 hover:scale-110 mr-3 cursor-pointer"
                        />
                        <MdOutlineDelete
                          onClick={() => handleDelete(item._id)}
                          className="text-[1.5rem] text-red-500 hover:scale-110 cursor-pointer"
                        />
                      </div>
                    </TableData>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);

// Table Header Component
const TableHeader = ({ label }) => (
  <th className="px-6 py-3 border-b border-gray-200 text-left">
    <span className="lg:pl-2">{label}</span>
  </th>
);

// Table Data Component
const TableData = ({ children }) => (
  <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">{children}</td>
);

export default CompResults;
