import "./DropDownMenu.css";
function DropDownMenu({ isOpen }) {
  return (
    <>
      <ul className={`dropdown-menu ${isOpen ? "open" : ""}`}>
        <li onMouseEnter={isOpen} onMouseLeave={isOpen}>
          <a href="#">Profile</a>
        </li>
        <li onMouseEnter={isOpen} onMouseLeave={isOpen}>
          <a href="#">Orders</a>
        </li>
        <li onMouseEnter={isOpen} onMouseLeave={isOpen}>
          <a href="#">Logout</a>
        </li>
      </ul>
    </>
  );
}

export default DropDownMenu;
