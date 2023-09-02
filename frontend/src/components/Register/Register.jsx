import "./Register.css";

function Register() {
  return (
    <>
      <div className="login-container">
        <h6>Please create an account</h6>
        <form>
          <div className="login-input-container">
            <input placeholder="Name" className="login-input-style" />
            <br />
            <input placeholder="Email" className="login-input-style" />
            <br />
            <input placeholder="Password" className="login-input-style" />
            <br />
            <button type="submit" className="login-input-style continue-btn ">
              CONTINUE
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
