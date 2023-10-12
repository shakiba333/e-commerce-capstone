import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../../AuthContext";
import { useProfileMutation } from "../../slices/usersApiSlice";
import { setCredentials } from "../../slices/authSlice";
import "./EditName.css";
import UpdateInput from "../UpdateInput/UpdateInput";
import UpdateForm from "../UpdateForm/UpdateForm";

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
      <UpdateForm submitHandler={submitHandler}>
        <UpdateInput
          label={"Preferred Name"}
          type={"text"}
          name={"name"}
          value={name}
          onChangeSetter={setName}
        />
      </UpdateForm>
    </div>
  );
}

export default EditName;
