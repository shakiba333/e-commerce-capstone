import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
  ListGroupItem,
} from "react-bootstrap";
import { addToCart, removeFromCart } from "../../slices/cartSlice";
import { FiTrash } from "react-icons/fi";
import "./Cart.css";
function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const addToCartHandler = (product, qty) => {
    dispatch(addToCart({ ...product, qty }));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    navigate("/login?redirect=/shipping");
  };
  return (
    <Row>
      <Col>
        {cartItems.length === 0 ? (
          <div>
            Your cart is empty <Link to="/">Shop our best sellers!</Link>
          </div>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((item) => (
              <ListGroup.Item key={item._id}>
                <Row>
                  <Col>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col>
                    <Link to={`/product/${item._id}`}>{item.name}</Link>
                  </Col>
                  <Col>${item.price}</Col>

                  <Col>
                    <Button
                      type="button"
                      variant="light"
                      onClick={() => removeFromCartHandler(item._id)}
                    >
                      <FiTrash />
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
        <ListGroup.Item>
          <h2>
            Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
            items
          </h2>
          <h4>
            $
            {cartItems
              .reduce((acc, item) => acc + item.qty * item.price, 0)
              .toFixed(2)}
          </h4>
        </ListGroup.Item>
        <ListGroup.Item>
          <Button
            type="button"
            className="checkout-btn"
            disabled={cartItems.length === 0}
            onClick={checkoutHandler}
          >
            Proceed To Checkout
          </Button>
        </ListGroup.Item>
      </Col>
    </Row>
  );
}

export default Cart;
