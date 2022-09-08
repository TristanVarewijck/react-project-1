import profileImg from "../../assets/profile-img.png";

function Photo() {
  return (
    <div className="image-container">
      <img src={profileImg} alt="profile-image" />
    </div>
  );
}

export default Photo;
