import "./App.css";
import { useEffect, useState } from "react";
import NavBar from "./components/UI/NavBar";
import InputFile from "./components/UI/InputFile";
import NewPost from "./components/models/NewPost";
import CheckMode from "./components/models/CheckMode";
import ViewDetections from "./components/models/ViewDetections";
function App() {
  const [file, setFile] = useState();
  const [image, setImage] = useState();
  const [Checker, setChecker] = useState({
    post: true,
    mode: false,
    detect: false,
  });
  //const [facedetect, setFacedetect] = useState(false);
  const postClicked = () => {
    setChecker({ post: true, mode: false, detect: false });
  };
  const modeClicked = () => {
    setChecker({ post: false, mode: true, detect: false });
  };
  const detectClicked = () => {
    setChecker({ post: false, mode: false, detect: true });
  };

  useEffect(() => {
    const getImage = () => {
      let img = new Image();
      img.src = URL.createObjectURL(file);

      img.onload = () => {
        while (img.width >= 1000 || img.height >= 600) {
          img.width *= 0.8;
          img.height *= 0.8;
        }
        setImage({
          url: img.src,
          width: img.width,
          height: img.height,
        });
        console.log(img.width, img.height);
      };
    };

    file && getImage();
  }, [file]);
  const getFile = (event) => {
    setFile(event.target.files[0]);
  };
  return (
    <div>
      <NavBar
        Checker={Checker}
        postClicked={postClicked}
        modeClicked={modeClicked}
        detectClicked={detectClicked}
      />
      {Checker.post && (
        <div>
          {image ? <NewPost image={image} /> : <InputFile getFile={getFile} />}
        </div>
      )}
      {Checker.mode && (
        <div>
          {image ? (
            <CheckMode image={image} />
          ) : (
            <InputFile getFile={getFile} />
          )}
        </div>
      )}
      {Checker.detect && (
        <div>
          {image ? (
            <ViewDetections image={image} />
          ) : (
            <InputFile getFile={getFile} />
          )}
        </div>
      )}
      <div className="footer">
        <span>© tahaUiDeveloper@gmail.com</span>
      </div>
    </div>
  );
}

export default App;
