import { Link } from "react-router-dom";
import "./DropDownMenu.css";
function DropDownMenu() {
  return (
    <>
      <div class="dropdown-content">
        <Link to="/profile">Profile</Link>
        <Link to="/order">Order</Link>
        <Link to="/logout">Logout</Link>
      </div>
    </>
  );
}

export default DropDownMenu;
