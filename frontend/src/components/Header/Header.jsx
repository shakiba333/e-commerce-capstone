import { Badge, Navbar, Nav, Container } from "react-bootstrap";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { LinkContainer } from "react-router-bootstrap";
import { useState } from "react";
import { useSelector } from "react-redux";
import "./Header.css";
import Cart from "../../pages/Cart/Cart";
import Overlay from "../Overlay/Overlay";

function Header() {
  const { cartItems } = useSelector((state) => state.cart);
  const [isOpen, setIsOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header>
      <Navbar className="navbar" variant="white" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Infinite</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>

          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto">
              <button onClick={toggleOverlay} className="overlay-btn">
                <div className="cart-badge-container">
                  {cartItems.length > 0 && (
                    <Badge pill bg="dark" className="cart-num-div">
                      {cartItems.reduce((a, c) => a + c.qty, 0)}
                    </Badge>
                  )}
                  <FiShoppingCart className="cart-icon-div" />
                </div>
              </button>

              <Overlay isOpen={isOpen} onClose={toggleOverlay}>
                <Cart />
              </Overlay>

              <LinkContainer to="/login">
                <Nav.Link className="px-3">
                  <FiUser />
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
