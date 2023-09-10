import { useState } from "react";
import { useDispatch } from "react-redux";
import { savePaymentMethod } from "../../slices/cartSlice";
import "./Payment.css";

function Payment() {
  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
  };

  return (
    <div className="Payment">
      <form onSubmit={submitHandler}>
        <input
          type="radio"
          name="paymentMethod"
          value="PayPal"
          checked
          onChange={(e) => setPaymentMethod(e.target.value)}
        />{" "}
        <label htmlFor="paymentMethod">Paypal</label>
        <br />
        <button type="submit">Continue</button>
      </form>
    </div>
  );
}

export default Payment;
