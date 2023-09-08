import ContactInfo from "../../components/ContactInfo/ContactInfo";
import Shipping from "../../components/Shipping/Shipping";
import "./Checkout.css";
function Checkout() {
  return (
    <div className="Checkout">
      <h4>Shipping</h4>
      <ContactInfo />
      <Shipping />
    </div>
  );
}

export default Checkout;
