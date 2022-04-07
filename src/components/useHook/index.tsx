import useMouse from "../../hooks/useMounse";
import useWidth from "../../hooks/useWidth";

function ScreenWidth() {
  const screenWidth = useWidth();
  const [x, y] = useMouse();

  return (
    <>
      <div>{screenWidth}</div>
      <div>
        {x},{y}
      </div>
    </>
  );
}

export default ScreenWidth;
