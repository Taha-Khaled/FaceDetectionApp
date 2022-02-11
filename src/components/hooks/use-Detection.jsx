import { useCallback, useEffect, useState } from "react";
import * as faceapi from "face-api.js";
const useDetection = (width, height, imgRef) => {
  const [faces, setFaces] = useState([]);

  const handleImage = useCallback(async () => {
    const detections = await faceapi.detectAllFaces(
      imgRef.current,
      new faceapi.TinyFaceDetectorOptions()
    );
    const resized = faceapi.resizeResults(detections, {
      width,
      height,
    });
    setFaces(resized.map((d) => Object.values(d.box)));
  }, [height, imgRef, width]);

  useEffect(() => {
    const loadModels = () => {
      Promise.all([faceapi.nets.tinyFaceDetector.loadFromUri("/models")])
        .then(handleImage)
        .catch((e) => console.log(e));
    };
    imgRef.current && loadModels();
  }, [imgRef, handleImage]);
  return faces;
};
export default useDetection;
