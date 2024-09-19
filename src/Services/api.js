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
