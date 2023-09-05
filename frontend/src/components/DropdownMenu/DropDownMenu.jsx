import { Link } from "react-router-dom";
import "./DropDownMenu.css";
function DropDownMenu() {
  return (
    <>
      <div class="dropdown-content">
        <Link href="#">Profile</Link>
        <Link href="#">Order</Link>
        <Link href="#">Logout</Link>
      </div>
    </>
  );
}

export default DropDownMenu;
