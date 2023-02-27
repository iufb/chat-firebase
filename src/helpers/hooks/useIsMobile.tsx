import { useEffect, useState } from "react";

export const useIsMobile = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  function handleWidth() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWidth);
    return () => window.removeEventListener("resize", handleWidth);
  }, []);
  const isMobile = width <= 768;
  return { isMobile };
};
