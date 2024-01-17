import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FiCheck, FiHeart, FiX, FiChevronLeft } from "react-icons/fi";
import {
  useGetProductDetailsQuery,
  useAddReviewMutation,
} from "../../slices/productApiSlice";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Button,
  ListGroupItem,
  Card,
  Form,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Rating from "../../components/Rating/Rating";
import "./ProductDetail.css";
import Loader from "../../components/Loader/Loader";
import { addToCart } from "../../slices/cartSlice";
import UpdateForm from "../../components/UpdateForm/UpdateForm";
import UpdateInput from "../../components/UpdateInput/UpdateInput";

function ProductDetail() {
  const { id: productId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const { userInfo } = useSelector((state) => state.auth);
  const { data: product, refetch } = useGetProductDetailsQuery(productId);
  const [addReview, { isLoading: loadingProductReview }] =
    useAddReviewMutation();
  const handleIncreaseQuantity = () => {
    if (qty < product.countInStock) {
      setQty(qty + 1);
    }
  };

  const handleDecreaseQuantity = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  useEffect(() => {
    if (product && (product.countInStock === 0 || qty === 0)) {
      setQty(1);
    }
  }, [product, qty]);

  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, qty }));
  };

  const AddReviewHandler = async (e) => {
    e.preventDefault();

    console.log(
      "Submitting review:",
      productId,
      rating,
      comment,
      userInfo.name
    );

    try {
      await addReview({
        productId,
        rating,
        comment,
      }).unwrap();

      refetch();
      console.log("Review added!");
    } catch (e) {
      console.error("Review not added! Error:", e);
    }
  };
  return (
    <>
      <Link className="btn my-3" to="/">
        <FiChevronLeft /> Back
      </Link>
      {product ? (
        <>
          <Row>
            <Col md={1}></Col>
            <Col md={7}>
              <Image
                className="product-detail-img"
                src={product.image}
                alt={product.name}
                fluid
              />
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
                        {product.countInStock > 0
                          ? " In Stock"
                          : " Out of Stock"}
                      </strong>
                    </Col>
                  </Row>
                  <hr />
                  <Row>
                    <Col>
                      <p className="qty-wrap">
                        <button
                          className="qty-btn"
                          onClick={handleDecreaseQuantity}
                        >
                          -
                        </button>
                        {qty}
                        <button
                          className="qty-btn plus-disable"
                          onClick={handleIncreaseQuantity}
                          disabled={product.countInStock <= qty}
                        >
                          +
                        </button>
                      </p>
                    </Col>
                    <Col></Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className="custome-row">
                        <Button
                          className="custome-row-items btn-add-cart"
                          type="button"
                          disabled={product.countInStock === 0}
                          onClick={addToCartHandler}
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
          <Row>
            <Col md={6}>
              <h2>Reviews</h2>
              {product.reviews.length === 0 && <p>No Reviews</p>}
              {product.reviews.map((review) => (
                <div key={review._id}>
                  <strong>{review.name}</strong>
                  <Rating value={review.rating} />
                  <p>{review.createdAt.substring(0, 10)}</p>
                  <p>{review.comment}</p>
                </div>
              ))}
              {userInfo ? (
                <Form onSubmit={AddReviewHandler}>
                  <Form.Group className="my-2" controlId="rating">
                    <Form.Label>Rating</Form.Label>
                    <Form.Control
                      as="select"
                      required
                      value={rating}
                      onChange={(e) => setRating(e.target.value)}
                    >
                      <option value="">Select...</option>
                      <option value="1">1 - Poor</option>
                      <option value="2">2 - Fair</option>
                      <option value="3">3 - Good</option>
                      <option value="4">4 - Very Good</option>
                      <option value="5">5 - Excellent</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group className="my-2" controlId="comment">
                    <Form.Label>Comment</Form.Label>
                    <Form.Control
                      as="textarea"
                      row="3"
                      required
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                    ></Form.Control>
                  </Form.Group>{" "}
                  <Button
                    // disabled={loadingProductReview}
                    type="submit"
                    variant="primary"
                    onClick={AddReviewHandler}
                  >
                    Submit
                  </Button>
                </Form>
              ) : (
                <p>
                  Please <Link to="/login">sign in</Link> to write a review
                </p>
              )}
            </Col>
          </Row>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default ProductDetail;
