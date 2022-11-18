import { useEffect, useState } from "react";
export const useWindowSize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const setWindowSize = (e) => {
    setWidth(e.target.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", setWindowSize);
    return () => window.removeEventListener("resize", setWindowSize);
  }, [width, setWidth]);

  return [width];
};
