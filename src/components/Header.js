import logo from '../assets/logo.png'
 import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="header">
    <img src={logo} alt="Little Lemon Logo" />

      <nav>
        <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/booking">Reservations</Link>
        </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;