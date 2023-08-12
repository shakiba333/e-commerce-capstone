import { useParams } from "react-router-dom";
import products from "../../products";
import { Link } from "react-router-dom";

import {
  Row,
  Col,
  Image,
  ListGroup,
  Button,
  ListGroupItem,
} from "react-bootstrap";
import Rating from "../../components/Rating/Rating";
import "./ProductDetail.css";
import { FiCheck, FiHeart, FiX, FiChevronLeft } from "react-icons/fi";
function ProductDetail() {
  const { id: productId } = useParams();
  const product = products.find((p) => p._id === productId);
  console.log(product);
  return (
    <>
      <Link className="btn my-3" to="/">
        <FiChevronLeft /> Back
      </Link>
      <Row>
        <Col md={8}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>

        <Col md={4}>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h3>{product.name}</h3>
              <h5>${product.price}</h5>

              <Link to="#">
                <Rating
                  value={product.rating}
                  text={`See ${product.numReviews} reviews`}
                />
              </Link>
              <hr />
              <p>{product.description}</p>
              <hr />
              <Row>
                <Col>
                  <strong>
                    {product.countInStock > 0 ? <FiCheck /> : <FiX />}
                    {product.countInStock > 0 ? " In Stock" : " Out of Stock"}
                  </strong>
                </Col>
              </Row>
              <hr />
              <Row>
                <Col>
                  <div className="custome-row">
                    <Button
                      className="custome-row-items btn-add-cart"
                      type="button"
                      disabled={product.countInStock === 0}
                    >
                      Add to Cart
                    </Button>
                    <Button
                      className="custome-row-items btn-add-fav"
                      type="button"
                    >
                      <FiHeart />
                    </Button>
                  </div>
                </Col>
              </Row>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
}

export default ProductDetail;
