import React from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "../pages/Home/Home";
import NewCompet from "../pages/Competition/NewCompet";
import CompititionResults from "../pages/Competition/CompititionResults";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/add-new-competition" element={<NewCompet />} />
      <Route path="/competition-results" element={<CompititionResults/>} />
  
  
    </>
  )
);
