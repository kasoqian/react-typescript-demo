import { useState, useEffect } from "react";

type widthType = `${number}px`;

function useWidth() {
  const [screenWidth, setScreenWidth] = useState<widthType>(
    `${window.innerWidth}px`,
  );

  const onResize = () => {
    setScreenWidth(`${window.innerWidth}px`);
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return screenWidth;
}

export default useWidth;
