import React from "react";
import "./Account.css";

export default function Account() {
  return (
    <div className="account-container">
      <h3>Account Settings</h3>

      <div className="profile-card">
        <div className="profile-top">
          <div className="profile-pic-container">
            <img
              src="https://randomuser.me/api/portraits/women/79.jpg"
              alt="Profile"
              className="profile-pic"
            />
            <div className="camera-icon">📷</div>
          </div>

          <div className="profile-text">
            <h4>Marry Doe</h4>
            <p className="email">Marry@Gmail.Com</p>
          </div>
        </div>

        <p className="description">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
          Erat, Sed Diam
          
        </p>
      </div>
    </div>
  );
}
