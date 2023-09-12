import Payment from "../Payment/Payment";
import Shipping from "../../components/Shipping/Shipping";
import { useDispatch, useSelector } from "react-redux";
import "./Checkout.css";
import Delivery from "../Delivery/Delivery";

function Checkout() {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="Checkout">
      <Shipping />
      {/* {!cart.shippingAddress ? (
        <>
          <h4>Shipping</h4>
          <Shipping />
        </>
      ) : !cart.paymentMethod ? (
        <>
          <h4>Delivery</h4>
          <Delivery />
        </>
      ) : (
        <>
          <h4>Payment</h4>
          <Payment />
        </>
      )} */}
    </div>
  );
}

export default Checkout;
