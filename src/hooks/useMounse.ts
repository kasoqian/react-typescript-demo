import { useEffect, useState } from "react";

function useMouse() {
  const [xPoint, setXPoint] = useState(0);
  const [yPoint, setYPoint] = useState(0);

  const mouseMove = (e: MouseEvent) => {
    setXPoint(e.x);
    setYPoint(e.y);
  };

  useEffect(() => {
    document.addEventListener("mousemove", mouseMove);

    return () => {
      document.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return [xPoint, yPoint];
}

export default useMouse;
