import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../../slices/usersApiSlice";
import { logout } from "../../slices/authSlice";
import { resetCart } from "../../slices/cartSlice";
import "./DropDownMenu.css";

function DropDownMenu() {
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      dispatch(resetCart());
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <div className="dropdown-content">
        <Link to="/profile">Profile</Link>
        <Link to="/myorders">Order</Link>
        <Link to="/logout" onClick={logoutHandler}>
          Logout
        </Link>
      </div>
    </>
  );
}

export default DropDownMenu;
