import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer>
      <div className="footer-content">

        <div className="logo">
          <img src={logo} alt="Project Sphere Logo" />
          <h2>PROJECT SPHERE</h2>
        </div>

        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">University Partners</a>
          <a href="#">Contact</a>
        </div>

        <p className="copyright">
          © 2024 Project Sphere. Forging the future of academic discovery.
        </p>

      </div>
    </footer>
  );
}

export default Footer;