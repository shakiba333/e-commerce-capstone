import { Badge, Navbar, Nav, Container } from "react-bootstrap";
import { FiHeart, FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import { LinkContainer } from "react-router-bootstrap";
import { useState } from "react";
import { useSelector } from "react-redux";
import "./Header.css";
import Cart from "../../pages/Cart/Cart";
import Overlay from "../CartOverlay/Overlay";
import FormOverlay from "../FormOverlay/FormOverlay";
import Login from "../Login/Login";
import SearchOverlay from "../SearchOverlay/SearchOverlay";
import Search from "../Search/Search";

function Header() {
  const { cartItems } = useSelector((state) => state.cart);
  const [isOpen, setIsOpen] = useState(false);
  const [signupIsOpen, setSignupIsOpen] = useState(false);
  const [searchIsOpen, setSearchIsOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOpen(!isOpen);
  };
  const toggleFormOverlay = () => {
    setSignupIsOpen(!signupIsOpen);
  };
  const toggleSearchOverlay = () => {
    setSearchIsOpen(!searchIsOpen);
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
              <button
                onClick={toggleSearchOverlay}
                className="overlay-btn px-3"
              >
                <FiSearch />
              </button>
              <SearchOverlay
                searchIsOpen={searchIsOpen}
                onClose={toggleSearchOverlay}
              >
                <Search />
              </SearchOverlay>

              <LinkContainer to="/wishlist">
                <Nav.Link className="overlay-btn">
                  <FiHeart />
                </Nav.Link>
              </LinkContainer>

              <button onClick={toggleFormOverlay} className="overlay-btn px-3">
                <FiUser />
              </button>
              <FormOverlay
                signupIsOpen={signupIsOpen}
                onClose={toggleFormOverlay}
              >
                <Login />
              </FormOverlay>

              <button onClick={toggleOverlay} className="overlay-btn ">
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
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
