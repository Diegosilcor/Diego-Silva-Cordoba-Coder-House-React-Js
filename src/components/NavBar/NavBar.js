import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import "./NavBar.css";

const Navbar = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-container">
          <div className="img-container">
            {/* <Link to='/'>
                                <img src="https://acortar.link/YbukCY" alt="Logo" />
              </Link> */}
          </div>
          <div className="ul-container">
            <ul className="list">
              <Link to="#" className="btn-nav">
                Home
              </Link>
              <Link to="#" className="btn-nav">
                Nosotros
              </Link>
              <Link to="/category/remeras" className="btn-nav">
                Remeras
              </Link>
              <Link to="/category/relojes" className="btn-nav">
                Relojes
              </Link>
              <CartWidget />
            </ul>
          </div>
        </div>
      </nav>
      <div className="header-container">
        <h1>Radar Flight</h1>
        <p className="h1-subtitle">Indumentaria aeronautica</p>
      </div>
    </header>
  );
};

export default Navbar;
