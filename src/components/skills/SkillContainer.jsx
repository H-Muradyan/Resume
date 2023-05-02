import React from "react";
import Progress from "../shared/progress";

const SkillContainer = ({title, datas}) => {
  return (
    <div>
      <h4 className="text-2xl mb-5 text-center font-bold">
        {title}
      </h4>
      <div className="flex flex-wrap justify-center">
        {datas.length && datas.map((skill) => <Progress key={skill.id} data={skill} />)}
      </div>
    </div>
  );
};

export default SkillContainer;
