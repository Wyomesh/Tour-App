function Footer() {
    return (
      <section className="footer">
        <div className="footerContainer">
          <div className="footerNavbar">
            <ul className="navbars">
              <li class="btn">Home</li>
              <li class="btn">About</li>
              <li class="btn">Services</li>
              <li class="btn">Featured</li>
              <li class="btn">Gallery</li>
            </ul>
          </div>
          <div className="socialMedia">
            <i className="fa-brands fa-facebook socialMediaLinks"></i>
            <i className="fa-brands fa-twitter socialMediaLinks"></i>
            <i className="fa-brands fa-squarespace socialMediaLinks"></i>
          </div>
          <div className="copyright">
            <p>
              Copyright &copy; Backroads Travel Tours Company. All right reserved.
            </p>
          </div>
        </div>
      </section>
    );
  }
  export default Footer;
  