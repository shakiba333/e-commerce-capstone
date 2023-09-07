import { useSelector } from "react-redux";
import "./Profile.css";

function Profile() {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <>
      <h2>Profile</h2>
      <h5>Name:</h5>
      <p>{userInfo.name}</p>
      <h5>Email:</h5>
      <p>{userInfo.email}</p>
    </>
  );
}

export default Profile;
