import { useState, useEffect } from "react";

const useResizeObserver = (headerRef) => {
  const [widthSize, setWidthSize] = useState(null);
  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      const { innerWidth } = entries[0].target.ownerDocument.defaultView;
      setWidthSize(innerWidth);
    });
    resizeObserver.observe(headerRef.current);
    return () => resizeObserver.unobserve();
  }, []);

  return widthSize;
};

export default useResizeObserver;
