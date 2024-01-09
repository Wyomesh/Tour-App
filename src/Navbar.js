function Navbar() {
    return (
      <div className="navbar">
        <div className="navbarContainer">
          <div className="navbarHeading">
            <h1>
              Back<span>Roads</span>
            </h1>
          </div>
          <div className="navbarLinksContainer">
            <ul className="navbarLinks">
              <li className="btn">Home</li>
              <li className="btn">About</li>
              <li className="btn">Services</li>
              <li className="btn">Featured</li>
              <li className="btn">Gallery</li>
            </ul>
          </div>
          <div className="hamburger">
            <i className="fa fa-bars"></i>
          </div>
          <div className="navSocialMedia">
            <i className="fa-brands fa-facebook socialMediaLinks"></i>
            <i className="fa-brands fa-twitter socialMediaLinks"></i>
            <i className="fa-brands fa-squarespace socialMediaLinks"></i>
          </div>
        </div>
      </div>
    );
  }
  export default Navbar;
  