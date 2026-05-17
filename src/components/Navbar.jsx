import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        Bean Bliss
      </div>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>

        <NavLink to="/shop">Shop</NavLink>

        <NavLink to="/admin">
          Admin Portal
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;