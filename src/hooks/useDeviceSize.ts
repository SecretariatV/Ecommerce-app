import { useEffect, useState } from "react";

const useDeviceSize = () => {
  const [width, setWidth] = useState<number>(window.outerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.outerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return width;
};

export default useDeviceSize;
