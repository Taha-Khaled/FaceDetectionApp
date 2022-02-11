import { useRef } from "react";
import useAlgo from "../hooks/use-algo";
const CheckMode = ({ image }) => {
  const imgRef = useRef();
  const canvasRef = useRef();
  const { url, width, height } = image;
  useAlgo(width, height, imgRef, canvasRef, false);
  return (
    <div className="container">
      <div className="left" style={{ width, height }}>
        <img
          ref={imgRef}
          crossOrigin="anonymous"
          src={url}
          alt=""
          width={width}
          height={height}
        />
        <canvas ref={canvasRef} width={width} height={height} />
      </div>
      <div className="right"></div>
    </div>
  );
};
export default CheckMode;
