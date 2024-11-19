import "./styles/Profile.css";
import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div className="in-profile">
      <div className="profile-container">
        <div className="profile-banner-img">
          <img className="user-profile-banner" src="/banner.jpg" alt="" />
        </div>
        <div>
          <img className="user-profile-pic" src="/avatar.png" alt="" />
        </div>
      </div>
      <div className="in-profile-data-container row">
        <div>
          <h1>Profile</h1>
          <div className="profile-item">
            <h2>Personal Information</h2>
            <p>Name: John Doe</p>
            <p>Email: sales@jhone.com</p>
          </div>
        </div>
        <div>
          <div>
            <h2>Posts</h2>
          </div>
        </div>
        <div>
          <div>
            <h2>Startups</h2>
          </div>
          <div>
            <Link to="/register/startup">Add New Startup</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
