import { useState, useEffect } from "react";

const useViewChecker = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1280) {
        setIsMobile(false);
      } else if (window.innerWidth < 1280) {
        setIsMobile(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { isMobile };
};

export default useViewChecker;
