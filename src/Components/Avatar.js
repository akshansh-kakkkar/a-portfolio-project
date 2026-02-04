// components/Avatar.js
import download from "./profile.jpeg"
function Avatar() {
  return (
    <div className="avatar-container">
      <img src={download} alt="profile" className="avatar-image" />
      <div className="avatar-border"></div>
    </div>
  );
}
export default Avatar;
