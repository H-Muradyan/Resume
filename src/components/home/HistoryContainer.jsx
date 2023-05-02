import React from "react";
import SequenceLine from "../shared/sequenceLine";

const HistoryContainer = ({title, datas}) => {
  return (
    <div>
      <h4 className="pl-4 text-2xl mb-5 font-bold">{title}</h4>
      {datas.length &&
        datas.map((data) => <SequenceLine key={data.id} data={data} />)}
    </div>
  );
};

export default HistoryContainer;
