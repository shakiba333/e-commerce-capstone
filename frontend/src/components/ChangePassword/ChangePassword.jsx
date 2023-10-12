import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../../AuthContext";
import { useProfileMutation } from "../../slices/usersApiSlice";
import { setCredentials } from "../../slices/authSlice";
import UpdateInput from "../UpdateInput/UpdateInput";
import UpdateForm from "../UpdateForm/UpdateForm";

function ChangePassword() {
  const { toggleChangePassword } = useAuth();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { userInfo } = useSelector((state) => state.auth);
  const [updateProfile] = useProfileMutation();
  const dispatch = useDispatch();
  useEffect(() => {
    setPassword(userInfo.password);
  }, [userInfo.password]);

  const submitHandler = async (e) => {
    toggleChangePassword();
    e.preventDefault();
    if (password !== confirmPassword) {
      console.log("Password don't match!");
    } else {
      try {
        const res = await updateProfile({
          _id: userInfo._id,
          password,
        }).unwrap();

        dispatch(setCredentials({ ...res }));
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div>
      <UpdateForm submitHandler={submitHandler}>
        <UpdateInput
          label={"Password"}
          type={"password"}
          name={"password"}
          value={password}
          onChangeSetter={setPassword}
        />
        <br />
        <UpdateInput
          label={"Confirm Password"}
          type={"password"}
          name={"confirmpassword"}
          value={confirmPassword}
          onChangeSetter={setConfirmPassword}
        />
      </UpdateForm>
    </div>
  );
}

export default ChangePassword;
