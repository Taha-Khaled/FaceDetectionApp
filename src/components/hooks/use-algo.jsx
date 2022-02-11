import { useCallback, useEffect } from "react";
import * as faceapi from "face-api.js";
const useAlgo = (width, height, imgRef, canvasRef, detect) => {
  const handleImage = useCallback(async () => {
    const detections = await faceapi
      .detectAllFaces(imgRef.current, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceExpressions();
    canvasRef.current.innerHtml = faceapi.createCanvasFromMedia(imgRef.current);
    faceapi.matchDimensions(canvasRef.current, { width, height });

    const resized = faceapi.resizeResults(detections, {
      width,
      height,
    });
    if (detect) {
      faceapi.draw.drawFaceLandmarks(canvasRef.current, resized);
      return;
    }
    faceapi.draw.drawDetections(canvasRef.current, resized);
    faceapi.draw.drawFaceExpressions(canvasRef.current, resized);
    //faceapi.draw.drawFaceExpressions(canvasRef.current, resized, 0.05);
  }, [detect, canvasRef, height, imgRef, width]);

  useEffect(() => {
    const loadModels = () => {
      Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
        faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
        faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
        faceapi.nets.faceExpressionNet.loadFromUri("/models"),
      ])
        .then(handleImage)
        .catch((error) => console.log(error));
    };
    imgRef.current && loadModels();
  }, [imgRef, handleImage]);
};
export default useAlgo;
