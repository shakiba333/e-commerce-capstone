import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../../AuthContext";
import { useProfileMutation } from "../../slices/usersApiSlice";
import { setCredentials } from "../../slices/authSlice";
import "./EditName.css";

function EditName() {
  const { toggleEditingName } = useAuth();
  const [name, setName] = useState("");
  const { userInfo } = useSelector((state) => state.auth);
  const [updateProfile] = useProfileMutation();
  const dispatch = useDispatch();
  useEffect(() => {
    setName(userInfo.name);
  }, [userInfo.name]);

  const submitHandler = async (e) => {
    toggleEditingName();
    e.preventDefault();
    try {
      const res = await updateProfile({
        _id: userInfo._id,
        name,
      }).unwrap();

      dispatch(setCredentials({ ...res }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form action="">
        <div class="full-input">
          <label className="edit-label" for="name">
            Preferred Name
          </label>
          <input
            className="edit-input"
            type="text"
            name="name"
            placeholder="Preferred Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <br />
        <button className="cancel-btn" type="cancel">
          Cancel
        </button>
        <button className="save-btn" type="submit" onClick={submitHandler}>
          Save
        </button>
      </form>
    </div>
  );
}

export default EditName;
