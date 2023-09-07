import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRegisterMutation } from "../../slices/usersApiSlice";
import { setCredentials } from "../../slices/authSlice";
import Loader from "../Loader/Loader";
import "./Register.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const [register, { isLoading }] = useRegisterMutation();
  const { userInfo } = useSelector((state) => state.auth);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else {
      try {
        const res = await register({ name, email, password }).unwrap();
        dispatch(setCredentials({ ...res }));
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <>
      <div className="login-container">
        <h6>Create an account</h6>
        <form onSubmit={submitHandler}>
          <div className="login-input-container">
            <input
              type="text"
              placeholder="Name"
              className="login-input-style"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <input
              type="email"
              placeholder="Email"
              className="login-input-style"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              className="login-input-style"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <input
              type="password"
              placeholder="Confirm Password"
              className="login-input-style"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <br />
            <button
              disabled={isLoading}
              type="submit"
              className="login-input-style continue-btn "
            >
              CONTINUE
            </button>
          </div>
          {isLoading && <Loader />}
        </form>
      </div>
    </>
  );
}

export default Register;
