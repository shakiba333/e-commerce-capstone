import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../../slices/usersApiSlice";
import { setCredentials } from "../../slices/authSlice";
import Loader from "../Loader/Loader";
import "./Login.css";
function Login({ toggleRegistringOverlay }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();
  const { userInfo } = useSelector((state) => state.auth);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="login-container">
        <h6>Please Login</h6>

        <form onSubmit={submitHandler}>
          <div className="login-input-container">
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
            <button
              type="submit"
              disabled={isLoading}
              className="login-input-style continue-btn "
            >
              CONTINUE
            </button>
            {isLoading && <Loader />}
          </div>
        </form>

        <button
          className="register-link-style"
          onClick={toggleRegistringOverlay}
        >
          Not a user yet? Create an account!
        </button>
      </div>
    </>
  );
}

export default Login;
