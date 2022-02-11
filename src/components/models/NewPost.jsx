import { useRef, useState } from "react";
import useDetection from "../hooks/use-Detection";
const NewPost = ({ image }, props) => {
  const [friends, setFriends] = useState([]);
  const imgRef = useRef();
  const canvasRef = useRef();
  const { url, width, height } = image;
  const faces = useDetection(width, height, imgRef);
  const enter = () => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.lineWidth = 3;
    ctx.strokeStyle = "yellow";
    faces.map((face) => ctx.strokeRect(...face));
  };
  const addFriend = (event) => {
    setFriends((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

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
        <canvas
          onMouseEnter={enter}
          ref={canvasRef}
          width={width}
          height={height}
        />
        {faces.map((face, index) => (
          <input
            name={`input${index}`}
            style={{ left: face[0], top: face[1] + face[3] + 5 }}
            placeholder="Tag a friend"
            key={index}
            className="friendInput"
            onChange={addFriend}
          />
        ))}
      </div>
      <div className="right">
        <h1>Share your post</h1>
        <input
          type="text"
          placeholder="What's on your mind?"
          className="rightInput"
        />
        {friends && (
          <span className="friends">
            with <span className="name">{Object.values(friends) + " "}</span>
          </span>
        )}
        <button className="rightButton">Send</button>
      </div>
    </div>
  );
};
export default NewPost;
