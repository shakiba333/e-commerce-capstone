import { useSelector } from "react-redux";
import { useAuth } from "../../AuthContext";
import "./Profile.css";
import EditName from "../../components/EditName/EditName";
import { useState } from "react";

function Profile() {
  const { userInfo } = useSelector((state) => state.auth);
  const { buttonVisible, isEditingName, toggleEditingName } = useAuth();

  return (
    <>
      <h2>My Profile</h2>
      <div className="profile-section">
        <p className="profile-sub-heading">Preferred Name</p>
        <p>{userInfo.name}</p>

        {buttonVisible && (
          <p className="edit-name" onClick={toggleEditingName}>
            Edit Name
          </p>
        )}
        {isEditingName && <EditName />}
      </div>

      <div className="profile-section">
        <p className="profile-sub-heading">Email</p>
        <p>{userInfo.email}</p>
      </div>
    </>
  );
}

export default Profile;
