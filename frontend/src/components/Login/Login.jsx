import { Link } from "react-router-dom";
import "./Login.css";
function Login() {
  return (
    <>
      <div className="login-container">
        <h6>Please Login</h6>

        <form>
          <div className="login-input-container">
            <input placeholder="Email" className="login-input-style" />
            <br />
            <input placeholder="Password" className="login-input-style" />
            <br />
            <button type="submit" className="login-input-style continue-btn ">
              CONTINUE
            </button>
          </div>
        </form>

        <Link href="#">Not a user yet? Create an account!</Link>
      </div>
    </>
  );
}

export default Login;
