import { Link } from "react-router-dom";
import "./NavMenu.scss";

const NavMenu = () => {
  return (
    <>
      <div className="nav">
        <Link to={"/"} className="nav__main--heading">
          Ticket Tracker
        </Link>
        <Link to={"/employee"} className="nav__profiles-button">
          Profiles
        </Link>
        <Link to={"/employee"} className="nav__tickets-button">
          Tickets
        </Link>
      </div>
    </>
  );
};

export default NavMenu;
