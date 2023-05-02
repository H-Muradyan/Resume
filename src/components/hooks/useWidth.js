import { useState, useEffect } from "react";

const useWidth = () => {
  const [widthSize, setWidthSize] = useState();

  const width = () => {
    setWidthSize(window.innerWidth);
    window.addEventListener("resize", width);
  };

  useEffect(() => {
    width();
    return () => window.removeEventListener("resize", width);
  }, []);

  return widthSize;
};

export default useWidth;
