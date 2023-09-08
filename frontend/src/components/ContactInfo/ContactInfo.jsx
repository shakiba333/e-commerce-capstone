import { Link } from "react-router-dom";
import "./ContactInfo.css";
function ContactInfo() {
  return (
    <>
      <div className="ContacInfo">
        <div className="row-container">
          <p>Contact Info</p>
          <Link>Have an account? Login</Link>
        </div>

        <form>
          <input type="email" placeholder="Email*" required />
          <br />
        </form>
      </div>
    </>
  );
}

export default ContactInfo;
