import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../AuthContext";
import { saveShippingAddress } from "../../slices/cartSlice";
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
  const { userInfo } = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.cart);
  const shippingAddress = cart.shippingAddress || {};
  const [firstName, setFirstName] = useState(shippingAddress.firstName || "");
  const [lastName, setLastName] = useState(shippingAddress.lastName || "");
  const [address, setAddress] = useState(shippingAddress.address || "");
  const [address2, setAddress2] = useState(shippingAddress.address2 || "");
  const [city, setCity] = useState(shippingAddress.city || "");
  const [postalCode, setPostalCode] = useState(
    shippingAddress.postalCode || ""
  );
  const [country, setCountry] = useState(shippingAddress.country || "");
  const [phoneNumber, setPhoneNumber] = useState(
    shippingAddress.phoneNumber || ""
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (userInfo) {
      dispatch(
        saveShippingAddress({
          firstName,
          lastName,
          address,
          address2,
          city,
          postalCode,
          country,
          phoneNumber,
        })
      );
      navigate("/payment");
    } else {
      toggleFormOverlay();
    }
  };

  return (
    <>
      <div className="shipping">
        {!userInfo && (
          <div className="row-container">
            <p>Contact Info</p>
            <button onClick={toggleFormOverlay} className="register-link-style">
              Have an account? <span>Login</span>
            </button>
          </div>
        )}
        <form onSubmit={submitHandler}>
          <input
            placeholder="First Name*"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <br />
          <input
            placeholder="Last Name*"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <br />
          <input
            placeholder="Street Address Line1*"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <br />
          <input
            placeholder="Street Address Line2"
            value={address2}
            onChange={(e) => setAddress2(e.target.value)}
          />
          <br />
          <input
            placeholder="Postal Code*"
            required
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          />
          <br />
          <input
            placeholder="City*"
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <br />
          <input
            placeholder="Country*"
            required
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <br />
          <input
            placeholder="Phone Number*"
            required
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <br />
          <input type="submit" value="Continue" />
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
