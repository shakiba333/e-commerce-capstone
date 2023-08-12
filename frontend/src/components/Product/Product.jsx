import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../Rating/Rating";
function Product({ product }) {
  return (
    <>
      <Card style={{ border: "none" }}>
        <Link to={`/products/${product._id}`}>
          <Card.Img
            style={{ borderRadius: "0" }}
            src={product.image}
            variant="top"
          />
        </Link>
        <Card.Body>
          <Link to={`/products/${product._id}`}>
            <Card.Title className="product-title" as="div">
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>
          <Card.Text as="div">
            <Rating
              value={product.rating}
              text={` ${product.numReviews} reviews`}
            />
          </Card.Text>
          <Card.Text as="h3">${product.price}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default Product;
