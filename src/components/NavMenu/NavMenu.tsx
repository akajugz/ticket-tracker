import { Link } from "react-router-dom";
import "./NavMenu.scss";

const NavMenu = () => {
  return (
    <>
      <div className="nav">
        <h2 className="nav__main--heading">Ticket Tracker</h2>
        <Link to={"/"} className="nav__home-button">
          Home
        </Link>
        <Link to={"/employee"} className="nav__tickets-button">
          Tickets
        </Link>
      </div>
    </>
  );
};

export default NavMenu;
