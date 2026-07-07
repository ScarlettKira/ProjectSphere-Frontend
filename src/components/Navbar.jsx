import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-content">

        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="Project Sphere Logo" />
          <h2>PROJECT SPHERE</h2>
        </div>

        {/* Navigation */}
        <ul className="nav-links">
          <li>
            <a href="#" className="active">
              Discover
            </a>
          </li>

          <li>
            <a href="#">About</a>
          </li>
        </ul>

        {/* Login Button */}
        <button className="login-btn">
          Log In
        </button>

      </div>
    </nav>
  );
}

export default Navbar;