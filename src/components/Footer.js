import footerlogo from '../assets/footerlogo.png'
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={footerlogo} alt="Logo" width={80} height={110} />
      </div>

      <div>
        <h4>Navigation</h4>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
        </ul>
      </div>

      <div>
        <h4>Contact</h4>
        <ul>
          <li>Phone</li>
          <li>Email</li>
          <li>Address</li>
        </ul>
      </div>

      <div>
        <h4>Social Media</h4>
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>X</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;