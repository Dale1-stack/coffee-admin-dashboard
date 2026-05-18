import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h2>Bean Bliss</h2>

          <p>
            Premium coffee sourced from
            around Africa.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="/admin">
            Admin Portal
          </a>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>

          <p>+254 789 474 639</p>

          <p>coffee@beanbliss.com</p>

          <p>Nairobi, Kenya</p>
        </div>

        <div className="footer-socials">
          <h3>Follow Us</h3>

          <div className="social-icons">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaGithub />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Bean Bliss. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;