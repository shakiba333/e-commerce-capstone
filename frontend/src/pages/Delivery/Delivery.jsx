import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Delivery() {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

  const submitHandler = async () => {
    navigate("/payment");
  };
  return (
    <>
      <h6>Expectied Deliver - FREE {cart.shippingPrice}</h6>
      <button onClick={submitHandler}>Continue</button>
    </>
  );
}

export default Delivery;
