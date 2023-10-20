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
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const { id: productId } = useParams();

  const { userInfo } = useSelector((state) => state.auth);

  const { data: product, refetch } = useGetProductDetailsQuery(productId);

  const [addReview] = useAddReviewMutation();

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

    try {
      await addReview({
        productId,
        rating,
        comment,
      }).unwrap();
      refetch();
      console.log("Review created successfully");
    } catch (err) {
      console.log("Review not added! error: " + err);
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
              {userInfo ? (
                <>
                  <UpdateForm AddReviewHandler={AddReviewHandler}>
                    <textarea></textarea>
                  </UpdateForm>
                </>
              ) : (
                <p>There are no reviews for this product yet.</p>
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
