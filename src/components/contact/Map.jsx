import React from "react";
import { mapLocation } from "./const";

const Map = () => {
  return (
    <>
      <h4 className="text-2xl mb-5 text-center lg:text-start font-bold">Contact Map</h4>
      <iframe height={300} width="100%" src={mapLocation} title="myLocation"></iframe>
    </>
  );
};

export default Map;
