import React from "react";
import PageContainer from "../shared/pageContainer";
import SkillContainer from "./SkillContainer";
import { languageSkills, technicalSkills } from "./const";

const SkillsPage = () => {
  return (
    <PageContainer>
      <div className="px-4 space-y-14">
        <SkillContainer title="Technical Skills" datas={technicalSkills} />
        <SkillContainer title="Language Skills" datas={languageSkills} />
      </div>
    </PageContainer>
  );
};

export default SkillsPage;
