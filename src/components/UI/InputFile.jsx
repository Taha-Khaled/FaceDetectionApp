const InputFile = (props) => {
  return (
    <div className="newPostCard">
      <div className="addPost">
        <img
          src="https://images.pexels.com/photos/9371782/pexels-photo-9371782.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
          className="avatar"
        />
        <div className="postForm">
          <input
            type="text"
            placeholder="What's on your mind?"
            className="postInput"
          />
          <label htmlFor="file">
            <img
              className="addImg"
              src="https://cdn.icon-icons.com/icons2/564/PNG/512/Add_Image_icon-icons.com_54218.png"
              alt=""
            />
            <img
              className="addImg"
              src="https://icon-library.com/images/maps-icon-png/maps-icon-png-5.jpg"
              alt=""
            />
            <img
              className="addImg"
              src="https://d29fhpw069ctt2.cloudfront.net/icon/image/84451/preview.svg"
              alt=""
            />
            <button>Send</button>
          </label>
          <input
            onChange={props.getFile}
            id="file"
            style={{ display: "none" }}
            type="file"
          />
        </div>
      </div>
    </div>
  );
};
export default InputFile;
