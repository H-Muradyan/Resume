import React, { useEffect } from "react";
import PageContainer from "../shared/pageContainer";
import HistoryContainer from "./HistoryContainer";
import { educationHistory, workingHistory } from "./const";

const HomePage = () => {
  return (
    <PageContainer>
      <div className="lg:flex space-y-14 lg:space-y-0 text-center lg:text-start">
        <HistoryContainer title="Working History" datas={workingHistory} />
        <HistoryContainer title="Education History" datas={educationHistory} />
      </div>
    </PageContainer>
  );
};

export default HomePage;
