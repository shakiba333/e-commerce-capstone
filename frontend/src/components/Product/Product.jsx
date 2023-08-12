import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Product.css";
function Product({ product }) {
  return (
    <>
      <Card style={{ border: "none" }}>
        <Link to={`/product/${product._id}`}>
          <Card.Img
            style={{ borderRadius: "0" }}
            src={product.image}
            variant="top"
          />
        </Link>
        <Card.Body>
          <Link to={`/product/${product._id}`}>
            <Card.Title className="product-title" as="div">
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>
          <Card.Text as="h5">${product.price}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default Product;
