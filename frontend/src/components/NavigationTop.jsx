import { Link } from "react-router-dom";
import "./styles/NavigationTop.css";
import { AiOutlineMessage } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";

export default function NavigationTop() {
  return (
    <nav className="nav-top cent">
      <div className="nav-top-item row">
        <div>
          <h1>Incubora</h1>
        </div>
        <div>
          <div>
            <Link to="/notifications">
              <IoMdNotifications className="nav-top-icon" />
            </Link>
            <Link to="/messages">
              <AiOutlineMessage className="nav-top-icon" />
            </Link>
            <Link to="/profile">
              <FaRegUser className="nav-top-icon" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
