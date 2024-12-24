import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Force scroll to the top of the page
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]); // Trigger whenever the route changes

  return null;
};

export default ScrollToTop;
