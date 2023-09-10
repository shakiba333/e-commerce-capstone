import { useAuth } from "../../AuthContext";
import FormOverlay from "../FormOverlay/FormOverlay";
import Login from "../Login/Login";
import Register from "../Register/Register";

import "./Shipping.css";
function Shipping() {
  const {
    signupIsOpen,
    isRegistering,
    toggleFormOverlay,
    toggleRegisteringOverlay,
  } = useAuth();

  return (
    <>
      <div className="shipping">
        <div className="row-container">
          <p>Contact Info</p>
          <button onClick={toggleFormOverlay} className="register-link-style">
            Have an account? <span>Login</span>
          </button>
        </div>
        <form>
          <input placeholder="Email*" required />
          <br />
          <input placeholder="First Name*" required />
          <br />
          <input placeholder="Last Name*" required />
          <br />
          <input placeholder="Street Address Line1*" required />
          <br />
          <input placeholder="Street Address Line2" />
          <br />
          <input placeholder="Postal Code*" required />
          <br />
          <input placeholder="City*" required />
          <br />
          <input placeholder="Country*" required />
          <br />
          <input placeholder="Phone Number*" required />
          <br />
          <input type="submit" value="SAVE" />
        </form>
      </div>
      {
        <FormOverlay signupIsOpen={signupIsOpen} onClose={toggleFormOverlay}>
          {isRegistering ? (
            <Register />
          ) : (
            <Login toggleRegistringOverlay={toggleRegisteringOverlay} />
          )}
        </FormOverlay>
      }
    </>
  );
}

export default Shipping;
