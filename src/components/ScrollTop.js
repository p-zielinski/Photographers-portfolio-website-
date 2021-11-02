import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
};

export default ScrollTop;
