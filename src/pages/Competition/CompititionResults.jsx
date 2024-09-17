import React from "react";
import Header from "../../components/Home/Header";
import NewCompetition from "../../components/Home/Competition/NewCompetition";
import Footer from "../../components/Home/Footer";
import CompResults from "../../components/Home/Competition/CompResults";

const CompititionResults = () => {
  return (
    <div>
      <Header />
      <CompResults/>
      <Footer />
    </div>
  );
};

export default CompititionResults;
