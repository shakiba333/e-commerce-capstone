import Payment from "../../components/Payment/Payment";
import Shipping from "../../components/Shipping/Shipping";
import { useDispatch, useSelector } from "react-redux";
import "./Checkout.css";
import Delivery from "../../components/Delivery/Delivery";

function Checkout() {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="Checkout">
      {!cart.shippingAddress ? (
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
      )}
    </div>
  );
}

export default Checkout;
