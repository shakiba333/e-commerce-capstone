import { Badge, Navbar, Nav, Container } from "react-bootstrap";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector } from "react-redux";
import "./Header.css";

function Header() {
  const { cartItems } = useSelector((state) => state.cart);

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
              <LinkContainer to="/cart">
                <Nav.Link className="px-3">
                  <div className="cart-badge-container">
                    {cartItems.length > 0 && (
                      <Badge pill bg="dark" className="cart-num-div">
                        {cartItems.reduce((a, c) => a + c.qty, 0)}
                      </Badge>
                    )}
                    <FiShoppingCart className="cart-icon-div" />
                  </div>
                </Nav.Link>
              </LinkContainer>
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
