import axios from "axios";
const baseURL = import.meta.env.VITE_REACT_APP_BASE_URL
// create axios instance
export const instance = axios.create({
    baseURL: baseURL,
    headers: {
        Accept: "application/json",
    },
});