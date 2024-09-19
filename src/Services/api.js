import { instance } from "../config/axios";
export const getAllCompetitions = () => {
  return instance.get("/api/competition/getAllCompetations");
};
export const postCompitionInfo = (data) => {
  return instance.post("/api/competition/createCompetition", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
export const postResultInfo = (data) => {
  return instance.post("/api/competitionResults/createCompetitionResult", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
export const getAllResults = () => {
    return instance.get("/api/competitionResults/getAllCompetationResults");
  };
export const editResult = (data) => {
    return instance.put("/api/competitionResults/updateCompetationResult",data,{
        headers: {
            "Content-Type": "multipart/form-data",
          }, 
    });
  };
export const deleteResult = (id) => {
    return instance.delete(`/api/competition/deleteCompetation/${id}`);
  };
  