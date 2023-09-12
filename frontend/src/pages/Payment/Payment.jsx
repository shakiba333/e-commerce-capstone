import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { savePaymentMethod } from "../../slices/cartSlice";
import { useNavigate } from "react-router-dom";

import "./Payment.css";

function Payment() {
  const cart = useSelector((state) => state.cart);
  const [paymentMethod, setPaymentMethod] = useState("PayPal");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!cart.shippingAddress.address) {
      navigate("/shipping");
    }
  }, [cart.shippingAddress.address, navigate]);

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate("/confirmOrder");
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
