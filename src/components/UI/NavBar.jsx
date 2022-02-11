import "./navbar.css";
import logo from "../assits/electronics.png";
const NavBar = (props) => {
  return (
    <div className="topnav">
      <img src={logo} alt="" />
      <div className="home">
        <span style={{ marginRight: 15 }}>Face Detection App</span>
        <a
          className={props.Checker.post ? "active" : ""}
          href="#CreatePost"
          onClick={props.postClicked}
        >
          Create Post
        </a>
        <a
          className={props.Checker.mode ? "active" : ""}
          href="#modeCheker"
          onClick={props.modeClicked}
        >
          Mode Checker
        </a>
        <a
          className={props.Checker.detect ? "active" : ""}
          href="#CreatePost"
          onClick={props.detectClicked}
        >
          Face Detections
        </a>
      </div>
      <div className="back">
        <a href="back">Back</a>
      </div>
    </div>
  );
};
export default NavBar;
