import "./Shipping.css";
function Shipping() {
  return (
    <>
      <div className="shipping">
        <form>
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
    </>
  );
}

export default Shipping;
